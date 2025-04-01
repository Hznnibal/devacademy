"use client";

import { CodeExample } from "@/app/courses/en/backend/sql/sql-course/shared/CodeExample";

export default function CreateDatabasePage() {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">Ensure Backups</h1>
            <div className="mb-4">
                <p className="text-lg text-muted-foreground">
                    You are generally responsible for your test environment, so you must be able to:
                </p>
                <ol className="list-disc ml-4 mt-2">
                    <li>regularly back up your test databases,</li>
                    <li>ensure that the backup is valid for potential restoration.</li>
                </ol>
            </div>

            <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border">
                    <h2 className="text-2xl font-semibold mb-4"> Backup and Restore in MySQL /MariaDB</h2>
                    <div className="bg-card p-6 rounded-lg border">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold mb-4">Backup</h3>
                            <ol className="ml-4 list-decimal list-inside space-y-2">
                                <li>Open a terminal.</li>
                                <li>To create a backup (or "dump"), use the following command:</li>
                                <CodeExample
                                    title="Example:"
                                    code='mysqldump --user=xxx --password=xxx hotel > backup_hotel.sql'
                                />
                                <li>After the right chevron ({`>`}), specify the name of the backup file.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="bg-card mt-4 p-6 rounded-lg border">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold mb-4">Restore</h3>
                            <p className="text-lg leading-relaxed mb-4">To restore, use the `mysql` command (not `mysqldump`).</p>
                            <ol className="list-decimal list-inside space-y-2 ml-4">
                                <li>As a precaution, restore the `hotel` database under a different name.</li>
                                <li>For restoration, use the following command:</li>
                                <CodeExample
                                    title="Run the following command:"
                                    code='cat backup_hotel.sql | mysql --user=xxx --password=xxx new_hotel'
                                />
                                <p className="text-lg leading-relaxed mb-4">
                                    In this example, the script `backup_hotel.sql` is piped into the `mysql` command.
                                    All the commands in the `backup_hotel.sql` file are executed...
                                    The `new_hotel` database is used as the restoration target, so it must exist beforehand.
                                </p>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
