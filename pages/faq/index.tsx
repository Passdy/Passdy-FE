import React, { useMemo, useState } from "react";
import { NextPage } from "next";
import cls from "classnames";
import styles from "./faq.module.scss";
import HeaderSellPage from "../../components/HeaderSellPage";
import Collapsible from "../../components/Collapsible";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";

const FAQ: NextPage = () => {
  const [selectedContent, setSelectedContent] = useState<string>("buyer");

  const renderContent = useMemo(() => {
    if (selectedContent === "buyer") {
      return (
        <>
          <div className={styles.bigTitle}>Người Mua</div>
          <Collapsible className="mt-40" title="SHIPPING" borderTop>
            <div>Phạm vi: Toàn quốc</div>
            <div>Thời gian vận chuyển:</div>
            <div>- Nội thành Hà Nội: 1-2 ngày</div>
            <div>- Miền Trung: 3-5 ngày</div>
            <div>- Miền Nam: 5-7 ngày</div>
          </Collapsible>
          <Collapsible title="PHƯƠNG THỨC THANH TOÁN">
            <div>Phương thức thanh toán chuyển tiền ngân hàng.</div>
          </Collapsible>
        </>
      );
    }
    if (selectedContent === "seller") {
      return (
        <>
          <div className={cls(styles.bigTitle)}>Người Bán</div>
          <Collapsible
            className="mt-40"
            title="Các tiêu chí cần lưu ý khi gửi đồ cho Passdy:"
            borderTop
          >
            <div>Passdy khuyến khích bạn gửi:</div>
            <ul>
              <li>Quần áo mới vẫn còn tag hoặc second-hand đã được giặt sạch</li>
              <li>Quần áo còn đầy đủ các thông tin như size, chất liệu</li>
              <li>Quần áo không bị lỗi, ố, sờn màu, gião….</li>
              <li>Quần áo theo mùa, đã được mua trong vòng 3 năm trở lại</li>
              <li>Quần áo hàng hiệu hoặc local brand.</li>
            </ul>
          </Collapsible>
          <Collapsible title="Đồ mình đăng kí bán sẽ được lấy như thế nào?">
            <div>
              Sau khi bạn đã đăng kí tài khoản và điền đầy đủ các thông tin, Passdy sẽ liên hệ với
              bạn và sẽ có nhân viên đến tận nơi nhận đồ.
            </div>
          </Collapsible>
          <Collapsible title="Những đồ không đạt tiêu chuẩn sẽ được xử lý thế nào?">
            <div>
              Sau khi bạn đã đăng kí các thông tin, bạn sẽ được lựa chọn giữa việc nhận lại đồ hoặc
              từ thiện. Nếu những bộ quần áo không đạt tiêu chuẩn và bạn muốn nhận lại, bạn sẽ phải
              trả phí và Passdy sẽ gửi lại cho bạn.
            </div>
          </Collapsible>
        </>
      );
    }
    return (
      <>
        <div className={cls(styles.bigTitle)}>Hoàn Trả</div>
        <Collapsible
          className="mt-40"
          title="Những đồ không đạt tiêu chuẩn sẽ được hoàn trả như thế nào?"
          borderTop
        >
          <div>
            Nếu món đồ bạn mua không phù hợp, bạn có thể liên hệ với Passdy để yêu cầu hoàn trả
            trong vòng 3 ngày kể từ ngày nhận hàng. Hãy kiểm tra chất lượng quần áoáo đúng như lúc
            nhận để có thể được chấp nhận hoàn trả bạn nhé!
          </div>
        </Collapsible>
      </>
    );
  }, [selectedContent]);

  return (
    <LayoutWrapper>
      <div className={styles.wrapper}>
        <HeaderSellPage bigTitle="Câu hỏi thường gặp" smallTitle="" />
        <div className={styles.contentFaq}>
          <div className={styles.leftSide}>
            <div className={styles.bigTitle}>Danh mục</div>
            <span
              onClick={() => setSelectedContent("buyer")}
              className={cls(
                { [styles.activeItem]: selectedContent === "buyer" },
                styles.itemLeft,
                "mt-40",
              )}
            >
              Người Mua
            </span>
            <span
              onClick={() => setSelectedContent("seller")}
              className={cls(
                { [styles.activeItem]: selectedContent === "seller" },
                styles.itemLeft,
                "mt-20",
              )}
            >
              Người Bán
            </span>
            <span
              onClick={() => setSelectedContent("giveback")}
              className={cls(
                { [styles.activeItem]: selectedContent === "giveback" },
                styles.itemLeft,
                "mt-20",
              )}
            >
              Hoán Trả/Đổi hàng
            </span>
          </div>
          <div className={styles.rightSide}>{renderContent}</div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default FAQ;
