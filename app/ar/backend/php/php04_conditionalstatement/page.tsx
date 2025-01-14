import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const ConditionalStatements: React.FC = () => {
  // const a = 10;
  // const b = 20;
  // const age = 25;

  return (
    <section className="p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-center">العبارات الشرطية في PHP</h1>

      {/* If Statement */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">عبارة if</h2>
      <div className="border-b border-gray-300 mb-6" />
      <p className="text-lg leading-relaxed mb-4">
        عبارة <code>if</code> تنفذ تعليمة أو أكثر بناءً على شرط معين.
      </p>

      <CodeBlock code={`if ($a > $b) {
  echo "$a أكبر من $b";
} else {
  echo "$a أصغر من $b";
}`} />

      <p className="text-lg leading-relaxed mb-4">
        في هذا المثال، إذا كان <code>$a</code> أكبر من <code>$b</code>، يتم تنفيذ الكود الأول. وإذا لم يكن كذلك، يتم تنفيذ الكود الثاني.
      </p>

      {/* Ternary Operator */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">المشغل الثلاثي</h2>
      <div className="border-b border-gray-300 mb-6" />
      <p className="text-lg leading-relaxed mb-4">
        المشغل الثلاثي هو اختصار لعبارة <code>if-else</code>. هو أقل وضوحاً ويجب استخدامه بحذر.
      </p>

      <CodeBlock code={`$message = ($age >= 18) ? "بالغ" : "قاصر";`} />

      <p className="text-lg leading-relaxed mb-4">
        في هذا المثال، يتم تعيين <code>$message</code> إلى "بالغ" إذا كان <code>$age</code> 18 سنة أو أكثر؛ وإذا لم يكن كذلك، يتم تعيينه إلى "قاصر".
      </p>

      {/* Switch Statement */}
      <h2 className="text-2xl font-semibold mt-4 mb-2">عبارة switch</h2>
      <div className="border-b border-gray-300 mb-6" />
      <p className="text-lg leading-relaxed mb-4">
        عبارة <code>switch</code> تختبر متغيراً ضد عدة قيم. هي أكثر اختصاراً من العديد من العبارات <code>if</code>.
      </p>

      <CodeBlock code={`$a = 2;

switch ($a) {
  case 0:
    echo "$a = 0";
    break;
  case 1:
    echo "$a = 1";
    break;
  case 2:
    echo "$a = 2";
    break;
  default:
    echo "$a ليس 0 أو 1 أو 2";
}`} />

      <p className="text-lg leading-relaxed mb-4">
        في هذا المثال، يتم التحقق من <code>$a</code> ضد عدة حالات. عبارة <code>break</code> تمنع التنفيذ الإضافي بعد إيجاد تطابق.
      </p>
    </section>
  );
};

export default ConditionalStatements;
