"use client";

import { FileDown } from "lucide-react";
import Image from "next/image";
import { CreateDbUser } from "./createdb-user";

export default function CreateDatabasePage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">إنشاء قاعدة بيانات</h1>
            <div className="mb-4">
                <p className="text-lg text-muted-foreground">
                    تعلم كيفية إنشاء واستيراد قاعدة بيانات باستخدام سكريبتات SQL وملفات CSV.
                </p>
            </div>


            <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-4"> استيراد سكريبت SQL</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">باستخدام DBeaver</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>افتح DBeaver وانقر على "اتصال قاعدة بيانات جديد".</li>
                                <Image
                                    src="/DATABASE/DBeaver-home.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={960}
                                    height={560}
                                />
                                <li>اختر MariaDB.</li>
                                <Image
                                    src="/DATABASE/DBeaver-chose-mariadb.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={960}
                                    height={560}
                                />
                                <li>كلمة المرور هي التي قمت بتعيينها عند تثبيت MariaDB.</li>
                                <Image
                                    src="/DATABASE/DBeaver-PasswordMariaDB.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={560}
                                    height={560}
                                />
                                <li>انقر على "إنهاء". يجب أن ترى الآن هذه الصفحة:</li>
                                <Image
                                    src="/DATABASE/DBeaver-homewithdb.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={960}
                                    height={560}
                                />
                                <li>انقر بزر الماوس الأيمن على "قاعدة البيانات" → "إنشاء قاعدة بيانات جديدة"، وقم بتسميتها `hotel`.</li>
                                <Image
                                    src="/DATABASE/Hotel.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={260}
                                    height={560}
                                />
                                <li>لا تنس تحديث الصفحة لرؤية قاعدة البيانات الخاصة بك أو بعد أي عملية.</li>
                                <Image
                                    src="/DATABASE/DBeaver-RefreshDB.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={960}
                                    height={560}
                                />
                                <li>لقد قمنا للتو بإنشاء قاعدة بيانات فارغة بدون جداول أو أعمدة.</li>
                                <li>
                                    لملء قاعدة البيانات، قم بتنزيل&nbsp;
                                    <a
                                        href="/SCRIPT/hotel.sql"
                                        download="hotel.sql"
                                        className="text-primary hover:underline font-medium text-blue-600"
                                    >
                                        هذا السكريبت
                                    </a>
                                    &nbsp;واتبع الفيديو التعليمي.
                                </li>
                                <video
                                    src="/DATABASE/DBeaver-ImportScriptSQL.mp4"
                                    width={460}
                                    height={560}
                                    controls
                                >
                                    متصفحك لا يدعم علامة الفيديو.
                                </video>

                                <li>لقد قمت الآن بإنشاء الجداول لقاعدة البيانات الخاصة بك؛ الخطوة التالية هي ملؤها بالبيانات.</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">باستخدام سطر الأوامر</h3>
                                <code className="block bg-muted p-4 rounded-lg">
                                    # إنشاء قاعدة البيانات<br />
                                    mysql -u root -p -e &quot;CREATE DATABASE northwind;&quot;<br /><br />
                                    # استيراد السكريبت<br />
                                    mysql -u root -p northwind &lt; path/to/script.sql
                                </code>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-red-600">ملاحظة هامة:</h3>
                                <p className="text-red-600">
                                    لأفضل الممارسات وأسباب الأمان، من الضروري إنشاء مستخدم MySQL مخصص
                                    (على سبيل المثال، "admin") بدلاً من التعامل مع البيانات مباشرة باستخدام المستخدم "root".
                                    ومع ذلك، لتبسيط التعلم، سنستخدم "root" في هذا المثال.
                                </p>
                            </div>

                            <CreateDbUser />
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold mb-2">مثال باستخدام Windows:</h3>
                                <video
                                    src="\DATABASE\CreateSQLAdminUser.mp4"
                                    width={460}
                                    height={560}
                                    controls
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-4"> استيراد بيانات CSV</h2>

                    <div className="space-y-6">
                        <div className="bg-muted p-4 rounded-lg border border-primary">
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <FileDown className="h-5 w-5" />
                                نقاط هامة
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>اتبع ترتيب الاستيراد (الجداول الرئيسية قبل الجداول المرتبطة).</li>
                                <li>تحقق من ترميز الملف (يوصى باستخدام UTF-8).</li>
                                <li>حدد الفواصل المستخدمة (الفاصلة، الفاصلة المنقوطة).</li>
                                <li>تأكد من أن هيكل الجدول موجود قبل الاستيراد.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">الإجراء باستخدام DBeaver</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>انقر بزر الماوس الأيمن على الجدول المستهدف → استيراد البيانات.</li>
                                <Image
                                    src="/DATABASE/ImportDATACSV.png"
                                    alt="لقطة شاشة لاستيراد البيانات باستخدام DBeaver"
                                    className="rounded shadow-md"
                                    width={960}
                                    height={560}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-red-600">
                                        تحذير: يجب اتباع ترتيب معين عند تعبئة الجداول.
                                    </h3>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="text-lg mb-4">
                                            أولاً، قم بتعبئة الجداول بدون المفاتيح الخارجية.
                                        </h4>
                                        <ol className="list-decimal list-inside space-y-1">
                                            <li>الجداول الرئيسية (بدون المفاتيح الخارجية):</li>
                                            <ul className="list-disc list-inside ml-8">
                                                <li>station.csv</li>
                                                <li>client.csv</li>
                                            </ul>
                                            <li>الجداول التي تحتوي على تبعيات:</li>
                                            <ul className="list-disc list-inside ml-8">
                                                <li>hotel.csv</li>
                                                <li>chambre.csv</li>
                                                <li>reservation.csv</li>
                                            </ul>
                                        </ol>
                                        <h4 className="text-lg mb-4">
                                            لعرض المفاتيح الخارجية، تحقق من السكريبت الذي استوردته:
                                        </h4>
                                        <Image
                                            src="/DATABASE/ForeignKeys.png"
                                            alt="لقطة شاشة لعرض المفاتيح الخارجية في DBeaver"
                                            className="rounded shadow-md"
                                            width={960}
                                            height={560}
                                        />
                                    </div>
                                </div>
                                <li>اختر "CSV" كتنسيق المصدر.</li>
                                <li>اختر ملف CSV الخاص بك.</li>
                                <li>قم بتكوين الخيارات التالية:</li>
                                <ul className="list-disc list-inside ml-8 space-y-1">
                                    <li>الترميز (UTF-8)</li>
                                    <li>الفاصل</li>
                                    <li>ربط الأعمدة</li>
                                </ul>
                                <li>معاينة البيانات.</li>
                                <li>ابدأ عملية الاستيراد.</li>
                            </ol>
                        </div>
                    </div>

                </div>

            </div >
        </div >
    );
}