import { CodeBlock } from "@/components/CodeBlock/code-block";

const SymfonyApiPlatformCourse = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">التطبيق باستخدام Symfony وAPI Platform</h1>
            <p className="text-lg mb-6">
                في هذه الدورة، سنتعلم كيفية إعداد واجهة برمجة تطبيقات REST في مشروع Symfony باستخدام API Platform، وهو إطار عمل قوي لبناء واجهات برمجة تطبيقات REST وGraphQL عالية الجودة.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تثبيت إطار عمل API Platform</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    أولاً، لنقم بتثبيت API Platform في مشروع Symfony الخاص بك. افتح نافذة الطرفية وقم بتشغيل الأمر التالي:
                </p>
                <CodeBlock code={`composer require api`} />

                <p className="text-lg leading-relaxed mb-4">
                    سيؤدي ذلك إلى إضافة ملف التهيئة <code>api_platform.yaml</code> وإنشاء مسار <code>/api</code> في تطبيقك.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تصريح الكيانات كموارد API</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    الآن، سنقوم بتصريح كيان كموارد API. افتح الكيان الذي تختاره وأضف السمة <code>#[ApiResource]</code> فوق اسم الفئة.
                </p>
                <CodeBlock code={`<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource; // لا تنسَ إضافة هذا السطر

#[ORM\Entity(repositoryClass: ArtistRepository::class)]
#[ApiResource]
class Artist
{
  // ...
}`} />

                <p className="text-lg leading-relaxed mb-4">
                    هذا يصرح كيان <code>Artist</code> كموارد API. قم بنفس الشيء لكيان <code>Disc</code>:
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
                <h2 className="text-2xl font-semibold mb-2">الوصول إلى توثيق API</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بمجرد إضافة السمة <code>ApiResource</code> إلى الكيانات الخاصة بك، يمكنك زيارة
                    <code>https://127.0.0.1:8000/api</code> للوصول إلى توثيق API. ستعرض واجهة Swagger الموارد المتاحة، الطرق (GET, POST، وغيرها)، عناوين URL (النقاط النهائية)، والأوصاف.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">التحكم في عمليات CRUD</h2>
                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، تتوفر خمس عمليات CRUD الأساسية (GET، POST، PUT، PATCH، DELETE) لكل مورد. يمكنك تخصيص العمليات التي تكون مفعّلة أو معطلة بتحديدها داخل الكيانات الخاصة بك.
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
                    في هذا المثال، تم تعطيل العمليات POST، PUT، PATCH، وDELETE لكيان <code>Artist</code>. سيعكس توثيق API هذه التغييرات.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">التسلسل باستخدام API Platform</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    يتيح لك API Platform تحديد متغير <code>$context</code> المستخدم بواسطة Symfony Serializer. هذا المتغير هو مصفوفة ترابطية تحتوي على مفتاح يسمى <code>Groups</code>، والذي يتيح لك اختيار الخصائص التي سيتم عرضها أثناء عمليات التطبيع (القراءة) وإزالة التطبيع (الكتابة).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    إليك مثال باستخدام مورد <code>Disc</code>:
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
                    في هذا المثال، قمنا بتحديد مجموعتين لخصائص كيان <code>Disc</code>:
                    <code>read</code> لعمليات القراءة (GET - سياق التطبيع) و<code>write</code> لعمليات الكتابة (POST، PUT، PATCH - سياق إزالة التطبيع).
                    خصائص <code>$title</code>، <code>$label</code>، و<code>$artist</code> مرئية فقط أثناء عمليات القراءة، بينما <code>$picture</code> مرئية في كل من عمليات القراءة والكتابة.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">تغيير تنسيق الاستجابة إلى JSON</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    بشكل افتراضي، قد يُرجع API Platform تنسيقات مختلفة. لضمان إرجاع استجابات JSON فقط، يمكنك تعديل ملف
                    <code>config/packages/api_platform.yaml</code> كالتالي:
                </p>
                <CodeBlock code={`api_platform:
  format:
    json`} />
            </section>
        </div>
    );
};

export default SymfonyApiPlatformCourse;
