'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Terminal } from "lucide-react";

export default function GitIgnorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 ">
        {/* مقدمة */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ما هو .gitignore؟</CardTitle>
            <CardDescription>استبعاد الملفات غير المرغوب فيها من التحكم في النسخ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed mb-4">
              ملف `.gitignore` يخبر Git أي الملفات (أو الأنماط) يجب أن يتجاهلها. يساعد ذلك في
              الحفاظ على الملفات غير الضرورية، مثل الملفات المؤقتة أو ملفات النظام، من أن يتم
              إضافتها إلى المستودع.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Card className="p-4">
                <h3 className="font-semibold mb-2">لماذا نستخدم .gitignore؟</h3>
                <p className="text-sm text-muted-foreground">
                  من خلال تجاهل الملفات التي ليست ذات صلة بالمشروع (مثل ملفات السجل، والملفات الثنائية المترجمة)، تضمن بقاء المستودع نظيفًا وقابلًا للإدارة.
                </p>
              </Card>
              <Card className="p-4">
                <h3 className="font-semibold mb-2">الملفات المتجاهلة الشائعة</h3>
                <p className="text-sm text-muted-foreground">
                  عادة ما يتم تجاهل الملفات مثل ملفات النظام، وتكوينات بيئات التطوير، وآثار البناء لتجنب تلويث تاريخ النسخ.
                </p>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* مثال أساسي لملف .gitignore */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>هيكل .gitignore الأساسي</CardTitle>
            <CardDescription>إنشاء وتكوين ملف .gitignore</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertDescription>
                مثال على ملف .gitignore بسيط للحالات الشائعة
              </AlertDescription>
            </Alert>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">*.log</code>
                <p className="text-sm text-muted-foreground mt-2">
                  تجاهل جميع ملفات السجل التي يتم إنشاؤها بواسطة النظام
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">node_modules/</code>
                <p className="text-sm text-muted-foreground mt-2">
                  تجاهل مجلد node_modules الذي يحتوي على جميع التبعيات الخاصة بمشروعك
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">*.env</code>
                <p className="text-sm text-muted-foreground mt-2">
                  تجاهل ملفات متغيرات البيئة لتجنب الكشف عن البيانات الحساسة
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* التخصيص */}
        <Card>
          <CardHeader>
            <CardTitle>تخصيص .gitignore</CardTitle>
            <CardDescription>كيفية تعديل قواعد .gitignore الخاصة بك</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <FileText className="h-4 w-4" />
              <AlertDescription>
                تخصيص ملف .gitignore وفقًا لاحتياجات مشروعك
              </AlertDescription>
            </Alert>
            <div className="bg-muted p-4 rounded-lg space-y-4">
              <div>
                <code className="text-sm"># تجاهل الملفات المترجمة في بايثون</code>
                <p className="text-sm text-muted-foreground mt-2">
                  أضف تعليقًا لفهم أفضل وصيانة قواعد .gitignore الخاصة بك
                </p>
              </div>
              <div>
                <code className="text-sm">*.pyc</code>
                <p className="text-sm text-muted-foreground mt-2">
                  تجاهل ملفات بايت كود بايثون، التي ليست ضرورية في المستودع
                </p>
              </div>
              <div>
                <code className="text-sm">.vscode/</code>
                <p className="text-sm text-muted-foreground mt-2">
                  تجاهل إعدادات مساحة العمل الخاصة بـ Visual Studio Code لتجنب إضافة تفضيلاتك الشخصية
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
