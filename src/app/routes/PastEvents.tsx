import { ExternalLink, FileText, Video } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import pastEventsData from "../../data/pastEvents.json";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function PastEvents() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {pastEventsData.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {pastEventsData.subtitle}
        </p>
      </section>

      {/* Past Events Overview */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Workshop History
          </h2>
          <p className="text-muted-foreground">
            Our workshop series through the years
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEventsData.workshopHistory.map((event, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Event Photo</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={event.website} target="_blank" rel="noreferrer">
                    Visit {event.year} Website{" "}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Papers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Past Papers
          </h2>
          <p className="text-muted-foreground">
            Selected papers from previous workshops
          </p>
        </div>
        <ScrollArea className="w-[80dvw] md:w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Paper Title</TableHead>
                <TableHead className="hidden md:table-cell">Authors</TableHead>
                <TableHead className="w-[100px]">Links</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastEventsData.pastPapers.map((paper, index) => (
                <TableRow key={index}>
                  <TableCell>{paper.year}</TableCell>
                  <TableCell className="font-medium">{paper.title}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {paper.authors}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {paper.links.paper && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={paper.links.paper}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">Paper</span>
                          </a>
                        </Button>
                      )}
                      {paper.links.video && (
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={paper.links.video}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Video className="h-4 w-4" />
                            <span className="sr-only">Video</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Past Keynotes */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Past Keynotes
          </h2>
          <p className="text-muted-foreground">
            Keynote presentations from previous workshops
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pastEventsData.pastKeynotes.map((keynote, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{keynote.title}</CardTitle>
                <CardDescription>{keynote.speaker}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Keynote Video Thumbnail
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {keynote.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={keynote.videoLink} target="_blank" rel="noreferrer">
                    Watch Keynote <Video className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Resources
          </h2>
          <p className="text-muted-foreground">
            Code repositories and datasets from past workshops
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEventsData.resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>
                  {resource.type === "datasets" &&
                    "Benchmark datasets for ML research"}
                  {resource.type === "code" &&
                    "Implementation of workshop papers"}
                  {resource.type === "slides" && "Slides from past workshops"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex gap-2"
                  asChild
                >
                  <a href={resource.link} target="_blank" rel="noreferrer">
                    {resource.type === "datasets" && (
                      <SiGithub className="h-4 w-4" />
                    )}
                    {resource.type === "code" && (
                      <SiGithub className="h-4 w-4" />
                    )}
                    {resource.type === "slides" && (
                      <FileText className="h-4 w-4" />
                    )}
                    {resource.type === "datasets" && " Access Datasets"}
                    {resource.type === "code" && " View Repositories"}
                    {resource.type === "slides" && " Download Slides"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default PastEvents;
