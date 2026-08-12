import Container from "./Container";
import Reveal from "./Reveal";

/** The standard heading block at the top of every interior page. */
export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Container width="wide" className="pt-20 pb-14 sm:pt-28 sm:pb-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-tight mt-5 max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)]">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {lede}
          </p>
        )}
      </Reveal>
    </Container>
  );
}
