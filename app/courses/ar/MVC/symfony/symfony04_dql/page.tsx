import { CodeBlock } from "@/components/CodeBlock/code-block";

const CoursePage = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">المستودع / DQL / منشئ الاستعلامات</h1>

            <section>
                <h2 className="text-2xl font-semibold mt-4">المستودع</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    المستودع هو فئة مسؤولة عن إدارة الاستعلامات على كائن معين. يوفر العديد من الطرق الافتراضية للتفاعل مع الكائنات، مثل:
                </p>
                <ul>
                    <li><code>find($id)</code> - استرجاع كائن باستخدام معرّفه</li>
                    <li><code>findOneBy([...])</code> - استرجاع كائن باستخدام خاصية واحدة أو أكثر</li>
                    <li><code>findBy([...])</code> - استرجاع عدة كائنات استنادًا إلى الشروط</li>
                    <li><code>findAll()</code> - استرجاع جميع الكائنات</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    مثال لاستخدام مستودع في متحكم Symfony:
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
                <h2 className="text-2xl font-semibold mt-4">DQL (لغة الاستعلام Doctrine)</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    DQL هي لغة استعلام يستخدمها Doctrine لكتابة الاستعلامات. تشبه SQL، ولكن على عكس SQL، فإنها تعمل على الكائنات في PHP (فئات الكائنات).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إليك مثالًا على استعلام DQL الذي يسترجع جميع الفنانين الذين يحتوي اسمهم على "Neil":
                </p>
                <CodeBlock code={`// في فئة ArtistRepository
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
                <h2 className="text-2xl font-semibold mt-4">منشئ الاستعلامات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    منشئ الاستعلامات هو أداة في Doctrine تتيح لنا بناء استعلامات DQL بشكل ديناميكي. إنه مفيد عندما نحتاج إلى تعريف فلاتر اختيارية، والانضمام الشرطي، وما إلى ذلك.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إليك مثالًا على استخدام منشئ الاستعلامات لتحقيق نفس النتيجة كما في استعلام DQL السابق:
                </p>
                <CodeBlock code={`// في فئة ArtistRepository
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
                    يوفر منشئ الاستعلامات واجهة برمجة تطبيقات قوية مع العديد من الأساليب التي تساعد في بناء استعلامات معقدة. يقوم بتحويل الاستعلام إلى DQL صالح ويأخذ في الحسبان نظام قاعدة البيانات المستخدم (MySQL، PostgreSQL، إلخ).
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mt-4">ملاحظات حول استخدام DQL ومنشئ الاستعلامات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بينما تكون طرق المستودع مفيدة، إلا أنها في بعض الأحيان قد لا تكون كافية، وقد تحتاج إلى استخدام DQL أو منشئ الاستعلامات لبناء استعلامات أكثر تعقيدًا.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    يوفر منشئ الاستعلامات واجهة برمجة تطبيقات معبرة وقوية، ولكن هناك حالات قد تحتاج فيها إلى العودة إلى استعلامات SQL الأصلية للاستخدامات المتقدمة.
                </p>
            </section>
        </div>
    );
};

export default CoursePage;
