"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RoleCardProps {
  title: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  icon: React.ReactNode;
}

export function RoleCard({ title, description, technologies, responsibilities, icon }: RoleCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
            {icon}
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>

        <div>
          <h4 className="font-semibold mb-2">التقنيات الرئيسية:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">المسؤوليات الرئيسية:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
