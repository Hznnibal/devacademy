'use client';

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function InstallationGuidePHP() {
    return (
        <div className="px-5 py-8 font-sans">
            <CardHeader>
                <CardTitle>Install PHP</CardTitle>
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
                                    Download PHP from{" "}
                                    <a
                                        href="https://windows.php.net/download"
                                        className="text-primary hover:underline text-blue-600"
                                    >
                                        the official PHP website
                                    </a>.
                                </li>
                                <img
                                    src="/PHP/PHPInstallationWindows1.png"
                                    alt="PHP download screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    Create a folder named <code>PHP</code> in the root of your C drive:{" "}
                                    <code>C:\PHP</code>.
                                </li>
                                <img
                                    src="/PHP/PHPInstallationWindows2createphpfolder.png"
                                    alt="Create PHP folder screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    Extract the contents of the downloaded ZIP file into the folder{" "}
                                    <code>C:\PHP</code>.
                                </li>
                                <img
                                    src="/PHP/UNZIPDownloadandcopypastetophpfolder.png"
                                    alt="Extract ZIP file screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    Rename the file <code>php.ini-development</code> to <code>php.ini</code>.
                                </li>
                                <img
                                    src="/PHP/renamephptophpini.png"
                                    alt="Rename php.ini file screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>Open the <code>php.ini</code> file with a text editor (e.g., Notepad or VS Code).</li>

                                <li>
                                    Enable the required extensions by removing the <code>;</code> at the
                                    beginning of their lines. Enable the following extensions:
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
                                    Locate <code>extension_dir</code> and set its value to:{" "}
                                    <code>extension_dir = "C:\PHP\ext"</code>.
                                </li>
                                <video
                                    src="/PHP/videomodificatephpini.mp4"
                                    width={460}
                                    controls
                                    className="rounded shadow-md"
                                />

                                <li>Open "View advanced system settings".</li>
                                <img
                                    src="/PHP/viewadvancedsystem.png"
                                    alt="Advanced system settings screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    Go to <strong>Advanced</strong> &gt; <strong>Environment Variables</strong>.
                                </li>
                                <img
                                    src="/PHP/environmentvariable.png"
                                    alt="Environment variables screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>Double-click on <strong>PATH</strong>.</li>
                                <img
                                    src="/PHP/doubleclickonpath.png"
                                    alt="Edit PATH variable screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                                <li>
                                    Click on <strong>New</strong> and add <code>C:\PHP</code> to the Windows PATH.
                                </li>
                                <img
                                    src="/PHP/addpath.png"
                                    alt="Add PHP to PATH screenshot"
                                    className="rounded shadow-md"
                                    width={560}
                                />
                                <li>
                                    Open a Command Prompt and verify that PHP is installed by running the command: <code>php -v</code>.
                                </li>
                                <img
                                    src="/PHP/phpversion.png"
                                    alt="PHP version check in Command Prompt"
                                    className="rounded shadow-md"
                                    width={560}
                                />

                            </ol>
                        </div>
                    </TabsContent>


                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <ol className="space-y-2 list-decimal list-inside">
                                <li>Install Homebrew if not already installed: <code className="bg-muted px-2 py-1 rounded">/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</code></li>
                                <li>Install PHP: <code className="bg-muted px-2 py-1 rounded">brew install php</code></li>
                                <li>Verify installation: <code className="bg-muted px-2 py-1 rounded">php -v</code></li>
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
