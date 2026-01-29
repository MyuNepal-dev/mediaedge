import { motion } from "framer-motion";
import { Lightbulb, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We anticipate change and act on it. By proactively integrating cutting-edge technology and creative thinking, we design solutions that set the standard, ensuring our partners are always ahead.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Trust is our foundation. We build resilient systems and maintain unwavering consistency in our partnerships, delivering dependability that businesses can count on today and tomorrow.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We measure success by the sustainable value we create. Our strategies are designed to scale responsibly, driving long-term growth for our clients, partners, and the ecosystems we serve.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Building the Future of Business in Nepal
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Media Edge Pvt. Ltd. was founded on a singular vision: to
                redefine business in Nepal for the digital era. We operate as a
                strategic incubator and operator, building and scaling ventures
                that solve critical market needs.
              </p>
              <p>
                Our journey is exemplified by our flagship platform, MyuNepal.
                What began as a mission to digitally connect Nepal's businesses
                became the country's largest B2B wholesale marketplace,
                revolutionizing supplier discovery and bulk trade. The proven
                methodologies, technical architecture, and growth frameworks
                developed during MyuNepal's ascent now form the cornerstone of
                our expertise.{" "}
              </p>
              <p>
                Today, Media Edge leverages this deep mastery in platform
                growth, digital media, and robust system design to empower a
                broader ecosystem. We are committed to fostering sustainable
                growth for our clients and partners through technology-driven
                solutions and strategic collaboration.{" "}
              </p>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Abstract decorative elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />

              <div className="text-center p-8 relative z-10">
                <img
                  src="/favicon.ico"
                  alt="Media Edge"
                  className="w-28 h-28 mx-auto mb-4 object-contain"
                />
                <div className="text-primary-foreground/80 text-xl">
                  Media Edge Pvt. Ltd.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mt-20 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Our Core Values
            </h3>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
