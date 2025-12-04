"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import FeatureCardEleven from '@/components/sections/feature/FeatureCardEleven';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Zap, HelpCircle, Mail, Twitter, Linkedin, Github, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="gradientBars"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Webild"
          button={{
            text: "Start Free Trial",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="AI-Powered Website Builder for Modern Teams"
          description="Webild is the ChatGPT for website creation. Let AI handle the heavy lifting while you focus on your vision. Build stunning websites in minutes, not days."
          tag="AI Innovation"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873732785-zsf3yimh.jpg",
              imageAlt: "AI chatbot interface technology"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873733313-tgjoafac.jpg",
              imageAlt: "Modern dashboard interface web builder software"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873733847-ff2tdw6b.jpg",
              imageAlt: "AI automation workflow digital transformation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873734382-yxvsbabk.jpg",
              imageAlt: "Data analytics charts technology metrics"
            }
          ]}
          stackedVariant="card"
          imagePosition="right"
          buttons={[
            {
              text: "Start Building",
              href: "contact"
            },
            {
              text: "Watch Demo",
              href: "#features"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEleven
          title="How Webild Works"
          description="Our AI-powered platform guides you through each step of website creation with intelligent automation and intuitive design."
          tag="AI Workflow"
          tagIcon={Zap}
          features={[
            {
              id: 1,
              title: "Intelligent Design Analysis",
              description: "Tell Webild what you need. Our AI analyzes your requirements, understands your brand, and generates personalized design suggestions instantly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873734959-ybzu7988.jpg",
              imageAlt: "Research planning digital strategy technology"
            },
            {
              id: 2,
              title: "Smart Content Generation",
              description: "AI automatically creates compelling copy, optimizes messaging, and structures content for maximum engagement and conversions.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873735519-pnl50qfo.jpg",
              imageAlt: "Design interface mockup web development"
            },
            {
              id: 3,
              title: "Rapid Development",
              description: "Watch as Webild builds your website in real-time. Code generation, responsive design, and optimization happen automatically.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873736025-pfuf3rwk.jpg",
              imageAlt: "Coding programming development interface"
            },
            {
              id: 4,
              title: "Continuous Optimization",
              description: "AI learns from user behavior and automatically optimizes performance, SEO, and user experience as you scale.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873736508-m6oy1kdx.jpg",
              imageAlt: "Optimization performance analytics metrics"
            }
          ]}
          animationType="entrance-slide"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          usePrimaryButtonImage={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your needs. All plans include AI-powered website building and 24/7 support."
          plans={[
            {
              id: "starter",
              badge: "Starter",
              price: "$29/mo",
              subtitle: "Perfect for freelancers and small projects",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                }
              ],
              features: [
                "Up to 3 websites",
                "AI content generation",
                "Basic analytics",
                "Email support",
                "Community access"
              ]
            },
            {
              id: "professional",
              badge: "Professional",
              badgeIcon: Sparkles,
              price: "$99/mo",
              subtitle: "Best for agencies and growing teams",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited websites",
                "Advanced AI features",
                "Real-time analytics",
                "Priority support",
                "API access",
                "Custom branding"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Shield,
              price: "Custom",
              subtitle: "For large-scale operations",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Everything in Professional",
                "Dedicated account manager",
                "Custom AI training",
                "White-label option",
                "SLA guarantee",
                "Advanced integrations"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="Loved by Innovators"
          description="See how teams are transforming their web development process with Webild."
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson, CEO of TechCorp",
              date: "Date: 15 November 2024",
              title: "Game-changing AI tool",
              quote: "Webild cut our website development time by 80%. What used to take weeks now takes days. Our clients are thrilled with the quality and speed.",
              tag: "Professional Plan",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873737065-nwgfvz02.jpg",
              avatarAlt: "Sarah Johnson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873739596-gxyywlm9.jpg",
              imageAlt: "Successful web project website showcase portfolio"
            },
            {
              id: "2",
              name: "Michael Chen, CTO of InnovateLab",
              date: "Date: 12 November 2024",
              title: "Incredible time savings",
              quote: "The AI understands our design requirements perfectly. It generates code that's clean, efficient, and production-ready. Our team productivity has tripled.",
              tag: "Enterprise Plan",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873737501-fmovyzaj.jpg",
              avatarAlt: "Michael Chen",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873740143-rwpaefjl.jpg",
              imageAlt: "Business growth success metrics achievement"
            },
            {
              id: "3",
              name: "Emily Rodriguez, Marketing Director at GrowthCo",
              date: "Date: 10 November 2024",
              title: "Best investment for our agency",
              quote: "Our clients love how fast we can now deliver beautiful, functional websites. Webild has become our competitive advantage in the market.",
              tag: "Professional Plan",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873738017-sabyuf3u.jpg",
              avatarAlt: "Emily Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873741040-ysrb2lwx.jpg",
              imageAlt: "Digital marketing campaign results success"
            },
            {
              id: "4",
              name: "David Kim, Founder of StartupXYZ",
              date: "Date: 8 November 2024",
              title: "Exactly what we needed",
              quote: "As a non-technical founder, Webild made it possible for me to build a professional website without hiring expensive developers. Simply brilliant.",
              tag: "Starter Plan",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873738649-yn45d0rj.jpg",
              avatarAlt: "David Kim",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873741569-6l2zztyr.jpg",
              imageAlt: "E-commerce platform online store success"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join thousands of businesses building better websites faster with Webild."
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873743196-8rh0npig.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873743678-tdq9dq1f.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873744211-3kagm351.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873744766-0lmnib6p.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873745267-gb5bvbll.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873745738-ibxls3t0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873746227-wzmn1yut.jpg"
          ]
          textboxLayout="default"
          useInvertedBackground="noInvert"
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about Webild and how it can help you build websites faster."
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "How does Webild differ from other website builders?",
              content: "Webild uses advanced AI to understand your needs and automatically generate websites that are optimized for performance and conversions. Unlike traditional builders, you don't manually drag and drop elements - AI handles the heavy lifting while you maintain full creative control."
            },
            {
              id: "2",
              title: "Do I need coding experience to use Webild?",
              content: "No coding experience required. Webild is designed for everyone - from complete beginners to experienced developers. The AI handles all technical aspects while you focus on your vision and business goals."
            },
            {
              id: "3",
              title: "Can I customize designs generated by Webild?",
              content: "Absolutely. Webild generates a starting point that you can fully customize. Adjust colors, fonts, layouts, content, and more. The AI learns from your preferences and improves suggestions over time."
            },
            {
              id: "4",
              title: "What about mobile responsiveness?",
              content: "All websites built with Webild are fully responsive by default. The AI ensures your site looks perfect on desktop, tablet, and mobile devices without any extra effort on your part."
            },
            {
              id: "5",
              title: "Is there a free trial available?",
              content: "Yes, we offer a 14-day free trial with full access to all Professional plan features. No credit card required to get started. See why teams love Webild risk-free."
            },
            {
              id: "6",
              title: "Can I export my website?",
              content: "Yes, you can export your website code at any time. With the Enterprise plan, you get white-label options and full control over your hosting and infrastructure."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873742132-vst5fpjp.jpg"
          imageAlt="AI chatbot helping with website creation"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated"
          description="Get weekly tips, AI insights, and exclusive features delivered to your inbox. No spam, just helpful content."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764873742698-92u2snvu.jpg"
          imageAlt="Newsletter signup"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Webild"
          copyrightText="© 2025 Webild. All rights reserved."
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/webild",
              ariaLabel: "Follow Webild on Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/webild",
              ariaLabel: "Follow Webild on LinkedIn"
            },
            {
              icon: Github,
              href: "https://github.com/webild",
              ariaLabel: "View Webild on GitHub"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}