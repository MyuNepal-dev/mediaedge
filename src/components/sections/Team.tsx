import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Shiva Baniya",
    role: "Leadership",
    image: "",
    initials: "SB",
    linkedin: "",
    bio: "",
  },
  {
    name: "Kalpana Maharjan",
    role: "Leadership",
    image: "",
    initials: "KM",
    linkedin: "",
    bio: "",
  },
  {
    name: "Kristy Baniya",
    role: "Leadership",
    image: "",
    initials: "KB",
    linkedin: "",
    bio: "",
  },
  {
    name: "Abin Maharjan",
    role: "Leadership",
    image: "",
    initials: "AM",
    linkedin: "",
    bio: "",
  },
  {
    name: "Prijal Bista",
    role: "Leadership",
    image: "",
    initials: "PB",
    linkedin: "",
    bio: "",
  },
];

export function Team() {
  return (
    <section id="team" className="hidden py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Leadership Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the passionate individuals driving Media Edge forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {member.role}
                  </p>
                  
                  {member.bio && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                  )}

                  <div className="flex justify-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@mediaedge.com`}
                      className="w-9 h-9 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
