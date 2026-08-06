import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Ventures from '@/components/Ventures';
import Journey from '@/components/Journey';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="font-body text-charcoal">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Ventures />
      <Journey />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
