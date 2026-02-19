import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactPage = dynamic(() => import("../components/ContactPage"));
const FAQ = dynamic(() => import("@/components/FAQ"));

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

        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L9PDETZMR7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-L9PDETZMR7');
      `,
          }}
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
