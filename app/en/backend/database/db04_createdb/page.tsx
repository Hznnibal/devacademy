"use client";

import { FileDown } from "lucide-react";
import { CreateDbUser } from "./createdb-user";

export default function CreateDatabasePage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Create a Database</h1>
            <div className="mb-4">
                <p className="text-lg text-muted-foreground">
                    Learn how to create and import a database using SQL scripts and CSV files.
                </p>
            </div>


            <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-4"> Import an SQL Script</h2>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">Using DBeaver</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Open DBeaver and click on "New Database Connection."</li>
                                <img
                                    src="/DATABASE/DBeaver-home.png"
                                    alt="Screenshot of MariaDB installation"
                                    className="rounded shadow-md"
                                    width={960}
                                />
                                <li>Select MariaDB.</li>
                                <img
                                    src="/DATABASE/DBeaver-chose-mariadb.png"
                                    alt="Screenshot of MariaDB installation"
                                    className="rounded shadow-md"
                                    width={960}
                                />
                                <li>The password is the one you set when installing MariaDB.</li>
                                <img
                                    src="/DATABASE/DBeaver-PasswordMariaDB.png"
                                    alt="Screenshot of MariaDB installation"
                                    className="rounded shadow-md"
                                    width={560}
                                />
                                <li>Click "Finish." You should now see this page:</li>
                                <img
                                    src="/DATABASE/DBeaver-homewithdb.png"
                                    alt="Screenshot of MariaDB installation"
                                    className="rounded shadow-md"
                                    width={960}
                                />
                                <li>Right-click on "Database" → "Create New Database," and name it `hotel`.</li>
                                <img
                                    src="/DATABASE/Hotel.png"
                                    alt="Screenshot of MariaDB installation"
                                    className="rounded shadow-md"
                                    width={260}
                                />
                                <li>Don't forget to refresh to see your database or after any operation.</li>
                                <img
                                    src="/DATABASE/DBeaver-RefreshDB.png"
                                    alt="Screenshot of MariaDB installation"
                                    className="rounded shadow-md"
                                    width={960}
                                />
                                <li>We have just created an empty database with no tables or columns.</li>
                                <li>
                                    To populate the database, download&nbsp;
                                    <a
                                        href="/SCRIPT/hotel.sql"
                                        download="hotel.sql"
                                        className="text-primary hover:underline font-medium text-blue-600"
                                    >
                                        this script
                                    </a>
                                    &nbsp;and follow the video tutorial.
                                </li>
                                <video
                                    src="/DATABASE/DBeaver-ImportScriptSQL.mp4"
                                    width={460}
                                    controls
                                >
                                    Your browser does not support the video tag.
                                </video>

                                <li>You have now created the tables for your database; the next step is to populate them with data.</li>
                            </ol>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">Using the Command Line</h3>
                                <code className="block bg-muted p-4 rounded-lg">
                                    # Create the database<br />
                                    mysql -u root -p -e &quot;CREATE DATABASE northwind;&quot;<br /><br />
                                    # Import the script<br />
                                    mysql -u root -p northwind &lt; path/to/script.sql
                                </code>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-red-600">Important Note:</h3>
                                <p className="text-red-600">
                                    For best practices and security reasons, it is essential to create a dedicated MySQL user
                                    (e.g., "admin") instead of manipulating data directly with the "root" user.
                                    However, to simplify learning, we will use "root" in this example.
                                </p>
                            </div>

                            <CreateDbUser />
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold mb-2">Example with Windows:</h3>
                                <video
                                    src="\DATABASE\CreateSQLAdminUser.mp4"
                                    width={460}
                                    controls
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="p-6 bg-card rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-4"> Import CSV data</h2>

                    <div className="space-y-6">
                        <div className="bg-muted p-4 rounded-lg border border-primary">
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <FileDown className="h-5 w-5" />
                                Important Points
                            </h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Follow the import order (main tables before related tables).</li>
                                <li>Check the file encoding (UTF-8 is recommended).</li>
                                <li>Identify the delimiters used (comma, semicolon).</li>
                                <li>Ensure the table structure exists before the import.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Procedure with DBeaver</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Right-click on the target table → Import Data.</li>
                                <img
                                    src="/DATABASE/ImportDATACSV.png"
                                    alt="Screenshot of data import using DBeaver"
                                    className="rounded shadow-md"
                                    width={960}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold text-red-600">
                                        WARNING: A specific order must be followed when populating tables.
                                    </h3>
                                    <div className="bg-muted p-4 rounded-lg">
                                        <h4 className="text-lg mb-4">
                                            First, populate tables without foreign keys.
                                        </h4>
                                        <ol className="list-decimal list-inside space-y-1">
                                            <li>Main tables (without foreign keys):</li>
                                            <ul className="list-disc list-inside ml-8">
                                                <li>station.csv</li>
                                                <li>client.csv</li>
                                            </ul>
                                            <li>Tables with dependencies:</li>
                                            <ul className="list-disc list-inside ml-8">
                                                <li>hotel.csv</li>
                                                <li>chambre.csv</li>
                                                <li>reservation.csv</li>
                                            </ul>
                                        </ol>
                                        <h4 className="text-lg mb-4">
                                            To view foreign keys, check the script you imported:
                                        </h4>
                                        <img
                                            src="/DATABASE/ForeignKeys.png"
                                            alt="Screenshot of foreign key visualization in DBeaver"
                                            className="rounded shadow-md"
                                            width={960}
                                        />
                                    </div>
                                </div>
                                <li>Select "CSV" as the source format.</li>
                                <li>Choose your CSV file.</li>
                                <li>Configure the following options:</li>
                                <ul className="list-disc list-inside ml-8 space-y-1">
                                    <li>Encoding (UTF-8)</li>
                                    <li>Delimiter</li>
                                    <li>Column mapping</li>
                                </ul>
                                <li>Preview the data.</li>
                                <li>Start the import process.</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    );
}