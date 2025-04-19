import React from "react";
import ContactForm from "../components/ContactForm";
import ContactPage from "../components/ContactPage";
import FAQ from "@/components/FAQ";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Us – Make My Ghar | Best Interior Designers In Pune</title>
        <meta
          name="description"
          content="Get in touch with Make My Ghar for expert interior design services. Have questions? Our team is ready to assist you. Book a free consultation today."
        />
        <meta
          name="keywords"
          content="contact Make My Ghar, interior design consultation in pune, contact pune interior designers, home design experts in pune, Make My Ghar contact"
        />
      </Head>

      {/* Page Content */}
      <div>
        <ContactPage />
        <FAQ />
      </div>
    </>
  );
};

export default ContactUs;
