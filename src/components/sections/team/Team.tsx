import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TeamCard } from "@/components/ui/team-card";
import { FadeIn } from "@/components/motion/fade-in";
import { teamMembers } from "@/content/site";

export function Team() {
  return (
    <Section id="team" spacing="lg" surface="muted">
      <FadeIn className="mb-12 md:mb-16">
        <SectionHeader
          label="Team"
          title="People who care as much as they know."
          description="A small, experienced team committed to making every appointment feel personal."
        />
      </FadeIn>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {teamMembers.map((member, index) => (
          <FadeIn key={member.id} delay={index * 0.08}>
            <TeamCard member={member}  />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
