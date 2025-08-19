import Image from "next/image";
import Link from "next/link";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

type Course = {
  title: string;
  description: string;
  image: string;
};

type Plan = {
  name: string;
  price: string;
  cta: string;
  features: string[];
  featured?: boolean;
};

const features: Feature[] = [
  {
    title: "Creed",
    description: "Hadith Range 7",
    icon: "Feature Icon (2).svg",
  },
  {
    title: "Faith",
    description: "Hadith Range 5",
    icon: "Feature Icon (1).svg",
  },
  {
    title: "Purity",
    description: "Hadith Range 12",
    icon: "Feature Icon.svg",
  },
  {
    title: "Hadith Story",
    description: "Hadith Range 31",
    icon: "Feature Icon (3).svg",
  },
  {
    title: "Prayer",
    description: "Hadith Range 38",
    icon: "Feature Icon (4).svg",
  },
  {
    title: "Charity",
    description: "Hadith Range 1",
    icon: "Feature Icon (5).svg",
  },
];

const courses: Course[] = [
  {
    title: "Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo modo facilisis.",
    description:
      "Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut hendrerit blandit neque in tempor.",
    image: "assets/images/Photo.png",
  },
  {
    title: "Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo modo facilisis.",
    description:
      "Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut hendrerit blandit neque in tempor.",
    image: "assets/images/Photo.png",
  },
  {
    title: "Morbi eu risus nulla. Aliquam erat volutp nullam vitae ex id justo modo facilisis.",
    description:
      "Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut hendrerit blandit neque in tempor.",
    image: "assets/images/Photo.png",
  },
];

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$12/PerMonth",
    cta: "Choose Plan",
    features: ["User Dashboard", "Post 3 Ads per week", "Multiple images & videos"],
  },
  {
    name: "Standard",
    price: "$25/PerMonth",
    cta: "Choose Plan",
    features: [
      "User Dashboard",
      "Post 3 Ads per week",
      "Multiple images & videos",
      "Basic customer support",
      "Featured ads",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$49/PerMonth",
    cta: "Choose Plan",
    features: [
       "User Dashboard",
      "Post 3 Ads per week",
      "Multiple images & videos",
      "Basic customer support",
      "Featured ads",
      "Special ads badge",
      "Call to Action in Every Ads",
      "Max 12 team members",
    ],
  },
];

function assetPath(src: string): string {
  if (!src) return src;
  let cleaned = src.replace(/\\/g, "/").trim();
  // Allow remote or data URIs as-is
  if (/^(https?:|data:)/.test(cleaned)) return cleaned;
  // Ensure leading slash for public assets
  if (!cleaned.startsWith("/")) cleaned = `/${cleaned}`;
  // Encode path segments (keep the leading empty segment for root)
  cleaned = cleaned
    .split("/")
    .map((segment, index) => (index === 0 ? segment : encodeURIComponent(segment)))
    .join("/");
  return cleaned;
}

