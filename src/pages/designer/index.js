import React from "react";
import ContentSection from "./../../components/ContentSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function DesignerPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Designer - COMING SOON"
        subtitle="The Designer lets you visually build and connect your brand new API to a templated front-end UI system for rapid data-driven prototyping as you have never seen before. Not only that you can use the data migration Designer to help migrate your monolith application to a service-driven powerhouse."
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

export default DesignerPage;
