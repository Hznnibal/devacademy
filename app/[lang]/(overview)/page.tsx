"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Code2, Rocket, Trophy, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Home() {
  const t = useTranslations();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="min-h-screen bg-background">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] " />
        </div>
        <div className="absolute inset-x-0 top-[30%] -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#9089fc] opacity-30 sm:left-[calc(50%+30rem)] sm:w-[72.1875rem] " />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t("home.heroDescription")}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-primary/90 hover:scale-105">
                <Link href={`/courses/${lang}/intro/intro/introduction`}>
                  {t("home.getStarted")}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-x-8">
              <p className="text-sm text-muted-foreground">
                {t("home.joinMessage")}
              </p>
            </div>
          </div>

          {/* Fixed Feature Cards Layout */}
          <div className="mx-auto mt-16 lg:mt-0 lg:ml-8 flex-1 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: t("home.features.realProjects.title"),
                  description: t("home.features.realProjects.description"),
                  icon: Code2
                },
                {
                  title: t("home.features.directMentorship.title"),
                  description: t("home.features.directMentorship.description"),
                  icon: Users
                },
                {
                  title: t("home.features.certification.title"),
                  description: t("home.features.certification.description"),
                  icon: Trophy
                },
                {
                  title: t("home.features.careerSupport.title"),
                  description: t("home.features.careerSupport.description"),
                  icon: Rocket
                }
              ].map((feature, i) => (
                <Card key={i} className="relative overflow-hidden p-6 hover:shadow-xl group hover:-translate-y-1">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/5 group-hover:scale-110 transition-transform duration-300" />
                  <feature.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {t("home.stats.title")}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {t("home.stats.subtitle")}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: t("home.stats.studentsTrained"), description: t("home.stats.description.studentsTrained") },
              { stat: t("home.stats.successRate"), description: t("home.stats.description.successRate") },
              { stat: t("home.stats.averageSalary"), description: t("home.stats.description.averageSalary") },
              { stat: t("home.stats.supportAvailable"), description: t("home.stats.description.supportAvailable") },
            ].map((stat, idx) => (
              <Card key={idx} className="flex flex-col p-8 hover:shadow-lg hover:-translate-y-1 group">
                <dt className="text-sm leading-6 text-muted-foreground">{stat.description}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight group-hover:scale-110 transition-transform duration-300">{stat.stat}</dd>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
