import { Link, type MetaFunction } from "react-router";
// import { Download, ExternalLink } from "lucide-react";
import { Calendar } from "lucide-react";

import { Button } from "../../components/ui/button";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../../components/ui/accordion";
import callForPapersData from "../../data/callForPapers.json";
import scheduleData from "../../data/schedule.json";
import { createMeta } from "@/lib/metadata";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Call for Papers",
    description:
      "Review submission dates, topics of interest, and guidelines for contributing research to the FOUND Workshop at ICCV 2025.",
    path: "/call-for-papers",
  });

function CallForPapers() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {callForPapersData.title}
        </h1>
        {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {callForPapersData.subtitle}
        </p> */}
      </section>

      {/* Important Dates Timeline */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
          {/* <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p> */}
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
      </section>

      {/* Topics Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Topics of Interest
          </h2>
          <p>
            We welcome submissions on following topics across the diverse
            domains covered by our organizers:
          </p>
          <div className="space-y-2">
            <ol className="alpha-paren pl-5 space-y-1">
              {/* Data-centric approach */}
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
              {/* Tech transfer approach */}
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
            <p>
              We also welcome brave new ideas related to above-mentioned topics
              or create a novel field.
            </p>
          </div>
        </div>
        {/* <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold">
              Core ML Techniques
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {callForPapersData.topics.coreMLTechniques.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold">Applications</h3>
            <ul className="list-disc pl-5 space-y-1">
              {callForPapersData.topics.applications.map(
                (application, index) => (
                  <li key={index}>{application}</li>
                ),
              )}
            </ul>
          </div>
        </div> */}
      </section>

      {/* Submission Guidelines Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Submission Guidelines
          </h2>
          <p className="text-muted-foreground">TBD</p>
        </div>
        {/* <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Submission Guidelines
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {callForPapersData.paperFormat.submissionGuidelines.map(
                (guideline, index) => (
                  <li key={index}>{guideline}</li>
                ),
              )}
            </ul>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" className="flex gap-2" asChild>
                <a href="#" target="_blank" rel="noreferrer">
                  <Download className="h-4 w-4" />
                  Download Template
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Review Process</h3>
            <p>{callForPapersData.paperFormat.reviewProcess}</p>
            <h3 className="text-lg sm:text-xl font-semibold">Publication</h3>
            <p>{callForPapersData.paperFormat.publication}</p>
          </div>
        </div> */}
      </section>

      {/* Submission Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            How to Submit
          </h2>
          <p className="text-muted-foreground">TBD</p>
        </div>
      </section>

      {/* Best Paper Awards */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Best Paper Awards
          </h2>
          <p className="text-muted-foreground">
            Recognition for outstanding research contributions
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <p>{callForPapersData.bestPaperAwards}</p>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about the submission process
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {callForPapersData.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section> */}

      {/* Contact Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Questions?
          </h2>
          <p className="text-muted-foreground">
            If you have any questions about the submission process, please
            contact us
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </main>
  );
}

export default CallForPapers;
