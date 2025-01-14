export default function WebDevelopmentArticle() {
    return (
        <div className="px-5 py-8 font-sans">

            <h1 className="text-3xl font-bold text-center mb-10">Website Development: An Overview</h1>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Website development, often referred to simply as web development, involves the process of creating,
                    designing, and maintaining websites and web applications that are accessible through a browser. It encompasses
                    a wide range of activities, including coding, web design, and database handling.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    While the term web development primarily focuses on building the structure and functionality of websites, it is
                    closely tied to web design, which deals with the aesthetic and user-experience aspects. Development typically
                    involves the technical implementation, translating designs into working sites.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">What Is Web Development?</h2>
                <div className="border-b border-gray-300 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                    Web development is the process of constructing the backend and frontend elements of websites or web applications.
                    It involves coding to bring designs and functionalities to life. For instance, all the websites you’ve interacted
                    with were crafted by web developers who ensure that they operate efficiently and provide a seamless experience for
                    users.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Developers achieve this by utilizing various programming languages, tools, and frameworks depending on the platform
                    and project requirements.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Web Design vs. Web Development</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold">Web Designers:</h3>
                <ul className="list-disc list-inside text-lg space-y-2 mt-2">
                    <li>Focus on the visual presentation of websites, including layout, colors, fonts, and user interface design.</li>
                    <li>Collaborate with clients or teams to conceptualize designs that align with a brand or vision.</li>
                    <li>
                        Might possess some knowledge of coding or use programming languages like HTML, CSS, and JavaScript.
                    </li>
                    <li>Create mockups, wireframes, and prototypes to test ideas and finalize designs.</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6">Web Developers:</h3>
                <ul className="list-disc list-inside text-lg space-y-2 mt-2">
                    <li>Handle the technical implementation of websites, writing the code that makes them functional.</li>
                    <li>Build the structure and features specified by designers or clients.</li>
                    <li>Require in-depth expertise in programming languages such as HTML, CSS, PHP, and JavaScript.</li>
                    <li>Ensure the technical backbone of websites operates smoothly.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Programming Languages Commonly Used</h2>
                <div className="border-b border-gray-300 mb-6" />
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>HTML (Hypertext Markup Language): Defines the structure of a webpage.</li>
                    <li>CSS (Cascading Style Sheets): Handles the styling and visual presentation.</li>
                    <li>JavaScript: Adds interactive features and dynamic behavior to web pages.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Types of Web Development</h2>
                <div className="border-b border-gray-300 mb-6" />
                <h3 className="text-xl font-semibold">Front-End Development</h3>
                <p className="text-lg leading-relaxed mt-2">
                    This aspect involves creating the user-facing components of websites or applications. Front-end developers work
                    on what users see and interact with, making the site visually appealing and intuitive.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Key skills for front-end development include knowledge of languages like HTML, CSS, and JavaScript, along with
                    frameworks like React, Angular, and Bootstrap.
                </p>
                <h3 className="text-xl font-semibold mt-6">Back-End Development</h3>
                <p className="text-lg leading-relaxed mt-2">
                    Back-end development focuses on the server-side functionality of websites. Back-end developers build and manage
                    the infrastructure that powers websites, including servers, databases, and APIs.
                </p>
                <h3 className="text-xl font-semibold mt-6">Full-Stack Development</h3>
                <p className="text-lg leading-relaxed mt-2">
                    A full-stack developer is skilled in both front-end and back-end development. They have a comprehensive
                    understanding of all layers of a website, from the user interface to the server-side logic. This versatility
                    makes them highly sought after in the tech industry.
                </p>
            </section>
        </div>
    );
}
