import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import cls from "classnames";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollItem from "../components/Header/ScrollItem";

const Home: NextPage = () => {
  const [selectedSection, setSelectedSection] = useState<string>("");

  const buyRef = useRef<any>(null);
  const sellRef = useRef<any>(null);
  const roadMapRef = useRef<any>(null);

  const onClickScroll = (type: string) => {
    if (type === "buy") {
      buyRef?.current.scrollIntoView();
    } else if (type === "sell") {
      sellRef?.current.scrollIntoView();
    } else {
      roadMapRef?.current.scrollIntoView();
    }
  };

  const isBottom = (el: any, offsetHeight: number) =>
    el.getBoundingClientRect().top <= window.innerHeight &&
    el.getBoundingClientRect().top > -offsetHeight;

  useEffect(() => {
    document.addEventListener("scroll", () => {
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
    });
  }, []);

  return (
    <>
      <Header />
      <ScrollItem selectedSection={selectedSection} onClickScroll={onClickScroll} />
      <div className={styles.homeWrapper}>
        <div className={styles.bannerSection}>
          <div className={styles.contentSection}>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
              data-aos-once="true"
              data-aos-delay="100"
              className={cls(styles.bigTitle, "fade-up")}
            >
              Chúng mình tin rằng
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
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
              data-aos-duration="300"
              data-aos-once="true"
              className={cls(styles.bigTitle, "fade-up")}
            >
              bản thân một cách tiết kiệm nhất
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
              data-aos-once="true"
              data-aos-delay="400"
              className={cls(styles.secondaryTitle, "fade-up")}
            >
              Không chỉ tiết kiệm thời gian, chi phí dọn đồ và mua sắm
              <br />
              Mà còn tiết kiệm cho môi trường của chúng ta
            </div>
            <button
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-easing="linear"
              data-aos-duration="300"
              data-aos-once="true"
              data-aos-delay="500"
              type="button"
              className={cls(styles.exploreButton, "fade-up")}
            >
              MUA NGAY
            </button>
          </div>
          <div
            className={cls(styles.banner, "fade-up")}
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-delay="300"
          >
            <Image width="890" height="820" src="/images/banner.png" />
          </div>
        </div>
        <div id="buy-section" ref={buyRef} className={styles.suitableShop}>
          <div className={styles.smallHeading}>
            {/* eslint-disable-next-line max-len */}
            PassDy là một platform kí gửi các sản phẩm thời trang giúp tiết kiệm cho bạn và môi
            trường
          </div>
          <div className={styles.titleSection}>Hướng tới thời trang bền vững</div>
          <div className={styles.cardWrapper} data-aos="fade-in" data-aos-once="true">
            <div
              data-aos="zoom-out-left"
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
              data-aos="zoom-out"
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
              data-aos="zoom-out-right"
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
            <button type="button" className={styles.exploreButton}>
              MUA NGAY
            </button>
          </div>
        </div>
        <div className={styles.howToSection}>
          <div className={styles.titleSection}>
            Dễ dàng dọn dẹp và bán quần áo của
            <br />
            bạn cùng Passdy qua 3 bước
          </div>
          <div className={styles.withImageSection}>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className={cls(styles.cardHowTo, "fade-up")}
              id="sell-section"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <div className={styles.contentHowTo}>
                <div className={styles.titleCardHowTo}>
                  <span className={styles.bigNumber}>01</span>
                  <span className={styles.bigTitle}>Dọn đồ và xếp vào túi</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Giải phóng những món đồ ít dùng mà bạn không mặc hay không còn cảm thấy phù hợp
                    nữa và cho vào túi
                  </div>
                </div>
              </div>
              <div className={styles.imageHowTow}>
                <img src="/images/packing.png" alt="" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className={cls(styles.cardHowTo, "mt-100", "fade-up")}
              data-aos-once="true"
            >
              <div className={styles.imageHowTow}>
                <img src="/images/two-girls.png" alt="" />
              </div>
              <div className={cls(styles.contentHowTo, "pl-100")}>
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
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className={cls(styles.cardHowTo, "mt-100", "fade-up")}
              data-aos-once="true"
            >
              <div className={styles.contentHowTo}>
                <div className={styles.titleCardHowTo}>
                  <span className={styles.bigNumber}>03</span>
                  <span className={styles.bigTitle}>Phần còn lại để Passdy lo</span>
                </div>
                <div className={styles.cardItemWrapper}>
                  <div>
                    Passdy sẽ xét duyệt túi đồ, chụp ảnh, và đăng bán sản phẩm. Sau khi một món đồ
                    được bán, bạn có thể rút tiền hoặc tích điểm. Tìm hiểu thêm: Quy trình bán
                  </div>
                </div>
              </div>
              <div className={styles.imageHowTow}>
                <img src="/images/smile-boy.png" alt="" />
              </div>
            </div>
          </div>
          <div className={cls("text-center")}>
            <button type="button" className={styles.exploreButton}>
              PASS LUÔN
            </button>
          </div>
        </div>
        <div className={styles.roadMapSection}>
          <div id="roadmap-section" ref={roadMapRef} className={styles.titleSection}>
            Lộ Trình phát
            <br />
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
      <Footer />
    </>
  );
};
export default Home;
