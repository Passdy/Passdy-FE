import React, { useMemo, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import cls from "classnames";
import styles from "./about.module.scss";
import UseReasonSection from "../../components/Shared/UseReasonSection/UseReasonSection";

type selectedPersonTypeCheck = "tree" | "heart" | "lightBulb" | "balance";

const About: NextPage = () => {
  const [selectedPersonType, setSelectedPersonType] = useState<selectedPersonTypeCheck>("tree");

  const [imageUrl, content] = useMemo(() => {
    const fixedData: { [key: string]: any } = {
      heart: {
        url: "heart",
        content:
          "Môi trường đã cho đi quá nhiều và đã đến lúc để chúng ta không chỉ suy nghĩ và hành động vì bản thân. Mà còn vì môi trường! ",
      },
      balance: {
        url: "",
        content: "Chúng mình tin cân bằng là nền tảng cho sự phát triển bền vững và dài lâu!",
      },
      lightBulb: {
        url: "light-bulb",
        content:
          "Cho dù mỗi ngày nhận được một lựa chọn thời trang văn minh, Passdy vẫn sẽ tiếp tục theo đuổi phong cách sống xanh, lan toả ý nghĩa của nền thời trang bền vững",
      },
      tree: {
        url: "tree",
        content:
          "Liên tục làm mới tủ đồ mà vẫn tiết kiệm cho bản thân lẫn môi trường. Passdy không chỉ là một lối mua sắm, mà còn là lối sống văn minh mới!",
      },
    };
    return [fixedData[selectedPersonType].url, fixedData[selectedPersonType].content];
  }, [selectedPersonType]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.primaryTitle}>
        Passdy mang đến giải pháp tiện lợi giúp bạn diện văn minh
      </div>
      <div className={styles.bannerWrapper}>
        <Image src="/images/about/banner.png" layout="responsive" width={1440} height={400} />
      </div>
      <div className={styles.containerWrapper}>
        <UseReasonSection noBg />
        <div className={styles.passdyStory}>
          <div className={styles.titleSection}>Câu chuyện của Passdy</div>
          <div className={styles.cardWrapper}>
            <div className={styles.left}>
              <Image src="/images/about/team-member.png" width={503} height={331} />
            </div>
            <div className={styles.right}>
              <span className={styles.titleCard}>
                NĂM 2018
                <div className={styles.orangeLine} />
              </span>
              <div className={styles.textContent}>
                Ý thức môi trường từ sớm, chúng mình luôn nuôi nấng những ý tưởng và tạo ra các dự
                án giúp bảo vệ môi trường. Khi mới 18 tuổi, chúng mình đã tổ chức hoạt động từ thiện
                để gây quỹ và đóng góp cho những tổ chức bảo vệ môi trường tại Việt Nam. Tuy nhiên
                những đóng góp này chưa tạo ra ảnh hưởng thực sự lớn.
              </div>
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.right}>
              <div className={styles.titleCard}>
                Chúng mình muốn đóng góp đáng kể hơn
                <div className={styles.orangeLine} />
              </div>
              <div className={styles.textContent}>
                Trong 5 năm qua, vấn nạn ô nhiễm bởi ngành công nghiệp thời trang đã dấy lên sự quan
                ngại và thực sự kêu gọi chúng ta phải thay đổi hành vi mua sắm.
                <br />
                Chính vì vậy, chúng mình muốn tạo ra một điểm cân bằng giữa thời trang và môi
                trường. Để trực tiếp đóng góp và truyền cảm hứng đến cho tất cả mọi người!
              </div>
            </div>
            <div className={styles.left}>
              <Image src="/images/about/save-earth.png" width={503} height={280} />
            </div>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.left}>
              <Image src="/images/about/target-board.png" width={300} height={400} />
            </div>
            <div className={styles.right}>
              <div className={styles.titleCard}>
                3 mục tiêu của Passdy
                <div className={styles.orangeLine} />
              </div>
              <div className={styles.textContent}>
                1. Truyền cảm hứng về thời trang bền vững
                <br />
                2. Kết nối và xây dựng cộng đồng “Diện Văn Minh"
                <br />
                3. Tạo ra trải nghiệm mua sắm quần áo cũ tiện lợi nhất tại Việt Nam
              </div>
            </div>
          </div>
        </div>
        <div className={styles.passdyPerson}>
          <div className={styles.titleSection}>Con người Passdy</div>
          <div className={styles.contentWrapper}>
            <div className={styles.selectionTitle}>
              <div
                className={cls({ [styles.activeSelection]: selectedPersonType === "tree" })}
                onClick={() => setSelectedPersonType("tree")}
              >
                Văn minh
              </div>
              <div
                className={cls(
                  { [styles.activeSelection]: selectedPersonType === "lightBulb" },
                  "mt-20",
                )}
                onClick={() => setSelectedPersonType("lightBulb")}
              >
                Hân hoan
              </div>
              <div
                className={cls(
                  { [styles.activeSelection]: selectedPersonType === "balance" },
                  "mt-20",
                )}
                onClick={() => setSelectedPersonType("balance")}
              >
                Cân bằng
              </div>
              <div
                className={cls(
                  { [styles.activeSelection]: selectedPersonType === "heart" },
                  "mt-20",
                )}
                onClick={() => setSelectedPersonType("heart")}
              >
                Môi trường
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image src={`/images/about/${imageUrl}.png`} width={320} height={320} />
            </div>
            <div className={styles.text}>{content}</div>
          </div>
        </div>
        <div className={styles.passdyTeam}>
          <div className={styles.titleSection}>Team Passdy</div>
          <div className={styles.cardTeamWrapper}>
            <div className={styles.cardMember}>
              <Image src="/images/about/namanh.png" width={328} height={467} />
              <div className={styles.blurLayer} />
              <div className={styles.textWrapper}>
                <div className={styles.name}>Lê Nam Anh</div>
                <div className={styles.position}>Project Manager</div>
              </div>
            </div>
            <div className={styles.cardMember}>
              <Image src="/images/about/minhtri.png" width={328} height={467} />
              <div className={styles.blurLayer} />
              <div className={styles.textWrapper}>
                <div className={styles.name}>NGUYỄN ANH TRÍ</div>
                <div className={styles.position}>HEAD OF MARKETING</div>
              </div>
            </div>
            <div className={styles.cardMember}>
              <Image src="/images/about/namanh.png" width={328} height={467} />
              <div className={styles.blurLayer} />
              <div className={styles.textWrapper}>
                <div className={styles.name}>PHẠM MINH HOÀNG</div>
                <div className={styles.position}>WAREHOUSE MANAGER</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
