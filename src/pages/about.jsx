import dynamic from "next/dynamic";
import Head from "next/head";

const ContactPage = dynamic(() => import("../components/ContactPage"));

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
      </Head>

      <div>
        <ContactPage />
      </div>
    </>
  );
};

export default AboutUs;