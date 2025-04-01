import { CodeBlock } from "@/components/CodeBlock/code-block";
import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 08 - النماذج</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">مقدمة</h2> <div className="border-b border-gray-300 mb-6" />
                <h4 className="text-lg font-semibold mb-4">
                    تسمح النماذج للمستخدمين بإدخال البيانات وإرسالها إلى خادم الويب ليتم معالجتها بواسطة السكربتات من جانب الخادم.
                </h4>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن إدخال البيانات في النموذج عبر:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>حقول الإدخال النصي</li>
                    <li>مساحات النص المتعددة الأسطر</li>
                    <li>قوائم منسدلة</li>
                    <li>مربعات الاختيار لإجابات متعددة الخيارات</li>
                    <li>أزرار الراديو لإجابات اختيار واحد</li>
                    <li>رفع الملفات أيضًا ممكن</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">هيكل النموذج</h2> <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold mb-2">إعلان النموذج</h3>

                <p className="text-lg leading-relaxed mb-4">
                    يبدأ النموذج بعنصر <code>&lt;form&gt;</code> وينتهي بعنصر <code>&lt;/form&gt;</code>:
                </p>
                <CodeBlock code={`<form>
</form>`} />

                <p className="text-lg leading-relaxed mb-4">
                    يتطلب عنصر <code>&lt;form&gt;</code> السمة <code>action</code>، بينما السمات الأخرى اختيارية.
                </p>
                <CodeBlock code={`<form action="destination.php" method="post" id="contact_form"> 
</form>`} />

                <p className="text-lg leading-relaxed mb-4">التفسيرات:</p>
                <table className="min-w-full bg-black text-blue-50 p-4 mb-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left">السمة</th>
                            <th className="px-4 py-2 text-left">الغرض</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2"><code>action</code></td>
                            <td className="px-4 py-2">
                                يحدد عنوان URL للملف الذي سيعالج البيانات المرسلة من النموذج (على سبيل المثال، لتخزين البيانات في قاعدة البيانات).
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"><code>method</code></td>
                            <td className="px-4 py-2">
                                يمكن أن تكون هذه السمة بقيمتين:
                                <ul className="list-disc ml-6">
                                    <li><code>GET</code>: تتم إضافة بيانات الإدخال إلى عنوان URL (أقل أمانًا).</li>
                                    <li><code>POST</code>: يتم إرسال بيانات الإدخال في جسم الطلب، وهو أكثر أمانًا.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2"><code>accept</code></td>
                            <td className="px-4 py-2">
                                يقيد نوع الملفات التي يمكن رفعها. ومع ذلك، لا يشكل هذا تدبيرًا أمنيًا.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">حقول الإدخال</h2> <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    داخل عنصر <code>&lt;form&gt;</code>، نضمن جميع الأكواد التي تسمح بإدخال البيانات: حقول النص (<code>&lt;input&gt;</code>)، القوائم المنسدلة، وغيرها من عناصر النموذج.
                </p>

                <h3 className="text-lg font-semibold mb-4">مثال:</h3>

                <CodeBlock code={`<form action="destination.php" method="post"> 
   <input type="text" name="name"> 
   <input type="text" name="surname"> 
</form>`} />

                <p className="text-lg leading-relaxed mb-4">
                    تقوم عناصر <code>&lt;input&gt;</code> بإنشاء حقول حيث يمكن للمستخدمين إدخال النصوص أو اختيار الخيارات. هناك عدة أنواع من الحقول، سنوضحها بشكل أكبر في هذا الدورة.
                </p>

                <h3 className="text-xl font-semibold mb-4">إرسال النموذج</h3>
                <p className="text-lg leading-relaxed mb-4">
                    لإرسال النموذج، من الضروري إضافة حقل من نوع <code>submit</code> قبل إغلاق العنصر <code>&lt;/form&gt;</code>.
                </p>

                <h4 className="text-lg font-semibold mb-4">مثال:</h4>
                <CodeBlock code={`<form action="destination.php" method="post"> 
   <input type="text" name="name"> 
   <input type="text" name="surname"> 
   <input type="submit" value="Send"> 
</form>`} />

                <p className="text-lg leading-relaxed mb-4">
                    يقوم الحقل <code>&lt;input type="submit"&gt;</code> بإنشاء زر لإرسال النموذج. يمكن أيضًا استبداله بزر <code>&lt;button type="submit"&gt;</code>:
                </p>
                <CodeBlock code={`<button type="submit">Send</button>`} />
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أنواع الحقول</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h4 className="text-lg font-semibold mb-4">حقول إدخال النص</h4>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن للمستخدمين إدخال المعلومات في حقل إدخال النص باستخدام وسم <code>&lt;input type="text"&gt;</code>.
                </p>
                <CodeBlock code={`<label for="name">الاسم:</label><input type="text" name="name" id="name">`} />
                <p className="text-lg leading-relaxed mb-4">
                    <strong>العرض:</strong>
                </p>

                <form className="flex items-center mb-4">
                    <label htmlFor="name" className="mr-4">الاسم:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        size={50}
                        maxLength={50}
                        className="border p-2 text-black"
                    />
                </form>
                <p className="text-lg leading-relaxed mb-4">
                    في HTML5، وسم <code>&lt;input&gt;</code> لا يحتاج إلى شرطة إغلاق ذاتية: <code>&lt;input type="text"&gt;</code> بدلاً من <code>&lt;input type="text" /&gt;</code>.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                    وسم <code>{`<input>`}</code> يحتوي على الخصائص الرئيسية التالية: فقط الخصائص *type* و *name* إلزامية. إذا كانت خاصية *name* مفقودة، فلن يتم إرسال البيانات المدخلة في الحقل إلى الملف المستهدف.
                </p>

                <h4 className="text-lg font-semibold mb-4">قائمة الخصائص الممكنة:</h4>
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="">
                            <th className="border px-4 py-2 text-left">الخاصية</th>
                            <th className="border px-4 py-2 text-left">إلزامي</th>
                            <th className="border px-4 py-2 text-left">الوصف</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>type</code></td>
                            <td className="border px-4 py-2">إلزامي</td>
                            <td className="border px-4 py-2">يحدد نوع الحقل (مثل <code>text</code> أو <code>radio</code> وغيرها).</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">إلزامي</td>
                            <td className="border px-4 py-2">اسم الحقل، يُستخدم لإرسال البيانات.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">القيمة الافتراضية للحقل.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>size</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يحدد عرض الحقل المرئي بالأحرف.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>maxlength</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يحدد الحد الأقصى لعدد الأحرف التي يمكن للمستخدم إدخالها.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>autocomplete</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يتيح الإكمال التلقائي للحقل.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>autofocus</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يعطي التركيز للحقل عند تحميل الصفحة.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>readonly</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يجعل الحقل للقراءة فقط، مما يمنع التعديلات.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>disabled</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يُعطل الحقل، مما يجعله غير تفاعلي.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>placeholder</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يعرض نص تلميحي يختفي عندما يبدأ المستخدم في الكتابة.</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-4 mt-4">مثال باستخدام خصائص متعددة:</h4>
                <CodeBlock code={`<label for="name">الاسم:</label>
<input type="text" name="name" id="name" size="50" maxlength="50" value="Dave LOPER">`} />
                <p className="text-lg leading-relaxed mb-4">
                    <strong>العرض:</strong>
                </p>

                <form className="flex items-center mb-4">
                    <label htmlFor="name" className="mr-4 ">الاسم:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        size={50}
                        maxLength={50}
                        defaultValue="Dave LOPER"
                        className="border p-2 text-black"
                    />
                </form>
                <p className="text-lg leading-relaxed mb-4">
                    هنا، يتم عرض <code>Dave LOPER</code> افتراضيًا في الحقل لأن هذه القيمة تم ملؤها مسبقًا باستخدام خاصية <code>value</code>.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">حقول الإدخال متعددة الأسطر</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    عندما تريد إدخال نص عبر عدة أسطر أو إدخال محتوى طويل، يمكنك استخدام حقول الإدخال متعددة الأسطر باستخدام وسم <code>&lt;textarea&gt;...&lt;/textarea&gt;</code>.
                </p>
                <section className="mb-12">
                    <h3 className="text-lg font-semibold mb-4">سمات الوسم <code>&lt;textarea&gt;</code></h3>

                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-left">السمة</th>
                                <th className="border px-4 py-2 text-left">مطلوب</th>
                                <th className="border px-4 py-2 text-left">الغرض</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2"><code>name</code></td>
                                <td className="border px-4 py-2">إجباري</td>
                                <td className="border px-4 py-2">يحدد اسم الحقل الذي يُستخدم لإرسال البيانات.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2"><code>rows</code></td>
                                <td className="border px-4 py-2">اختياري</td>
                                <td className="border px-4 py-2">يحدد عدد الأسطر النصية المرئية في منطقة الإدخال.</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2"><code>cols</code></td>
                                <td className="border px-4 py-2">اختياري</td>
                                <td className="border px-4 py-2">يحدد عدد الأحرف المرئية في كل سطر في منطقة الإدخال.</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-lg leading-relaxed mb-4">
                        المحتوى الافتراضي لحقل الإدخال متعدد الأسطر هو النص الموجود بين وسم <code>{`<textarea>`}</code> و <code>{`</textarea>`}</code>.
                    </p>
                </section>

                <h4 className="text-lg font-semibold mb-4">مثال على حقل إدخال متعدد الأسطر:</h4>
                <CodeBlock code={`<textarea name="comment" rows="10" cols="50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis quis metus ornare semper. In vitae lacus ex. In elementum iaculis malesuada. Maecenas vulputate, erat id molestie dictum, diam dolor faucibus nisl, in pharetra sapien libero eget risus. Morbi vehicula aliquam placerat. Suspendisse mollis tempus dictum. Nullam suscipit nec massa eget viverra. Etiam feugiat facilisis est nec euismod. Quisque convallis, tortor sed placerat lacinia, elit nunc volutpat arcu, vel consequat velit libero at tortor. Suspendisse interdum lacus non felis bibendum facilisis. In sit amet enim mauris.</textarea>`} />

                <p className="text-lg leading-relaxed mb-4">
                    <strong>يظهر على النحو التالي:</strong>
                </p>

                <textarea
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis quis metus ornare semper. In vitae lacus ex. In elementum iaculis malesuada. Maecenas vulputate, erat id molestie dictum, diam dolor faucibus nisl, in pharetra sapien libero eget risus. Morbi vehicula aliquam placerat. Suspendisse mollis tempus dictum. Nullam suscipit nec massa eget viverra. Etiam feugiat facilisis est nec euismod. Quisque convallis, tortor sed placerat lacinia, elit nunc volutpat arcu, vel consequat velit libero at tortor. Suspendisse interdum lacus non felis bibendum facilisis. In sit amet enim mauris."
                    name="comment"
                    rows={10}
                    cols={50}
                    className="border p-2 text-black"
                />

                <p className="text-lg leading-relaxed mb-4">
                    يمكن لهذا الحقل استيعاب نص طويل مثل هذا المثال ويسمح للمستخدم بتحريره. قد تظهر القضبان التمرير الرأسية والأفقية إذا كانت منطقة الإدخال صغيرة جدًا لعرض النص بالكامل.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-lg font-semibold mb-4">خانات الاختيار وأزرار الراديو</h3>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن للمستخدمين اختيار البيانات باستخدام خانات الاختيار (اختيارات متعددة) أو أزرار الراديو (اختيار واحد). لهذا الغرض، يتم استخدام الوسوم التالية:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li><code>&lt;input type="checkbox"&gt;</code> لخانات الاختيار</li>
                    <li><code>&lt;input type="radio"&gt;</code> لأزرار الراديو</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    تحتوي هذه الوسوم على السمات التالية:
                </p>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">السمة</th>
                            <th className="border px-4 py-2">مطلوب</th>
                            <th className="border px-4 py-2">الغرض</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">مطلوب</td>
                            <td className="border px-4 py-2">اسم البيانات، يُستخدم لاسترجاع البيانات على الخادم</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">مطلوب</td>
                            <td className="border px-4 py-2">التسمية المقابلة للخيار المحدد</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>checked</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">يشير إلى أن الخيار سيتم تحديده افتراضيًا</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-4">مثال على خانة الاختيار</h4>
                <CodeBlock code={`<input type="checkbox" name="color1" value="Blue" checked> Blue
<input type="checkbox" name="color2" value="Red"> Red
<input type="checkbox" name="color3" value="Green"> Green`} />
                <p className="text-lg leading-relaxed mb-4">يعرض:</p>
                <div className="ml-6">
                    <input type="checkbox" name="color1" value="Blue" defaultChecked /> Blue
                    <input type="checkbox" name="color2" value="Red" /> Red
                    <input type="checkbox" name="color3" value="Green" /> Green
                </div>
                <p className="text-lg leading-relaxed mb-4">هنا، تم تحديد اللون الأزرق افتراضيًا بفضل السمة checked.</p>

                <h4 className="text-lg font-semibold mb-4">مثال على زر الراديو</h4>
                <CodeBlock code={`<input type="radio" name="color" value="Blue"> Blue
<input type="radio" name="color" value="Red"> Red
<input type="radio" name="color" value="Green" checked> Green`} />
                <p className="text-lg leading-relaxed mb-4">يعرض:</p>
                <div className="ml-6">
                    <input type="radio" name="color" value="Blue" /> Blue
                    <input type="radio" name="color" value="Red" /> Red
                    <input type="radio" name="color" value="Green" defaultChecked /> Green
                </div>
                <p className="text-lg leading-relaxed mb-4">يجب أن تشترك أزرار الراديو في نفس الاسم، أي نفس قيمة السمة name.</p>

                <h4 className="text-lg font-semibold mb-4">قائمة منسدلة</h4>
                <p className="text-lg leading-relaxed mb-4">
                    يمكن للمستخدمين اختيار المعلومات المطلوبة من قائمة مُعدة مسبقًا. يحدد وسم <code>&lt;select&gt;</code> قائمة الخيارات الممكنة.
                </p>
                <CodeBlock code={`<select name="color">
    <option>Blue</option>
    <option>Red</option>
    <option>Green</option>
</select>`} />

                <h2 className="text-2xl font-semibold mb-2">سمات وسم &lt;select&gt;</h2>
                <div className="border-b border-gray-300 mb-6" />
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">السمة</th>
                            <th className="border px-4 py-2 text-left">مطلوب</th>
                            <th className="border px-4 py-2 text-left">الغرض</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>name</code></td>
                            <td className="border px-4 py-2">مطلوب</td>
                            <td className="border px-4 py-2">
                                اسم البيانات. هذا هو الاسم الذي ستكون المعلومات المدخلة معروفة به وسيتم استرجاعها في السكربت الخادم الذي يتم تفعيله بواسطة النموذج.
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>size</code></td>
                            <td className="border px-4 py-2">مطلوب</td>
                            <td className="border px-4 py-2">
                                إذا كانت القيمة size تساوي 1 (القيمة الافتراضية)، فسيكون ذلك قائمة منسدلة (اختيار واحد). إذا كانت size &gt; 1، فستكون قائمة مع شريط تمرير.
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>multiple</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">
                                يشير إلى أن الاختيارات المتعددة مسموح بها (ينطبق ذلك أيضًا على حقول <code>input</code> بأنواع <code>email</code> و <code>file</code>).
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text-2xl font-semibold mb-2">سمات وسم &lt;option&gt;</h2>
                <div className="border-b border-gray-300 mb-6" />
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 text-left">السمة</th>
                            <th className="border px-4 py-2 text-left">النوع</th>
                            <th className="border px-4 py-2 text-left">الغرض</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>value</code></td>
                            <td className="border px-4 py-2">اختياري</td>
                            <td className="border px-4 py-2">
                                اسم البيانات للخيار المقابل. يتيح تحديد قيمة مختلفة عن تلك المعروضة للمستخدم. إذا كانت غير موجودة (سمة اختيارية)، يتم إرسال القيمة المعروضة للمستخدم (بين &lt;option&gt;).
                            </td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>selected</code></td>
                            <td className="border px-4 py-2">مطلوب</td>
                            <td className="border px-4 py-2">يحدد الخيار الافتراضي.</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="text-lg font-semibold mb-4">مثال مع سمة <code>selected</code></h4>
                <CodeBlock code={`<label for="color">اختر اللون</label>
<select id="color">
    <option value="" selected>-</option>
    <option value="Blue">أزرق</option>
    <option value="Red">أحمر</option>
    <option value="Green">أخضر</option>
</select>`} />
                <p className="text-lg leading-relaxed mb-4">يعرض:</p>
                <div className="ml-6 mb-4">
                    <label className="mr-2" htmlFor="color">اختر اللون</label>
                    <select className="border border-black rounded text-black" id="color" defaultValue="">
                        <option value="">-</option>
                        <option value="Blue">أزرق</option>
                        <option value="Red">أحمر</option>
                        <option value="Green">أخضر</option>
                    </select>
                </div>
                <p className="text-lg leading-relaxed mb-4">هنا، إذا لم يقم المستخدم بالاختيار، سيتم اختيار اللون الأخضر افتراضيًا.</p>

                <h4 className="text-lg font-semibold mb-4">مثال مع سمة <code>size</code> (القيمة = 3)</h4>
                <CodeBlock code={`<label for="color">اختر اللون</label>
<select id="color" size="3">
    <option value="">-</option>
    <option value="Blue">أزرق</option>
    <option value="Red">أحمر</option>
    <option value="Green">أخضر</option>
    <option value="Yellow">أصفر</option>
    <option value="White">أبيض</option>
</select>`} />
                <p className="text-lg leading-relaxed mb-4">يعرض:</p>
                <div className="ml-6">
                    <label className="mr-2" htmlFor="color">اختر اللون</label>
                    <select className="border border-black rounded text-black" id="color" size={3} defaultValue="">
                        <option value="">-</option>
                        <option value="Blue">أزرق</option>
                        <option value="Red">أحمر</option>
                        <option value="Green">أخضر</option>
                        <option value="Yellow">أصفر</option>
                        <option value="White">أبيض</option>
                    </select>
                </div>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">تحميل الملفات</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    نوع <code>file</code> في وسم <code>&lt;input&gt;</code> يسمح بتحميل ملف من جهاز المستخدم إلى الخادم الذي يستضيف الصفحة.
                </p>
                <p className="text-lg leading-relaxed mb-2">
                    لاستخدام هذا النوع، يجب إضافة ما يلي إلى وسم <code>&lt;form&gt;</code>:
                </p>
                <ul className="list-disc ml-10 mb-4">
                    <li>
                        <strong>القيمة <code>POST</code> لخاصية <code>method</code></strong>: تحميل الملفات لا يعمل مع طلبات HTTP من نوع <code>GET</code>.
                    </li>
                    <li>
                        <strong>خاصية <code>enctype</code> بالقيمة <code>multipart/form-data</code></strong>: ضرورية لتمكين تحميل الملفات.
                    </li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">
                    مثال على نموذج لتحميل الملفات:
                </p>
                <CodeBlock code={`<form action="destination.php" method="post" enctype="multipart/form-data">
  <input type="file" name="file">
</form>`} />
                <p className="text-lg leading-relaxed mb-4">
                    <strong>يعرض:</strong>
                </p>
                <form action="destination.php" method="post" encType="multipart/form-data">
                    <input type="file" name="file" />
                </form>
                <p className="mb-4 mt-4">
                    سيتم بعد ذلك تخزين الملف فعليًا على الخادم في دليل يتم تحديده في كود المعالجة على الخادم.
                </p>
                <p className="mb-4 mt-4">
                    <strong>تحميل ملف إلى خادم عبر نموذج يسبب ثغرات أمنية خطيرة يجب التعامل معها باستخدام البرمجة على الخادم.</strong>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    مثال للسماح بتحميل ملفات <code>.png</code> فقط:
                </p>
                <CodeBlock code={`<input type="file" name="file" accept="image/png">`} />

                <h4 className="text-lg font-semibold mb-4">السمات الإضافية لنوع <code>file</code></h4>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">السمة</th>
                            <th className="border px-4 py-2">الغرض</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>multiple</code></td>
                            <td className="border px-4 py-2">يسمح باختيار ملفات متعددة</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>required</code></td>
                            <td className="border px-4 py-2">يشير إلى أن الحقل مطلوب</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>accept</code></td>
                            <td className="border px-4 py-2">يحدد أنواع الملفات المقبولة (مثل <code>image/png</code>)</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mb-4 mt-4">
                    سيتم إرسال معلومات مختلفة عن الملف (الاسم، الحجم، نوع MIME، إلخ) من الصفحة إلى الخادم. يجب استرجاع هذه التفاصيل والتحقق منها ومعالجتها باستخدام لغات البرمجة على الخادم مثل PHP.
                </p>

                <h2 className="text-2xl font-semibold mb-2">الحقول المخفية</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    يمكنك إرسال بيانات مخفية إلى الخادم باستخدام وسم <code>&lt;input type="hidden"&gt;</code>.
                </p>
                <CodeBlock code={`<input type="hidden" name="user_id" value="12345">`} />

                <h2 className="text-2xl font-semibold mb-2">تسميات الحقول</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    للإشارة إلى المستخدم حول المعلومات التي يجب إدخالها، استخدم وسم <code>&lt;label&gt;</code> مع خاصية <code>for</code> التي يجب أن تتطابق مع <code>id</code> للحقل.
                </p>
                <CodeBlock code={`<label for="name">الاسم:</label><input type="text" name="name" id="name">`} />
                <p className="text-lg leading-relaxed mb-4">
                    يجب أن يحتوي وسم <code>&lt;label&gt;</code> على خاصية <code>for</code> لربطها بالحقل المطلوب.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    على جانب الحقل (<code>&lt;input&gt;</code>)، يجب إضافة خاصية <code>id</code> التي تتطابق قيمتها مع قيمة <code>for</code> لعمل الرابط.
                </p>
                <blockquote className="mb-4">
                    في الممارسة العملية، استخدم نفس القيمة لخصائص <code>id</code> و<code>for</code> و<code>name</code>، باستثناء مربعات الاختيار وأزرار الراديو.
                </blockquote>

                <h2 className="text-2xl font-semibold mb-2">مجموعات الحقول</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    وسم <code>&lt;fieldset&gt;</code> يقوم بتجميع الحقول في النموذج، ووسم <code>&lt;legend&gt;</code> يحدد اسم المجموعة.
                </p>
                <CodeBlock code={`<fieldset>
  <legend>معلومات الاتصال</legend>
  <label for="name">الاسم:</label><input type="text" name="name" id="name"><br>
  <label for="email">البريد الإلكتروني:</label><input type="email" name="email" id="email"><br>
  <label for="dob">تاريخ الميلاد:</label><input type="date" name="dob" id="dob">
</fieldset>`} />
                <p className="text-lg leading-relaxed mb-4">يعرض:</p>
                <fieldset >
                    <legend className="text-xl font-semibold">معلومات الاتصال</legend>
                    <label htmlFor="name">الاسم:</label>
                    <input type="text" name="name" id="name" className="border p-2 mb-2 text-black" />
                    <br />
                    <label htmlFor="email">البريد الإلكتروني:</label>
                    <input type="email" name="email" id="email" className="border p-2 mb-2 text-black" />
                    <br />
                    <label htmlFor="dob">تاريخ الميلاد:</label>
                    <input type="date" name="dob" id="dob" className="border p-2 mb-2 text-black" />
                </fieldset>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">أنواع الحقول الأخرى</h2>
                <div className="border-b border-gray-300 mb-6" />

                <h3 className="text-xl font-semibold mb-2">قائمة البيانات (Datalist)</h3>
                <p className="text-lg leading-relaxed mb-4">
                    قدمت HTML5 عنصر <code>&lt;datalist&gt;</code>، الذي يوفر قائمة من الاقتراحات / خيارات الإكمال التلقائي عندما يكتب المستخدم نصًا في حقل <code>&lt;input&gt;</code>.
                </p>
                <p className="text-lg leading-relaxed mb-4">مثال على استخدام عنصر <code>&lt;datalist&gt;</code>:</p>
                <CodeBlock code={`<label for="metiers2">اختر مهنتك</label>
<input type="text" name="metiers1" id="metiers2" list="metiers3">
<datalist id="metiers3">
    <option value="webmaster">
    <option value="developer">
    <option value="database administrator">
    <option value="web designer">
</datalist>`} />

                <div>
                    <label htmlFor="metiers2">اختر مهنتك:</label>
                    <input className="border border-black text-black" type="text" name="metiers1" id="metiers2" list="metiers3" />
                    <datalist id="metiers3">
                        <option value="webmaster" />
                        <option value="developer" />
                        <option value="database administrator" />
                        <option value="web designer" />
                    </datalist>
                </div>

                <h2 className="text-2xl font-semibold mb-2 mt-4">التحقق من صحة النموذج</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    تقدم HTML5 سمات للمساعدة في التحقق من صحة النماذج من جانب العميل. هذه السمات تحسن تجربة المستخدم ولكنها لا تضمن تحققًا آمنًا.
                </p>
                <table className="table-auto w-full mb-4">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">السمة</th>
                            <th className="border px-4 py-2">الغرض</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2"><code>required</code></td>
                            <td className="border px-4 py-2">تشير إلى أن الحقل إلزامي</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>pattern</code></td>
                            <td className="border px-4 py-2">تحدد نمط تعبير منتظم للتحقق من صحة الإدخال</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2"><code>title</code></td>
                            <td className="border px-4 py-2">تخصيص رسالة خطأ التحقق من الصحة</td>
                        </tr>
                    </tbody>
                </table>

                <p className="text-lg leading-relaxed mb-4">
                    مثال على حقل يحتوي على <code>pattern</code> و <code>required</code>:
                </p>
                <CodeBlock code={`<input type="text" placeholder="أدخل اسمك" pattern="^[a-z]+$" required title="أدخل اسمك (فقط أحرف من a إلى z)">`} />

                <p className="text-lg leading-relaxed mb-4">عرض حقل نصي مع التحقق من الصحة:</p>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="nom" className="block">الاسم:</label>
                        <input
                            type="text"
                            id="nom"
                            name="name"
                            placeholder="أدخل اسمك"
                            pattern="^[a-z]+$"
                            required
                            title="أدخل اسمك (فقط أحرف من a إلى z)"
                            className="border p-2 w-full text-black"
                        />
                    </div>
                </form>

                <p className="font-extralight mt-4">
                    في هذا المثال، يشير النمط <code>^[a-z]+$</code> إلى أنه من المتوقع فقط إدخال أحرف أبجدية.
                </p>

                <p className="mt-4">
                    <strong>
                        استخدام سمات <code>pattern</code> و <code>required</code> لا يؤمن النموذج ولكن يحسن تجربة الاستخدام (UI/UX). يجب دائمًا إجراء التحقق من الصحة على الخادم باستخدام لغة سكربت. سوف نتناول التحقق من الصحة بشكل موسع في دورات JavaScript و PHP.
                    </strong>
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">التدريبات</h2>
                <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    1 - قم بإنشاء نموذج يحتوي على <code>http://bienvu.net/script.php</code> كقيمة لخاصية <code>action</code>
                    و <code>GET</code> كقيمة لخاصية <code>method</code>. بعض الحقول تكون إلزامية.
                </p>
                <p className="mt-4 mb-4">
                    بالنسبة لقائمة الخيارات المنسدلة، يجب أن تكون القيم كالتالي: طلباتي، سؤال عن منتج، شكوى، أخرى.
                </p>
                <p className="font-semibold text-red-600">
                    تحذير: لا تقم بتكرار الإطار الأسود!
                </p>
                <Image
                    src="/htmlform.png"
                    alt="نموذج HTML"
                    className="rounded shadow-md"
                    width={760}
                    height={360}
                />

                <p className="text-lg leading-relaxed mb-4">
                    أدناه قائمة الخيارات المنسدلة المتوقعة:
                </p>
                <Image
                    src="/listform.png"
                    alt="نموذج HTML"
                    className="rounded shadow-md"
                    width={360}
                    height={360}
                />

                <p className="mt-4">
                    2 - راقب البيانات المرسلة في الرابط.
                </p>
                <p className="mt-4">
                    3 - استبدل قيمة <code>GET</code> بـ <code>POST</code> لخاصية <code>method</code>. قدم النموذج مرة أخرى وراقب الرابط.
                </p>
            </section>

        </div >
    );
};

export default Page;
