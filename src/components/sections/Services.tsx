import { motion } from "framer-motion";
import { 
  Megaphone, 
  TrendingUp, 
  Handshake, 
  Laptop,
  BarChart3,
  Globe
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Megaphone,
    title: "Brand Strategy & Media Planning",
    description: "Comprehensive brand development and strategic media planning to amplify your market presence.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description: "Data-driven digital marketing strategies that accelerate customer acquisition and business growth.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "Building meaningful partnerships that create synergies and unlock new market opportunities.",
  },
  {
    icon: Laptop,
    title: "Product & Platform Support",
    description: "End-to-end support for digital product development and platform management.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Actionable insights through advanced analytics to inform strategic decision-making.",
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description: "Strategic guidance for entering new markets and scaling operations effectively.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Services & Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to drive your business forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
