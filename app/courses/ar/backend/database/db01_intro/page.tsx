import { Card } from "@/components/ui/card";
import { Database, FileSpreadsheet, GitBranch, KeyRound, Scale, Search, Server, Settings, Shield, Table } from "lucide-react";

export default function IntroductionPage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center ">
                مقدمة في قواعد البيانات
            </h1>

            <div className="mb-8">
                <p className="text-xl  text-center max-w-3xl mx-auto">
                    فهم أساسيات قواعد البيانات العلائقية ودورها الحيوي في تطوير الويب الحديث وأنظمة إدارة البيانات.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="p-6">

                    <Database className="h-12 w-12 mb-6 " />
                    <h2 className="text-2xl font-semibold mb-4 ">ما هي قاعدة البيانات؟</h2>
                    <p className="">
                        قاعدة البيانات هي مجموعة منظمة من البيانات يتم تنظيمها للوصول الفعّال والإدارة والتحديث.
                        إنها بمثابة العمود الفقري للتطبيقات، حيث تتيح التخزين المنهجي واسترجاع المعلومات مع الحفاظ
                        على سلامة البيانات والعلاقات بينها.
                    </p>
                </Card>

                <Card className="p-6">
                    <Server className="h-12 w-12 mb-6 " />
                    <h2 className="text-2xl font-semibold mb-4 ">لماذا نستخدم قاعدة البيانات؟</h2>
                    <p className="">
                        توفر قواعد البيانات فوائد حيوية للتطبيقات الحديثة: تخزين آمن للبيانات، استرجاع سريع،
                        إدارة فعالة للعلاقات، الحفاظ على سلامة البيانات، التعامل مع الوصول المتزامن، والتوسع لتطبيقات أكبر.
                    </p>
                </Card>
            </div >

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-8 ">أنواع قواعد البيانات</h2>
                <div className="space-y-6">
                    <Card className="p-6">

                        <h3 className="text-2xl font-semibold mb-4 ">قواعد البيانات العلائقية (SQL)</h3>
                        <p className=" mb-4">
                            النوع الأكثر استخدامًا، ينظم البيانات في جداول ذات علاقات محددة.
                            مثالي للبيانات المنظمة والاستعلامات المعقدة.
                        </p>
                        <div className="text-sm ">
                            أمثلة شائعة: PostgreSQL, MySQL, SQLite, Oracle, SQL Server
                        </div>
                    </Card>

                    <Card className="p-6">

                        <h3 className="text-2xl font-semibold mb-4 ">قواعد بيانات NoSQL</h3>
                        <p className=" mb-4">
                            مصممة للبيانات غير المنظمة وشبه المنظمة، وتوفر مرونة فائقة
                            وقدرة على التوسع الأفقي. مثالية للبيانات الضخمة والتطبيقات في الوقت الفعلي.
                        </p>
                        <div className="text-sm ">
                            أمثلة شائعة: MongoDB, Redis, Cassandra, CouchDB, Firebase
                        </div>
                    </Card>
                </div>
            </div>

            <Card className="p-6">

                <h2 className="text-2xl font-semibold mb-8 ">المفاهيم الأساسية لقواعد البيانات</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        {
                            icon: Table,
                            title: "الجداول",
                            description: "تنظيم البيانات بشكل منظم في صفوف وأعمدة"
                        },
                        {
                            icon: Database,
                            title: "أنواع البيانات",
                            description: "تحديد طبيعة وقيود البيانات المخزنة"
                        },
                        {
                            icon: KeyRound,
                            title: "المفاتيح الأساسية",
                            description: "معرّفات فريدة لكل سجل"
                        },
                        {
                            icon: GitBranch,
                            title: "المفاتيح الخارجية",
                            description: "إنشاء علاقات بين الجداول المختلفة"
                        },
                        {
                            icon: FileSpreadsheet,
                            title: "الفهارس",
                            description: "تحسين أداء الاستعلامات واسترجاع البيانات"
                        },
                        {
                            icon: Shield,
                            title: "الأمان",
                            description: "التحكم في الوصول وحماية البيانات"
                        },
                        {
                            icon: Search,
                            title: "الاستعلامات",
                            description: "أوامر لاسترجاع البيانات ومعالجتها"
                        },
                        {
                            icon: Settings,
                            title: "المعاملات",
                            description: "ضمان سلامة البيانات وتناسقها"
                        },
                        {
                            icon: Scale,
                            title: "التطبيع",
                            description: "تحسين بنية قاعدة البيانات وتقليل التكرار"
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <item.icon className="h-8 w-8 mb-3" />
                            <h3 className="font-semibold mb-2 ">{item.title}</h3>
                            <p className="text-sm ">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div >
    );
}
