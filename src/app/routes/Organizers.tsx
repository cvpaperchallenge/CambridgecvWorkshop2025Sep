import type { MetaFunction } from "react-router";
import { ExternalLink } from "lucide-react";

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import organizersData from "../../data/organizers.json";

import { createMeta } from "@/lib/metadata";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Organizers",
    description:
      "Meet the organizing committee and supporters behind the FOUND Workshop at ICCV 2025.",
    path: "/organizers",
  });

function Organizers() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {organizersData.title}
        </h1>
        {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {organizersData.subtitle}
        </p> */}
      </section>

      {/* Organizers */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Organizers
          </h2>
          {/* <p className="text-muted-foreground">
            Workshop organization and coordination
          </p> */}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {organizersData.organizers.map((organizer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{organizer.name}</CardTitle>
                <CardDescription>{organizer.affiliation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <img
                      src={organizer.photo}
                      alt={`Photo of ${organizer.name}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  {/* <p className="text-sm text-muted-foreground">{chair.bio}</p> */}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={`mailto:${chair.email}`}>
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button> */}
                <Button
                  variant="outline"
                  size="sm"
                  className="flex gap-2"
                  asChild
                >
                  <a href={organizer.website} target="_blank" rel="noreferrer">
                    Website <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Committee */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Program Committee
          </h2>
          <p className="text-muted-foreground">
            Paper reviewers and session chairs
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {organizersData.programCommittee.map((member, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-muted-foreground">
                {member.affiliation}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Sponsors */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Supporters
          </h2>
          <p className="text-muted-foreground">TBD</p>
        </div>
        {/* <div className="grid gap-6 md:grid-cols-3">
          {organizersData.sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="aspect-[3/2] bg-muted rounded-md flex items-center justify-center p-6"
            >
              <span className="text-xl font-bold text-muted-foreground">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div> */}
      </section>
    </main>
  );
}

export default Organizers;
