import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="px-5 py-8 font-sans">
      <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 07 - Array</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">إنشاء مصفوفة</h2> <div className="border-b border-gray-300 mb-6" />

        <p className="text-lg leading-relaxed mb-4">
          يتم إنشاء المصفوفة باستخدام الوسم <code className="bg-gray-200 text-red-600">&lt;table&gt;</code> ويغلق باستخدام{" "}
          <code className="bg-gray-200 text-red-600">&lt;/table&gt;</code>. المصفوفة تتكون من عدة صفوف مغلقة داخل الوسوم{" "}
          <code className="bg-gray-200 text-red-600">&lt;tr&gt;</code> و <code className="bg-gray-200 text-red-600">&lt;/tr&gt;</code>. كل صف يحتوي على عدة خلايا،
          مغلقة باستخدام الوسوم <code className="bg-gray-200 text-red-600">&lt;td&gt;</code> و <code className="bg-gray-200 text-red-600">&lt;/td&gt;</code>.
        </p>

        <h3 className="text-xl font-semibold mb-4">مثال على شفرة HTML للمصفوفة</h3>
        <CodeBlock code={`<table>
  <tbody>
    <tr>
      <td>جون</td>
      <td>65,800</td>
      <td>53,200</td>
      <td>46,400</td>
    </tr>
    <tr>
      <td>بول</td>
      <td>88,000</td>
      <td>51,500</td>
      <td>62,300</td>
    </tr>
    <tr>
      <td>جاك</td>
      <td>74,400</td>
      <td>64,200</td>
      <td>78,900</td>
    </tr>
  </tbody>
</table>`} />
        <p className="text-lg leading-relaxed mb-4">
          في الأيام الأولى للويب، كانت الجداول تُستخدم للتخطيط (تنظيم المحتوى في صفوف وأعمدة).
          هذه الممارسة أصبحت الآن غير مستحسنة، حيث يجب استخدام الوسم <code className="bg-gray-200 text-red-600">&lt;table&gt;</code> لعرض البيانات الجدولية فقط.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">العنوان (Caption)</h2> <div className="border-b border-gray-300 mb-6" />
        <p className="text-lg leading-relaxed mb-4">
          يمكن للجداول أن تتضمن عنوانًا (caption) باستخدام الوسم <code className="bg-gray-200 text-red-600">&lt;caption&gt;</code>، الذي يجب أن يوضع مباشرة تحت
          الوسم <code className="bg-gray-200 text-red-600">&lt;table&gt;</code>.
        </p>
        <CodeBlock code={`<table>
  <caption>مبيعات الربع الأول</caption>
  <tr>
    <td> ... </td>
  </tr>
</table>`} />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التنسيق المتقدم</h2> <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold mb-4">الرؤوس</h3>
        <p className="text-lg leading-relaxed mb-4">
          يتم تحديد رؤوس الأعمدة باستخدام الوسم <code className="bg-gray-200 text-red-600">&lt;th&gt;</code> المغلق داخل الوسم{" "}
          <code className="bg-gray-200 text-red-600">&lt;thead&gt;</code> وصف <code className="bg-gray-200 text-red-600">&lt;tr&gt;</code>.
        </p>
        <CodeBlock code={`<table>
  <caption>مبيعات الربع الأول</caption>
  <thead>
    <tr>
      <th>-</th>
      <th>يناير</th>
      <th>فبراير</th>
      <th>مارس</th>
    </tr>
  </thead>
</table>`} />

        <h3 className="text-xl font-semibold mb-4">التذييلات</h3>
        <p className="text-lg leading-relaxed mb-4">
          يتم استخدام الوسم <code className="bg-gray-200 text-red-600">&lt;tfoot&gt;</code> لتحديد خلايا التذييل في الجدول،
          على سبيل المثال، إجمالي القيم للأعمدة في جدول رقمي.
        </p>
        <CodeBlock code={`<tfoot>
  <tr>
    <td>الإجمالي</td>
    <td>228,200</td>
    <td>168,900</td>
    <td>187,600</td>
  </tr>
</tfoot>`} />

        <h3 className="text-xl font-semibold mb-4">وسم <code className="bg-gray-200 text-red-600">&lt;tbody&gt;</code></h3>
        <p className="text-lg leading-relaxed mb-4">
          يحدد الوسم <code className="bg-gray-200 text-red-600">&lt;tbody&gt;</code> محتوى الجسم الرئيسي للجدول.
        </p>
        <CodeBlock code={`<table>
  <thead> ... </thead>
  <tbody>
    <tr>
      <td>الإجمالي</td>
      <td>228,200</td>
      <td>168,900</td>
      <td>187,600</td>
    </tr>
  </tbody>
  <tfoot> ... </tfoot>
</table>`} />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">دمج الصفوف/الأعمدة</h2> <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold mb-4">سمة <code>colspan</code></h3>
        <p className="text-lg leading-relaxed mb-4">
          تسمح سمة <code>colspan</code> بدمج عدة أعمدة. على سبيل المثال، خلية تمتد عبر 4 أعمدة:
        </p>
        <CodeBlock code={`<td colspan="4">مبيعات الربع الأول</td>`} />

        <h3 className="text-xl font-semibold mb-4">سمة <code>rowspan</code></h3>
        <p className="text-lg leading-relaxed mb-4">
          تسمح سمة <code>rowspan</code> بدمج عدة صفوف. على سبيل المثال، خلية تمتد عبر صفين:
        </p>
        <CodeBlock code={`<td rowspan="2">الإجمالي</td>`} />
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">التدريبات</h2> <div className="border-b border-gray-300 mb-6" />

        <h3 className="text-xl font-semibold mb-4">التدريب 1</h3>
        <p className="text-lg leading-relaxed mb-4">
          أضف وسم <code>&lt;caption&gt;</code> إلى ملف HTML الخاص بك ولاحظ تأثيره.
        </p>

        <h3 className="text-xl font-semibold mb-4">التدريب 2</h3>
        <p className="text-lg leading-relaxed mb-4">
          أضف وسم <code>&lt;tbody&gt;</code> ولاحظ تأثيره على الجدول.
        </p>
      </section>
    </div>
  );
};

export default Page;
