import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={2}
            items={[
              {
                title: "Core",
                body:
                  "A gateway and service discovery system for your right-sized “micro” services.",
                image: "https://png.pngtree.com/svg/20161019/196609c29c.png"
              },
              {
                title: "Mesh",
                body:
                  "It helps you manage and maintain data and connections between different services.",
                image: "https://www.shareicon.net/data/256x256/2016/07/25/801550_network_512x512.png"
              },
              {
                title: "Users",
                body:
                  "It allows you to manage users and security access control lists.",
                image:
                  "http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png"
              },
              {
                title: "Templates",
                body: "It allows reusability of workflows in a system.",
                image:
                  "https://icon-library.net/images/sustainability-icon/sustainability-icon-25.jpg"
              },
              {
                title: "Designer - COMING SOON",
                body:
                  "Let's you visually build and connect your brand new API to a templated front-end UI system.",
                image:
                  "https://png2.kisspng.com/sh/276373c7ca16d0fea042be52ae317b38/L0KzQYm3VMAzN6ZmfZH0aYP2gLBuTflvfJZ3gdH7LXTog7rujr10baN7gdVucz3mf773lgRmel5ue9H3cz3sc7F1TfRme5psRdZuc3nqfrb5TcVia2NpTdNrY0m8RoGCTsU1OmY9UKsEMUW1Qoi4WMEzO2k3Tak3cH7q/kisspng-interior-design-services-computer-icons-icon-desig-designer-5ac2d5abc99609.5425889915227181238257.png"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
