import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const SymfonyFixtures: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Fixtures in Symfony</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Introduction to Fixtures</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                Fixtures in Symfony provide an easy way to insert data into your entities. These are useful for testing and development when you need predefined data.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Creating Fixtures</h2>
            <p className="text-base mb-4">
                You can use the Maker to create a fixture skeleton:
            </p>

            <CodeBlock code={`php bin/console make:fixture Jeu1`} />

            <p className="text-base mb-4">
                This command will create a new file <code className="bg-gray-200 text-red-600 px-1 rounded">src/DataFixtures/Jeu1.php</code> that looks like this:
            </p>

            <CodeBlock code={`<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class Jeu1 extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}`} />

            <p className="text-base mb-4">
                When you run your fixtures, the <code className="bg-gray-200 text-red-600 px-1 rounded">load</code> method will be triggered. Notice that the parameter <code className="bg-gray-200 text-red-600 px-1 rounded">$manager</code> is an instance of <code className="bg-gray-200 text-red-600 px-1 rounded">ObjectManager</code>, which allows you to persist your entities into the database.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Two Useful Methods of $manager</h3>
            <ul className="list-disc pl-5 mb-4">
                <li><strong>persist</strong> – This method tells Doctrine that a new entity should be persisted.</li>
                <li><strong>flush</strong> – This method instructs Doctrine to generate the necessary SQL to update your database.</li>
            </ul>

            <h3 className="text-xl font-medium mt-3 mb-2">Creating Your First Artist</h3>
            <p className="text-base mb-4">
                To insert your first Artist into the database, add the following code:
            </p>

            <CodeBlock code={`$artist1 = new Artist();
$artist1->setName("Queens Of The Stone Age");
$artist1->setUrl("https://qotsa.com/");

$manager->persist($artist1);
$manager->flush();`} />

            <h3 className="text-xl font-medium mt-3 mb-2">Running Your Fixture</h3>
            <p className="text-base mb-4">
                To execute your fixture, run the following command:
            </p>

            <CodeBlock code={`php bin/console doctrine:fixtures:load`} />

            <p className="text-base mb-4">
                Alternatively, you can use the shorthand:
            </p>

            <CodeBlock code={`php bin/console d:f:l`} />

            <p className="text-base mb-4">
                Symfony will ask for confirmation before purging your database. Once the fixture is loaded, verify that the data has been correctly inserted into the database.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Adding a Disc and Linking it to Artist</h3>
            <p className="text-base mb-4">
                Now, let's add a Disc and associate it with our Artist. You can extend the fixture code as follows:
            </p>

            <CodeBlock code={`$artist1 = new Artist();
$artist1->setName("Queens Of The Stone Age");
$artist1->setUrl("https://qotsa.com/");

$manager->persist($artist1);

$disc1 = new Disc();
$disc1->setTitle("Songs for the Deaf");
$disc1->setPicture("https://en.wikipedia.org/wiki/Songs_for_the_Deaf#/media/File:Queens_of_the_Stone_Age_-_Songs_for_the_Deaf.png");
$disc1->setLabel("Interscope Records");

$manager->persist($disc1);

// Associating the Disc with the Artist
$disc1->setArtist($artist1);
// or 
$artist1->addDisc($disc1);

$manager->flush();`} />

            <h3 className="text-xl font-medium mt-3 mb-2">Linking Entities</h3>
            <p className="text-base mb-4">
                Notice the last lines of the code where we associate the <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> and <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> entities:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>To specify the <strong>Artist</strong> of a <strong>Disc</strong>, use <code className="bg-gray-200 text-red-600 px-1 rounded">$disc1-{`>`}setArtist($artist1);</code></li>
                <li>To add a <strong>Disc</strong> to an <strong>Artist</strong>, use <code className="bg-gray-200 text-red-600 px-1 rounded">$artist1-{`>`}addDisc($disc1);</code></li>
            </ul>

            <p className="text-base mb-4">
                These two manipulations are equivalent and achieve the same result. Since it's a OneToMany relationship, you can choose to manage it either from the "One" side or the "Many" side.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">Final Step</h3>
            <p className="text-base mb-4">
                Run the fixture again and verify in the database that the relationship between the <code className="bg-gray-200 text-red-600 px-1 rounded">Disc</code> and <code className="bg-gray-200 text-red-600 px-1 rounded">Artist</code> entities has been properly established.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">Conclusion</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                You have successfully created fixtures and inserted data into your entities using Symfony and Doctrine. Fixtures are an excellent tool for testing and populating your database with sample data. Continue exploring Symfony’s Doctrine support to build more complex relationships and enhance your application.
            </p>
        </div>
    );
};

export default SymfonyFixtures;
