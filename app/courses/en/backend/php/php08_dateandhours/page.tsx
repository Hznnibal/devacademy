import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Dates and Times</h2>

                <h3 className="text-xl font-medium mt-4">1. Working with Dates</h3>
                <p className="text-lg leading-relaxed mb-4">As a developer, you work with dates regularly (e.g., the date of a client invoice, member registration on a site, or delivery time calculations). PHP provides tools to handle dates efficiently.</p>

                <h3 className="text-xl font-medium mt-4">2. Local Timezone</h3>
                <p className="text-lg leading-relaxed mb-4">Dates and times vary according to the timezone of the location. It's essential to set the timezone for your application based on your user's geographic location. This concept is known as timezone.</p>
                <p className="text-lg leading-relaxed mb-4">For example, if you visit a Canadian site while in France (hosted on a server in Canada), the time displayed will reflect the Canadian timezone.</p>
                <p className="text-lg leading-relaxed mb-4">By default, WAMP is configured to GMT (Greenwich Mean Time), so there may be a time difference (1 to 2 hours depending on daylight saving time). To ensure the correct time, you can set the timezone using:</p>
                <ul className="list-disc ml-6">
                    <li>Use `date_default_timezone_set("Europe/Paris");` in your scripts before working with dates to set the timezone for your application only.</li>
                    <li>Set the timezone directly in the `php.ini` configuration file for all projects on your server (consult a trainer for more details).</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">3. The Timestamp Concept</h3>
                <p className="text-lg leading-relaxed mb-4">PHP handles dates as an integer representing the number of seconds elapsed since January 1st, 1970, at 00:00:00 GMT (the Unix epoch).</p>
                <p className="text-lg leading-relaxed mb-4">This number is called a <strong>timestamp</strong>.</p>
                <p className="text-lg leading-relaxed mb-4">For example, calling `echo time();` might output:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"1562225602"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">This timestamp corresponds to July 4, 2019, at 09:32:22.</p>
                <p className="text-lg leading-relaxed mb-4">To calculate a duration, you would subtract the start timestamp from the end timestamp. The result is a number of seconds, which can be converted into months, days, hours, etc.</p>
                <p className="text-lg leading-relaxed mb-4">A timestamp can also be stored in a database with the timestamp column type.</p>

                <h3 className="text-xl font-medium mt-4">4. Today's Date</h3>
                <p className="text-lg leading-relaxed mb-4">In PHP, the primary function for manipulating dates is `date()`. Here's an example:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo 'We are on ' . date('d/m/Y');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">This function will output today's date in the format:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"12/11/2018"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">The format is specified by the following parameters:</p>
                <ul className="list-disc ml-6">
                    <li><strong>d:</strong> day, 2 digits</li>
                    <li><strong>m:</strong> month, 2 digits</li>
                    <li><strong>Y:</strong> year, 4 digits</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">The separators (e.g., slashes `/`) can be replaced with other characters, such as a hyphen or colon.</p>

                <h3 className="text-xl font-medium mt-4">5. Getting the Time</h3>
                <p className="text-lg leading-relaxed mb-4">To get the current time, you can also use the `date()` function with time formatting options:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo date('H:i:s');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">This will output the time in the format:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"09:32:22"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">Where:</p>
                <ul className="list-disc ml-6">
                    <li><strong>H:</strong> hour (24-hour format with leading zeros)</li>
                    <li><strong>i:</strong> minutes (with leading zeros)</li>
                    <li><strong>s:</strong> seconds (with leading zeros)</li>
                </ul>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">The DateTime Object</h2>

                <h3 className="text-xl font-medium mt-4">1. Introduction to DateTime Object</h3>
                <p className="text-lg leading-relaxed mb-4">It is now recommended to work with dates using the object-oriented approach, specifically the native <strong>DateTime</strong> object. This class offers a set of methods (functions) to simplify date manipulation (formatting, calculations, intervals). Recent versions of PHP have removed some traditional date functions, making it necessary to use <strong>DateTime</strong> for certain operations.</p>

                <h3 className="text-xl font-medium mt-4">2. Syntax</h3>
                <p className="text-lg leading-relaxed mb-4">The syntax to create a new <strong>DateTime</strong> object is as follows:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime();"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">This code automatically returns the date and time of the moment it is executed. For example, if you execute the following code (to display the content of the variable $oDate):</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"var_dump($oDate);"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">The output will be:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {`object(DateTime)[1]
  public 'date' => string '2018-07-03 07:12:27.043812' (length=26)
  public 'timezone_type' => int 3
  public 'timezone' => string 'UTC' (length=3)
