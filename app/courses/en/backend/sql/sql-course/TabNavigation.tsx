"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, GitMerge, Hash, KeyRound, Search, Table } from "lucide-react";

export function TabNavigation() {
  return (
    <TabsList className="grid grid-cols-3 lg:grid-cols-6 h-auto gap-4">
      <TabsTrigger value="table" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Table className="h-6 w-6" />
        Table
      </TabsTrigger>
      <TabsTrigger value="rows" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Database className="h-6 w-6" />
        Rows & Columns
      </TabsTrigger>
      <TabsTrigger value="types" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <KeyRound className="h-6 w-6" />
        Data Types
      </TabsTrigger>
      <TabsTrigger value="primary" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Hash className="h-6 w-6" />
        Primary Key
      </TabsTrigger>
      <TabsTrigger value="foreign" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <GitMerge className="h-6 w-6" />
        Foreign Key
      </TabsTrigger>
      <TabsTrigger value="index" className="bg-card flex flex-col gap-2 h-20 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
        <Search className="h-6 w-6" />
        Index
      </TabsTrigger>
    </TabsList>
  );
}