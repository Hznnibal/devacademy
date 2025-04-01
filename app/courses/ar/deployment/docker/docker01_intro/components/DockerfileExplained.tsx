import { CodeBlock } from "@/components/CodeBlock/code-block";

export function DockerfileExplained() {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">فهم Dockerfile</h2>
            <p className=" mb-4">
                Dockerfile هو ملف نصي يحتوي على تعليمات لبناء صورة Docker. إليك مثال بسيط:
            </p>
            <div className="bg-card p-6 rounded-lg">
                <CodeBlock code={`# استخدام Node.js كصورة أساسية
  FROM node:18
  
  # تعيين دليل العمل
  WORKDIR /app
  
  # نسخ ملفات الحزمة
  COPY package*.json ./
  
  # تثبيت الاعتمادات
  RUN npm install
  
  # نسخ ملفات التطبيق
  COPY . .
  
  # فتح المنفذ 3000
  EXPOSE 3000
  
  # بدء التطبيق
  CMD ["npm", "start"]`} />
                <div className="space-y-2 text-sm ">
                    <p><strong>FROM:</strong> يحدد الصورة الأساسية التي سيتم استخدامها</p>
                    <p><strong>WORKDIR:</strong> يحدد دليل العمل داخل الحاوية</p>
                    <p><strong>COPY:</strong> ينسخ الملفات من جهاز الكمبيوتر إلى الحاوية</p>
                    <p><strong>RUN:</strong> ينفذ الأوامر أثناء بناء الصورة</p>
                    <p><strong>EXPOSE:</strong> يوثق المنافذ التي ستستخدمها الحاوية</p>
                    <p><strong>CMD:</strong> يحدد الأمر الذي سيتم تشغيله عند بدء الحاوية</p>
                </div>
            </div>
        </section>
    );
}
