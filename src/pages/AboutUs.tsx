import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Target, Eye, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import { useAboutUs } from "@/hooks/useAboutUs";
import { useContactInfo } from "@/hooks/useContactInfo";
import { staticAboutUs, staticContact, getStaticTranslation } from "@/data/staticContent";

const AboutUs = () => {
    const { t, language } = useTranslation();
    const { data: apiData, isLoading } = useAboutUs();
    const { data: contactData } = useContactInfo();
    const lang = language as 'en' | 'fr' | 'ar';

    const getTranslatedValue = (field?: { lang: string; value: string }[]) => {
        if (!field) return '';
        const translation = field.find(t => t.lang === language);
        return translation ? translation.value : (field.find(t => t.lang === 'en')?.value || '');
    };

    const getContactTranslation = (field?: { fr: string; ar: string; en: string }) => {
        if (!field) return '';
        return field[lang] || field.en || field.fr || '';
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/">
                        <Button variant="ghost" className="mb-8">
                            <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                            {t('aboutPage.backToHome')}
                        </Button>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {getTranslatedValue(apiData?.titre) || t('aboutPage.title')}
                        </h1>

                        <div className="space-y-12">
                            {/* Show API content if available, otherwise show static content */}
                            <section>
                                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {apiData?.contenu 
                                        ? getTranslatedValue(apiData.contenu)
                                        : getStaticTranslation(staticAboutUs.content, lang)
                                    }
                                </p>
                            </section>

                            {/* Mission Section */}
                            <section>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.missionTitle')}</h2>
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {apiData?.mission 
                                                ? getTranslatedValue(apiData.mission) 
                                                : getStaticTranslation(staticAboutUs.mission, lang)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Vision Section */}
                            <section>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.visionTitle')}</h2>
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {apiData?.vision 
                                                ? getTranslatedValue(apiData.vision) 
                                                : getStaticTranslation(staticAboutUs.vision, lang)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Values Section */}
                            <section>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.valuesTitle')}</h2>
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {apiData?.valeurs 
                                                ? getTranslatedValue(apiData.valeurs) 
                                                : getStaticTranslation(staticAboutUs.values, lang)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Who We Serve Section */}
                            <section>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Users className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3">{t('aboutPage.whoWeServeTitle')}</h2>
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {apiData?.qui_nous_servons 
                                                ? getTranslatedValue(apiData.qui_nous_servons) 
                                                : getStaticTranslation(staticAboutUs.whoWeServe, lang)
                                            }
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Why Choose Us Section */}
                            <section className="pt-8 border-t border-border">
                                <h2 className="text-2xl font-semibold mb-4">{t('aboutPage.whyChooseTitle')}</h2>
                                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {apiData?.pourquoi_choisir_nous 
                                        ? getTranslatedValue(apiData.pourquoi_choisir_nous) 
                                        : getStaticTranslation(staticAboutUs.whyChooseUs, lang)
                                    }
                                </p>
                            </section>

                            <section className="pt-8 border-t border-border">
                                <h2 className="text-2xl font-semibold mb-4">{t('aboutPage.getInTouchTitle')}</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    {contactData?.message_acceuil 
                                        ? getContactTranslation(contactData.message_acceuil)
                                        : getStaticTranslation(staticContact.welcomeMessage, lang)
                                    }
                                </p>
                                <div className="space-y-2 text-muted-foreground">
                                    <p>Email : {contactData?.email || staticContact.email}</p>
                                    <p>{language === 'fr' ? 'Téléphone 1' : language === 'ar' ? 'هاتف 1' : 'Phone 1'} : {contactData?.telephone_1 || staticContact.phone1}</p>
                                    <p>{language === 'fr' ? 'Téléphone 2' : language === 'ar' ? 'هاتف 2' : 'Phone 2'} : {contactData?.telephone_2 || staticContact.phone2}</p>
                                    <p>{language === 'fr' ? 'Adresse' : language === 'ar' ? 'عنوان' : 'Address'} : {contactData?.adresse 
                                        ? getContactTranslation(contactData.adresse)
                                        : getStaticTranslation(staticContact.address, lang)
                                    }, {contactData?.ville 
                                        ? getContactTranslation(contactData.ville)
                                        : getStaticTranslation(staticContact.city, lang)
                                    }</p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
