
export default function Operators() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">المشغلين</h1>

            {/* مشغلات الحساب */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مشغلات الحساب</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    في جميع أمثلة هذه الدورة، نفترض أن القيمة الأولية لـ x هي 11.
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">الرمز</th>
                            <th className="border px-4 py-2">الاسم</th>
                            <th className="border px-4 py-2">المعنى</th>
                            <th className="border px-4 py-2">المثال</th>
                            <th className="border px-4 py-2">النتيجة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">+</td>
                            <td className="border px-4 py-2">الجمع</td>
                            <td className="border px-4 py-2">x + 3</td>
                            <td className="border px-4 py-2">14</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">-</td>
                            <td className="border px-4 py-2">الطرح</td>
                            <td className="border px-4 py-2">x - 3</td>
                            <td className="border px-4 py-2">8</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">*</td>
                            <td className="border px-4 py-2">الضرب</td>
                            <td className="border px-4 py-2">x * 2</td>
                            <td className="border px-4 py-2">22</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">/</td>
                            <td className="border px-4 py-2">القسمة</td>
                            <td className="border px-4 py-2">x / 2</td>
                            <td className="border px-4 py-2">5.5</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">%</td>
                            <td className="border px-4 py-2">المودولو</td>
                            <td className="border px-4 py-2">x % 5</td>
                            <td className="border px-4 py-2">1</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">=</td>
                            <td className="border px-4 py-2">المساواة</td>
                            <td className="border px-4 py-2">يستقبل القيمة الموجودة على اليمين</td>
                            <td className="border px-4 py-2">x = 5</td>
                            <td className="border px-4 py-2">5</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-lg leading-relaxed mb-4">
                    يستخدم المشغل <code>+</code> أيضًا لدمج السلاسل النصية.
                </p>
            </section>

            {/* مشغلات المقارنة */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مشغلات المقارنة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">الرمز</th>
                            <th className="border px-4 py-2">الاسم</th>
                            <th className="border px-4 py-2">المثال</th>
                            <th className="border px-4 py-2">النتيجة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">==</td>
                            <td className="border px-4 py-2">المساواة</td>
                            <td className="border px-4 py-2">x == 11</td>
                            <td className="border px-4 py-2">true</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&lt;</td>
                            <td className="border px-4 py-2">أصغر من</td>
                            <td className="border px-4 py-2">x &lt; 11</td>
                            <td className="border px-4 py-2">false</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&lt;=</td>
                            <td className="border px-4 py-2">أصغر من أو يساوي</td>
                            <td className="border px-4 py-2">x &lt;= 11</td>
                            <td className="border px-4 py-2">true</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&gt;</td>
                            <td className="border px-4 py-2">أكبر من</td>
                            <td className="border px-4 py-2">x &gt; 11</td>
                            <td className="border px-4 py-2">false</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">&gt;=</td>
                            <td className="border px-4 py-2">أكبر من أو يساوي</td>
                            <td className="border px-4 py-2">x &gt;= 11</td>
                            <td className="border px-4 py-2">true</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">!=</td>
                            <td className="border px-4 py-2">ليس مساويًا</td>
                            <td className="border px-4 py-2">x != 11</td>
                            <td className="border px-4 py-2">false</td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-lg leading-relaxed mb-4">
                    غالبًا ما يتم الخلط بين المشغل <code>=</code> و <code>==</code>. <code>=</code> هو مشغل تعيين، بينما <code>==</code> هو مشغل مقارنة. هذا الخلط هو مصدر شائع للأخطاء البرمجية.
                </p>
            </section>

            {/* المشغلون التوافقيون */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">المشغلون التوافقيون</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يقوم المشغلون التوافقيون بإجراء الحسابات حيث يظهر متغير على كلا الجانبين من علامة <code>=</code> (وهي في الأساس مشغلات تخصيص).
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">الرمز</th>
                            <th className="border px-4 py-2">الوصف</th>
                            <th className="border px-4 py-2">مثال</th>
                            <th className="border px-4 py-2">المعنى</th>
                            <th className="border px-4 py-2">النتيجة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">+=</td>
                            <td className="border px-4 py-2">مساواة جمع</td>
                            <td className="border px-4 py-2">x += y</td>
                            <td className="border px-4 py-2">x = x + y</td>
                            <td className="border px-4 py-2">16</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">-=</td>
                            <td className="border px-4 py-2">مساواة طرح</td>
                            <td className="border px-4 py-2">x -= y</td>
                            <td className="border px-4 py-2">x = x - y</td>
                            <td className="border px-4 py-2">6</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">*</td>
                            <td className="border px-4 py-2">مساواة ضرب</td>
                            <td className="border px-4 py-2">x *= y</td>
                            <td className="border px-4 py-2">x = x * y</td>
                            <td className="border px-4 py-2">55</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">/</td>
                            <td className="border px-4 py-2">مساواة قسمة</td>
                            <td className="border px-4 py-2">x /= y</td>
                            <td className="border px-4 py-2">x = x / y</td>
                            <td className="border px-4 py-2">2.2</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* المشغلون المنطقيون */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">المشغلون المنطقيون</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تُستخدم المشغلات المنطقية (البوليانية) للتحقق من حالتين أو أكثر.
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">الرمز</th>
                            <th className="border px-4 py-2">الاسم</th>
                            <th className="border px-4 py-2">مثال</th>
                            <th className="border px-4 py-2">المعنى</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">&&</td>
                            <td className="border px-4 py-2">و</td>
                            <td className="border px-4 py-2">condition1 && condition2</td>
                            <td className="border px-4 py-2">condition1 و condition2</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">||</td>
                            <td className="border px-4 py-2">أو</td>
                            <td className="border px-4 py-2">condition1 || condition2</td>
                            <td className="border px-4 py-2">condition1 أو condition2</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* مشغلات الزيادة */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">مشغلات الزيادة</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    هذه المشغلات تزيد أو تنقص قيمة المتغير بمقدار واحد. إنها مفيدة لتنفيذ الحلقات.
                </p>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">الرمز</th>
                            <th className="border px-4 py-2">الوصف</th>
                            <th className="border px-4 py-2">مثال</th>
                            <th className="border px-4 py-2">المعنى</th>
                            <th className="border px-4 py-2">النتيجة</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">x++</td>
                            <td className="border px-4 py-2">زيادة</td>
                            <td className="border px-4 py-2">y = x++</td>
                            <td className="border px-4 py-2">x++ هو نفسه x = x + 1</td>
                            <td className="border px-4 py-2">y = 4</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">x--</td>
                            <td className="border px-4 py-2">نقصان</td>
                            <td className="border px-4 py-2">y = x--</td>
                            <td className="border px-4 py-2">x-- هو نفسه x = x - 1</td>
                            <td className="border px-4 py-2">y = 2</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* أولويات المشغلات */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أولويات المشغلات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يتم تنفيذ العمليات بالترتيب التالي من حيث الأولوية (من الأدنى إلى الأعلى).
                    بالنسبة للمشغلات التي لها نفس الأولوية، يتم تنفيذ العمليات من اليسار إلى اليمين.
                </p>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr className="">
                            <th className="border border-gray-300 px-4 py-2">النوع</th>
                            <th className="border border-gray-300 px-4 py-2">المشغلات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">الفاصلة</td>
                            <td className="border border-gray-300 px-4 py-2"><code>,</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">التخصيص</td>
                            <td className="border border-gray-300 px-4 py-2"><code>= += -= *= /= %=</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">شرطي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>?:</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">أو المنطقي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>||</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">و المنطقي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>&&</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">التساوي وعدم التساوي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>== !=</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">علاقي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>&lt; &lt;= &gt; &gt;=</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">حسابي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>+ -</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">الضرب والقسمة</td>
                            <td className="border border-gray-300 px-4 py-2"><code>* /</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">أحادي</td>
                            <td className="border border-gray-300 px-4 py-2"><code>! ++ --</code></td>
                        </tr>
                        <tr className="">
                            <td className="border border-gray-300 px-4 py-2">الأقواس</td>
                            <td className="border border-gray-300 px-4 py-2"><code>()</code></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* التمرين */}
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">التمرين</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    بالنظر إلى المتغيرات التالية:
                </p>
                <ul className="list-inside space-y-2">
                    <li>a = "100" (سلسلة نصية)</li>
                    <li>b = 100 (عدد)</li>
                    <li>c = 1.00 (عدد)</li>
                    <li>d = true (قيمة منطقية)</li>
                </ul>
                أكمل المهام التالية:

                <ul className="list-inside space-y-2">
                    <li>عرض: "هذه سلسلة نصية: 100"</li>
                    <li>استخدام مشغل النقصان على <code>b</code></li>
                    <li>إضافة قيمة <code>a</code> إلى <code>c</code></li>
                    <li>عكس قيمة <code>d</code></li>
                </ul>
            </section>
        </div >
    );
}
