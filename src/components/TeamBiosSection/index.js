import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios from "./../TeamBios";
import "./styles.scss";

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios
          people={[
            {
              avatar: "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png",
              name: "Greg Lind",
              role: "CEO",
              bio:
                "Bio",
              twitterUrl: "https://twitter.com/glind",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png",
              name: "Jeferson Moura",
              role: "CTO",
              bio:
                "Bio",
              twitterUrl: "https://twitter.com/jefmouram",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png",
              name: "Karrla Sandstrom",
              role: "COO",
              bio:
                "Bio",
              twitterUrl: "https://twitter.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png",
              name: "Parag Narvekar",
              role: "CPO",
              bio:
                "Bio",
              twitterUrl: "https://twitter.com",
              linkedinUrl: "https://linkedin.com"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
