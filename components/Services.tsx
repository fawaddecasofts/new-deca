import {
  Target,
  Infinity as InfinityIcon,
  LineChart,
  ThumbsUp,
  MonitorSmartphone,
  PenTool,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Google Ads",
    desc: "Drive high-quality traffic and maximize returns with smart Google Ads campaigns.",
  },
  {
    icon: InfinityIcon,
    title: "Meta Advertising",
    desc: "Generate quality leads and sales with highly targeted Facebook & Instagram ad campaigns.",
  },
  {
    icon: LineChart,
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and get consistent organic traffic with proven SEO strategies.",
  },
  {
    icon: ThumbsUp,
    title: "Social Media Marketing",
    desc: "Build brand awareness and engage your audience across all major social media platforms.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website Development",
    desc: "Fast, responsive and SEO-friendly websites designed to convert visitors into customers.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    desc: "Create a strong brand presence with memorable logos, brand strategy and visual identity.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Engaging content that educates, informs and converts your target audience.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    desc: "Nurture leads and increase sales with high-converting email marketing campaigns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[11px] font-bold tracking-[0.2em] text-brand">
          OUR SERVICES
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          Smart Solutions. <span className="text-brand">Real Results.</span>
        </h2>
        <p className="mt-3 text-[15px] text-ink/55">
          We offer a complete range of digital marketing services to help
          your business grow and dominate online.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-xl border border-black/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(227,30,43,0.4)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-[15px] font-bold text-ink">{title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
              {desc}
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand/30 text-brand transition group-hover:bg-brand group-hover:text-white"
              aria-label={`Learn more about ${title}`}
            >
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

