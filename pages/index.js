import Head from "next/head";
import Image from "next/image";
import Navbutton from "../components/Navbutton";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.headingflex}>
        <div>
          <h1 className={homeStyles.mynameletter}>P</h1>
          <h1 className={homeStyles.mynameletter}>i</h1>
          <h1 className={homeStyles.mynameletter}>e</h1>
          <h1 className={homeStyles.mynameletter}>r</h1>
          <h1 className={homeStyles.mynameletter}>r</h1>
          <h1 className={homeStyles.mynameletter}>e</h1>
          <h1 className={homeStyles.mynameletter}>&nbsp;</h1>
          <h1 className={homeStyles.mynameletter}>B</h1>
          <h1 className={homeStyles.mynameletter}>o</h1>
          <h1 className={homeStyles.mynameletter}>r</h1>
          <h1 className={homeStyles.mynameletter}>l</h1>
          <h1 className={homeStyles.mynameletter}>a</h1>
          <h1 className={homeStyles.mynameletter}>g</h1>
          <h1 className={homeStyles.mynameletter}>d</h1>
          <h1 className={homeStyles.mynameletter}>a</h1>
          <h1 className={homeStyles.mynameletter}>n</h1>
        </div>
        <h3 className={homeStyles.myrole}>WEB DEVELOPER</h3>
        <div className={homeStyles.headinglineflex}>
          <div className={homeStyles.headinglinebox}></div>
          <div className={homeStyles.headingline}></div>
          <div className={homeStyles.headinglinebox}></div>
        </div>
        <div className={homeStyles.navtab}>
          <Navbutton tabTitle="PROFILE" />
          <Navbutton tabTitle="PROJECTS" />
          <Navbutton tabTitle="CONTACT ME" />
        </div>
      </div>
    </div>
  );
}
