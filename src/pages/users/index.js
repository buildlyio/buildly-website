import React from "react";
import ContentSection from "./../../components/ContentSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function UsersPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Users"
        subtitle="The User plugin allows you to manage users and security access control lists for each of your services in one central location, fast and easy. User management means security, authentication, and authorization for all your OpenAPI endpoints in one interface."
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

export default UsersPage;
