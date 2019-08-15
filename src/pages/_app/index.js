import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import CorePage from "./../core";
import MeshPage from "./../mesh";
import UsersPage from "./../users";
import TemplatesPage from "./../templates";
import DesignerPage from "./../designer";
import AboutPage from "./../about";
import ContactPage from "./../contact";
import DashboardPage from "./../dashboard";
import { Switch, Route, Router } from "./../../util/router.js";
import Divider from "./../../components/Divider";
import Footer from "./../../components/Footer";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="primary"
            spaced={true}
            logo="https://buildly.io/wp-content/uploads/2019/08/cropped-Copy-of-buildly-logo-rabbit-white.png"
          />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/core" component={CorePage} />

            <Route exact path="/mesh" component={MeshPage} />

            <Route exact path="/users" component={UsersPage} />

            <Route exact path="/templates" component={TemplatesPage} />

            <Route exact path="/designer" component={DesignerPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Divider color="light" />
          <Footer
            color="black"
            size="medium"
            logo="https://buildly.io/wp-content/uploads/2019/08/cropped-Copy-of-buildly-logo-rabbit-white.png"
            description="The buildy core is a gateway and service discovery system for your rights sized “micro” service and makes building and connecting to Kubernetes Clusters and services a breeze, as well as standard servers."
            copyright="© buildly Inc"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
