import React from "react";
import styles from "./UseReasonSection.module.scss";

const UseReasonSection = () => (
  <div className={styles.suitableShop}>
    <div className={styles.container}>
      <div className={styles.titleSection}>Chọn Passdy vì?</div>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="/icons/recycle.png" alt="" />
          </div>
          <div className={styles.titleCard}>Dịch vụ tiện lợi</div>
          <div className={styles.descriptionText}>
            Qua các khâu kiểm duyệt, những món đồ đạt chất lượng sẽ được chụp ảnh, đăng bán và vận
            chuyển bởi Passdy thay bạn
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="/icons/nature.png" alt="" />
          </div>
          <div className={styles.titleCard}>Thời trang bền vững</div>
          <div className={styles.descriptionText}>
            Sứ mệnh của Passdy là làm giảm lượng chất thải may mặc và kéo dài tuổi thọ thời trang
            qua tái sử dụng và tái chế
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <img src="/icons/save.png" alt="" />
          </div>
          <div className={styles.titleCard}>Tạo ra điểm cân bằng</div>
          <div className={styles.descriptionText}>
            Người dọn đồ tiết kiệm thời gian, người mua đồ tiết kiệm chi phí. Đẹp - tiết kiệm - bảo
            vệ môi trường
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UseReasonSection;
