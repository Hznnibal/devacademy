import { Card } from "@/components/ui/card";
import { InstallationGuideDBeaver, InstallationGuideMariaDB } from "./InstallationGuide";

export default function IntroductionPage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">التثبيتات</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">MariaDB</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg leading-relaxed mb-4">
                            MariaDB هو نظام إدارة قواعد بيانات علائقية مفتوح المصدر،
                            تم إنشاؤه من قبل المطورين الأصليين لـ MySQL. إنه تفرع من MySQL مصمم
                            لضمان بقائه مجانيًا.
                        </p>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-foreground">الميزات الرئيسية:</h3>
                            <ul className="list-disc list-inside">
                                <li>متوافق مع MySQL</li>
                                <li>أداء محسّن</li>
                                <li>ميزات جديدة منتظمة</li>
                                <li>دعم لمحركات تخزين متعددة</li>
                                <li>أمان معزز</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">DBeaver</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p className="text-lg leading-relaxed mb-4">
                            DBeaver هو أداة مجانية ومفتوحة المصدر لإدارة قواعد البيانات العامة.
                            يتيح لك إدارة أنواع مختلفة من قواعد البيانات من خلال واجهة رسومية سهلة الاستخدام.
                        </p>
                        <div className="space-y-2">
                            <h3 className="font-semibold text-foreground">الميزات الرئيسية:</h3>
                            <ul className="list-disc list-inside">
                                <li>دعم لعدة قواعد بيانات</li>
                                <li>محرر SQL مع تمييز بناء الجملة</li>
                                <li>تصور البيانات وتحريرها</li>
                                <li>استيراد/تصدير البيانات</li>
                                <li>إنشاء مخططات ER</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div >

            <InstallationGuideMariaDB />
            <InstallationGuideDBeaver />
        </div >
    )
}