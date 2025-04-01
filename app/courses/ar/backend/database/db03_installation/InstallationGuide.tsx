'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function InstallationGuideMariaDB() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>تثبيت MariaDB</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">ويندوز</TabsTrigger>
                        <TabsTrigger value="macos">ماك أو إس</TabsTrigger>
                        <TabsTrigger value="linux">لينكس</TabsTrigger>
                    </TabsList>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <ol className="space-y-2 list-decimal list-inside">
                                <li>قم بتنزيل برنامج التثبيت من <a href="https://mariadb.com/download/" className="text-primary hover:underline text-blue-600">الموقع الرسمي لـ MariaDB</a></li>
                                <Image
                                    src="/DATABASE/Installation-MariaDB.png"
                                    alt="لقطة شاشة لتثبيت MariaDB"
                                    className="rounded shadow-md"
                                    width={560}
                                    height={360}
                                />
                                <li>قم بتشغيل المثبت MSI</li>
                                <li>اتبع معالج التثبيت</li>
                                <li>قم بتعيين كلمة مرور الجذر أثناء التثبيت</li>
                                <Image
                                    src="\DATABASE\Password-MariaDB.png"
                                    alt="لقطة شاشة لإعداد كلمة مرور الجذر لـ MariaDB"
                                    className="rounded shadow-md"
                                    width={560}
                                    height={360}
                                />
                                <li>اكمل التثبيت</li>
                            </ol>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <ol className="space-y-2 list-decimal list-inside">
                                        <li>قم بتثبيت Homebrew إذا لم يكن مثبتًا: <code className="bg-muted px-2 py-1 rounded">/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</code></li>
                                        <li>قم بتثبيت MariaDB: <code className="bg-muted px-2 py-1 rounded">brew install mariadb</code></li>
                                        <li>ابدأ الخدمة: <code className="bg-muted px-2 py-1 rounded">brew services start mariadb</code></li>
                                        <li>قم بتأمين التثبيت: <code className="bg-muted px-2 py-1 rounded">mysql_secure_installation</code></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold">أوبونتو/ديبيان:</h4>
                                    <code className="block bg-muted p-2 rounded">
                                        sudo apt update<br />
                                        sudo apt install mariadb-server<br />
                                        sudo mysql_secure_installation
                                    </code>
                                </div>
                                <div>
                                    <h4 className="font-semibold">فيدورا:</h4>
                                    <code className="block bg-muted p-2 rounded">
                                        sudo dnf install mariadb mariadb-server<br />
                                        sudo systemctl start mariadb<br />
                                        sudo mysql_secure_installation
                                    </code>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}

export function InstallationGuideDBeaver() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>تثبيت DBeaver</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">ويندوز</TabsTrigger>
                        <TabsTrigger value="macos">ماك أو إس</TabsTrigger>
                        <TabsTrigger value="linux">لينكس</TabsTrigger>
                    </TabsList>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">DBeaver</h3>
                                <ol className="space-y-2 list-decimal list-inside">
                                    <li>قم بتنزيل DBeaver من <a href="https://dbeaver.io/download/" className="text-primary hover:underline text-blue-600">الموقع الرسمي</a></li>
                                    <li>قم بتشغيل المثبت</li>
                                    <li>اتبع خطوات التثبيت</li>
                                </ol>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">DBeaver</h3>
                                    <ol className="space-y-2 list-decimal list-inside">
                                        <li>قم بالتثبيت عبر Homebrew: <code className="bg-muted px-2 py-1 rounded">brew install --cask dbeaver-community</code></li>
                                        <li>أو قم بالتنزيل من <a href="https://dbeaver.io/download/" className="text-primary hover:underline">الموقع الرسمي</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">DBeaver</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold">أوبونتو/ديبيان:</h4>
                                        <code className="block bg-muted p-2 rounded">
                                            sudo apt update<br />
                                            sudo apt install dbeaver-ce
                                        </code>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">فيدورا:</h4>
                                        <code className="block bg-muted p-2 rounded">
                                            sudo dnf install dbeaver
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}