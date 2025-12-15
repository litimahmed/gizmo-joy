/**
 * @file ContactSection.tsx
 * @description Minimal contact section for homepage with essential enterprise data.
 */

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";
import { useContactInfo } from "@/hooks/useContactInfo";
import { Button } from "@/components/ui/button";
import { TbBrandTiktok } from "react-icons/tb";
import { staticContact, getStaticTranslation } from "@/data/staticContent";

const ContactSection = () => {
  const { t, language } = useTranslation();
  const { data: contactData } = useContactInfo();

  type TranslatableField = { fr: string; ar: string; en: string } | undefined;
  type Language = "en" | "fr" | "ar";
  const lang = language as Language;

  const getTranslated = (field: TranslatableField) => {
    if (!field) return "";
    return field[lang] || field["en"] || "";
  };

  const getText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      title: {
        en: "Contact Us",
        fr: "Contactez-Nous",
        ar: "اتصل بنا",
      },
      subtitle: {
        en: "Get in touch with our team",
        fr: "Prenez contact avec notre équipe",
        ar: "تواصل مع فريقنا",
      },
      cta: {
        en: "Send us a message",
        fr: "Envoyez-nous un message",
        ar: "أرسل لنا رسالة",
      },
    };
    return texts[key]?.[language] || texts[key]?.en || "";
  };

  // Use API data if available, otherwise use static content
  const displayEmail = contactData?.email || staticContact.email;
  const displayPhone = contactData?.telephone_1 || staticContact.phone1;
  const displayAddress = contactData?.adresse 
    ? getTranslated(contactData.adresse) 
    : getStaticTranslation(staticContact.address, lang);
  const displayCity = contactData?.ville 
    ? getTranslated(contactData.ville)
    : getStaticTranslation(staticContact.city, lang);
  const displayHours = contactData?.horaires || staticContact.hours;

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: displayEmail,
      href: `mailto:${displayEmail}`,
    },
    {
      icon: Phone,
      label: language === "fr" ? "Téléphone" : language === "ar" ? "هاتف" : "Phone",
      value: displayPhone,
      href: `tel:${displayPhone}`,
    },
    {
      icon: MapPin,
      label: language === "fr" ? "Adresse" : language === "ar" ? "عنوان" : "Address",
      value: `${displayAddress}, ${displayCity}`,
      href: "#",
    },
    {
      icon: Clock,
      label: language === "fr" ? "Horaires" : language === "ar" ? "ساعات العمل" : "Hours",
      value: displayHours,
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: contactData?.facebook || staticContact.socialLinks.facebook, label: "Facebook" },
    { icon: Instagram, href: contactData?.instagram || staticContact.socialLinks.instagram, label: "Instagram" },
    { icon: Linkedin, href: contactData?.linkedin || staticContact.socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: contactData?.x || staticContact.socialLinks.twitter, label: "X" },
    contactData?.tiktok && { icon: TbBrandTiktok, href: contactData.tiktok, label: "TikTok" },
  ].filter(Boolean) as { icon: any; href: string; label: string }[];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{getText("title")}</h2>
          <p className="text-lg text-muted-foreground">{getText("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block">{item.label}</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {socialLinks.length > 0 && (
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-border pt-6 mt-6 flex justify-center">
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                {getText("cta")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
