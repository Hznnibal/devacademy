import { Card } from "@/components/ui/card";
import { Database, FileSpreadsheet, GitBranch, KeyRound, Scale, Search, Server, Settings, Shield, Table } from "lucide-react";

export default function IntroductionPage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center ">
                Introduction to Databases
            </h1>

            <div className="mb-8">
                <p className="text-xl  text-center max-w-3xl mx-auto">
                    Understanding the fundamentals of relational databases and their crucial role
                    in modern web development and data management systems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* <div className="p-8 bg-gradient-to-br  rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"> */}
                <Card className="p-6">

                    <Database className="h-12 w-12 mb-6 " />
                    <h2 className="text-2xl font-semibold mb-4 ">What is a Database?</h2>
                    <p className="">
                        A database is a structured collection of data organized for efficient access,
                        management, and updates. It serves as the backbone of applications,
                        enabling systematic storage and retrieval of information while maintaining
                        data integrity and relationships.
                    </p>
                    {/* </div> */}
                </Card>

                <Card className="p-6">
                    <Server className="h-12 w-12 mb-6 " />
                    <h2 className="text-2xl font-semibold mb-4 ">Why Use a Database?</h2>
                    <p className="">
                        Databases provide crucial benefits for modern applications: secure data storage,
                        fast data retrieval, efficient relationship management, data integrity maintenance,
                        concurrent access handling, and scalability for growing applications.
                    </p>
                </Card>
            </div >

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-8 ">Database Types</h2>
                <div className="space-y-6">
                    <Card className="p-6">

                        <h3 className="text-2xl font-semibold mb-4 ">Relational Databases (SQL)</h3>
                        <p className=" mb-4">
                            The most widely used database type, organizing data in tables with defined relationships.
                            Perfect for structured data and complex queries.
                        </p>
                        <div className="text-sm ">
                            Popular examples: PostgreSQL, MySQL, SQLite, Oracle, SQL Server
                        </div>
                    </Card>

                    <Card className="p-6">

                        <h3 className="text-2xl font-semibold mb-4 ">NoSQL Databases</h3>
                        <p className=" mb-4">
                            Designed for unstructured and semi-structured data, offering superior flexibility
                            and horizontal scalability. Ideal for big data and real-time applications.
                        </p>
                        <div className="text-sm ">
                            Popular examples: MongoDB, Redis, Cassandra, CouchDB, Firebase
                        </div>
                    </Card>
                </div>
            </div>

            <Card className="p-6">

                <h2 className="text-2xl font-semibold mb-8 ">Core Database Concepts</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        {
                            icon: Table,
                            title: "Tables",
                            description: "Structured data organization in rows and columns"
                        },
                        {
                            icon: Database,
                            title: "Data Types",
                            description: "Define the nature and constraints of stored data"
                        },
                        {
                            icon: KeyRound,
                            title: "Primary Keys",
                            description: "Unique identifiers for each record"
                        },
                        {
                            icon: GitBranch,
                            title: "Foreign Keys",
                            description: "Create relationships between different tables"
                        },
                        {
                            icon: FileSpreadsheet,
                            title: "Indexes",
                            description: "Optimize query performance and data retrieval"
                        },
                        {
                            icon: Shield,
                            title: "Security",
                            description: "Access control and data protection"
                        },
                        {
                            icon: Search,
                            title: "Queries",
                            description: "Commands to retrieve and manipulate data"
                        },
                        {
                            icon: Settings,
                            title: "Transactions",
                            description: "Ensure data integrity and consistency"
                        },
                        {
                            icon: Scale,
                            title: "Normalization",
                            description: "Optimize database structure and reduce redundancy"
                        }
                    ].map((item, index) => (
                        <div key={index} className="p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <item.icon className="h-8 w-8 mb-3" />
                            <h3 className="font-semibold mb-2 ">{item.title}</h3>
                            <p className="text-sm ">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div >
    );
}