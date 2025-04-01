import { CodeBlock } from '@/components/CodeBlock/code-block';
import React from 'react';

const IntroPHP: React.FC = () => {
    return (
        <div className="px-5 py-8 font-sans">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold">File Upload in PHP</h2>
                <p className="text-lg leading-relaxed mb-4">
                    HTML forms allow you to upload a file, such as a photo, product manual, or CV on a job site (in Word or PDF format). Let's first clarify the term "upload", which can refer to the following operations:
                </p>
                <ul>
                    <li>Downloading a file from a remote server to a local PC (this is <strong>download</strong>).</li>
                    <li>Uploading a file from a PC to a remote server (this is <strong>upload</strong>). This is what we will focus on here.</li>
                </ul>

                <h3 className="text-lg font-medium mt-4">HTML Form for File Upload</h3>
                <p className="text-lg leading-relaxed mb-4">
                    To allow file uploading, you need to add the <code>enctype</code> attribute to the <code>form</code> tag. The value should be <code>multipart/form-data</code>:
                </p>
                <CodeBlock code={`<form action="post.php" method="post" enctype="multipart/form-data">`} />

                <p className="text-lg leading-relaxed mb-4">
                    Next, you need a file input field, which will display a button allowing the user to select a file from their computer:
                </p>
                <CodeBlock code={`<input type="file" name="fichier">`} />

                <h3 className="text-lg font-medium mt-4">Processing the File Upload in PHP</h3>
                <p className="text-lg leading-relaxed mb-4">
                    In the PHP file specified in the <code>action</code> attribute of the form (in this case, <code>post.php</code>), you can access information about the uploaded file using the superglobal variable <code>$_FILES</code>. Like the other superglobals, <code>$_FILES</code> behaves like an array.
                </p>
                <h4 className="mt-2">Exercise:</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Create an upload form and the corresponding PHP script. In the PHP script, just write <code>var_dump($_FILES);</code> and observe the result.
                </p>

                <p className="text-lg leading-relaxed mb-4">The output will look something like this:</p>
                <CodeBlock code={`'name' => string 'monfichier.jpg' (length=10)
'type' => string 'image/jpeg' (length=10)
'tmp_name' => string 'C:\\wamp\\tmp\\phpC1CD.tmp' (length=23)
'error' => int 0
'size' => int 100813`} />

                <h3 className="text-lg font-medium mt-4">Handling Errors</h3>
                <p className="text-lg leading-relaxed mb-4">
                    If the upload fails, errors are returned in <code>$_FILES["fichier"]["error"]</code>. The error cases are predefined in a table, which can be found in the documentation.
                </p>
                <p className="text-lg leading-relaxed mb-4">Here’s how you can check for errors:</p>
                <CodeBlock code={`if ($_FILES["fichier"]["error"] !== UPLOAD_ERR_OK) {
    echo "File upload failed!";
    exit;
}`} />

                <h3 className="text-lg font-medium mt-4">Security Considerations</h3>
                <p className="text-lg leading-relaxed mb-4">
                    The main issue with file uploads is security: the user sends a file from their PC, and since you should never trust user actions, you need to ensure that the file is of the expected type and doesn't contain any malicious code (like executables, viruses, or spyware).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Before storing the file, you must check the file type, permissions, and store it correctly on the server.
                </p>

                <h4 className="mt-2">Verifying the File Type</h4>
                <p className="text-lg leading-relaxed mb-4">
                    You need to first check if the uploaded file is of the expected type (image, Word document, PDF, etc.).
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    A common mistake is to test only the file extension or the MIME type returned by the browser, but these can be spoofed.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    PHP provides a <code>fileinfo</code> extension for checking file types securely. Here's how you can use it:
                </p>
                <CodeBlock code={`$allowedMimeTypes = ["image/gif", "image/jpeg", "image/png"];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mimetype = finfo_file($finfo, $_FILES["fichier"]["tmp_name"]);
finfo_close($finfo);

if (in_array($mimetype, $allowedMimeTypes)) {
    // The type is allowed, proceed with moving and renaming the file
} else {
    // The type is not allowed, show an error
    echo "Unauthorized file type!";
    exit;
}`} />

                <h4 className="mt-2">Moving and Renaming the File</h4>
                <p className="text-lg leading-relaxed mb-4">
                    By default, the uploaded file is stored in the <code>tmp</code> directory of your server. You’ll need to move it to a desired directory in your project and rename it to avoid potential access via URL.
                </p>
                <CodeBlock code={`move_uploaded_file($_FILES["fichier"]["tmp_name"], "images/photo.jpg");`} />

                <h4 className="mt-2">Setting File Permissions</h4>
                <p className="text-lg leading-relaxed mb-4">
                    Files on operating systems (like Windows and Linux) have permissions for reading, writing, and executing. This is important for security. You must ensure proper file permissions when handling uploaded files.
                </p>
            </section>
        </div>
    );
};

export default IntroPHP;
