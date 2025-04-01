"use client";

import { TabNavigation } from "@/app/courses/en/backend/sql/sql-course/TabNavigation";
import { DataTypesSection } from "@/app/courses/en/backend/sql/sql-course/sections/DataTypesSection";
import { ForeignKeySection } from "@/app/courses/en/backend/sql/sql-course/sections/ForeignKeySection";
import { IndexSection } from "@/app/courses/en/backend/sql/sql-course/sections/IndexSection";
import { PrimaryKeySection } from "@/app/courses/en/backend/sql/sql-course/sections/PrimaryKeySection";
import { RowsColumnsSection } from "@/app/courses/en/backend/sql/sql-course/sections/RowsColumnsSection";
import { TableSection } from "@/app/courses/en/backend/sql/sql-course/sections/TableSection";
import { Tabs, TabsContent } from "@/components/ui/tabs";

export default function Home() {
    return (
        <div className="px-5 py-8 font-sans">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-semibold mb-6 text-center">Understanding SQL Databases</h1>
                <p className="text-muted-foreground text-lg">
                    An Interactive Guide to Database Fundamentals
                </p>
            </div>

            <Tabs defaultValue="table" className="space-y-8">
                <TabNavigation />
                <TabsContent value="table">
                    <TableSection />
                </TabsContent>
                <TabsContent value="rows">
                    <RowsColumnsSection />
                </TabsContent>
                <TabsContent value="types">
                    <DataTypesSection />
                </TabsContent>
                <TabsContent value="primary">
                    <PrimaryKeySection />
                </TabsContent>
                <TabsContent value="foreign">
                    <ForeignKeySection />
                </TabsContent>
                <TabsContent value="index">
                    <IndexSection />
                </TabsContent>
            </Tabs>
        </div>
    );
}