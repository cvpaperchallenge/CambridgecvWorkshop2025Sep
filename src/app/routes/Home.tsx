import { type MetaFunction } from "react-router";
import { Calendar, Mail, MapPin } from "lucide-react";
import { SiSlack } from "react-icons/si";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import homeData from "../../data/home.json";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { createMeta } from "@/lib/metadata";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Cambridge Computer Vision Workshop",
    description: "Explore the Cambridge Computer Vision Workshop",
    path: "/",
  });

function Home() {
  return (
    <main className="container px-6 py-8 space-y-16 xl:w-6xl">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-6 py-12">
        <div className="space-y-2">
          <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl">
            {homeData.title}
          </h1>
          <p className="text-xl text-muted-foreground">{homeData.subtitle}</p>
        </div>

        {/* Information */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeData.info.map((info, index) => {
            const lines = info.value ? info.value.split("\n") : [];
            const formattedValue = lines.map((line, i) => (
              <span key={i}>
                {line}
                {i < lines.length - 1 && <br />}
              </span>
            ));

            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {info.icon === "Mail" && <Mail className="h-5 w-5" />}
                    {info.icon === "MapPin" && <MapPin className="h-5 w-5" />}
                    {info.icon === "SiSlack" && <SiSlack className="h-5 w-5" />}
                    {info.icon === "Calendar" && (
                      <Calendar className="h-5 w-5" />
                    )}
                    {info.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.value && (
                    <p className="font-medium">
                      {info.type === "Email" ? (
                        <a
                          href={`mailto:${info.value}`}
                          className="hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : info.url ? (
                        <a
                          href={info.url}
                          className="hover:text-primary"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {formattedValue}
                        </a>
                      ) : (
                        formattedValue
                      )}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">
            About Cambridge Computer Vision Workshop
          </h2>
          <p>
            We are excited to announce the Cambridge Computer Vision Workshop,
            hosted by the Department of Engineering at the University of
            Cambridge and LIMIT.Lab. This workshop is not limited to internal
            Cambridge collaborations. It embraces a broader context, including
            partnerships across the UK, Netherlands, and Japan, as well as with
            Oxford, Durham, UvA, Wakayama Kosen, and AIST. In particular, the
            LIMIT.Lab research community aims to serve as a strong hub for
            collaboration, accelerating research in AI, ML, CV, and related
            academic fields. With this workshop at Cambridge, UK, we hope to
            take an important first step toward fostering impactful research
            collaborations.
          </p>
        </div>
      </section>

      {/* Workshop Program - Day 1 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Workshop Program
          </h2>
        </div>
        <ScrollArea className="w-[80dvw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Session</TableHead>
                <TableHead className="hidden md:table-cell">
                  Presenter
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {homeData.workshopProgram.day1.schedule.map((item, index) => {
                const sessionLabel = item.session?.trim()
                  ? item.session
                  : "TBA";
                const presenterLabel = item.presenter?.trim()
                  ? item.presenter
                  : "";

                return (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.time}</TableCell>
                    <TableCell>
                      {item.sessionUrl ? (
                        <a
                          href={item.sessionUrl}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {sessionLabel}
                        </a>
                      ) : (
                        sessionLabel
                      )}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {item.presenterUrl ? (
                        <a
                          href={item.presenterUrl}
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {presenterLabel}
                        </a>
                      ) : (
                        presenterLabel
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Latest News Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">Latest News</h2>
        </div>
        <div className="space-y-4">
          {homeData.latestNews.map((news, index) => (
            <div key={index} className="rounded-lg border bg-card p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-semibold">{news.title}</h3>
                  <p className="text-sm text-muted-foreground">{news.date}</p>
                </div>
              </div>
              <p className="mt-2">{news.content}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
