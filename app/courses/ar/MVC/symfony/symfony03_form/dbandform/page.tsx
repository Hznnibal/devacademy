import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const FormsAndDatabase: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">النماذج وقاعدة البيانات</h1>

            <h2 className="text-2xl font-semibold mt-4 mb-2">إرسال البيانات إلى قاعدة البيانات</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                تأكد من أن جميع العلاقات بين جداولك قد تم إعلانها بشكل صحيح. هنا نأخذ جدول <strong>المنتجات</strong> كمثال، ولكن قد تحتاج إلى إجراء هذه الفحوصات على جداول أخرى في قاعدة بياناتك مسبقًا.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">إدراج البيانات في جدول "المنتجات"</h3>
            <p className="text-base mb-4">
                بالنسبة لكيان "المنتجات"، لدينا بالفعل وحدة تحكم تعرض قائمة المنتجات. لإضافة منتج، سنستخدم الطريقة التالية:
            </p>
            <CodeBlock code={`/**
 * @Route("/new", name="products_new", methods={"POST"})
 * @param Request $request
 * @return Response
 */
public function new(Request $request): Response
{
    $product = new Products();
    $form = $this->createForm(ProductsType::class, $product);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($product);
        $entityManager->flush();

        return $this->redirectToRoute('products_index');
    }

    return $this->render('products/new.html.twig', [
        'product' => $product,
        'form' => $form->createView(),
    ]);
}
`} />
            <p className="text-base mb-4">
                للتحقق من إضافة البيانات إلى قاعدة البيانات، نحتاج إلى التحقق مما إذا تم تقديم النموذج وكان صالحًا:
            </p>
            <CodeBlock code={`if ($form->isSubmitted() && $form->isValid()) {`} />
            <p className="text-base mb-4">
                إذا تم تقديم النموذج وكان صالحًا، نستخدم كائن <strong>EntityManager</strong> الخاص بـ Doctrine للتعامل مع إدخال البيانات:
            </p>
            <CodeBlock code={`$entityManager = $this->getDoctrine()->getManager();`} />
            <p className="text-base mb-4">
                بعد ذلك، نقوم بحفظ الكائن للاستعداد لحفظ البيانات:
            </p>
            <CodeBlock code={`$entityManager->persist($product);`} />
            <p className="text-base mb-4">
                أخيرًا، لإرسال البيانات إلى قاعدة البيانات، نستخدم طريقة <strong>flush()</strong>:
            </p>
            <CodeBlock code={`$entityManager->flush();`} />
            <p className="text-base mb-4">
                بعد ذلك، نعيد التوجيه إلى قائمة المنتجات:
            </p>
            <CodeBlock code={`return $this->redirectToRoute('products_index');`} />

            <h3 className="text-xl font-medium mt-3 mb-2">رسالة فلاش عند النجاح</h3>
            <p className="text-base mb-4">
                من الممارسات الجيدة عرض رسالة تأكيد عندما يتم تقديم النموذج بنجاح. سنستخدم <strong>addFlash($type, $message)</strong> لعرض الرسالة:
            </p>
            <CodeBlock code={`$this->addFlash(
'success',
'تم إضافة المنتج بنجاح!'
);`} />
            <p className="text-base mb-4">
                لعرض الرسالة، نضيف هذا الكود قبل كتلة الجسم في ملف <strong>base.html.twig</strong>:
            </p>
            <CodeBlock code={`{% for message in app.flashes('success') %}
<div class="alert alert-success">
    {{ message }}
</div>
{% endfor %}                `} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">تحديث منتج</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                بالنسبة لتعديل المنتج، نفترض أنه يمكنك تعديل جميع الحقول التي تم إدخالها أثناء الإنشاء. إذا كان يجب تعديل بعض الحقول فقط، فسيكون من الضروري إنشاء نموذج جديد كما هو موضح سابقًا. لتحديث منتج في قاعدة البيانات (UPDATE)، فإن الخطوات مشابهة لإضافة البيانات.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">مسار تعديل المنتج</h3>
            <p className="text-base mb-4">
                أولاً، نمرر معرّف المنتج في الرابط الذي سيؤدي إلى نموذج التعديل:
            </p>
            <CodeBlock code={`<a href="{{ path('products_edit', {'id': product.id}) }}">edit</a>                `} />
            <p className="text-base mb-4">
                هنا، <strong>path()</strong> يحدد اسم المسار، و <strong>'id'</strong> هو المعامل الذي يتوافق مع <strong>product.id</strong>، الذي يتم توليده عند عرض تفاصيل المنتج أو في قائمة المنتجات.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">طريقة التعديل</h3>
            <p className="text-base mb-4">
                دعونا ننشئ الطريقة لتعديل منتج. تتعامل هذه الطريقة مع كل من طلبات <strong>GET</strong> و <strong>POST</strong>:
            </p>
            <CodeBlock code={`/**
 * @Route("/{id}/edit", name="products_edit", methods={"GET","POST"})
 * @param Request $request
 * @param Products $product
 * @return Response
 */
public function edit(Request $request, Products $product): Response
{
    $form = $this->createForm(ProductsType::class, $product);
    $form->handleRequest($request);

    return $this->render('products/edit.html.twig', [
        'product' => $product,
        'form' => $form->createView(),
    ]);
}                `} />
            <p className="text-base mb-4">
                هنا، نحن نحقن كائن <strong>Products</strong> مباشرة في الطريقة. يقوم Symfony بذلك تلقائيًا، لذا لا نحتاج إلى جلب المنتج يدويًا.
            </p>

            <h3 className="text-xl font-medium mt-3 mb-2">تحديث البيانات عند التعديل</h3>
            <p className="text-base mb-4">
                بعد التحقق من صحة تقديم النموذج، نقوم بتحديث البيانات:
            </p>
            <CodeBlock code={`if ($form->isSubmitted() && $form->isValid()) {
    $this->getDoctrine()->getManager()->flush();
    return $this->redirectToRoute('products_index');
}                `} />

            <h3 className="text-xl font-medium mt-3 mb-2">إضافة رسالة تأكيد فلاش</h3>
            <p className="text-base mb-4">
                يمكنك أيضًا إضافة رسالة فلاش لتأكيد أن المنتج تم تحديثه بنجاح:
            </p>
            <CodeBlock code={`$this->addFlash(
'success',
'تم تحديث المنتج بنجاح!'
);`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">حذف منتج</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لحذف منتج من قاعدة البيانات، نستخدم طريقة <code>remove()</code> تليها <code>flush()</code> لتطبيق التغييرات.
                فيما يلي مثال على كيفية حذف منتج:
            </p>
            <CodeBlock code={`/**
 * @Route("/{id}/delete", name="products_delete", methods={"POST"})
 * @param Request $request
 * @param Products $product
 * @return Response
 */
public function delete(Request $request, Products $product): Response
{
    // التحقق من صحة رمز CSRF للأمان
    if ($this->isCsrfTokenValid('delete' . $product->getId(), $request->get('_token'))) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($product);
        $entityManager->flush(); // تطبيق الحذف في قاعدة البيانات

        // إضافة رسالة فلاش بنجاح
        $this->addFlash('success', 'تم حذف المنتج بنجاح!');
    }

    return $this->redirectToRoute('products_index'); // إعادة التوجيه إلى صفحة قائمة المنتجات
}`} />

            <h2 className="text-2xl font-semibold mt-4 mb-2">تحميل صورة منتج</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                لتحميل صورة لمنتج، يجب التعامل مع مدخلات الملف وحفظ الصورة على الخادم. إليك كيفية دمج ذلك في Symfony:
            </p>
            <CodeBlock code={`/**
 * @Route("/{id}/edit", name="products_edit", methods={"GET", "POST"})
 * @param Request $request
 * @param Products $product
 * @return Response
 */
public function edit(Request $request, Products $product): Response
{
    // إنشاء النموذج لتعديل المنتج
    $form = $this->createForm(ProductsType::class, $product);
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        // الحصول على بيانات الملف المحمل
        $pictureFile = $form['picture2']->getData();

        if ($pictureFile) {
            // الحصول على معرّف المنتج وتوليد اسم الملف الجديد
            $newPicture = $product->getId() . '.' . $pictureFile->guessExtension();
            $product->setPicture($newPicture);

            // نقل الملف المحمل إلى الدليل الوجهة
            try {
                $pictureFile->move(
                    $this->getParameter('photo_directory'),
                    $newPicture
                );
            } catch (FileException $e) {
                // التعامل مع الأخطاء أثناء تحميل الملف
                $this->addFlash('error', 'فشل تحميل الصورة.');
            }
        }

        $this->getDoctrine()->getManager()->flush(); // تطبيق التغييرات في قاعدة البيانات
        return $this->redirectToRoute('products_index');
    }

    return $this->render('products/edit.html.twig', [
        'product' => $product,
        'form' => $form->createView(),
    ]);
}`} />

            <h3 className="text-xl font-medium mt-3 mb-2">إعداد دليل تحميل الملفات</h3>
            <p className="text-base mb-4">
                تأكد من أن الدليل المخصص لتخزين الصور تم إعداده في <code>config/services.yaml</code>:
            </p>
            <CodeBlock code={`parameters:
    photo_directory: '%kernel.project_dir%/public/images/produit'`} />

            <p className="text-base mb-4">
                الآن، كلما تم تحميل صورة، سيتم نقلها إلى الدليل المحدد، وستتم تحديث صورة المنتج في قاعدة البيانات.
            </p>

            <h2 className="text-2xl font-semibold mt-4 mb-2">الخطوات التالية</h2>
            <div className="border-b border-gray-300 mb-6" />
            <p className="text-base mb-4">
                من خلال اتباع هذا الدليل، تعلمت كيفية التعامل مع حذف المنتجات وتحميل الصور. يمكنك الآن دمج هذه الميزات في تطبيق Symfony الخاص بك لإدارة المنتجات بشكل فعال.
            </p>

        </div >
    );
};

export default FormsAndDatabase;
