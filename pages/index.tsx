import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import cls from "classnames";
import styles from "../styles/Home.module.scss";
import ScrollItem from "../components/Header/ScrollItem";

const Home: NextPage = () => {
  const [selectedSection, setSelectedSection] = useState<string>("");

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
    router.push("/sell-and-donate");
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
              Chúng mình tin rằng
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              <span>diện đồ cũ</span> là làm mới
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              bản thân một cách tiết kiệm nhất
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
                Không chỉ tiết kiệm thời gian, chi phí dọn đồ và mua sắm
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="500"
                className="fade-up"
              >
                Mà còn tiết kiệm cho môi trường của chúng ta
              </div>
            </div>
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
              Chúng mình tin rằng
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              <span>diện đồ cũ</span> là làm mới
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
              data-aos-duration="400"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              bản thân một cách tiết kiệm nhất
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
                Không chỉ tiết kiệm thời gian, chi phí dọn đồ và mua sắm. Mà còn tiết kiệm cho môi trường của chúng ta
              </div>
            </div>
          </div>
          <div className={styles.smallHeading}>
            {/* eslint-disable-next-line max-len */}
            Passdy là một platform kí gửi các sản phẩm thời trang giúp tiết kiệm cho bạn và môi
            trường
          </div>
          <div className={styles.titleSection}>Hướng tới thời trang bền vững</div>
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
                Sản xuất thời trang đang
                <br />
                phá hủy hệ sinh thái
              </div>
              <div className={styles.descriptionText}>
                Mỗi chiếc quần, áo sẽ tiêu tốn khoảng <span className="color-primary">291</span>
                <br />
                <span className="color-primary">lít nước</span> và thải ra{" "}
                <span className="color-primary">8 kg khí thải carbon.</span>
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
                Quần áo tốt đang bị vứt
                <br />
                đi không thương tiếc
              </div>
              <div className={styles.descriptionText}>
                <span className="color-primary">73% lượng quần áo </span>
                có thể tái sử dụng hoặc
                <br />
                tái chế lại đang bị
                <span className="color-primary"> đốt </span>
                hoặc
                <span className="color-primary"> tiêu hủy</span>.
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
                Kéo dài tuổi thọ quần áo là
                <br />
                giải pháp vì môi trường
              </div>
              <div className={styles.descriptionText}>
                Mua một món đồ cũ sẽ giúp chúng ta giảm
                <br />
                <span className="color-primary">82% lượng nước và khí thải cacbon.</span>
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
            Dễ dàng dọn dẹp và bán quần áo của bạn cùng Passdy qua 3 bước
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
                  <span className={styles.bigTitle}>Dọn đồ và xếp vào túi</span>
                </div>
                <div className={cls(styles.cardItemWrapper)}>
                  <div>
                    Giải phóng những món đồ ít dùng mà bạn không mặc hay không còn cảm thấy phù hợp
                    nữa và cho vào túi
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
                  <span className={styles.bigTitle}>Gửi đồ tới Passdy</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Chỉ cần điền các thông tin và các món đồ của bạn sẽ đến với Passdy một cách
                    nhanh chóng (hoàn toàn miễn phí)
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
                  <span className={styles.bigTitle}>Gửi đồ tới Passdy</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Chỉ cần điền các thông tin và các món đồ của bạn sẽ đến với Passdy một cách
                    nhanh chóng (hoàn toàn miễn phí)
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
                  <span className={styles.bigTitle}>Phần còn lại để Passdy lo</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Passdy sẽ xét duyệt túi đồ, chụp ảnh, và đăng bán sản phẩm. Sau khi một món đồ
                    được bán, bạn có thể rút tiền hoặc tích điểm. Tìm hiểu thêm:&ensp;
                    <Link href="/sell-process" passHref>
                      <span className="underline-link">Quy trình bán</span>
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
              PASS LUÔN
            </button>
          </div>
        </div>
        <div className={styles.roadMapSection}>
          <div id="roadmap-section" ref={roadMapRef} className={cls(styles.titleSection, "mt-60")}>
            Lộ Trình phát
            triển của <span className="color-primary">Passdy</span>
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
                <li>Phát triển website và dashboard</li>
                <li className="mt-20">
                  Thiết kế và xây dựng hệ thống kênh bán và mua quần áo của Passdy
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
                <li>Ra mắt hệ thống mua bán chính thức của Passdy</li>
                <li className="mt-20">
                  Đẩy mạnh phong trào thời trang bền vững và lối mua sắm văn minh qua các kênh
                  truyền thông
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
                <li>Tích hợp các phương thức thanh toán mới (Momo và Paypal)</li>
                <li className="mt-20">Mở rộng hỗ trợ vận chuyển 63 tỉnh thành</li>
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
                <li>Phát triển giao diện mobile</li>
                <li className="mt-20">Gia tăng hoàn thiện và phát triển hệ thống</li>
                <li className="mt-20">Ra mắt mua bán sản phẩm cho trẻ em & nam giới</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
