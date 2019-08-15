import React from "react";
import ContentSection from "./../../components/ContentSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function MeshPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Mesh"
        subtitle="The Mesh helps you manage and maintain data and service connections between different services.  It’s a join table for your data and communications portal for your services. The data mesh lets you aggregate, combine, and merge data endpoints like it was a simple SQL database."
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

export default MeshPage;
