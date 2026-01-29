import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";

const missionPoints = [
  "Empower businesses with innovative digital platforms",
  "Foster sustainable growth through strategic partnerships",
  "Bridge market gaps with technology-driven solutions",
  "Create value for all stakeholders",
];

const visionPoints = [
  "Become the leading digital business ecosystem",
  "Pioneer innovation in B2B commerce and media solutions",
  "Build a network of thriving, interconnected businesses",
  "Set new standards for corporate excellence",
];

export function Mission() {
  return (
    <section id="mission" className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Purpose
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3">
            Mission & Vision
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-primary-foreground/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-lg mb-6">
              To drive business growth through innovative digital solutions and strategic partnerships.
            </p>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-primary-foreground/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-primary-foreground/80 text-lg mb-6">
              To become the most trusted partner for businesses seeking digital transformation.
            </p>
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
