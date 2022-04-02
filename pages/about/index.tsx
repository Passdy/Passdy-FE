import React, { useCallback, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import cls from "classnames";
import styles from "./about.module.scss";
import UseReasonSection from "../../components/Shared/UseReasonSection/UseReasonSection";
import HeaderAbout from "../../components/About/Header";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";

type selectedPersonTypeCheck = "tree" | "heart" | "lightBulb" | "balance";

const fixedData: { [key: string]: any } = {
  heart: {
    url: "plant",
    content:
      "Môi trường đã cho đi quá nhiều và đã đến lúc để chúng ta không chỉ suy nghĩ và hành động vì bản thân. Mà còn vì môi trường! ",
  },
  balance: {
    url: "baloon",
    content: "Chúng mình tin cân bằng là nền tảng cho sự phát triển bền vững và dài lâu!",
  },
  lightBulb: {
    url: "creative",
    content:
      "Cho dù mỗi ngày nhận được một lựa chọn thời trang văn minh, Passdy vẫn sẽ tiếp tục theo đuổi phong cách sống xanh, lan toả ý nghĩa của nền thời trang bền vững",
  },
  tree: {
    url: "rocket",
    content:
      "Liên tục làm mới tủ đồ mà vẫn tiết kiệm cho bản thân lẫn môi trường. Passdy không chỉ là một lối mua sắm, mà còn là lối sống văn minh mới!",
  },
};

const About: NextPage = () => {
  const [selectedPersonType, setSelectedPersonType] = useState<selectedPersonTypeCheck>("tree");
  const [fadeInClass, setIsFadeInClass] = useState<boolean>(false);
  const [fixedContent, setFixedContent] = useState<{ url: string; content: string }>(
    fixedData.tree,
  );

  const setSelectedType = useCallback(async (type) => {
    await setIsFadeInClass(true);
    await setSelectedPersonType(type);
    setTimeout(() => {
      setFixedContent(fixedData[type]);
      setIsFadeInClass(false);
    }, 500);
  }, []);

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <HeaderAbout />
        <div className={styles.containerWrapper}>
          <UseReasonSection noBg />
          <div className={styles.passdyStory}>
            <div className={styles.storyBannerWrapper}>
              <img className={styles.halfCircle} alt="" src="/images/about/half-circle.png" />
              <img className={styles.bubble} alt="" src="/images/about/bubble.png" />
              <div className={styles.storyTitle}>Câu chuyện của Passdy</div>
              <div className={styles.bgTeamWrapper}>
                <Image src="/images/about/bg-team.png" width={715} height={500} />
              </div>
            </div>
            <div className={styles.cardStoryWrapper}>
              <div className={styles.cardStory}>
                <div className={styles.iconWrapper}>
                  <Image src="/images/about/save-eco.png" height={140} width={140} />
                </div>
                <div className={styles.contentStory}>
                  <div className={styles.titleCardStory}>Năm 2018</div>
                  <div className="mt-20">
                    Ý thức môi trường từ sớm, chúng mình luôn nuôi nấng những ý tưởng và tạo ra các
                    dự án giúp bảo vệ môi trường. Khi mới 18 tuổi, chúng mình đã tổ chức hoạt động
                    từ thiện để gây quỹ và đóng góp cho những tổ chức bảo vệ môi trường tại Việt
                    Nam. Tuy nhiên những đóng góp này chưa tạo ra ảnh hưởng thực sự lớn.
                  </div>
                </div>
              </div>
              <div className={styles.cardStory}>
                <div className={styles.iconWrapper}>
                  <Image src="/images/about/heart-money.png" height={140} width={140} />
                </div>
                <div className={styles.contentStory}>
                  <div className={styles.titleCardStory}>Chúng mình muốn đóng góp đáng kể hơn</div>
                  <div className="mt-20">
                    Trong 5 năm qua, vấn nạn ô nhiễm bởi ngành công nghiệp thời trang đã dấy lên sự
                    quan ngại và thực sự kêu gọi chúng ta phải thay đổi hành vi mua sắm. Chính vì
                    vậy, chúng mình muốn tạo ra một điểm cân bằng giữa thời trang và môi trường. Để
                    trực tiếp đóng góp và truyền cảm hứng đến cho tất cả mọi người!
                  </div>
                </div>
              </div>
              <div className={styles.cardStory}>
                <div className={styles.iconWrapper}>
                  <Image src="/images/about/target-board.png" height={140} width={140} />
                </div>
                <div className={styles.contentStory}>
                  <div className={styles.titleCardStory}>3 mục tiêu của Passdy</div>
                  <div className="mt-20">
                    <div className={styles.noteLine}>
                      <img src="images/about/enter-icon.png" alt="" />
                      Truyền cảm hứng về thời trang bền vững
                    </div>
                    <div className={styles.noteLine}>
                      <img src="images/about/enter-icon.png" alt="" />
                      Truyền cảm hứng về thời trang bền vững
                    </div>
                    <div className={styles.noteLine}>
                      <img src="images/about/enter-icon.png" alt="" />
                      Truyền cảm hứng về thời trang bền vững
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.passdyPerson}>
            <div className={styles.wrapperTitle}>
              <div className={styles.primaryLine} />
              <span>Con Người Passdy</span>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.selectionTitle}>
                <div
                  className={cls({ [styles.activeSelection]: selectedPersonType === "tree" })}
                  onClick={() => setSelectedType("tree")}
                >
                  Văn minh
                </div>
                <div
                  className={cls(
                    { [styles.activeSelection]: selectedPersonType === "lightBulb" },
                    "mt-20",
                  )}
                  onClick={() => setSelectedType("lightBulb")}
                >
                  Hân hoan
                </div>
                <div
                  className={cls(
                    { [styles.activeSelection]: selectedPersonType === "balance" },
                    "mt-20",
                  )}
                  onClick={() => setSelectedType("balance")}
                >
                  Cân bằng
                </div>
                <div
                  className={cls(
                    { [styles.activeSelection]: selectedPersonType === "heart" },
                    "mt-20",
                  )}
                  onClick={() => setSelectedType("heart")}
                >
                  Môi trường
                </div>
              </div>
              <div
                className={cls(styles.textImageWrapper, {
                  [styles.hiddenClass]: fadeInClass,
                })}
              >
                <div className={styles.imageWrapper}>
                  <Image src={`/images/about/${fixedContent.url}.png`} width={280} height={280} />
                </div>
                <div className={styles.text}>{fixedContent.content}</div>
              </div>
            </div>
          </div>
          <div className={styles.passdyTeam}>
            <div className={styles.titleSection}>Team Passdy</div>
            <div className={styles.cardTeamWrapper}>
              <div
                style={{ backgroundImage: "url(images/about/namanh.png)" }}
                className={styles.cardMember}
              >
                <div className={styles.blurLayer} />
                <div className={styles.textWrapper}>
                  <div className={styles.name}>Lê Nam Anh</div>
                  <div className={styles.position}>Phụ trách dự án</div>
                  <div className={styles.hiddenText} />
                </div>
              </div>
              <div
                style={{ backgroundImage: "url(images/about/minhtri.png)" }}
                className={styles.cardMember}
              >
                <div className={styles.blurLayer} />
                <div className={styles.textWrapper}>
                  <div className={styles.name}>Nguyễn Anh Trí</div>
                  <div className={styles.position}>Phụ trách truyền thông</div>
                  <div className={styles.hiddenText} />
                </div>
              </div>
              <div
                style={{ backgroundImage: "url(images/about/minhhoang.png)" }}
                className={styles.cardMember}
              >
                <div className={styles.blurLayer} />
                <div className={styles.textWrapper}>
                  <div className={styles.name}>Phạm Minh HOÀNG</div>
                  <div className={styles.position}>Phụ trách kho vận</div>
                  <div className={styles.hiddenText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default About;
