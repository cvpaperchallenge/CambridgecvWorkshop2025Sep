import { Calendar, MapPin } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import scheduleData from "../../data/schedule.json";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function Schedule() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {scheduleData.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {scheduleData.subtitle}
        </p>
      </section>

      {/* Important Dates Timeline */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Important Dates
          </h2>
          <p className="text-muted-foreground">
            Key deadlines for your calendar
          </p>
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

      {/* Workshop Program - Day 1 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Workshop Program - Day 1
          </h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />{" "}
            {scheduleData.workshopProgram.day1.date}
            <MapPin className="h-4 w-4 ml-4" />{" "}
            {scheduleData.workshopProgram.day1.location}
          </p>
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

      {/* Workshop Program - Day 2 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Workshop Program - Day 2
          </h2>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />{" "}
            {scheduleData.workshopProgram.day2.date}
            <MapPin className="h-4 w-4 ml-4" />{" "}
            {scheduleData.workshopProgram.day2.location}
          </p>
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
              {scheduleData.workshopProgram.day2.schedule.map((item, index) => (
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

      {/* Presenter Guidelines */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Presenter Guidelines
          </h2>
          <p className="text-muted-foreground">
            Information for oral and poster presenters
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {scheduleData.presenterGuidelines.oralPresentation.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  {scheduleData.presenterGuidelines.oralPresentation.content}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {scheduleData.presenterGuidelines.oralPresentation.guidelines.map(
                    (guideline, index) => (
                      <li key={index}>{guideline}</li>
                    ),
                  )}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {scheduleData.presenterGuidelines.posterPresentation.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  {scheduleData.presenterGuidelines.posterPresentation.content}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {scheduleData.presenterGuidelines.posterPresentation.guidelines.map(
                    (guideline, index) => (
                      <li key={index}>{guideline}</li>
                    ),
                  )}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {scheduleData.presenterGuidelines.technicalRequirements.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  {
                    scheduleData.presenterGuidelines.technicalRequirements
                      .content
                  }
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {scheduleData.presenterGuidelines.technicalRequirements.requirements.map(
                    (requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ),
                  )}
                </ul>
                <p>
                  {scheduleData.presenterGuidelines.technicalRequirements.note}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default Schedule;
