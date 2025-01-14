import { CodeBlock } from "@/components/CodeBlock/code-block";
import React from "react";

const Page: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <h1 className="text-3xl font-semibold mb-6 text-center">HTML - 06 - Media</h1>
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-2">Images</h2> <div className="border-b border-gray-300 mb-6" />

                <p className="text-lg leading-relaxed mb-4">
                    An HTML page can display various types of media: images, videos, sounds, animations, applications, etc. These elements are often grouped under the term "objects." Images in HTML are displayed using the <code className="bg-gray-200 text-red-600">&lt;img&gt;</code> tag.
                </p>

                <h3 className="text-xl font-semibold mb-4">The <code className="bg-gray-200 text-red-600">&lt;img&gt;</code> Tag</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The main attribute is <code className="bg-gray-200 text-red-600">src</code>, which specifies the URL of the image. There are several ways to specify this URL:
                </p>
                <CodeBlock code={`<!-- image file located in the same directory as the HTML file --> 
<img src="gardenly_logo.jpg">

<!-- image file located in a different directory than the HTML file --> 
<img src="images/gardenly_logo.jpg"> 

<!-- image file located on another server -->
<img src="https://www.site2.fr/images/gardenly_logo.jpg">`} />

                <h3 className="text-xl font-semibold mb-4">Alt Text</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>alt</code> attribute is essential for accessibility. It provides a description of the image for visually impaired users and search engines.
                </p>
                <CodeBlock code={`<img src="gardenly_logo.jpg" alt="Gardenly Logo" title="Gardenly Logo">`} />

                <h3 className="text-xl font-semibold mb-4">The <code>title</code> Attribute</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The <code>title</code> attribute provides a title (description) of the image, which may appear when hovering over it. While optional, it is recommended to use it.
                </p>

                <h3 className="text-xl font-semibold mb-4">Image Example</h3>
                <img src="https://www.example.com/logo_windows.jpg" alt="Alternative text for the image" title="Image Title" className="w-full max-w-md mx-auto mb-4" />
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Other Media</h2> <div className="border-b border-gray-300 mb-6" />

                <h3 className="text-xl font-semibold mb-4">Videos</h3>
                <p className="text-lg leading-relaxed mb-4">
                    HTML5 introduced the <code className="bg-gray-200 text-red-600">&lt;video&gt;</code> tag to embed videos in a page. Here’s an example of a video with multiple formats:
                </p>
                <CodeBlock code={`<video width="400" height="222" controls="controls">
   <source src="videos/developer.mp4">
   <source src="videos/developer.ogg">
   <source src="videos/developer.webm">
   The video is not playing.
</video>`} />

                <h3 className="text-xl font-semibold mb-4">Audio</h3>
                <p className="text-lg leading-relaxed mb-4">
                    HTML5 also introduced the <code className="bg-gray-200 text-red-600">&lt;audio&gt;</code> tag to embed audio files. The attributes are similar to those of the <code className="bg-gray-200 text-red-600">&lt;video&gt;</code> tag.
                </p>

                <h3 className="text-xl font-semibold mb-4">The <code>&lt;iframe&gt;</code> Tag</h3>
                <p className="text-lg leading-relaxed mb-6">
                    The <code className="bg-gray-200 text-red-600">&lt;iframe&gt;</code> tag allows embedding another HTML page into the current one, such as a YouTube video.
                </p>

                <h3 className="text-xl font-semibold mb-4">Iframe Example</h3>
                <iframe
                    className="w-full max-w-lg mx-auto"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FQdaUv95mR8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section >
            <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Exercises</h2> <div className="border-b border-gray-300 mb-6" />

                <h3 className="text-xl font-semibold mb-4">Exercise 1</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Create an HTML5 page and insert the following code to display the image in your browser:
                </p>
                <CodeBlock code={`<img src="logo_windows.jpg" alt="Alternative text for the image" title="Image Title"> Gardenly Logo`} />
                <p className="text-lg leading-relaxed mb-4">
                    Observe the following effects:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Remove the <code className="bg-gray-200 text-red-600">title</code> attribute and observe what happens when hovering over the image.</li>
                    <li>Change the image name in the <code className="bg-gray-200 text-red-600">src</code> attribute and see what happens in the browser.</li>
                    <li>Remove the <code className="bg-gray-200 text-red-600">alt</code> attribute and observe what happens.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Exercise 2</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Create an HTML page and embed the video from YouTube using the <code className="bg-gray-200 text-red-600">&lt;iframe&gt;</code> tag. Use the following link to retrieve the embed code:
                </p>
                <a href="https://www.youtube.com/embed/bWPMSSsVdPk" target="_blank" rel="noopener noreferrer" className="text-blue-500">https://www.youtube.com/embed/bWPMSSsVdPk</a>
            </section >
        </div >
    );
};

export default Page;
