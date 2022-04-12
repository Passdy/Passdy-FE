import React from "react";
import Link from "next/link";
import cls from "classnames";
import { useRouter } from "next/router";
import Breadcrumb from "../../components/Shared/Breadcrumb";
import styles from "./SellStep.module.scss";
import commonStyles from "../../styles/common.module.scss";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";

const SellStep: React.FC = () => {
  const router = useRouter();

  const onRedirect = () => {
    router.push("/");
  };
  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Breadcrumb>
            <Link href="/sell-and-donate" passHref>
              Bán/
            </Link>
            <Link href="/sell-step" passHref>
              <span> Bán & Từ Thiện</span>
            </Link>
          </Breadcrumb>
          <div className={styles.howToSection}>
            <div className={styles.titleSection}>
              Dễ dàng dọn dẹp và bán quần áo của
              <br />
              bạn cùng Passdy qua 3 bước
            </div>
            <div className={styles.withImageSection}>
              <div className={cls(styles.cardHowTo)} id="sell-section">
                <div className={cls(styles.contentHowTo)}>
                  <div className={cls(styles.titleCardHowTo)}>
                    <span className={styles.bigNumber}>01</span>
                    <span className={styles.bigTitle}>Dọn đồ và xếp vào túi</span>
                  </div>
                  <div className={cls(styles.cardItemWrapper)}>
                    <div>
                      Giải phóng những món đồ ít dùng mà bạn không mặc hay không còn cảm thấy phù
                      hợp nữa và cho vào túi
                    </div>
                  </div>
                </div>
                <div className={cls(styles.imageHowTow)}>
                  <img src="/images/sell-step/packing.png" alt="" />
                </div>
              </div>
              <div className={cls(styles.cardHowTo, "mt-100")}>
                <div className={cls(styles.contentHowTo, "mobile-show")}>
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
                <div className={cls(styles.imageHowTow)}>
                  <img src="/images/sell-step/happy-girls.png" alt="" />
                </div>
                <div className={cls(styles.contentHowTo, "pl-100", "mobile-hide")}>
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
                <div className={cls(styles.contentHowTo)}>
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
                <div className={cls(styles.imageHowTow)}>
                  <img src="/images/sell-step/happy-man.png" alt="" />
                </div>
              </div>
            </div>
            <div className={cls("flex-center", "mt-60")}>
              <button onClick={() => onRedirect} type="button" className={commonStyles.button}>
                PASS LUÔN
              </button>
            </div>
          </div>
          <div className={styles.reason}>
            <div className={styles.suitableShop}>
              <div className={styles.titleSection}>Chọn Passdy vì?</div>
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
                  <div className={styles.titleCard}>Dịch vụ tiện lợi</div>
                  <div className={styles.descriptionText}>
                    Qua các khâu kiểm duyệt, những món đồ đạt chất lượng sẽ được chụp ảnh, đăng bán
                    và vận chuyển bởi Passdy thay bạn
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
                  <div className={styles.titleCard}>Thời trang bền vững</div>
                  <div className={styles.descriptionText}>
                    Sứ mệnh của Passdy là làm giảm lượng chất thải may mặc và kéo dài tuổi thọ thời
                    trang qua tái sử dụng và tái chế
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
                  <div className={styles.titleCard}>Tạo ra điểm cân bằng</div>
                  <div className={styles.descriptionText}>
                    Người dọn đồ tiết kiệm thời gian, người mua đồ tiết kiệm chi phí. Đẹp - tiết
                    kiệm - bảo vệ môi trường
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SellStep;
