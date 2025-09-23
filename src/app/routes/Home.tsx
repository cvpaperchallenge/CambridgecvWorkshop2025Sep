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
import scheduleData from "../../data/schedule.json";
import contactData from "../../data/contact.json";
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
        {/* <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>{homeData.eventInfo.date}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{homeData.eventInfo.location}</span>
          </div>
        </div> */}
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link to="/call-for-papers">Submit Paper</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/program">Check Workshop Program</Link>
          </Button>
        </div> */}
      </section>

      {/* Contact Information */}
      <section className="space-y-6">
        {/* <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Contact Information
          </h2>
          <p className="text-muted-foreground">Ways to reach out to us</p>
        </div> */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contactData.contactInfo.map((info, index) => (
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
                {/* <p className="text-sm text-muted-foreground">
                  {info.description}
                </p> */}
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
                {/* {info.socialLinks && (
                  <div className="flex gap-4 mt-2">
                    {info.socialLinks.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="flex gap-2"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.icon === "X" && <X className="h-4 w-4" />}
                          {link.icon === "SiSlack" && (
                            <SiSlack className="h-4 w-4" />
                          )}
                          {link.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                )} */}
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
        {/* <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>{homeData.overview.mission}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Topics</h3>
            <ul className="list-disc pl-5 space-y-2">
              {homeData.overview.keyTopics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div> */}
      </section>

      {/* Important Dates Section */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
        </div>
        <div className="relative border-l border-border pl-6 space-y-8">
          {scheduleData.importantDates.map((date, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[32px] mt-1 h-4 w-4 rounded-full bg-primary"></div>
              <div className="space-y-1">
                <h3 className="font-semibold">{date.title}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {date.date}
                </p>
                <p className="text-sm">{date.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Topics Section */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Topics of Interest
          </h2>
          <p>
            The workshop focus on following topics across the diverse domains
            covered by our organizers:
          </p>
          <div className="space-y-2">
            <ol className="alpha-paren pl-5 space-y-1">
              <li key="data-centric-approach" className="font-bold">
                Data-centric approach
              </li>
              <ul className="list-disc pl-5 space-y-1">
                {callForPapersData.topics.dataCentricApproach.map(
                  (topic, index) => (
                    <li key={index}>{topic}</li>
                  ),
                )}
              </ul>
              <li key="tech-transfer-approach" className="font-bold">
                Tech transfer approach
              </li>
              <ul className="list-disc pl-5 space-y-1">
                {callForPapersData.topics.techTransferApproach.map(
                  (topic, index) => (
                    <li key={index}>{topic}</li>
                  ),
                )}
              </ul>
            </ol>
          </div>
        </div>
      </section> */}

      {/* Workshop Program - Day 1 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Workshop Program
          </h2>
          {/* <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />{" "}
            {scheduleData.workshopProgram.day1.date}
            <MapPin className="h-4 w-4 ml-4" />{" "}
            {scheduleData.workshopProgram.day1.location}
          </p> */}
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
              {scheduleData.workshopProgram.day1.schedule.map((item, index) => (
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
          {/* <p className="text-muted-foreground">Updates and announcements</p> */}
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
