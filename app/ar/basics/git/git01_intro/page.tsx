'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Terminal } from "lucide-react";
import { GitHeader } from "./header";
import { InstallationGuide } from "./InstallationGuide";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 ">
        <GitHeader />

        {/* المقدمة */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ما هو Git؟</CardTitle>
            <CardDescription>فهم أنظمة إدارة الإصدارات</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed mb-4">
              Git هو نظام إدارة إصدارات موزع يساعدك على تتبع التغييرات في الكود الخاص بك.
              يحافظ على تاريخ زمني لجميع التعديلات التي تم إجراؤها على مشروعك، ويخزنها
              في ما يسمى بالمستودع.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">المستودع المحلي</h3>
                <p className="text-sm text-muted-foreground">
                  مستودع يتم تخزينه على جهازك المحلي، يحتوي على التاريخ الكامل ومعلومات تتبع الإصدارات لمشروعك.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-2">المستودع البعيد</h3>
                <p className="text-sm text-muted-foreground">
                  مستودع يتم استضافته على خادم أو خدمة سحابية مثل GitHub، مما يتيح التعاون والنسخ الاحتياطي للكود الخاص بك.
                </p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* دليل التثبيت */}
        <InstallationGuide />

        {/* أوامر Git الأساسية */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>أوامر Git الأساسية</CardTitle>
            <CardDescription>الأوامر الأساسية للبدء</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertDescription>
                أوامر Git الشائعة التي ستستخدمها بشكل متكرر
              </AlertDescription>
            </Alert>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git init</code>
                <p className="text-sm text-muted-foreground mt-2">
                  تهيئة مستودع Git جديد في الدليل الحالي
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git clone [url]</code>
                <p className="text-sm text-muted-foreground mt-2">
                  نسخ مستودع من GitHub إلى جهازك المحلي
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git add [file]</code>
                <p className="text-sm text-muted-foreground mt-2">
                  إضافة الملفات إلى منطقة التهيئة
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">git commit -m "message"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  حفظ التغييرات مع رسالة وصفية
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* الإعدادات */}
        <Card>
          <CardHeader>
            <CardTitle>إعداد Git</CardTitle>
            <CardDescription>إعداد هويتك في Git</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Settings className="h-4 w-4" />
              <AlertDescription>
                قم بإعداد اسم المستخدم والبريد الإلكتروني في Git
              </AlertDescription>
            </Alert>
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <div>
                <code className="text-sm">git config --global user.name "اسمك"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  قم بتعيين اسم المستخدم للتعريف أثناء الحفظ
                </p>
              </div>
              <div>
                <code className="text-sm">git config --global user.email "your.email@example.com"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  قم بتعيين بريدك الإلكتروني للتعريف أثناء الحفظ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
