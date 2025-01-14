'use client';

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function InstallationGuidePHP() {
    return (
        <div className="px-5 py-8 font-sans">
            <CardHeader>
                <CardTitle>تثبيت PHP</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">Windows</TabsTrigger>
                        <TabsTrigger value="macos">macOS</TabsTrigger>
                        <TabsTrigger value="linux">Linux</TabsTrigger>
                    </TabsList>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <ol className="space-y-2 list-decimal list-inside">
                                <li>
                                    قم بتحميل PHP من{" "}
                                    <a
                                        href="https://windows.php.net/download"
                                        className="text-primary hover:underline text-blue-600"
                                    >
                                        الموقع الرسمي لـ PHP
                                    </a>.
                                </li>
                                <img
                                    src="/PHP/PHPInstallationWindows1.png"
                                    alt="لقطة شاشة تحميل PHP"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    أنشئ مجلدًا باسم <code>PHP</code> في جذر محرك الأقراص C:{" "}
                                    <code>C:\PHP</code>.
                                </li>
                                <img
                                    src="/PHP/PHPInstallationWindows2createphpfolder.png"
                                    alt="لقطة شاشة لإنشاء مجلد PHP"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    قم باستخراج محتويات ملف ZIP الذي قمت بتحميله إلى المجلد{" "}
                                    <code>C:\PHP</code>.
                                </li>
                                <img
                                    src="/PHP/UNZIPDownloadandcopypastetophpfolder.png"
                                    alt="لقطة شاشة لاستخراج ملف ZIP"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    قم بإعادة تسمية الملف <code>php.ini-development</code> إلى <code>php.ini</code>.
                                </li>
                                <img
                                    src="/PHP/renamephptophpini.png"
                                    alt="لقطة شاشة لإعادة تسمية ملف php.ini"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>افتح ملف <code>php.ini</code> باستخدام محرر نصوص (مثل Notepad أو VS Code).</li>

                                <li>
                                    قم بتمكين الامتدادات المطلوبة عن طريق إزالة <code>;</code> من بداية الأسطر الخاصة بها. قم بتمكين الامتدادات التالية:
                                </li>
                                <pre className="bg-black text-blue-50 p-2 rounded">
                                    {`extension=mysqli
extension=curl
extension=mbstring
extension=gd
extension=intl
extension=openssl`}
                                </pre>

                                <li>
                                    حدد <code>extension_dir</code> وقم بتعيين قيمته إلى:{" "}
                                    <code>extension_dir = "C:\PHP\ext"</code>.
                                </li>
                                <video
                                    src="/PHP/videomodificatephpini.mp4"
                                    width={460}
                                    controls
                                    className="rounded shadow-md"
                                />

                                <li>افتح "عرض إعدادات النظام المتقدمة".</li>
                                <img
                                    src="/PHP/viewadvancedsystem.png"
                                    alt="لقطة شاشة لإعدادات النظام المتقدمة"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    اذهب إلى <strong>المتقدم</strong> &gt; <strong>متغيرات البيئة</strong>.
                                </li>
                                <img
                                    src="/PHP/environmentvariable.png"
                                    alt="لقطة شاشة لمتغيرات البيئة"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>انقر مرتين على <strong>PATH</strong>.</li>
                                <img
                                    src="/PHP/doubleclickonpath.png"
                                    alt="لقطة شاشة لتحرير متغير PATH"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    انقر على <strong>جديد</strong> وأضف <code>C:\PHP</code> إلى PATH في ويندوز.
                                </li>
                                <img
                                    src="/PHP/addpath.png"
                                    alt="لقطة شاشة لإضافة PHP إلى PATH"
                                    className="rounded shadow-md"
                                    width={560}
                                />
                                <li>
                                    افتح موجه الأوامر وتحقق من تثبيت PHP عن طريق تشغيل الأمر: <code>php -v</code>.
                                </li>
                                <img
                                    src="/PHP/phpversion.png"
                                    alt="التحقق من إصدار PHP في موجه الأوامر"
                                    className="rounded shadow-md"
                                    width={560}
                                />
                            </ol>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <ol className="space-y-2 list-decimal list-inside">
                                <li>قم بتثبيت Homebrew إذا لم يكن مثبتًا بالفعل: <code className="bg-muted px-2 py-1 rounded">/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</code></li>
                                <li>قم بتثبيت PHP: <code className="bg-muted px-2 py-1 rounded">brew install php</code></li>
                                <li>تحقق من التثبيت: <code className="bg-muted px-2 py-1 rounded">php -v</code></li>
                            </ol>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <h4 className="font-semibold">Ubuntu/Debian:</h4>
                                <code className="block bg-muted p-2 rounded">
                                    sudo apt update<br />
                                    sudo apt install php8.4 php8.4-xml php8.4-zip php8.4-intl php8.4-mbstring php8.4-curl php8.4-mysql<br />
                                    php -v
                                </code>
                                <h4 className="font-semibold">Fedora:</h4>
                                <code className="block bg-muted p-2 rounded">
                                    sudo dnf install php<br />
                                    php -v
                                </code>
                            </div>
                        </div>
                    </TabsContent>

                </Tabs>
            </CardContent>
        </div>
    );
}

export default InstallationGuidePHP;
