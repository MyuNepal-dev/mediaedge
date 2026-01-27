import { motion } from "framer-motion";
import { Lightbulb, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Our commitment to consistency and dependability builds lasting partnerships with our clients.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We focus on sustainable growth strategies that create long-term value for all stakeholders.",
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
                Media Edge Pvt. Ltd. was founded with a vision to transform how businesses 
                operate in the digital age. As a parent company, we nurture innovative ventures 
                that address real market needs.
              </p>
              <p>
                Our flagship product, MyuNepal, represents our commitment to creating digital 
                platforms that connect buyers and suppliers, fostering a thriving B2B ecosystem 
                in Nepal.
              </p>
              <p>
                We believe in the power of strategic partnerships and technology-driven solutions 
                to create sustainable business growth for our clients and partners.
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
                <div className="text-7xl font-display font-bold text-primary-foreground mb-4">
                  ME
                </div>
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
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
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
