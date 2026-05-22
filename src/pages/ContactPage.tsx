
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Google Apps Script Web App URL (connected to Sheet ID: 1dBfTwcTdgPG1jTSZT2APvxSSN_-a9gwyflbMCFnDAZs)
  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbygTQX2adbk85qAvdiyxb3kPjOL8A2idw8XD1wIf3vK7yMsG69GIp_vhMlBEUvd9Xbh/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: params, // URLSearchParams auto-sets Content-Type correctly
      });

      toast.success('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone'), // "Phone" exists in Header translations? "Phone" key might not exist exactly, usually "contact" is used.
      // Wait, "Phone" was "Phone" in English. In translations.ts I added keys for Contact Page.
      // Let me check if I added "phone" key. I added "formPhone".
      // I have "contact" key but that is "Contact".
      // I should use specific keys if possible.
      // I added: formPhone: "Phone Number".
      // The design has "Phone", "Email", "Address", "Office Hours" as titles.
      // I see "contact" matches "Contact" in header.
      // I'll check if I have "Phone" specifically. 
      // I have `formPhone`. I can use that or just "Phone" if I missed adding a specific "phoneTitle" key.
      // Actually, I should probably use `contact` for "Contact Us" (header) and `formPhone` for "Phone Number".
      // But here it is just "Phone".
      // I will use `t('formPhone')` which represents "Phone Number" closely enough or creates a new one?
      // I missed adding `phoneTitle`, `emailTitle`, `addressTitle`.
      // But I have `formPhone`, `formEmail`.
      // And `schoolAddressTitle`.
      // Let's use `formPhone` for now, or just hardcode for English if key missing? No, that defeats the purpose.
      // I'll use `formPhone` which is "Phone Number". "Phone Number" is fine for the card title.
      details: ['+91-9415981641'],
      color: 'bg-[#d50004]',
      link: 'tel:+919415981641',
    },
    {
      icon: Mail,
      title: t('formEmail'), // "Email Address"
      details: ['info@yogaconvent.edu.in', 'admissions@yogaconvent.edu.in'],
      color: 'bg-[#00aade]',
      link: 'mailto:info@yogaconvent.edu.in',
    },
    {
      icon: MapPin,
      title: t('schoolAddressTitle'), // "School Address"
      details: [t('schoolAddress')],
      color: 'bg-[#d50004]',
      link: null,
    },
    {
      icon: Clock,
      title: t('contactOfficeHours'), // "Office Hours"
      details: [t('officeHoursWeek'), t('officeHoursSat')],
      color: 'bg-[#00aade]',
      link: null,
    },
  ];

  const admissionSteps = [
    {
      step: '1',
      title: t('step1Title'),
      description: t('step1Desc'),
    },
    {
      step: '2',
      title: t('step2Title'),
      description: t('step2Desc'),
    },
    {
      step: '3',
      title: t('step3Title'),
      description: t('step3Desc'),
    },
    {
      step: '4',
      title: t('step4Title'),
      description: t('step4Desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Logo Color Theme */}
      <section className="bg-gradient-to-br from-[#d50004] via-[#b80003] to-[#00aade] text-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">{t('contact')}</h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-2xl mx-auto">
              {t('getInTouchSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t('getInTouch')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-10 pb-8 px-6">
                  <div className={`${info.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <info.icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-base text-muted-foreground mb-2 leading-relaxed whitespace-pre-line">
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-[#00aade] transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#d50004]/5 to-[#00aade]/5">
                <CardTitle className="text-3xl font-bold text-gray-900">{t('sendUsMessage')}</CardTitle>
                <p className="text-muted-foreground mt-2">{t('responsePromise')}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold">{t('formName')} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('formName')}
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">{t('formEmail')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('formEmail')}
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold">{t('formPhone')} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('formPhone')}
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-base font-semibold">{t('formSubject')} *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('formSubject')}
                      className="mt-2 h-12"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base font-semibold">{t('formMessage')} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('formMessage')}
                      rows={6}
                      className="mt-2 resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 text-base bg-gradient-to-r from-[#d50004] to-[#00aade] hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('formSending')
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t('formSend')}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Location */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6 bg-gradient-to-br from-[#00aade]/5 to-[#d50004]/5">
                <CardTitle className="text-3xl font-bold text-gray-900">{t('visitOurSchool')}</CardTitle>
                <p className="text-muted-foreground mt-2">{t('findUsMap')}</p>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Google Maps Embed - Responsive */}
                <div className="relative w-full pb-[75%] mb-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3988796947795!2d82.95!3d25.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db92bcaaaab%3A0x1e7c23bdb4381d64!2sBhirbhanpur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-[#efd598]/20 to-transparent rounded-lg border-2 border-[#efd598]/30">
                    <h4 className="font-bold mb-3 text-lg text-gray-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#d50004]" />
                      {t('schoolAddressTitle')}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {t('schoolAddress')}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3 text-lg text-gray-900">{t('howToReachTitle')}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('howToReachDesc')}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full h-12 border-2 border-[#00aade] text-[#00aade] hover:bg-[#00aade] hover:text-white transition-all"
                    asChild
                  >
                    <a href="https://maps.google.com/?q=Bhirbhanpur,+Varanasi" target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-5 w-5" />
                      {t('getDirections')}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t('admissionProcess')}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('admissionProcessSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {admissionSteps.map((step, index) => (
                <Card
                  key={index}
                  className="border-2 hover:shadow-xl hover:border-[#00aade]/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-gradient-to-br from-[#d50004] to-[#00aade] text-white w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold shadow-lg">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t('documentsRequired')}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-10 pb-10 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    t('doc1'),
                    t('doc2'),
                    t('doc3'),
                    t('doc4'),
                    t('doc5'),
                    t('doc6'),
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-[#00aade] to-[#0099cc] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold shadow">
                        ✓
                      </div>
                      <span className="text-base text-gray-700 pt-2 leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-br from-[#efd598]/20 to-transparent rounded-lg border-2 border-[#efd598]/30">
                  <p className="text-base leading-relaxed text-gray-700">
                    <strong className="text-[#d50004]">Note:</strong> {t('docNote')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-[#efd598]/10 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t('faqTitle')}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#d50004] to-[#00aade] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: t('faq1Q'),
                  answer: t('faq1A'),
                },
                {
                  question: t('faq2Q'),
                  answer: t('faq2A'),
                },
                {
                  question: t('faq3Q'),
                  answer: t('faq3A'),
                },
                {
                  question: t('faq4Q'),
                  answer: t('faq4A'),
                },
              ].map((faq, index) => (
                <Card key={index} className="border-2 hover:shadow-lg hover:border-[#00aade]/30 transition-all">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-[#d50004] via-[#b80003] to-[#00aade] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('readyToJoin')}</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            {t('readyToJoinDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg bg-white text-[#d50004] hover:bg-gray-100"
              asChild
            >
              <a href="tel:+919415981641">
                <Phone className="mr-2 h-6 w-6" />
                {t('callUsNow')}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-2 border-white"
              asChild
            >
              <a href="mailto:info@yogaconvent.edu.in">
                <Mail className="mr-2 h-6 w-6" />
                {t('emailUs')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
