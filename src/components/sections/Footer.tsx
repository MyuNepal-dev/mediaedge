import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Mission", href: "#mission" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [],
  social: [
    { icon: Facebook, href: "https://www.facebook.com/myunepal", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/myunepal", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/myunepal", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/myunepal", label: "LinkedIn" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <img src="/favicon.ico" alt="Media Edge" className="w-8 h-8 object-contain" />
                <span className="font-display font-semibold text-xl text-background">Media Edge</span>
              </div>
              <p className="text-background/70 mb-6 max-w-md">Driving business growth through strategic media & digital solutions. Building the future of commerce in Nepal.</p>
              <div className="flex gap-4">
                {footerLinks.social.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <div className="mt-4 text-background/70">
                <div>Phone: +977 980-1696703</div>
                <div>Address: Dallu, Kathmandu</div>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter placeholder (non-functional) */}
          <div>
            <div className="mt-2">
              <h4 className="font-display font-semibold text-background mb-2">
                Stay Updated
              </h4>
              <p className="text-background/70 text-sm pb-3">
                Contact us to stay informed about our latest news and offerings.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email address"
                  disabled
                  className="flex-1 h-10 px-3 rounded-md bg-background/5 text-background/90 placeholder:text-background/60"
                />
                <button
                  type="submit"
                  disabled
                  className="h-10 px-4 rounded-md bg-accent text-accent-foreground"
                >
                  Subscribe
                </button>
              </form>

              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Media Edge Pvt. Ltd. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-sm"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
