"use client";

import { Card } from "@/components/ui/card";

export default function VSCodeGuidePage() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-12">دليل: Visual Studio Code</h1>

            <div className="space-y-12">
                {/* القسم: ما هو Visual Studio Code؟ */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">ما هو Visual Studio Code؟</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6">
                        <p className="leading-relaxed">
                            Visual Studio Code (VSCode) هو محرر أكواد مصدر مفتوح تم تطويره بواسطة شركة مايكروسوفت.
                            هو مجاني، مفتوح المصدر، ومتوافق مع العديد من أنظمة التشغيل
                            (ويندوز، macOS، لينكس).
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>يدعم مجموعة واسعة من لغات البرمجة.</li>
                            <li>قابل للتوسيع من خلال مجموعة كبيرة من الإضافات.</li>
                            <li>يحتوي على تكامل مدمج مع Git لإدارة الإصدارات.</li>
                            <li>بيئة خفيفة وسريعة.</li>
                        </ul>
                    </Card>
                </section>

                {/* القسم: كيفية تثبيت Visual Studio Code؟ */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">كيفية تثبيت Visual Studio Code؟</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6">
                        <ol className="list-decimal list-inside space-y-4">
                            <li>
                                <strong>زيارة الموقع الرسمي:</strong>{" "}
                                <a
                                    href="https://code.visualstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    https://code.visualstudio.com/
                                </a>
                            </li>
                            <li>
                                <strong>تحميل النسخة المناسبة:</strong> اختر نظام التشغيل الخاص بك
                                (ويندوز، macOS، أو لينكس) وحمل ملف التثبيت.
                            </li>
                            <li>
                                <strong>تثبيت VSCode:</strong> اتبع الخطوات في معالج التثبيت.
                                يمكنك أيضًا اختيار إضافة VSCode إلى PATH للوصول السريع من خلال سطر الأوامر.
                            </li>
                            <li>
                                <strong>تشغيل VSCode:</strong> بعد التثبيت، افتح Visual Studio Code واستكشف ميزاته.
                            </li>
                        </ol>
                    </Card>
                </section>

                {/* القسم: كيفية استخدام Visual Studio Code؟ */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">كيفية استخدام Visual Studio Code؟</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">الأساسيات:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>فتح مشروع:</strong> انقر <em>ملف &gt; فتح مجلد</em> وحدد
                                المجلد الذي يحتوي على مشروعك.
                            </li>
                            <li>
                                <strong>استخدام الطرفية المدمجة:</strong> الوصول إلى الطرفية المدمجة عبر
                                <em> عرض &gt; طرفية</em> لتشغيل الأوامر دون مغادرة VSCode.
                            </li>
                            <li>
                                <strong>تثبيت الإضافات:</strong> انقر على أيقونة الإضافات في الشريط الجانبي
                                (على اليسار) لتثبيت الإضافات مثل ESLint، Prettier، أو السمات المخصصة.
                            </li>
                            <li>
                                <strong>تكوين Git:</strong> الاتصال بمستودع Git الخاص بك مباشرة في VSCode
                                من خلال تبويب التحكم في المصدر (أيقونة الفرع).
                            </li>
                            <li>
                                <strong>استخدام لوحة الأوامر:</strong> اضغط <code>Ctrl + Shift + P</code>
                                (أو <code>Cmd + Shift + P</code> على macOS) للوصول إلى جميع الأوامر المتاحة.
                            </li>
                        </ul>
                    </Card>
                </section>

                {/* القسم: الروابط المفيدة */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">الروابط المفيدة</h2> <div className="border-b border-gray-300 mb-6" />
                    <Card className="p-6">
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <a
                                    href="https://code.visualstudio.com/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    الوثائق الرسمية
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://marketplace.visualstudio.com/vscode"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    سوق الإضافات
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/results?search_query=visual+studio+code+tutorial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    دروس فيديو على YouTube حول Visual Studio Code
                                </a>
                            </li>
                        </ul>
                    </Card>
                </section>
            </div>
        </div>
    );
}
