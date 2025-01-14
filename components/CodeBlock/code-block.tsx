'use client';

import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { useState } from 'react';

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
    className?: string;
}

export function CodeBlock({
    code,
    language = 'tsx',
    showLineNumbers = true,
    className,
}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };



    return (
        <div className={cn('relative group rounded-lg overflow-hidden', className)}>
            <Highlight theme={themes.vsDark} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={cn(
                            'bg-zinc-950 text-zinc-50 p-4 overflow-x-auto font-mono text-sm',
                            className
                        )}
                        style={style}
                    >
                        {tokens.map((line, i) => {
                            const lineProps = getLineProps({ line });
                            return (
                                <div
                                    key={i}
                                    {...lineProps}
                                    className={cn(lineProps.className, 'table-row')}
                                >
                                    {showLineNumbers && (
                                        <span className="table-cell text-zinc-600 pr-4 text-right select-none">
                                            {i + 1}
                                        </span>
                                    )}
                                    <span className="table-cell">
                                        {line.map((token, key) => {
                                            const tokenProps = getTokenProps({ token });
                                            return (
                                                <span key={key} {...tokenProps} />
                                            );
                                        })}
                                    </span>
                                </div>
                            );
                        })}
                    </pre>
                )}
            </Highlight>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-md bg-zinc-800/50 opacity-0 group-hover:opacity-100 hover:bg-zinc-800 transition-all duration-200"
                aria-label={copied ? 'Copied!' : 'Copy code'}
            >
                {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                )}
            </button>
        </div>
    );
}
