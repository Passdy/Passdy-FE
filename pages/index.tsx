import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import cls from "classnames";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => (
  <>
    <Header />
    <div className={styles.homeWrapper}>
      <div
        data-aos="fade"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
        className={styles.bannerSection}
      >
        <div className={styles.contentSection}>
          <div className={styles.bigTitle}>
            At PassDy, we believe
            <br />
            in a <span> sustainable</span>
            <br />
            fashion future.
          </div>
          <div className={styles.secondaryTitle}>
            Thrifting is about more than just finding amazing deals on cuture
            standing for sustainability. The clothes we wear have the power to
            create change.
          </div>
          <button type="button" className={styles.exploreButton}>
            Explore
          </button>
        </div>
        <div className={styles.banner}>
          <Image width="890" height="820" src="/images/banner.png" />
        </div>
      </div>
      <div className={styles.suitableShop}>
        <div className={styles.titleSection}>
          Sustainable Shopping to solve the
          <br />
          Fashion Waste Crisis
        </div>
        <div className={styles.cardWrapper}>
          <div
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <img src="/icons/recycle.png" alt="" />
            </div>
            <div className={styles.titleCard}>
              New clothing production is
              <br />
              hurting the planet.
            </div>
            <div className={styles.descriptionText}>
              One new garment takes 77 gallons of water
              <br />
              and creates 17 Ibs of CO2e
            </div>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="1000"
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <img src="/icons/nature.png" alt="" />
            </div>
            <div className={styles.titleCard}>
              Perfectly good clothing is
              <br />
              being discarded.
            </div>
            <div className={styles.descriptionText}>
              1 in 2 people throw their clothes straight in
              <br />
              the trash.
            </div>
          </div>
          <div
            data-aos="zoom-out-right"
            data-aos-duration="1000"
            className={styles.card}
          >
            <div className={styles.iconWrapper}>
              <img src="/icons/save.png" alt="" />
            </div>
            <div className={styles.titleCard}>
              New clothing production is
              <br />
              hurting the planet.
            </div>
            <div className={styles.descriptionText}>
              Shopping secondhand displahces the need
              <br />
              for new clothing production and diverts
              <br />
              items from landfills.
            </div>
          </div>
        </div>
        <div className={styles.startSellingBtn}>
          <button type="button" className={styles.exploreButton}>
            Start Selling
          </button>
        </div>
      </div>
      <div className={styles.howToSection}>
        <div className={styles.titleSection}>
          Easily pass your lightly used clothes
          <br />
          in 3 simple steps
        </div>
        <div className={styles.withImageSection}>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={styles.cardHowTo}
          >
            <div className={styles.contentHowTo}>
              <div className={styles.titleCardHowTo}>
                <span className={styles.bigNumber}>01</span>
                <span className={styles.bigTitle}>Pack your bag</span>
              </div>
              <div className={styles.cardItemWrapper}>
                <li>
                  Easily navigate and manage style information across all your
                  collections in one place.
                </li>
                <li className="mt-10">
                  Add and manage all style information in libraries.
                </li>
                <li className="mt-10">
                  Add library cards to styles in one click
                </li>
              </div>
            </div>
            <div className={styles.imageHowTow}>
              <img src="/images/packing.png" alt="" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={cls(styles.cardHowTo, "mt-100")}
          >
            <div className={styles.imageHowTow}>
              <img src="/images/two-girls.png" alt="" />
            </div>
            <div className={cls(styles.contentHowTo, "pl-100")}>
              <div className={styles.titleCardHowTo}>
                <span className={styles.bigNumber}>01</span>
                <span className={styles.bigTitle}>Pack your bag</span>
              </div>
              <div className={styles.cardItemWrapper}>
                <li>
                  Easily navigate and manage style information across all your
                  collections in one place.
                </li>
                <li className="mt-10">
                  Add and manage all style information in libraries.
                </li>
                <li className="mt-10">
                  Add library cards to styles in one click
                </li>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={cls(styles.cardHowTo, "mt-100")}
          >
            <div className={styles.contentHowTo}>
              <div className={styles.titleCardHowTo}>
                <span className={styles.bigNumber}>01</span>
                <span className={styles.bigTitle}>Pack your bag</span>
              </div>
              <div className={styles.cardItemWrapper}>
                <li>
                  Easily navigate and manage style information across all your
                  collections in one place.
                </li>
                <li className="mt-10">
                  Add and manage all style information in libraries.
                </li>
                <li className="mt-10">
                  Add library cards to styles in one click
                </li>
              </div>
            </div>
            <div className={styles.imageHowTow}>
              <img src="/images/smile-boy.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.roadMapSection}>
        <div className={styles.titleSection}>
          Clear Roadmap
          <br />
          for clear success
        </div>
        <div className={styles.checkLine}>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-easing="ease-in-sine"
          >
            <Image width="56px" height="56px" src="/icons/polygon-check.png" />
          </div>
          <div
            className={styles.grayLine}
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-easing="ease-in-sine"
          />
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-easing="ease-in-sine"
            className={styles.imageWrapper}
          >
            <Image width="56px" height="56px" src="/icons/gray-polygon.png" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-easing="ease-in-sine"
            className={styles.grayLine}
          />
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            data-aos-easing="ease-in-sine"
            className={styles.imageWrapper}
          >
            <Image width="56px" height="56px" src="/icons/gray-polygon.png" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-easing="ease-in-sine"
            className={styles.grayLine}
          />
          <div
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
            className={styles.imageWrapper}
          >
            <Image width="56px" height="56px" src="/icons/gray-polygon.png" />
          </div>
        </div>
        <div className={styles.cardRoadMapWrapper}>
          <div
            data-aos="fade"
            data-aos-delay="1500"
            data-aos-easing="ease-in-sine"
            data-aos-once="false"
            data-aos-offset="0"
            className={styles.cardRoadMap}
          >
            <div className={styles.timeTitle}>Q1- 2022</div>
            <div className={styles.orangeLine} />
            <div className={cls(styles.contentPeriod)}>
              <li>Create proposal website and sell-dashboard</li>
              <li className="mt-20">
                Commence design and developement of Passdy platform
              </li>
            </div>
          </div>
          <div
            data-aos="fade"
            data-aos-delay="1700"
            data-aos-easing="ease-in-sine"
            data-aos-once="false"
            data-aos-offset="0"
            className={styles.cardRoadMap}
          >
            <div className={styles.timeTitle}>Q2- 2022</div>
            <div className={styles.orangeLine} />
            <div className={cls(styles.contentPeriod)}>
              <li>Launch official website</li>
              <li className="mt-20">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </li>
            </div>
          </div>
          <div
            data-aos="fade"
            data-aos-delay="1900"
            data-aos-easing="ease-in-sine"
            data-aos-once="false"
            data-aos-offset="0"
            className={styles.cardRoadMap}
          >
            <div className={styles.timeTitle}>Q3- 2022</div>
            <div className={styles.orangeLine} />
            <div className={cls(styles.contentPeriod)}>
              <li>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </li>
            </div>
          </div>
          <div
            data-aos="fade"
            data-aos-delay="2100"
            data-aos-easing="ease-in-sine"
            data-aos-once="false"
            data-aos-offset="0"
            className={styles.cardRoadMap}
          >
            <div className={styles.timeTitle}>Q4- 2022</div>
            <div className={styles.orangeLine} />
            <div className={cls(styles.contentPeriod)}>
              <li>
                t is a long established fact that a reader will be distracted by
                the readable content
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
export default Home;
