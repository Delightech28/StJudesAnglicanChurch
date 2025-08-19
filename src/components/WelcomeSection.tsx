import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BookOpen, Hand } from 'lucide-react';
import communityImage from '@/assets/community-worship.jpg';
import vicarImg from '@/assets/vicar.jpeg';
import curate2 from '@/assets/curate2.jpeg';
import curate1 from '@/assets/curate1.jpeg';
import warden1 from '@/assets/warden1.jpeg';
import warden2 from '@/assets/warden2.jpeg';
const WelcomeSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Sharing God's love through acts of kindness and care"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful relationships in Christ"
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Growing in faith through God's word"
    },
    {
      icon: Hand,
      title: "Service",
      description: "Serving our community with purpose and joy"
    }
  ];

  return (
    <section id="welcome" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Welcome Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Welcome to Our <span className="text-accent">Family</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At St Jude's Anglican Church, we believe that everyone has a place in God's family. 
              Whether you're new to faith or have been walking with Christ for years, our doors 
              are open and our hearts are ready to welcome you.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us as we worship together, grow in faith, and serve our community with the 
              love of Christ. We're more than a church – we're a family united by God's grace.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-none bg-transparent group hover:bg-card transition-all duration-300">
                  <CardContent className="p-4">
                    <value.icon className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={communityImage}
                alt="Community worship at St Jude's"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        {/* Ministers Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Ministers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {/* Example ministers, replace src and details as needed */}
            {[
              {
                name: "Ven. Clement Ayo Aluko",
                role: "Vicar",
                img: vicarImg
              },
              {
                name: "Rev. Dr. Akintunde Akinlalu",
                role: "Curate",
                img: curate2
              },
              {
                 name: "Rev. Dr. Olufemi Ogunro",
                role: "Curate",
                img: curate1
              },
              {
                name: "Mrs. Laitan Eseigbe",
                role: "Warden",
                img: warden1
              },
              {
                name: "Mr. Moses Adesina-Ola",
                role: "Warden",
                img: warden2
              }
            ].map((minister, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={minister.img}
                  alt={minister.name}
                  className="w-36 h-36 md:w-40 md:h-40 object-cover object-top rounded-full shadow-lg mb-4 border-4 border-accent"
                />
                <div className="text-lg font-semibold text-primary">{minister.name}</div>
                <div className="text-sm text-muted-foreground">{minister.role}</div>
              </div>
            ))}
      </div>
      </div>
        </div>
    </section>
  );
}
export default WelcomeSection;