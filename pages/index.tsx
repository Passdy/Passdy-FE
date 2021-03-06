import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import cls from "classnames";
import styles from "../styles/Home.module.scss";
import ScrollItem from "../components/Header/ScrollItem";

const Home: NextPage = () => {
  const [selectedSection, setSelectedSection] = useState<string>("");
  const user = useSelector((state: any) => state.user.value);

  const buyRef = useRef<any>(null);
  const sellRef = useRef<any>(null);
  const roadMapRef = useRef<any>(null);
  const router = useRouter();

  const onClickScroll = (type: string) => {
    if (type === "buy") {
      buyRef?.current.scrollIntoView();
    } else if (type === "sell") {
      sellRef?.current.scrollIntoView();
    } else {
      roadMapRef?.current.scrollIntoView();
    }
  };

  const onBuyNowButton = () => {
    window.location.replace("https://shopee.vn/passdyvn ");
  };

  const onPassNow = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push("/sell-and-donate");
    }
  };

  const isBottom = (el: any, offsetHeight: number) =>
    el.getBoundingClientRect().top <= window.innerHeight &&
    el.getBoundingClientRect().top > -offsetHeight;

  useEffect(() => {
    const eventOnScroll = () => {
      const wrappedElement = document.getElementById("buy-section");

      if (isBottom(wrappedElement, 200)) {
        setSelectedSection("buy-section");
      } else if (isBottom(document.getElementById("sell-section"), 1600)) {
        setSelectedSection("sell-section");
      } else if (isBottom(document.getElementById("roadmap-section"), 300)) {
        setSelectedSection("roadmap-section");
      } else {
        setSelectedSection("");
      }
    };
    document.addEventListener("scroll", eventOnScroll);
    return () => {
      document.removeEventListener("scroll", eventOnScroll);
    };
  }, []);

  // @ts-ignore
  return (
    <>
      <Head>
        <title>Passdy</title>
        <meta name="description" content="Passdy" />
      </Head>
      <ScrollItem selectedSection={selectedSection} onClickScroll={onClickScroll} />
      <div className={styles.homeWrapper}>
        <div className={styles.bannerSection}>
          <div className={styles.contentSection}>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-once="true"
              data-aos-delay="100"
              className={cls(styles.bigTitle, "fade-up")}
            >
              Ch??ng m??nh tin r???ng
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              <span>di???n ????? c??</span> l?? l??m m???i
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              b???n th??n m???t c??ch ti???t ki???m nh???t
            </div>
            <div className={cls(styles.secondaryTitle, "fade-up")}>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="400"
                className="fade-up"
              >
                Kh??ng chi?? ti????t ki????m th????i gian, chi phi?? do??n ?????? va?? mua s????m
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="500"
                className="fade-up"
              >
                Ma?? co??n ti????t ki????m cho m??i tr??????ng cu??a chu??ng ta
              </div>
            </div>
            <a href="https://shopee.vn/passdyvn">
              <button
                data-aos="fade"
                data-aos-easing="linear"
                data-aos-duration="500"
                data-aos-once="true"
                data-aos-delay="1300"
                type="button"
                onClick={onBuyNowButton}
                className={cls(styles.exploreButton, "fade-up", "mt-40")}
              >
                MUA NGAY
              </button>
            </a>
          </div>
          <div
            className={cls(styles.banner, "fade-up")}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="400"
            data-aos-once="true"
            data-aos-delay="600"
          >
            <Image width="1300" height="1200" src="/images/banner.png" />
          </div>
        </div>
        <div id="buy-section" ref={buyRef} className={styles.suitableShop}>
          <div className={styles.contentSectionMobile}>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-once="true"
              data-aos-delay="100"
              className={cls(styles.bigTitle, "fade-up")}
            >
              Ch??ng m??nh tin r???ng
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              <span>di???n ????? c??</span> l?? l??m m???i
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              b???n th??n m???t c??ch ti???t ki???m nh???t
            </div>
            <div className={cls(styles.secondaryTitle, "fade-up")}>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="500"
                className="fade-up"
              >
                {/* eslint-disable-next-line max-len */}
                Kh??ng chi?? ti????t ki????m th????i gian, chi phi?? do??n ?????? va?? mua s????m. Ma?? co??n ti????t ki????m cho m??i
                tr??????ng cu??a chu??ng ta
              </div>
            </div>
          </div>
          <div className={styles.smallHeading}>
            {/* eslint-disable-next-line max-len */}
            Passdy la?? m????t platform ki?? g????i ca??c sa??n ph????m th????i trang giu??p ti????t ki????m cho ba??n va?? m??i
            tr??????ng
          </div>
          <div className={styles.titleSection}>H??????ng t????i th????i trang b????n v????ng</div>
          <div className={styles.cardWrapper} data-aos="fade-in" data-aos-once="true">
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-once="true"
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <img src="/icons/recycle.png" alt="" />
              </div>
              <div className={styles.titleCard}>
                S???n xu???t th???i trang ??ang
                <br />
                ph?? h???y h??? sinh th??i
              </div>
              <div className={styles.descriptionText}>
                M???i chi???c qu???n, ??o s??? ti??u t???n kho???ng <span className="color-primary">291</span>
                <br />
                <span className="color-primary">l??t n?????c</span> v?? th???i ra{" "}
                <span className="color-primary">8 kg kh?? th???i carbon.</span>
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-once="true"
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <img src="/icons/nature.png" alt="" />
              </div>
              <div className={styles.titleCard}>
                Qu???n ??o t???t ??ang b??? v???t
                <br />
                ??i kh??ng th????ng ti???c
              </div>
              <div className={styles.descriptionText}>
                <span className="color-primary">73% l?????ng qu???n ??o </span>
                c?? th??? t??i s??? d???ng ho???c
                <br />
                t??i ch??? l???i ??ang b???
                <span className="color-primary"> ?????t </span>
                ho???c
                <span className="color-primary"> ti??u h???y</span>.
              </div>
            </div>
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-once="true"
              className={styles.card}
            >
              <div className={styles.iconWrapper}>
                <img src="/icons/save.png" alt="" />
              </div>
              <div className={styles.titleCard}>
                K??o d??i tu???i th??? qu???n ??o l??
                <br />
                gi???i ph??p v?? m??i tr?????ng
              </div>
              <div className={styles.descriptionText}>
                Mua m???t m??n ????? c?? s??? gi??p ch??ng ta gi???m
                <br />
                <span className="color-primary">82% l?????ng n?????c v?? kh?? th???i cacbon.</span>
              </div>
            </div>
          </div>
          <div ref={sellRef} className={styles.startSellingBtn}>
            <button onClick={onBuyNowButton} type="button" className={styles.exploreButton}>
              MUA NGAY
            </button>
          </div>
        </div>
        <div className={styles.howToSection}>
          <div className={styles.titleSection}>
            D??? d??ng d???n d???p v?? b??n qu???n ??o c???a b???n c??ng Passdy qua 3 b?????c
          </div>
          <div className={styles.withImageSection}>
            <div className={cls(styles.cardHowTo)} id="sell-section">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className={cls(styles.contentHowTo)}
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <div className={cls(styles.titleCardHowTo)}>
                  <span className={styles.bigNumber}>01</span>
                  <span className={styles.bigTitle}>D???n ????? v?? x???p v??o t??i</span>
                </div>
                <div className={cls(styles.cardItemWrapper)}>
                  <div>
                    Gi???i ph??ng nh???ng m??n ????? ??t d??ng m?? b???n kh??ng m???c hay kh??ng c??n c???m th???y ph?? h???p
                    n???a v?? cho v??o t??i
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
                data-aos-offset="300"
                className={cls(styles.imageHowTow)}
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <img src="/images/packing.png" alt="" />
              </div>
            </div>
            <div className={cls(styles.cardHowTo, "mt-100")}>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className={cls(styles.contentHowTo, "mobile-show")}
              >
                <div className={styles.titleCardHowTo}>
                  <span className={styles.bigNumber}>02</span>
                  <span className={styles.bigTitle}>G???i ????? t???i Passdy</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Ch??? c???n ??i???n c??c th??ng tin v?? c??c m??n ????? c???a b???n s??? ?????n v???i Passdy m???t c??ch
                    nhanh ch??ng (ho??n to??n mi???n ph??)
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                className={cls(styles.imageHowTow)}
                data-aos-once="true"
                data-aos-delay="600"
                data-aos-offset="300"
              >
                <img src="/images/two-boxs.png" alt="" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                className={cls(styles.contentHowTo, "pl-100", "mobile-hide")}
              >
                <div className={styles.titleCardHowTo}>
                  <span className={styles.bigNumber}>02</span>
                  <span className={styles.bigTitle}>G???i ????? t???i Passdy</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Ch??? c???n ??i???n c??c th??ng tin v?? c??c m??n ????? c???a b???n s??? ?????n v???i Passdy m???t c??ch
                    nhanh ch??ng (ho??n to??n mi???n ph??)
                  </div>
                </div>
              </div>
            </div>
            <div className={cls(styles.cardHowTo, "mt-100")}>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                className={cls(styles.contentHowTo)}
                data-aos-once="true"
              >
                <div className={styles.titleCardHowTo}>
                  <span className={styles.bigNumber}>03</span>
                  <span className={styles.bigTitle}>Ph???n c??n l???i ????? Passdy lo</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Passdy s??? x??t duy???t t??i ?????, ch???p ???nh, v?? ????ng b??n s???n ph???m. Sau khi m???t m??n ?????
                    ???????c b??n, b???n c?? th??? r??t ti???n ho???c t??ch ??i???m. T??m hi???u th??m:&ensp;
                    <Link href="/sell-process" passHref>
                      <span className="underline-link">Quy tr??nh b??n</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                className={cls(styles.imageHowTow)}
                data-aos-once="true"
                data-aos-delay="600"
                data-aos-offset="300"
              >
                <img src="/images/step3.png" alt="" />
              </div>
            </div>
          </div>
          <div className={cls("flex-center")}>
            <button
              onClick={onPassNow}
              type="button"
              className={cls(styles.exploreButton, "mt-40", "mb-40")}
            >
              PASS LU??N
            </button>
          </div>
        </div>
        <div className={styles.roadMapSection}>
          <div id="roadmap-section" ref={roadMapRef} className={cls(styles.titleSection, "mt-60")}>
            L??? Tr??nh ph??t tri???n c???a <span className="color-primary">Passdy</span>
          </div>
          <div className={styles.checkLine}>
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <Image width="56px" height="56px" src="/icons/polygon-check.png" />
            </div>
            <div
              className={styles.grayLine}
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            />
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              className={styles.imageWrapper}
            >
              <Image width="56px" height="56px" src="/icons/gray-polygon.png" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              className={styles.grayLine}
            />
            <div
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              className={styles.imageWrapper}
            >
              <Image width="56px" height="56px" src="/icons/gray-polygon.png" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="800"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              className={styles.grayLine}
            />
            <div
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
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
              data-aos-once="true"
              data-aos-offset="0"
              className={styles.cardRoadMap}
            >
              <div className={styles.timeTitle}>Q1- 2022</div>
              <div className={styles.orangeLine} />
              <div className={cls(styles.contentPeriod)}>
                <li>Ph??t tri???n website v?? dashboard</li>
                <li className="mt-20">
                  Thi???t k??? v?? x??y d???ng h??? th???ng k??nh b??n v?? mua qu???n ??o c???a Passdy
                </li>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="1700"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-offset="0"
              className={styles.cardRoadMap}
            >
              <div className={styles.timeTitle}>Q2- 2022</div>
              <div className={styles.orangeLine} />
              <div className={cls(styles.contentPeriod)}>
                <li>Ra m???t h??? th???ng mua b??n ch??nh th???c c???a Passdy</li>
                <li className="mt-20">
                  ?????y m???nh phong tr??o th???i trang b???n v???ng v?? l???i mua s???m v??n minh qua c??c k??nh
                  truy???n th??ng
                </li>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="1900"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-offset="0"
              className={styles.cardRoadMap}
            >
              <div className={styles.timeTitle}>Q3- 2022</div>
              <div className={styles.orangeLine} />
              <div className={cls(styles.contentPeriod)}>
                <li>T??ch h???p c??c ph????ng th???c thanh to??n m???i (Momo v?? Paypal)</li>
                <li className="mt-20">M??? r???ng h??? tr??? v???n chuy???n 63 t???nh th??nh</li>
              </div>
            </div>
            <div
              data-aos="fade"
              data-aos-delay="2100"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-offset="0"
              className={styles.cardRoadMap}
            >
              <div className={styles.timeTitle}>Q4- 2022</div>
              <div className={styles.orangeLine} />
              <div className={cls(styles.contentPeriod)}>
                <li>Ph??t tri???n giao di???n mobile</li>
                <li className="mt-20">Gia t??ng ho??n thi???n v?? ph??t tri???n h??? th???ng</li>
                <li className="mt-20">Ra m???t mua b??n s???n ph???m cho tr??? em & nam gi???i</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
