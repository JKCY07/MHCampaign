import { useState } from 'react';
import { Menu, X, BookOpen, Users, DollarSign, Heart, ChevronRight, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    volunteerType: '',
    otherDetails: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `New Volunteer Signup: ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Volunteer Interest: ${formData.volunteerType}
${formData.otherDetails ? `Additional Details: ${formData.otherDetails}` : ''}
    `.trim();
    
    window.location.href = `mailto:makai.henryxma@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast.success('Thank you for joining the fight! Opening email...');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      volunteerType: '',
      otherDetails: ''
    });
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Platform', id: 'platform' },
    { label: 'Join Us', id: 'join' },
    { label: 'Donate', id: 'donate' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-campaign"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/logo.png" 
                alt="Makai Henry for School Board" 
                className="h-14 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-medium text-charcoal transition-colors hover:text-navy"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => window.open('https://secure.actblue.com/donate/makai-henry-1', '_blank')}
                className="bg-gold hover:bg-gold-600 text-navy font-semibold px-6"
              >
                Donate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-navy"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-2 text-charcoal font-medium hover:text-navy"
                >
                  {link.label}
                </button>
              ))}
              <Button 
                onClick={() => window.open('https://secure.actblue.com/donate/makai-henry-1', '_blank')}
                className="w-full bg-gold hover:bg-gold-600 text-navy font-semibold"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/makai-beach.jpg)' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/90" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-gold font-semibold text-lg mb-4 tracking-wide uppercase">
              Broward County School Board • District 6
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-shadow-lg leading-tight">
              Son of Broward.<br />
              <span className="text-gold">Fighter for Our Schools.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Makai Henry is a substitute teacher, debate coach, and proud product of Broward County schools. 
              He's running to fight for literacy, fair teacher pay, and the future of public education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('join')}
                size="lg"
                className="bg-gold hover:bg-gold-600 text-navy font-bold text-lg px-8 py-6"
              >
                Join the Fight
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={() => window.open('https://secure.actblue.com/donate/makai-henry-1', '_blank')}
                size="lg"
                className="bg-gold hover:bg-gold-600 text-navy font-bold text-lg px-8 py-6"
              >
                Donate Now
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-campaign-lg">
                <img 
                  src="/images/makai-formal.jpg" 
                  alt="Makai Henry speaking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-teal font-semibold text-lg mb-3 uppercase tracking-wide">
                About Makai
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                A Son of Broward, Fighting for Our Future
              </h2>
              <div className="space-y-4 text-slate text-lg leading-relaxed">
                <p>
                  Makai Henry has always been immersed in the school system. A Broward student himself 
                  and graduate of Nova High School, his mother is a union teacher with nearly two decades 
                  of experience. Makai followed her into the classroom, regularly serving as a substitute 
                  teacher and debate coach.
                </p>
                <p>
                  He's experienced first-hand how the school system works—and where it fails our students. 
                  Despite a high graduation rate countywide, nearly half of students are unable to read on 
                  grade level.
                </p>
              </div>
              
              {/* Quote */}
              <blockquote className="mt-8 pl-6 border-l-4 border-gold">
                <p className="text-xl font-serif italic text-navy mb-3">
                  "I'm a son of Broward trying to fight for public education."
                </p>
                <cite className="text-slate not-italic">— Makai Henry</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-24 bg-sand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-lg mb-3 uppercase tracking-wide">
              Our Platform
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Three Pillars for Broward's Future
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Makai's platform boils down to three key ideas that will transform education in Broward County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-campaign hover:shadow-campaign-lg transition-shadow">
              <div className="w-16 h-16 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="text-navy" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Literacy First
              </h3>
              <p className="text-slate leading-relaxed mb-4">
                Give elementary students the one-on-one attention they deserve. Equip them with the 
                literacy skills they need to succeed in education and the workforce.
              </p>
              <blockquote className="text-navy font-medium italic border-l-2 border-gold pl-4">
                "In Broward we have a crisis of literacy unlike any other."
              </blockquote>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-campaign hover:shadow-campaign-lg transition-shadow">
              <div className="w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-teal" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Smaller Classes
              </h3>
              <p className="text-slate leading-relaxed mb-4">
                Dramatically reduce class sizes in elementary education. Too many classrooms are 
                chock full of students who aren't getting the individual attention they need.
              </p>
              <blockquote className="text-navy font-medium italic border-l-2 border-gold pl-4">
                "We need dramatically smaller class sizes in elementary education."
              </blockquote>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-campaign hover:shadow-campaign-lg transition-shadow">
              <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="text-gold-600" size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy mb-4">
                Fair Teacher Pay
              </h3>
              <p className="text-slate leading-relaxed mb-4">
                Teachers' wages should equate to their performance and experience. End the flat pay 
                scales that leave teachers without raises for nearly half their career.
              </p>
              <blockquote className="text-navy font-medium italic border-l-2 border-gold pl-4">
                "You can't support a family on that. We ask teachers to care for our children..."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-lg mb-3 uppercase tracking-wide">
                The Crisis
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Education on the Chopping Block
              </h2>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  The Broward County school district is facing a budget shortfall of anywhere from 
                  <span className="text-gold font-bold"> $90-100 million</span>. County leadership 
                  blames declining enrollment, but their solution is to cut thousands of jobs across 
                  the county.
                </p>
                <p>
                  No one is asking where Broward's students went—they went to charter and private schools. 
                  Broward's leadership wants to lower the quality of education when parents are fleeing 
                  the district in droves.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-4xl font-bold text-gold mb-2">90%+</p>
                  <p className="text-white/80">Graduation Rate</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <p className="text-4xl font-bold text-gold mb-2">~50%</p>
                  <p className="text-white/80">Can't Read on Grade Level</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/makai-speaking.jpg" 
                  alt="Makai Henry at community event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="mt-6 pl-6 border-l-4 border-gold">
                <p className="text-xl font-serif italic text-white/90 mb-3">
                  "That's not how you save public education in Broward—that's how you put it on the chopping block."
                </p>
                <cite className="text-white/60 not-italic">— Makai Henry</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Fight Section */}
      <section id="join" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Content */}
            <div>
              <p className="text-teal font-semibold text-lg mb-3 uppercase tracking-wide">
                Get Involved
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Join the Fight for Our Students
              </h2>
              <p className="text-xl text-slate mb-8 leading-relaxed">
                Change doesn't happen without people like you. Whether you can give an hour or a day, 
                your help makes a difference in this campaign for Broward's future.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="text-navy" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">Make a Difference</h4>
                    <p className="text-slate">Every volunteer hour brings us closer to real change in Broward.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-teal" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">Join the Movement</h4>
                    <p className="text-slate">Be part of a community fighting for public education.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-lg">Local Focus</h4>
                    <p className="text-slate">This is a Broward-first campaign by a son of Broward.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-sand/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-serif font-bold text-navy mb-6">
                Sign Up to Volunteer
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="firstName" className="text-navy font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                      className="mt-1.5 bg-white border-slate-200 focus:border-navy focus:ring-navy"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-navy font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                      className="mt-1.5 bg-white border-slate-200 focus:border-navy focus:ring-navy"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-navy font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-1.5 bg-white border-slate-200 focus:border-navy focus:ring-navy"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-navy font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="mt-1.5 bg-white border-slate-200 focus:border-navy focus:ring-navy"
                    placeholder="(954) 555-0123"
                  />
                </div>

                <div>
                  <Label htmlFor="volunteerType" className="text-navy font-medium">
                    How would you like to help? *
                  </Label>
                  <Select
                    value={formData.volunteerType}
                    onValueChange={(value) => setFormData({ ...formData, volunteerType: value })}
                    required
                  >
                    <SelectTrigger className="mt-1.5 bg-white border-slate-200 focus:border-navy focus:ring-navy">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ballot">Ballot Access</SelectItem>
                      <SelectItem value="web">Web/Technology</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="print">Print Media & Endorsements</SelectItem>
                      <SelectItem value="policy">Policy Research</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.volunteerType === 'other' && (
                  <div>
                    <Label htmlFor="otherDetails" className="text-navy font-medium">
                      Please specify
                    </Label>
                    <Textarea
                      id="otherDetails"
                      value={formData.otherDetails}
                      onChange={(e) => setFormData({ ...formData, otherDetails: e.target.value })}
                      className="mt-1.5 bg-white border-slate-200 focus:border-navy focus:ring-navy"
                      placeholder="Tell us how you'd like to help..."
                      rows={3}
                    />
                  </div>
                )}

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-navy hover:bg-navy-600 text-white font-bold text-lg py-6"
                >
                  Join the Fight
                  <ChevronRight className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-slate text-center">
                  By signing up, you agree to receive campaign updates. 
                  We respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA Section */}
      <section id="donate" className="py-24 bg-gradient-to-br from-navy to-teal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-semibold text-lg mb-3 uppercase tracking-wide">
            Support the Campaign
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Invest in Broward's Future
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Unlike our opponent who dumped $50,000 of his own money into this race, 
            we're powered by grassroots supporters like you. Every dollar helps us reach 
            more voters and fight for public education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => window.open('https://secure.actblue.com/donate/makai-henry-1', '_blank')}
              size="lg"
              className="bg-gold hover:bg-gold-600 text-navy font-bold text-lg px-10 py-6"
            >
              Donate Now
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            Secure donations processed by ActBlue. All contributions are greatly appreciated.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Info */}
            <div>
              <img 
                src="/images/logo.png" 
                alt="Makai Henry for School Board" 
                className="h-20 w-auto mb-6"
              />
              <p className="text-white/70 leading-relaxed">
                A son of Broward, fighting for public education, literacy, and fair teacher pay.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-gold transition-colors">
                    About Makai
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('platform')} className="text-white/70 hover:text-gold transition-colors">
                    Our Platform
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('join')} className="text-white/70 hover:text-gold transition-colors">
                    Join the Fight
                  </button>
                </li>
                <li>
                  <a 
                    href="https://secure.actblue.com/donate/makai-henry-1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/70">
                  <Mail size={18} className="text-gold" />
                  <a href="mailto:makai.henryxma@gmail.com" className="hover:text-gold transition-colors">
                    makai.henryxma@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} className="text-gold" />
                  <span>Broward County, Florida</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-white/60 text-sm uppercase tracking-wide">
              Paid for and approved by Makai Aline Henry for Broward School District 6, Non-Partisan
            </p>
            <p className="text-center text-white/40 text-xs mt-4">
              © {new Date().getFullYear()} Makai Henry for School Board. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