function SectionHeading({ title, subtitle }: { title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-9xl sm:text-3xl font-semibold tracking-tight text-[#333333]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-md text-[#333333]">{subtitle}</p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <Image
              src={assetPath("assets/images/eaalim-logo-2 1.png")}
              alt="Eaalim logo"
              width={166}
              height={92}
              priority
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="hover:text-red-600">Home</Link>
            <Link href="#courses" className="hover:text-red-600">Pricing</Link>
            <Link href="#pricing" className="hover:text-red-600">About Us</Link>
            <Link href="#contact" className="hover:text-red-600">Help</Link>
          </div>
          <div className=" items-center gap-3">
            <a
              href="https://eaalim.com/free-trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl hover:text-[#ffffff] text-[#F53855] border border-[#F53855] px-12 py-2 text-sm shadow-sm hover:bg-red-700 inline-block"
            >
              Free Trial
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 items-center gap-10 py-16 px-4">
          <div>
            <h1 className="text-5xl sm:text-5xl font-medium leading-tight text-gray-900">
            Make everything 
              <br /> simple with <span className="text-9xl sm:text-5xl font-bold leading-tight text-gray-900">Eaalim.</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
            Provide a network for all your needs with ease and fun using <span className="text-[16px] font-medium">LaslesVPN</span> discover interesting features from us.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://eaalim.com/free-trial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block rounded-md bg-[#F53838] text-white px-16 py-4 text-md font-medium hover:bg-red-700"
              >
                <span className="relative z-[1]">Get Started</span>
                <span className="pointer-events-none absolute inset-0 -z-0 rounded-md shadow-[0_12px_30px_-10px_rgba(245,56,56,0.9),0_8px_16px_-12px_rgba(245,56,56,0.6)]" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-16 -left-16 right-0 top-0 bg-red-50 opacity-60 blur-3xl rounded-full" />
            <HeroVideoDialog
              videoSrc={"https://www.youtube.com/embed/ntZq0wIo2ds?si=V6Q7vxeBVMXnWDgk"}
              thumbnailSrc={assetPath("assets/images/Hero Image.png")}
              className="relative mx-auto w-full max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Thematic Hadith Cards */}
      <section id="features" className="py-14">
        <SectionHeading
          title="Thematic Hadith"
          subtitle="Thematic Hadith is a compilation of Hadiths organized not by narrators or chains of transmission, but by topics. This allows for easy acquisition of knowledge on specific aspects of Islam. This compilation can also be helpful for scholars and teachers who wish to provide education on specific topics."
        />
        {/* Video cards */}
        <div className="mt-8 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {["assets/images/Feature Image.png", "assets/images/Feature Image.png", "assets/images/Feature Image.png"].map(
            (thumb, index) => (
              <div key={`feature-${index}`} className="rounded-2xl border max-h-[500px] P-2 bg-white shadow-sm overflow-hidden">
                <HeroVideoDialog
                  videoSrc={"https://www.youtube.com/embed/ntZq0wIo2ds?si=V6Q7vxeBVMXnWDgk"}
                  thumbnailSrc={assetPath(thumb)}
                  className="rounded-xl overflow-hidden p-2 "
                  imageClassName="w-[500px] h-[270px] object-cover rounded-xl mx-auto"
                />
                <p className="p-4 pt-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">You can explore</span> the features
                  that we provide with fun and have their own functions each feature.
                </p>
              </div>
            )
          )}
        </div>
        <div className="mt-16 container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#FF7979] p-6 shadow-sm hover:shadow-md transition-shadow bg-[#FFFCFC] flex items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <Image src={assetPath(item.icon)} alt="" width={64} height={64} />
            </div>
          ))}
               
        </div>
        <div className="mt-10 flex  justify-center">
            <a
              href="https://eaalim.com/free-trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block rounded-md bg-[#F53838] text-white  px-16 py-4 text-md font-medium hover:bg-red-700"
            >
              <span className="relative z-[1]">Get Started</span>
              <span className="pointer-events-none absolute inset-0 -z-0 rounded-md shadow-[0_12px_30px_-10px_rgba(245,56,56,0.9),0_8px_16px_-12px_rgba(245,56,56,0.6)]" />
            </a>
          </div>
       
      </section>

      {/* Testimonials (Certificates) */}
      <section className="py-14 bg-gray-50">
        <SectionHeading title="Our Testimonials" />
        <div className="mt-10 container mx-auto grid md:grid-cols-2 gap-6 px-4">
          {["assets/images/Ira-01-01-01 1.png", "assets/images/Ira-01-01-01 1.png"].map(
            (src, index) => (
              <div key={`certificate-${index}`} className="rounded-xl border bg-white p-3 shadow-sm">
                <Image
                  src={assetPath(src)}
                  alt="Certificate"
                  width={820}
                  height={580}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )
          )}
        </div>
        
      </section>

      {/* Courses */}
      <section id="courses" className="py-14">
        <SectionHeading
          title="Our Courses"
          subtitle="Comprehensive Online Learning for Quran and Islamic Studies"
        />
        <div className="mt-10 container mx-auto max-w-6xl px-4">
          {/* Highlighted course */}
          

          {/* Course cards alternating layout */}
          <div className="grid gap-8">
            {courses.map((c, index) => (
              <div key={`course-${index}`} className="rounded-2xl  p-8 shadow-sm bg-white grid lg:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{c.title}</h3>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">{c.description}</p>
                  <a
                    href="https://eaalim.com/free-trial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="group bg-red-500 hover:bg-red-700 text-white px-10 py-6 text-base font-medium">
                      Read More
                      <ArrowRightIcon
                        className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                        size={16}
                        aria-hidden="true"
                      />
                    </Button>
                  </a>
                </div>
                <Image
                  src={assetPath(c.image)}
                  alt={c.title}
                  width={800}
                  height={600}
                  className={`${index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'} w-full h-auto rounded-xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 bg-gray-50">
        <SectionHeading
          title={<>Choose the plans that&apos;s<br />perfect for your business.</>}
          subtitle="Donec ligula ligula, porta at urna non, faucibus congue urna. Nullam nulla purus, facilisis vitae odio ac, tempus aliquet dolor."
        />
        <div className="mt-10 container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-48  justify-items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`w-[396px] h-[632px] rounded-2xl border p-6 shadow-sm bg-white flex flex-col ${
                  plan.featured ? "ring-1 ring-red-600" : ""
                }`}
              >
                {/* Plan Name in colored box */}
                <div className="bg-[#FF797933] rounded-2xl px-4 py-2 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{plan.name}</h3>
                </div>
                
                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-md font-bold text-[#F53838]">${plan.price.replace('/mo', '')}</div>
                  
                </div>
                
                {/* Separator Line */}
                <div className="w-full h-px bg-[#F5383859] mb-6"></div>
                
                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <button
                  className={`mt-6 w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14">
        <div className="container mx-auto grid lg:grid-cols-2 items-center gap-10 px-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">WHY CHOOSE US?</h3>
            <p className="mt-3 text-sm text-gray-600">
              Our programs are designed by experienced scholars and
              practitioners. We combine modern learning methods with
              traditional authenticity. Study at your own pace with clear
              milestones and supportive mentors.
            </p>
            <button className="mt-4 rounded-md border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">Know more</button>
          </div>
          <Image
            src="/assets/images/why-choose-us.png"
            alt="Student studying"
            width={560}
            height={420}
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Subscribe Now for Beta Special Features!</h3>
              <p className="text-sm text-gray-600 mt-1">Get updates, new classes, and community events.</p>
            </div>
            <form className="flex w-full sm:w-auto items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="rounded-md bg-red-600 text-white px-4 py-2 text-sm hover:bg-red-700" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-100 py-10">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <Image src="/assets/logo-eaalim.png" alt="Eaalim" width={120} height={28} />
            <p className="mt-3 text-gray-600">
              Online institute for Quran, Arabic, and Islamic studies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Programs</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Quran Reading</li>
              <li>Memorization</li>
              <li>Tafsir</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Follow</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} Eaalim Institute. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