`}
                </pre>

                <h3 className="text-xl font-medium mt-4">3. Working with a Different Date</h3>
                <p className="text-lg leading-relaxed mb-4">If you want to work with a date other than today, such as a date retrieved from a database, you need to pass that value as an argument:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime('01-01-2018');"}
                </pre>

                <h3 className="text-xl font-medium mt-4">4. Formatting an Existing Date</h3>
                <p className="text-lg leading-relaxed mb-4">We often need to display a date other than today, for example, a date retrieved from the database, which might be in MySQL format:</p>
                <ul className="list-disc ml-6">
                    <li><strong>date:</strong> 2018-11-16</li>
                    <li><strong>datetime:</strong> 2018-11-16 11:26:51</li>
                </ul>
                <p className="text-lg leading-relaxed mb-4">To format this date, we again use the PHP DateTime object:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime($macolonne_sql);"}
                    {"echo $oDate->format('d/m/Y H:h:i');"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">This will output: <strong>16/11/2018 11h26</strong> (seconds are intentionally omitted).</p>

                <h3 className="text-xl font-medium mt-4">5. Handling DateTime Errors</h3>
                <p className="text-lg leading-relaxed mb-4">The <strong>DateTime</strong> object allows you to retrieve errors using <strong>DateTime::getLastErrors</strong>:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$dateTime = DateTime::createFromFormat('m/d/Y', $date);"}
                    {"$errors = DateTime::getLastErrors();"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">If there are any errors or warnings, you can check them as follows:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"if (!empty($errors['warning_count'])) { return FALSE; }"}
                </pre>

                <h3 className="text-xl font-medium mt-4">6. Verifying a Date</h3>
                <p className="text-lg leading-relaxed mb-4">You can try validating a date using a regular expression, like this:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$datePattern = '/^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/';"}
                    {"$date = '2015-12-06';"}
                    {"if (preg_match($datePattern, $date)) { echo 'Date ' . $date . ' is valid.<br>'; }"}
                    {"else { echo 'Date ' . $date . ' is invalid.<br>'; }"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">This will confirm that the date is valid. However, if you try a date like "32/13/2019", the regular expression will indicate it's valid because the regex only checks the format, not the values.</p>
                <p className="text-lg leading-relaxed mb-4">To verify the validity of a date, you can use the <strong>DateTime</strong> object:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = DateTime::createFromFormat('d/m/Y H:i:s', '17/25/1966 03:42:11');"}
                    {"$errors = DateTime::getLastErrors();"}
                </pre>
                <p className="text-lg leading-relaxed mb-4">If there are any errors or warnings, you can handle them as follows:</p>
                <pre className="bg-gray-200 p-4 rounded">
                    {"if ($errors['error_count'] > 0 || $errors['warning_count'] > 0) { echo 'ARGHHHH!'; }"}
                </pre>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">Documentation</h2>

                <h3 className="text-xl font-medium mt-4">1. List of Functions for Dates and Times</h3>
                <p className="text-lg leading-relaxed mb-4">The <strong>DateTime</strong> object and related objects such as <strong>DateInterval</strong> and <strong>DateTimeZone</strong> provide a rich set of functions for manipulating dates and times. Here are some important ones:</p>
                <ul className="list-disc ml-6">
                    <li><strong>date()</strong> — Formats a local time/date.</li>
                    <li><strong>time()</strong> — Returns the current Unix timestamp.</li>
                    <li><strong>strtotime()</strong> — Converts a string representation of a date to a Unix timestamp.</li>
                    <li><strong>getTimestamp()</strong> — Returns the Unix timestamp of a <strong>DateTime</strong> object.</li>
                    <li><strong>format()</strong> — Formats a <strong>DateTime</strong> object into a string.</li>
                    <li><strong>add()</strong> — Adds an interval to a <strong>DateTime</strong> object.</li>
                    <li><strong>sub()</strong> — Subtracts an interval from a <strong>DateTime</strong> object.</li>
                    <li><strong>diff()</strong> — Returns the difference between two <strong>DateTime</strong> objects.</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">2. The DateTime Object and Related Classes</h3>
                <p className="text-lg leading-relaxed mb-4">The <strong>DateTime</strong> object in PHP works with other related objects to perform advanced date manipulations:</p>
                <ul className="list-disc ml-6">
                    <li><strong>DateInterval</strong> — Represents a time interval, such as 1 month or 5 days.</li>
                    <li><strong>DateTimeZone</strong> — Represents a time zone and allows for timezone manipulation.</li>
                </ul>

                <h3 className="text-xl font-medium mt-4">3. Exercises</h3>
                <p className="text-lg leading-relaxed mb-4">Use the <strong>DateTime</strong> object unless otherwise stated. Here are some exercises:</p>

                <h4 className="text-lg font-medium mt-4">1. Find the week number for the following date: 14/07/2019</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime('14/07/2019');"}
                    {"echo $oDate->format('W'); // Outputs the week number"}
                </pre>

                <h4 className="text-lg font-medium mt-4">2. How many days are left until the end of your course?</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$endDate = new DateTime('2024-12-31');"}
                    {"$currentDate = new DateTime();"}
                    {"$interval = $currentDate->diff($endDate);"}
                    {"echo $interval->days . ' days left';"}
                </pre>

                <h4 className="text-lg font-medium mt-4">3. How to determine if a year is a leap year?</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$year = 2024;"}
                    {"if ((($year % 4 == 0) && ($year % 100 != 0)) || ($year % 400 == 0)) {"}
                    {"    echo '$year is a leap year.';"}
                    {"} else {"}
                    {"    echo '$year is not a leap year.';"}
                    {"}"}
                </pre>

                <h4 className="text-lg font-medium mt-4">4. Show that the date 32/17/2019 is invalid</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = DateTime::createFromFormat('d/m/Y', '32/17/2019');"}
                    {"$errors = DateTime::getLastErrors();"}
                    {"if ($errors['error_count'] > 0) { echo 'Invalid date'; }"}
                </pre>

                <h4 className="text-lg font-medium mt-4">5. Display the current time in the format: 11h25</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"echo date('H\h:i');"}
                </pre>

                <h4 className="text-lg font-medium mt-4">6. Add 1 month to the current date</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime();"}
                    {"$oDate->add(new DateInterval('P1M'));"}
                    {"echo $oDate->format('d/m/Y');"}
                </pre>

                <h4 className="text-lg font-medium mt-4">7. What happened on timestamp 1000200000?</h4>
                <pre className="bg-gray-200 p-4 rounded">
                    {"$oDate = new DateTime('@1000200000');"}
                    {"echo $oDate->format('d/m/Y H:i:s');"}
                </pre>
            </section>

        </div>
    );
};

export default IntroPHP;
