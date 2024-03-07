import Hero from "@/ui/components/quickactions-hero/hero";
import ProtectedComponent from "@/ui/wrappers/protected-component";

export default function Root() {
  return (
    <section>
      <ProtectedComponent>
        <Hero />
      </ProtectedComponent>
    </section>
  );
}
