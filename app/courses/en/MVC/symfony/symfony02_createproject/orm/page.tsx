import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ORMSetup: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Working with ORM in Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Some Methodology</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                In traditional design phases, you begin by designing your database using tools like Merise. Then, you generate and execute your database creation script, followed by populating the tables with test data.
            </p>
            <p className="text-base mb-4">
                In this approach, the database creation script and the data population script are two separate SQL files.
            </p>
            <p className="text-base mb-4">
                The reference model is your MCD (Conceptual Data Model).
            </p>
            <h3 className="text-xl font-medium mt-3 mb-2">The Reference Model</h3>
            <p className="text-base mb-4">
                The MCD imposes unique names for each field. The relational model lets you handle the relations in your database using foreign keys.
            </p>
            <p className="text-base mb-4">
                When using an ORM, however, the approach is a bit different. Since you'll be working with objects, a new reference model is required: the UML class diagram.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">The UML Model</h3>
            <p className="text-base mb-4">
                In this model, there’s no need for unique field names, and foreign keys are no longer necessary. Instead, relations are represented by two new properties:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>
                    <strong>artist</strong> in the <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> class (contains the associated <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> object).
                </li>
                <li>
                    <strong>discs</strong> in the <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> class (contains a list of <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> objects).
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Setting Up the Database</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                In this step, you will specify which database to use and where it's located.
            </p>

            <p className="text-base mb-4">
                Edit the <code className="bg-gray-200 text-red-600 px-1 rounded">.env.local</code> file and update the <code className="bg-gray-200 text-red-600 px-1 rounded">DATABASE_URL</code> with the following:
            </p>

            <CodeBlock code={`DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=mariadb-10.3.34&charset=utf8mb4"`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Creating the Database</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You can drop and create your database with the following commands:
            </p>

            <CodeBlock code={`php bin/console doctrine:database:drop --force`} />
            <CodeBlock code={`php bin/console doctrine:database:create`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Creating Entities</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You can create entities manually or use the Symfony maker to help generate them. Let's create the first entity, <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>, using the maker command:
            </p>

            <CodeBlock code={`php bin/console make:entity Disc`} />

            <p className="text-base mb-4">
                After running the command, it will generate the <code className="bg-gray-200 text-red-600 px-1 rounded">Disc.php</code> file. By default, Doctrine will add an <code className="bg-gray-200 text-red-600 px-1 rounded">id</code> field as the primary key.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Generating Tables</h3>
            <p className="text-base mb-4">
                Once your entities are created, generate the necessary tables with the following command:
            </p>

            <CodeBlock code={`php bin/console doctrine:schema:update --force`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Managing Relationships</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                There are several types of relationships you can create in Doctrine, such as:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>OneToOne</li>
                <li>OneToMany</li>
                <li>ManyToOne</li>
                <li>ManyToMany</li>
            </ul>
            <p className="text-base mb-4">
                In our case, we have a OneToMany relationship between <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> and <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code>.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Adding a Relationship</h3>
            <p className="text-base mb-4">
                Let’s add the relationship between <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> and <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> by modifying the <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> entity:
            </p>

            <CodeBlock code={`php bin/console make:entity Disc`} />

            <p className="text-base mb-4">
                When prompted, add a new property <code className="bg-gray-200 text-red-600 px-1 rounded">artist</code> with a relation type of <code className="bg-gray-200 text-red-600 px-1 rounded">ManyToOne</code> and set the target entity to <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code>.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Final Entity Code</h3>
            <CodeBlock code={`// src/Entity/Disc.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

class Disc
{
    // Other fields...

    /**
     * @ORM\ManyToOne(targetEntity=Artist::class, inversedBy="discs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $artist;

    public function getArtist(): ?Artist
    {
        return $this->artist;
    }

    public function setArtist(?Artist $artist): self
    {
        $this->artist = $artist;
        return $this;
    }
}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You’ve now learned how to configure your database, create entities, and establish relationships using Doctrine ORM. The next steps involve more advanced database operations, such as CRUD functionality, and working with migrations. Be sure to check out Symfony's documentation for more in-depth details on using Doctrine.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Finalizing the Database</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                To finalize the setup, run the following command to update your database schema:
            </p>

            <CodeBlock code={`php bin/console doctrine:schema:update --force`} />
            <p className="text-base mb-4">
                Alternatively, you can use the shorthand:
            </p>

            <CodeBlock code={`php bin/console d:s:u --force`} />

            <h3 className="text-xl font-medium mt-3 mb-2">Verify Database Structure</h3>
            <p className="text-base mb-4">
                After running the command, check the structure of your database. You should see a foreign key linking the <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> entity to the <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> entity.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Summary</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                While foreign keys exist in the database, they are not explicitly visible in your PHP classes. Doctrine handles the relationships behind the scenes.
            </p>
            <p className="text-base mb-4">
                To interact with these relationships, you should use the two properties added by Doctrine:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>artist</strong> in <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code></li>
                <li><strong>discs</strong> in <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code></li>
            </ul>

            <h3 className="text-xl font-medium mt-3 mb-2">Pluralization of Properties</h3>
            <p className="text-base mb-4">
                Notice that Doctrine automatically pluralizes property names when handling relationships. For instance, the <code className="bg-gray-200 text-red-600 px-1 rounded">discs</code> property in the <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> entity holds an array of <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> objects, which is why it's pluralized.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You have now completed the basic setup of entities and relationships in Symfony using Doctrine ORM. The next steps involve implementing CRUD functionality for these entities and exploring more advanced features such as migrations and database queries. Keep exploring Symfony’s official documentation to deepen your understanding of its powerful ORM capabilities.
            </p>
        </div>
    );
};

export default ORMSetup;
