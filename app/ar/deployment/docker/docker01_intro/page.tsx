import { BasicCommands } from './components/BasicCommands';
import { CoreConcepts } from './components/CoreConcepts';
import { DockerfileExplained } from './components/DockerfileExplained';
import { WhatIsDocker } from './components/WhatIsDocker';

export default function Introduction() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold mb-8">مقدمة إلى Docker</h1>

            <div className="bg-card p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-3">البدء مع Docker</h2>
                <p className="">
                    ستساعدك هذه الدليل في فهم Docker من الأساس، بدءًا من المفاهيم الأساسية وحتى الأمثلة العملية. سواء كنت مبتدئًا تمامًا أو ترغب في تجديد معرفتك، ستجد كل ما تحتاجه للبدء مع Docker.
                </p>
            </div>

            <WhatIsDocker />
            <CoreConcepts />
            <BasicCommands />
            <DockerfileExplained />
        </div>
    );
}
