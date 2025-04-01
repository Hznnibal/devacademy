'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CreateDbUser() {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>إنشاء مستخدم قاعدة بيانات</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="windows" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="windows">Windows</TabsTrigger>
                        <TabsTrigger value="macos">MacOS</TabsTrigger>
                        <TabsTrigger value="linux">Linux</TabsTrigger>
                    </TabsList>

                    <p className="text-lg leading-relaxed mb-4">قم بتنفيذ الأوامر التالية في الطرفية:</p>

                    <TabsContent value="windows">
                        <div className="space-y-4">
                            <pre className="bg-muted p-4 rounded-lg whitespace-pre-wrap">
                                {`cd C:\\Program Files\\MariaDB 11.6\\bin (تم تحميل MariaDB في Program Files بالإصدار 11.6، قم بالتغيير إذا لزم الأمر)
mysql -u root -p
CREATE USER admin@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO admin@'localhost';
FLUSH PRIVILEGES;
EXIT;`}
                            </pre>
                        </div>
                    </TabsContent>

                    <TabsContent value="macos">
                        <div className="space-y-4">
                            <pre className="bg-muted p-4 rounded-lg whitespace-pre-wrap">
                                {`sudo mysql
CREATE USER admin@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO admin@'localhost';
FLUSH PRIVILEGES;
EXIT;`}
                            </pre>
                        </div>
                    </TabsContent>

                    <TabsContent value="linux">
                        <div className="space-y-4">
                            <pre className="bg-muted p-4 rounded-lg whitespace-pre-wrap">
                                {`sudo mysql
CREATE USER admin@'localhost' IDENTIFIED BY '123456';
GRANT ALL PRIVILEGES ON *.* TO admin@'localhost';
FLUSH PRIVILEGES;
EXIT;`}
                            </pre>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
