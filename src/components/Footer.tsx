import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
// Add WhatsApp SVG icon inline
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.627 1.934 6.6L4 29l7.6-1.934A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.58-5.56-1.67l-.39-.25-4.51 1.15 1.2-4.39-.25-.4A9.97 9.97 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.44c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.83-2.01-.22-.54-.44-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.03 2.82 1.18 3.02c.15.2 2.03 3.1 4.93 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
  </svg>
);
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Sermons', href: '#sermons' },
    { name: 'Contact', href: '#contact' },
  ];

  const ministries = [
    { name: 'Youth Fellowship', href: '#ministries' },
    { name: 'Women\'s Guild', href: '#ministries' },
    { name: 'Men\'s Fellowship', href: '#ministries' },
    { name: 'Children\'s Ministry', href: '#ministries' },
    { name: 'Choir Ministry', href: '#ministries' },
    { name: 'Prayer Ministry', href: '#ministries' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                 <img
    src="/liturgy.png" // Adjust the path if needed
    alt="St Jude's Anglican Logo"
    className="h-8 w-8 object-contain"
  />
              <div className="text-xl font-bold">St Jude's Anglican</div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              A Spirit-filled Family of God, welcoming all to grow in faith, 
              fellowship, and service in the heart of Omole Phase 1, Lagos.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Omole Phase 1, Ikeja, Lagos</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+2348035063704</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">stjudesanglicanomole1@yahoo.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ministries</h3>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href={ministry.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Times</h3>
            <div className="space-y-3 mb-6">
              <div>
                <div className="font-medium text-accent">Holy Communion</div>
                <div className="text-sm text-primary-foreground/80">Sunday 7:00 AM & 10:00 AM</div>
              </div>
              <div>
                <div className="font-medium text-accent">Bible Study</div>
                <div className="text-sm text-primary-foreground/80">Sunday 9:00 AM & Tuesday 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-accent">Prayer Meeting</div>
                <div className="text-sm text-primary-foreground/80">Wednesday 6:00 PM</div>
              </div>
              <div>
                <div className="font-medium text-accent">Youth Fellowship</div>
                <div className="text-sm text-primary-foreground/80">Saturday 5:00 PM</div>
              </div>
            </div>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/60">
              © {currentYear} St Jude's Anglican Church, Omole Phase 1. All rights reserved.
            </div>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span>Made by Solomon</span>
              <a
                href="https://wa.me/2349163854228?text=Hello%20Solomon%2C%20I%20am%20contacting%20you%20from%20St%20Jude%27s%20Anglican%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-green-500 transition-colors"
              >
                <WhatsAppIcon className="h-6 w-6" />
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;