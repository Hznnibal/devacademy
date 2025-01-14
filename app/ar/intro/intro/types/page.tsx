"use client";

import { Code, Database, Monitor } from "lucide-react";
import { RoleCard } from "./role-card";

export default function DeveloperTypesPage() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-16">
                فهم أدوار مطوري الويب
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">
                <RoleCard
                    title="مطور الواجهة الأمامية"
                    description="متخصص في إنشاء واجهة المستخدم وتجربة المستخدم للمواقع وتطبيقات الويب."
                    technologies={[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Vue",
                        "Angular",
                        "Tailwind",
                        "SASS",
                    ]}
                    responsibilities={[
                        "بناء واجهات المستخدم المتجاوبة",
                        "تنفيذ التصاميم المرئية",
                        "تحسين أداء الموقع",
                        "ضمان التوافق عبر المتصفحات",
                        "إنشاء ميزات تفاعلية",
                    ]}
                    icon={<Monitor className="w-6 h-6" />}
                />

                <RoleCard
                    title="مطور الواجهة الخلفية"
                    description="يركز على منطق الخادم، وقواعد البيانات، وهندسة التطبيقات."
                    technologies={[
                        "Node.js",
                        "Python",
                        "Java",
                        "SQL",
                        "MongoDB",
                        "Redis",
                        "Docker",
                        "APIs",
                    ]}
                    responsibilities={[
                        "تصميم مخططات قواعد البيانات",
                        "بناء منطق الخادم",
                        "تنفيذ تدابير الأمان",
                        "تحسين أداء الخادم",
                        "إدارة تكاملات APIs",
                    ]}
                    icon={<Database className="w-6 h-6" />}
                />

                <RoleCard
                    title="مطور كامل الواجهة"
                    description="ماهر في كل من تطوير الواجهة الأمامية والخلفية، قادر على بناء تطبيقات ويب كاملة."
                    technologies={[
                        "كل الواجهة الأمامية",
                        "كل الواجهة الخلفية",
                        "DevOps",
                        "Git",
                        "الخدمات السحابية",
                        "الاختبار",
                        "الأمان",
                    ]}
                    responsibilities={[
                        "تطوير حلول من البداية إلى النهاية",
                        "التنسيق بين الطبقات",
                        "تصميم هندسة النظام",
                        "التعامل مع عمليات النشر",
                        "تنفيذ كامل للمشروع",
                    ]}
                    icon={<Code className="w-6 h-6" />}
                />
            </div>

            <div className="mt-16 bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">تصور تكنولوجيا التطوير</h2> <div className="border-b border-gray-300 mb-6" />
                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-primary/10 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">طبقة الواجهة الأمامية</h3>
                            <div className="space-y-2 text-sm">
                                <p>• واجهة المستخدم (UI)</p>
                                <p>• منطق الجهة العميلة</p>
                                <p>• التصميم المتجاوب</p>
                                <p>• تجربة المستخدم (UX)</p>
                                <p>• التفاعلات عبر المتصفح</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">طبقة الواجهة الخلفية</h3>
                            <div className="space-y-2 text-sm">
                                <p>• منطق الخادم</p>
                                <p>• إدارة قواعد البيانات</p>
                                <p>• تطوير APIs</p>
                                <p>• المصادقة</p>
                                <p>• منطق الأعمال</p>
                            </div>
                        </div>

                        <div className="bg-primary/10 p-6 rounded-lg">
                            <h3 className="font-semibold mb-4">تغطية كامل الواجهة</h3>
                            <div className="space-y-2 text-sm">
                                <p>• الهيكلية الكاملة</p>
                                <p>• التكامل</p>
                                <p>• النشر</p>
                                <p>• الصيانة</p>
                                <p>• التحسين</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
