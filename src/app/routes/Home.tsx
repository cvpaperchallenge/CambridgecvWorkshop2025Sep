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
    description:
      "Explore the FOUND Workshop at ICCV 2025, where researchers discuss adapting foundation models, next-generation evaluation metrics, and the key dates for participation.",
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
          {homeData.info.map((info, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {info.icon === "Mail" && <Mail className="h-5 w-5" />}
                  {info.icon === "MapPin" && <MapPin className="h-5 w-5" />}
                  {info.icon === "SiSlack" && <SiSlack className="h-5 w-5" />}
                  {info.icon === "Calendar" && <Calendar className="h-5 w-5" />}
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
                    ) : (
                      info.value.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < info.value.split("\n").length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">
            About Cambridge Computer Vision Workshop
          </h2>
          <p>
            Recently, Transformer-based foundation models have achieved
            outstanding performance across a broad spectrum of benchmarks
            spanning recognition and generation tasks, and their versatility has
            fueled rapid advances in both AI research and industrial deployment.
            To seamlessly adapt these models to downstream tasks in diverse
            real-world domains-including medicine, manufacturing, robotics, and
            the creative industries-and thereby deliver tangible impact on human
            life, it is indispensable to develop Tech Transfer technologies that
            encompass domain-specific fine-tuning and robust MLOps pipelines,
            where the decisive factor is the breadth and quality of data
            available for those tasks. At the same time, model evaluation is
            approaching saturation on conventional IID benchmarks, prompting
            growing calls to redesign evaluation metrics and tasks that dispense
            with the IID assumption and explicitly capture out-of-distribution
            (OOD) and long-tail phenomena. Advancing both (i) Tech Transfer to
            heterogeneous downstream tasks and (ii) the definition of
            next-generation evaluation criteria therefore hinges on curating and
            exploiting broader and deeper data resources-Foundation Data, as we
            term them. Against this backdrop, the ICCV 2025 workshop “FOUND:
            Foundation Data for Industrial Tech Transfer” will convene
            researchers from industry and academia to share techniques for
            realizing Foundation Data and to engage in comprehensive discussions
            on model adaptation and the design of novel evaluation tasks
            grounded in such data, with the ultimate aim of opening new horizons
            for AI research and application.
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
              {homeData.workshopProgram.day1.schedule.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.time}</TableCell>
                  <TableCell>{item.session}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.presenter}
                  </TableCell>
                </TableRow>
              ))}
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
