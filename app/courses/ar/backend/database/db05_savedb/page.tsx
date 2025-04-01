"use client";

import { CodeExample } from "@/app/courses/en/backend/sql/sql-course/shared/CodeExample";

export default function CreateDatabasePage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">ضمان النسخ الاحتياطي</h1>
            <div className="mb-4">
                <p className="text-lg text-muted-foreground">
                    أنت مسؤول عمومًا عن بيئة الاختبار الخاصة بك، لذا يجب أن تكون قادرًا على:
                </p>
                <ol className="list-disc ml-4 mt-2">
                    <li>النسخ الاحتياطي المنتظم لقاعدة البيانات الخاصة بالاختبار،</li>
                    <li>ضمان أن النسخة الاحتياطية صالحة للاستعادة عند الحاجة.</li>
                </ol>
            </div>

            <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-4"> النسخ الاحتياطي والاستعادة في MySQL / MariaDB</h2>
                    <div className="bg-card p-6 rounded-lg border">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold mb-4">النسخ الاحتياطي</h3>
                            <ol className="ml-4 list-decimal list-inside space-y-2">
                                <li>افتح نافذة الأوامر (Terminal).</li>
                                <li>لإنشاء نسخة احتياطية (أو "تفريغ")، استخدم الأمر التالي:</li>
                                <CodeExample
                                    title="مثال:"
                                    code='mysqldump --user=xxx --password=xxx hotel > backup_hotel.sql'
                                />
                                <li>بعد السهم الأيمن ({`>`})، حدد اسم ملف النسخة الاحتياطية.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="bg-card mt-4 p-6 rounded-lg border">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold mb-4">الاستعادة</h3>
                            <p className="text-lg leading-relaxed mb-4">لاستعادة النسخة، استخدم الأمر `mysql` (وليس `mysqldump`).</p>
                            <ol className="list-decimal list-inside space-y-2 ml-4">
                                <li>كإجراء احترازي، استعد قاعدة بيانات `hotel` تحت اسم مختلف.</li>
                                <li>لإجراء الاستعادة، استخدم الأمر التالي:</li>
                                <CodeExample
                                    title="نفذ الأمر التالي:"
                                    code='cat backup_hotel.sql | mysql --user=xxx --password=xxx new_hotel'
                                />
                                <p className="text-lg leading-relaxed mb-4">
                                    في هذا المثال، يتم توجيه سكربت `backup_hotel.sql` إلى أمر `mysql`.
                                    يتم تنفيذ جميع الأوامر الموجودة في ملف `backup_hotel.sql`...
                                    يتم استخدام قاعدة البيانات `new_hotel` كهدف للاستعادة، لذا يجب أن تكون موجودة مسبقًا.
                                </p>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
