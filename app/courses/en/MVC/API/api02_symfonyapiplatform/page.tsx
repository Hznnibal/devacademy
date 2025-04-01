import { CodeBlock } from "@/components/CodeBlock/code-block";

const SymfonyApiPlatformCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Implementing with Symfony and API Platform</h1>
            <p className="text-lg mb-6">
                In this course, we will learn how to set up a REST API in a Symfony project using API Platform, a powerful framework for building high-quality REST and GraphQL APIs.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Installing the API Platform Framework</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    First, let's install API Platform in your Symfony project. Open a terminal and run the following command:
                </p>
                <CodeBlock code={`composer require api`} />

                <p className="text-lg leading-relaxed mb-4">
                    This will add the <code>api_platform.yaml</code> configuration file and create a <code>/api</code> route in your application.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Declaring Entities as API Resources</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Now, we will declare an entity as an API resource. Open the entity of your choice and add the <code>#[ApiResource]</code> attribute above the class name.
                </p>
                <CodeBlock code={`<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource; // Don't forget to add this line

#[ORM\Entity(repositoryClass: ArtistRepository::class)]
#[ApiResource]
class Artist
{
  // ...
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    This declares the <code>Artist</code> entity as an API resource. Do the same for the <code>Disc</code> entity:
                </p>
                <CodeBlock code={`<?php

namespace App\Entity;

use App\Repository\DiscRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;

#[ORM\Entity(repositoryClass: DiscRepository::class)]
#[ApiResource]
class Disc
{
  // ...
}`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Accessing the API Documentation</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    Once you’ve added the <code>ApiResource</code> attribute to your entities, you can visit <code>https://127.0.0.1:8000/api</code>
                    to access the API documentation. The Swagger UI will display the available resources, methods (GET, POST, etc.), URLs (endpoints),
                    and descriptions.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Controlling CRUD Operations</h2>
                <p className="text-lg leading-relaxed mb-4">
                    By default, the five native CRUD operations (GET, POST, PUT, PATCH, DELETE) are available on each resource. You can customize which operations are enabled or disabled by specifying them within your entities.
                </p>
                <CodeBlock code={`<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;

#[ORM\Entity(repositoryClass: ArtistRepository::class)]
#[ApiResource(operations: [
  new Get(),
  new GetCollection(),
])]
class Artist
{
  // ...
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    In this example, the POST, PUT, PATCH, and DELETE operations are disabled for the <code>Artist</code> resource. The API documentation will reflect these changes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Serialization with API Platform</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    API Platform allows you to specify the <code>$context</code> variable used by Symfony Serializer. This variable is an associative array with a key called <code>Groups</code>, which lets you choose which properties of the resource will be exposed during normalization (reading) and denormalization (writing).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Here's an example using the <code>Disc</code> resource:
                </p>
                <CodeBlock code={`<?php

namespace App\Entity;

use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DiscRepository::class)]
#[ApiResource(
  normalizationContext: ['groups' => ['read']],
  denormalizationContext: ['groups' => ['write']],
)]
class Disc
{
  // ...
  
  #[ORM\Column(length: 255)]
  #[Groups(['read'])]
  private ?string $title = null;

  #[ORM\Column(length: 255, nullable: true)]
  #[Groups(['read', 'write'])]
  private ?string $picture = null;

  #[ORM\Column(length: 255, nullable: true)]
  #[Groups(['read'])]
  private ?string $label = null;

  #[ORM\ManyToOne(inversedBy: 'discs')]
  #[Groups(['read'])]
  private ?Artist $artist = null;
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    In this example, we defined two groups for the properties of the <code>Disc</code> entity:
                    <code>read</code> for read operations (GET - normalization context) and <code>write</code> for write operations (POST, PUT, PATCH - denormalization context).
                    The <code>$title</code>, <code>$label</code>, and <code>$artist</code> properties are only visible during read operations, while <code>$picture</code> is visible in both read and write operations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Changing Response Format to JSON</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    By default, API Platform may return different formats. To ensure that only JSON responses are returned, you can modify the
                    <code>config/packages/api_platform.yaml</code> file as follows:
                </p>
                <CodeBlock code={`api_platform:
  format:
    json`} />

            </section>
        </div>
    );
};

export default SymfonyApiPlatformCourse;
