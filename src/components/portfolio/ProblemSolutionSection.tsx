import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  "Your app is slow, buggy, and users are leaving",
  "You hired a freelancer who disappeared mid-project",
  "Your MVP took 6 months and still isn't working",
  "Poor UX is killing your conversion rates",
];

const solutions = [
  "High-performance apps built with modern tech stacks",
  "Transparent communication — you always know what's happening",
  "Rapid MVP delivery in weeks, not months",
  "Conversion-focused UI/UX that turns visitors into customers",
];

const ProblemSolutionSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="problem-solution" className="section-padding relative">
      <div className="container-tight">
        <div ref={ref} className="fade-up text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-secondary font-semibold mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The problems that{" "}
            <span className="gradient-text">cost you money</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Problems */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-400 flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5" />
              What you're dealing with
            </h3>
            {problems.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 transition-all duration-300 hover:border-red-500/20"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-400 text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-white/70 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-emerald-400 flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5" />
              How I fix it
            </h3>
            {solutions.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 transition-all duration-300 hover:border-emerald-500/20"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-white/70 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
