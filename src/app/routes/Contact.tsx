import type { MetaFunction } from "react-router";
import { Calendar, Mail, MapPin } from "lucide-react";
import { SiSlack } from "react-icons/si";

// import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
// import { Input } from "../../components/ui/input";
// import { Label } from "../../components/ui/label";
// import { Textarea } from "../../components/ui/textarea";
import contactData from "../../data/contact.json";

import { createMeta } from "@/lib/metadata";

export const meta: MetaFunction = () =>
  createMeta({
    title: "Contact",
    description:
      "Find email, location, and community channels to reach the FOUND Workshop organizers at ICCV 2025.",
    path: "/contact",
  });

function Contact() {
  return (
    <main className="container px-6 py-8 space-y-12 xl:w-6xl">
      {/* Header */}
      <section className="space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">
          {contactData.title}
        </h1>
        {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {contactData.subtitle}
        </p> */}
      </section>

      {/* Contact Information */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Contact Information
          </h2>
          {/* <p className="text-muted-foreground">Ways to reach out to us</p> */}
        </div>
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
                <p className="text-sm text-muted-foreground">
                  {info.description}
                </p>
                {info.value && (
                  <p className="font-medium mt-2">
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

      {/* Contact Form */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Contact Form
          </h2>
          <p className="text-muted-foreground">Send us a message directly</p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                {contactData.contactForm.fields
                  .filter(
                    (field) => field.id === "name" || field.id === "email",
                  )
                  .map((field, index) => (
                    <div key={index} className="space-y-2">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
              </div>
              {contactData.contactForm.fields
                .filter((field) => field.id === "subject")
                .map((field, index) => (
                  <div key={index} className="space-y-2">
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Input id={field.id} placeholder={field.placeholder} />
                  </div>
                ))}
              {contactData.contactForm.fields
                .filter((field) => field.id === "message")
                .map((field, index) => (
                  <div key={index} className="space-y-2">
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      className="min-h-[150px]"
                    />
                  </div>
                ))}
              <Button type="submit" className="flex gap-2">
                {contactData.contactForm.submitButton.text}
                {contactData.contactForm.submitButton.icon === "Send" && (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section> */}

      {/* FAQ */}
      {/* <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about contacting us
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {contactData.faq.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </main>
  );
}

export default Contact;
