import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Software Architecture as a Service"
        subtitle="A set of tools that will help your teams to quickly prototype applications and ideas."
        buttonText="Contact us"
        buttonOnClick={() => {
          router.push("/contact-us");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to build faster"
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Contact Us"
        buttonOnClick={() => {
          router.push("/contact");
        }}
      />
    </>
  );
}

export default HomePage;
