import { CodeBlock } from "@/components/CodeBlock/code-block";

const CoursePage = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Repository / DQL / QueryBuilder</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">The Repository</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    A Repository is a class responsible for managing queries on a specific entity. It provides several default methods for interacting with the entities, such as:
                </p>
                <ul>
                    <li><code>find($id)</code> - Retrieves an object by its ID</li>
                    <li><code>findOneBy([...])</code> - Retrieves an object by one or more properties</li>
                    <li><code>findBy([...])</code> - Retrieves multiple objects based on conditions</li>
                    <li><code>findAll()</code> - Retrieves all objects</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    Example of using a repository in a Symfony controller:
                </p>
                <CodeBlock code={`<?php

namespace App\Controller;

use App\Repository\ArtistRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    private $artistRepo;

    public function __construct(ArtistRepository $artistRepo)
    {
        $this->artistRepo = $artistRepo;
    }

    #[Route('/home', name: 'app_home')]
    public function index(): Response
    {
        $artists = $this->artistRepo->findAll();
        return $this->render('home/index.html.twig', [
            'artists' => $artists,
        ]);
    }
}`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">DQL (Doctrine Query Language)</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    DQL is a query language used by Doctrine to write queries. It resembles SQL, but unlike SQL, it operates not on a database but on PHP objects (the entity classes).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Here is an example of a DQL query that retrieves all artists whose name contains 'Neil':
                </p>
                <CodeBlock code={`// In the ArtistRepository class
public function getSomeArtists($name)
{
    $entityManager = $this->getEntityManager();
    $query = $entityManager->createQuery(
        'SELECT a
        FROM App\Entity\Artist a
        WHERE a.name LIKE :name'
    )->setParameter('name', '%'.$name.'%');

    return $query->getResult();
}`} />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">QueryBuilder</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    The QueryBuilder is a tool in Doctrine that allows us to build DQL queries dynamically. It is useful when we need to define optional filters, conditional joins, etc.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Here is an example of using the QueryBuilder to achieve the same result as the previous DQL query:
                </p>
                <CodeBlock code={`// In the ArtistRepository class
public function getSomeArtists($name)
{
    $qb = $this->createQueryBuilder('a');
    $qb
        ->andWhere('a.name LIKE :name')
        ->setParameter('name', '%'.$name.'%')
        ->orderBy('a.id', 'ASC')
        ->setMaxResults(10);

    return $qb->getQuery()->getResult();
}`} />
                <p className="text-lg leading-relaxed mb-4">
                    The QueryBuilder offers a powerful API with many methods that help build complex queries. It translates the query into valid DQL and takes into account the database system used (MySQL, PostgreSQL, etc.).
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">Notes on Using DQL and QueryBuilder</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    While the Repository methods are useful, sometimes they are not sufficient, and you may need to use DQL or the QueryBuilder to build more complex queries.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    The QueryBuilder provides an expressive and powerful API, but there are cases where you may need to fall back to native SQL queries for advanced use cases.
                </p>
            </section>
        </div>
    );
};

export default CoursePage;
