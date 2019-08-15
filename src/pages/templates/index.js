import React from "react";
import ContentSection from "./../../components/ContentSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function TemplatesPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Templates"
        subtitle="The Templates plugin for Buildly allows for reuse of workflows in a system, it’s flexible, fast and makes tedious and redundant tasks like navigation, project management, and approvals fun. The template engine lets you create reusable logic in your application to save you time having to rebuild a workflow or a navigation item over and over."
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

export default TemplatesPage;
