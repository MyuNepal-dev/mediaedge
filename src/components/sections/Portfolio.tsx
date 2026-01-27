import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    name: "MyuNepal",
    tagline: "Nepal's Premier B2B Marketplace",
    description:
      "MyuNepal connects buyers and suppliers across Nepal, creating a thriving digital ecosystem for B2B commerce. Our platform empowers businesses to discover new opportunities, streamline procurement, and grow their networks.",
    link: "https://myunepal.com",
    features: ["B2B Marketplace", "Verified Suppliers", "Secure Transactions"],
    color: "from-primary to-primary/70",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Subsidiaries & Ventures
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative digital platforms that are shaping the future of business in Nepal
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    {/* Logo/Visual Section */}
                    <div className={`bg-gradient-to-br ${item.color} p-8 md:p-12 flex items-center justify-center min-h-[250px]`}>
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-3">
                          Myu
                        </div>
                        <div className="text-primary-foreground/80 text-lg">
                          Nepal
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {item.name}
                        </h3>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                          Flagship
                        </span>
                      </div>
                      
                      <p className="text-accent font-medium mb-3">
                        {item.tagline}
                      </p>
                      
                      <p className="text-muted-foreground mb-6">
                        {item.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Button asChild className="w-fit">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <Card className="border-dashed border-2 border-border bg-transparent">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-muted-foreground" />
              </div>
              <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                More Ventures Coming Soon
              </h4>
              <p className="text-muted-foreground">
                We're constantly exploring new opportunities to create value in the digital space.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
