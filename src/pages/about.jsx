import ContactPage from "../components/ContactPage";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us – Make My Ghar | Best Interior Designers In Pune</title>
        <meta
          name="description"
          content="Learn more about Make My Ghar, Pune's leading interior design company. Discover our mission, vision, and expertise in transforming spaces."
        />
        <meta
          name="keywords"
          content="about Make My Ghar, interior designers in Pune, home design experts, Make My Ghar mission, Make My Ghar vision"
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

      <div>
        <ContactPage />
      </div>
    </>
  );
};

export default AboutUs;