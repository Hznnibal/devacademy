import { DatabaseSetup } from './components/DatabaseSetup';
import { DeploymentSteps } from './components/DeploymentSteps';
import { Monitoring } from './components/Monitoring';
import { Platform } from './components/Platform';
import { PreparationSteps } from './components/PreparationSteps';

export default function SymfonyDeploy() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-8">دليل نشر Symfony المجاني</h1>

            <div className="bg-card p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">نظرة عامة</h2>
                <p className="">
                    سيرشدك هذا الدليل خلال نشر تطبيق Symfony الخاص بك مجانًا باستخدام الطبقة المجانية من منصة Platform.sh. سنغطي كل شيء من الإعدادات الأولية إلى مراقبة التطبيق المنشور.
                </p>
            </div>

            <Platform />
            <PreparationSteps />
            <DatabaseSetup />
            <DeploymentSteps />
            <Monitoring />
        </div>
    );
}
