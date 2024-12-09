// components/CodeBlock.tsx
import React from "react";

interface CodeBlockProps {
    code: string;
    language?: string; // Langage de programmation (par ex. "javascript", "html")
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "javascript" }) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            alert("Code copié !");
        } catch (err) {
            console.error("Erreur lors de la copie :", err);
        }
    };

    return (
        <div className="relative bg-gray-800 p-4 rounded-md text-white">
            <pre className={`language-${language}`}>
                <code>{code}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700"
            >
                Copier
            </button>
        </div>
    );
};

export default CodeBlock;
