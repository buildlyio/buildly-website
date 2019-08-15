import React from "react";
import ContentSection from "./../../components/ContentSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function CorePage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Core"
        subtitle="The Core is a gateway and service discovery system for your right-sized “micro” service and makes building and connecting to Kubernetes Clusters and services a breeze, including standard servers. With the Core you get a light weight Gateway that connects all of your data services, API’s and endpoints to a single easy-to-use URL."
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

export default CorePage;
