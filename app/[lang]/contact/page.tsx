'use client';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

export default function ContactPage() {
    const t = useTranslations('contact');
    const { data: session } = useSession();

    const formSchema = z.object({
        name: z.string().min(2, {
            message: t('form.name.error'),
        }),
        email: z.string().email({
            message: t('form.email.error'),
        }),
        message: z.string().min(10, {
            message: t('form.message.error'),
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    useEffect(() => {
        if (session?.user?.email) {
            form.setValue('email', session.user.email);
        }
    }, [session, form]);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error(t('error'));
            }

            toast.success(t('success'));
            form.reset();

            if (session?.user?.email) {
                form.setValue('email', session.user.email);
            }
        } catch (error: unknown) {
            console.error(error);
            toast.error(t('error'));
        }
    }

    return (
        <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h1 className="text-4xl font-bold text-foreground mb-4">{t('title')}</h1>
                    <p className="text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.name.label')}</FormLabel>
                                        <FormControl>
                                            <Input placeholder={t('form.name.placeholder')} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.email.label')}</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder={t('form.email.placeholder')}
                                                type="email"
                                                {...field}
                                                disabled={!!session?.user?.email}
                                                className={session?.user?.email ? "bg-muted" : ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('form.message.label')}</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder={t('form.message.placeholder')}
                                                className="min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                <Send className="mr-2 h-4 w-4" /> {t('form.submit')}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}