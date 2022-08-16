import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Faqs from "./Faqs";
import Navbar from "./Navbar";
import Avatar from "../public/avatar.jpg";
import Card from "./Card";
import Testimonial from "./Testimonial";
import Line from "./Line";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>FAQs - Untitled UI</title>
        <meta name="description" content="Recreation of Untitled UI FAQs page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="main">
        <div className="banner main-section">
          <h1>Frequently Asked Questions</h1>
          <p className="banner-p">
            <span className="invis">Everything you need to know about the product and billing. </span>Can{"'"}t
            find
            <br className="invis" /> the answers you{"'"}re looking for? Please{" "}
            <a className="link" href="#">
              chat to our friendly team
            </a>
          </p>
        </div>

        <Faqs />

        <div className="white-rectangle main-section-s">
           <div className="avatar-container avatar-small">
              <Image src={Avatar} alt="avatar picture" className="avatar" />
            </div>
          <div className="white-rectangle-section">
            <div className="avatar-container invis">
              <Image src={Avatar} alt="avatar picture" className="avatar" />
            </div>
            <div className="h4-p">
              <h4>Still have Questions?</h4>
              <p>
                Can{"'"} fint the answers you{"'"}re looking for? Please chat to
                our friendly team
              </p>
            </div>
          </div>
          <a href="#" className="button">
            Get in touch
          </a>
        </div>
        <Card />
        <Testimonial />
        <Line />
      </main>
      <Footer />
    </div>
  );
}
