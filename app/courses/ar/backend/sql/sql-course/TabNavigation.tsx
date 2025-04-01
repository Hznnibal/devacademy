"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, GitMerge, Hash, KeyRound, Search, Table } from "lucide-react";

export function TabNavigation() {
  return (
    <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-4">
      <TabsTrigger value="table" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Table className="h-6 w-6" />
        جدول
      </TabsTrigger>
      <TabsTrigger value="rows" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Database className="h-6 w-6" />
        الصفوف والأعمدة
      </TabsTrigger>
      <TabsTrigger value="types" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <KeyRound className="h-6 w-6" />
        أنواع البيانات
      </TabsTrigger>
      <TabsTrigger value="primary" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Hash className="h-6 w-6" />
        المفتاح الأساسي
      </TabsTrigger>
      <TabsTrigger value="foreign" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <GitMerge className="h-6 w-6" />
        المفتاح الخارجي
      </TabsTrigger>
      <TabsTrigger value="index" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Search className="h-6 w-6" />
        الفهرس
      </TabsTrigger>
    </TabsList>
  );
}
