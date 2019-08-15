import React from "react";
import ContentSection from "./../../components/ContentSection";
import StatsSection from "./../../components/StatsSection";
import TeamBiosSection from "./../../components/TeamBiosSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="We help you build ideas"
        subtitle="Buildy is Software architecture as a service. It's a set of tools that allows teams to build and prototype their products, link real data APIs and ship faster than ever."
      />
      {/* <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      /> */}
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

export default AboutPage;
