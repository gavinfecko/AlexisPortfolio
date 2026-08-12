import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's make something worth looking at twice."
        lede="Hiring, freelancing, or just want to argue about an ad you saw — I read everything and I answer quickly."
      />

      <Container width="wide">
        <div className="grid gap-14 sm:grid-cols-[1fr_minmax(0,18rem)] sm:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-10">
              <div>
                <p className="eyebrow">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-3 block break-words text-ink transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </div>

              <div>
                <p className="eyebrow">LinkedIn</p>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-ink transition-colors hover:text-accent"
                >
                  /in/alexis-chondrogiannis
                </a>
              </div>

              <div>
                <p className="eyebrow">Based in</p>
                <p className="mt-3 text-ink-soft">{profile.location}</p>
              </div>

              <div>
                <p className="eyebrow">Open to</p>
                <ul className="mt-3 space-y-1">
                  {profile.targetRoles.map((role) => (
                    <li key={role} className="text-sm text-ink-soft">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
