import { CodeBlock } from "@/components/CodeBlock/code-block";
import Link from "next/link";

export default function CssSolutions() {
  return (
    <div className="px-5 py-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-10">الحلول: تمارين CSS</h1>

      {/* مقدمة في CSS */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. مقدمة في CSS</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          إليك كيفية إضافة ورقة أنماط CSS وتنسيق صفحة بسيطة.
        </p>
        <CodeBlock code={`/* HTML */
<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تمرين CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 className="text-3xl font-semibold mb-6 text-center">مرحبًا بالعالم!</h1>
</body>
</html>

/* style.css */
body {
  color: blue;
  font-family: Arial, sans-serif;
}`} />
      </section>

      {/* محددات */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. المحددات</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          مثال لاستخدام المحددات البسيطة والمتقدمة.
        </p>
        <CodeBlock code={`/* CSS */
h1 {
  border: 2px solid red;
}

.highlight {
  background-color: yellow;
}`} />
      </section>

      {/* الألوان والخطوط */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. الألوان والخطوط</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          استخدام الألوان والخطوط المخصصة.
        </p>
        <CodeBlock code={`/* CSS */
body {
  background-color: rgba(255, 99, 71, 0.5); /* طماطم شفافة */
  font-family: 'Roboto', sans-serif; /* استيراد من Google Fonts */
}

/* أضف هذا في <head> من HTML */
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
`} />
      </section>

      {/* نموذج الصندوق */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. نموذج الصندوق</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          إدارة الأبعاد، الهوامش، وتجاوز المحتوى.
        </p>
        <CodeBlock code={`/* CSS */
.box {
  border: 2px solid black;
  padding: 10px;
  margin: 20px;
  width: 200px;
  height: 100px;
  overflow: hidden; /* التعامل مع التجاوز */
}
`} />
      </section>

      {/* التموقع */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. التموقع</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          مثال لاستخدام خصائص التموقع.
        </p>
        <CodeBlock code={`/* CSS */

/* تموقع مطلق */
.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* تموقع ثابت */
.sticky-nav {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}`} />
      </section>

      {/* التصميم المتجاوب */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. التصميم المتجاوب</h2>
        <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          مثال لاستخدام استعلامات الوسائط.
        </p>
        <CodeBlock code={`/* CSS */

/* تخطيط مكون من ثلاث أعمدة */
.container {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 1;
  min-width: 200px;
}

/* استعلام الوسائط للهاتف المحمول */
@media (max-width: 600px) {
  .column {
    flex: 100%; /* عمود واحد */
  }

  body {
    background-color: lightblue; /* تغيير اللون بناءً على العرض */
  }
}`} />
      </section>

      <div className="text-center mt-8">
        <Link href="../css07_exercices" className="text-blue-600 underline text-lg">
          العودة إلى التمارين
        </Link>
      </div>
    </div>
  );
}
