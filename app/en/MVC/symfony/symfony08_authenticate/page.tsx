import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SymfonyAuthenticationCourse: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Authentication in Symfony</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Discovering the Security Component</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Security is one of the most important aspects of a web application, and it's not a trivial matter. To make the developer's job easier, Symfony provides several essential tools through the Security component.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Installation</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    To use Symfony's Security component, you first need to install it:
                </p>
                <CodeBlock code={`composer require symfony /security-bundle`} />
                <p className="text-lg leading-relaxed mb-4">
                    Now that it's installed, let's explore the three pillars of the security system in a Symfony project:
                </p>
                <ul>
                    <li>The User class (responsible for registering and authenticating users)</li>
                    <li>Authentication (verifying the identity of the visitor to your site - whether they are an anonymous or authenticated user)</li>
                    <li>Authorization (access control to specific sections/pages of the site)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4">Creating the User Class</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    In a Symfony project, permissions are always linked to a user object. If we need to secure certain sections of our site, we first need to create a User class. You can create it using the maker:
                </p>
                <CodeBlock code={`php bin/console make:user`} />
                <p className="text-lg leading-relaxed mb-4">
                    The maker suggests `User` as the class name, but we can choose another name. We will call it `Utilisateur`.
                </p>

                <h2 className="text-2xl font-semibold mt-4">User Class Code</h2>
                <div className="border-b border-gray-300 mb-6" />

                <CodeBlock code={`<?php

namespace App\Entity;

use App\Repository\UtilisateurRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UtilisateurRepository::class)]
class Utilisateur implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}`} />


                <h2 className="text-2xl font-semibold mt-4">Explanation</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Unlike other entities you have created, the User entity implements two interfaces related to the authentication system: <code>UserInterface</code> and <code>PasswordAuthenticatedUserInterface</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    These interfaces allow the management of the unique identifier (by default, the email), roles (permissions), and password hashing.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    When using the <code>make:user</code> command, this class appears as the <code>UserProvider</code> (the class responsible for user management) in the <code>security.yaml</code> file.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Next Steps</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    After creating the User class, you will configure it to ensure proper user registration and authentication functionality within your Symfony application.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Configuration: Security Settings</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Here's how to configure the security settings for your Symfony project.
                </p>

                <CodeBlock code={`# config/packages

security:
    # https://symfony.com/doc/current/security.html#registering-the-user-hashing-passwords
    password_hashers:
        Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface: 'auto'
    # https://symfony.com/doc/current/security.html#loading-the-user-the-user-provider
    providers:
        # used to reload user from session & other features (e.g. switch_user)
        app_user_provider:
            entity:
                class: App\Entity\Utilisateur  <--- your UserProvider
                property: email  <--- the unique identifier
`} />


                <p className="text-lg leading-relaxed mb-4">
                    Notice the <code>password_hashers</code> entry before <code>providers</code>: as soon as you create the class, Symfony allows you to use the <code>UserPasswordHasherInterface</code> service to hash the user's password before inserting it into the database. By default, Symfony uses "auto" for the hashing system, which means it takes responsibility for choosing the most recent hashing function (currently bcrypt, but there are others).
                </p>

                <h2 className="text-2xl font-semibold mt-4">Hashing Password in a Controller</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Here's how you can hash a password in a controller:
                </p>

                <CodeBlock code={`// src/Controller/RegistrationController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class RegistrationController extends AbstractController
{
    public function index(UserPasswordHasherInterface $passwordHasher): Response
    {
        // e.g. get the user data from a registration form
        $user = new User(...);
        $plaintextPassword = ...;

        // hash the password (based on the security.yaml config for the $user class)
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );
        $user->setPassword($hashedPassword);

        // ...
    }
}`} />


                <p className="text-lg leading-relaxed mb-4">
                    You can also hash the password using the command line (for testing purposes, do not use it in production!):
                </p>
                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="bash">php bin/console security:hash-password</code>
                </pre>

                <h2 className="text-2xl font-semibold mt-4">The Firewall</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Your <code>security.yaml</code> file contains a third entry (after <code>password_hashers</code> and <code>providers</code>):
                </p>

                <CodeBlock code={`firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        main:
            lazy: true
            provider: app_user_provider`} />


                <p className="text-lg leading-relaxed mb-4">
                    The <code>firewalls</code> section is the core of your Symfony application's security system: it handles authentication! The firewall defines protected areas that require login and specifies how users can authenticate (login form, API token, OAuth, etc.).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    The "main" firewall is the primary one (it handles all URLs, basically the entry point of your site!). If you add more firewalls (such as an "api" firewall), you must declare them before the main firewall.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Authentication</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The login form: Most websites have a login form that allows users to authenticate using a username (email or username) and password. In Symfony, you can create this form using the command:
                </p>

                <pre className="bg-black text-blue-50 p-4 rounded-md">
                    <code className="bash">php bin/console make:auth</code>
                </pre>

                <p className="text-lg leading-relaxed mb-4">
                    This will create a controller, a form, and a class to handle form-based authentication (the Authenticator).
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    After running the command, your project will have new files: <code>SecurityController.php</code>, <code>src/Security/UserFormAuthenticator.php</code>, and <code>templates/security/login.html.twig</code>.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Modifying the onAuthenticationSuccess Method</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Open the <code>UserFormAuthenticator.php</code> file. We will modify the <code>onAuthenticationSuccess</code> function to add the route to which the user will be redirected after login:
                </p>

                <CodeBlock code={`public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
{
    // if there is a route in the session before login, the user will be redirected to that route
    if ($targetPath = $this->getTargetPath($request->getSession(), $firewallName)) {
        return new RedirectResponse($targetPath);
    }

    // otherwise, redirect the user to the 'profil' page
    return new RedirectResponse($this->urlGenerator->generate('app_profil'));

    throw new \Exception('TODO: provide a valid redirect inside '.__FILE__);
}`} />

            </section>
        </div>
    );
};

export default SymfonyAuthenticationCourse;
