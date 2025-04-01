import { CodeBlock } from "@/components/CodeBlock/code-block";

const SymfonyJWTInstallationCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Installation - LexikJWTAuthenticationBundle</h1>
            <p className="text-lg mb-6">
                In this phase, we will install and configure the LexikJWTAuthenticationBundle to enable JWT-based authentication for your Symfony API.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Install LexikJWTAuthenticationBundle</h2>
                <p className="text-lg leading-relaxed mb-4">
                    To install the LexikJWTAuthenticationBundle, run the following command in your Symfony project:
                </p>
                <CodeBlock code={`composer require "lexik/jwt-authentication-bundle"`} />

                <p className="text-lg leading-relaxed mb-4">
                    After installation, you will see three new parameters in the <code>.env</code> file of your application:
                </p>
                <CodeBlock code={`###> lexik/jwt-authentication-bundle ###
JWT_SECRET_KEY=%kernel.project_dir%/config/jwt/private.pem
JWT_PUBLIC_KEY=%kernel.project_dir%/config/jwt/public.pem
JWT_PASSPHRASE="ne_pas_pousser_sur_git"
###< lexik/jwt-authentication-bundle ###`} />

                <p className="text-lg leading-relaxed mb-4">
                    These environment variables include:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Path to the private key (<code>private.pem</code>)</li>
                    <li>Path to the public key (<code>public.pem</code>)</li>
                    <li>The passphrase (secret phrase used to generate the key pair with OpenSSL)</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Note: The directories for these keys don't exist yet, they will be created when generating the keys.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Generate Key Pair</h2>
                <p className="text-lg leading-relaxed mb-4">
                    To generate the key pair, run the following command:
                </p>
                <CodeBlock code={`php bin/console lexik:jwt:generate-keypair`} />

                <p className="text-lg leading-relaxed mb-4">
                    If you want to avoid overwriting existing keys, you can add two options:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><code>--skip-if-exists</code> - If the keys already exist, the command will do nothing.</li>
                    <li><code>--overwrite</code> - This option will overwrite existing keys.</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    After running the command, you should see a <code>[OK] Done!</code> message in the console, and a new <code>jwt</code> folder will be created in your project containing the generated key pair.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Configure Security</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Now, configure your <code>security.yaml</code> file to set up JWT authentication. Pay attention to the order of firewalls to ensure <code>/api/login_check</code> is accessible for authentication:
                </p>
                <CodeBlock code={`# config/packages/security.yaml
security:
    firewalls:
        dev:
            pattern: ^/(_(profiler|wdt)|css|images|js)/
            security: false
        login:
            pattern: ^/api/login
            stateless: true
            json_login:
                check_path: /api/login_check
                username_path: email
                password_path: password
                success_handler: lexik_jwt_authentication.handler.authentication_success
                failure_handler: lexik_jwt_authentication.handler.authentication_failure
        api:
            pattern: ^/api/
            stateless: true
            provider: app_user_provider
            jwt: ~
        main:
            lazy: true
            provider: app_user_provider
            form_login:
                login_path: app_login
                check_path: app_login
                enable_csrf: true
            access_control:
                - { path: ^/api/login_check, roles: PUBLIC_ACCESS }
                - { path: ^/api, roles: ROLE_ADMIN }
`} />

                <p className="text-lg leading-relaxed mb-4">
                    Make sure the <code>{`login</`}</code> firewall is placed before <code>api</code>, and if the <code>main</code> firewall exists, it should be placed after <code>api</code>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Define API Login Route</h2>
                <p className="text-lg leading-relaxed mb-4">
                    You also need to define the login route in the <code>routes.yaml</code> file, as shown below:
                </p>
                <CodeBlock code={`# config/routes.yaml
api_login_check:
    path: /api/login_check`} />

                <p className="text-lg leading-relaxed mb-4">
                    The <code>/api/login_check</code> route should be accessible for authentication, while other <code>/api</code> routes will require the <code>ROLE_ADMIN</code>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Testing JWT Authentication</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Let's test JWT authentication by using Postman to generate the first JWT token. Send a POST request to <code>/api/login_check</code> with the credentials of a user who has the <code>ROLE_ADMIN</code>.
                </p>
                <CodeBlock code={`{
  "email": "admin@example.com",
  "password": "your_password"
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    The API will return a <code>200 OK</code> status and a token in the response.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Using the Token for Authentication</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Once you have the token, you can use it to authenticate against protected API endpoints by adding it to the Authorization header as a Bearer token.
                </p>
                <CodeBlock code={`Authorization: Bearer YOUR_JWT_TOKEN`} />

            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Token Refreshing</h2>
                <p className="text-lg leading-relaxed mb-4">
                    If you wish to learn about refreshing tokens, you can consult the online documentation.
                </p>
            </section>
        </div>
    );
};

export default SymfonyJWTInstallationCourse;
