import { Quote, Star } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return <Section id="testimonials" spacing="lg" surface="dark"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"><FadeIn><SectionHeader dark label="Kind words" title="Care you can feel good about." description="A few notes from people who trusted us with their smiles." /><div className="mt-8 flex items-center gap-3 text-sm text-white/55"><span className="font-heading text-3xl font-semibold text-[#bce8d6]">4.9</span><span><span className="flex gap-1 text-[#bce8d6]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}</span><span className="mt-1 block">from 240+ patient reviews</span></span></div></FadeIn><div className="grid gap-4 sm:grid-cols-2">{testimonials.slice(0, 4).map((item, index) => <FadeIn key={item.id} delay={index * .08}><article className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/6 p-6 transition-colors hover:bg-white/10 md:p-7"><div><div className="mb-5 flex items-center justify-between"><div className="flex gap-1 text-[#bce8d6]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}</div><Quote className="size-5 text-white/30" /></div><p className="text-[15px] leading-relaxed text-white/75">&ldquo;{item.quote}&rdquo;</p></div><div className="mt-8"><p className="font-medium text-white">{item.author}</p><p className="mt-1 text-xs text-white/45">{item.role}</p></div></article></FadeIn>)}</div></div></Section>;
}
