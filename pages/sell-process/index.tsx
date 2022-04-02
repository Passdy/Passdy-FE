import React from "react";
import { NextPage } from "next";
import cls from "classnames";
import Select from "react-select";
import Image from "next/image";
import Link from "next/link";
import ReactTooltip from "react-tooltip";
import styles from "../../styles/SellProcess.module.scss";
import HeaderSellPage from "../../components/HeaderSellPage";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import Breadcrumb from "../../components/Shared/Breadcrumb";

const SellProcess: NextPage = () => (
  <LayoutWrapper>
    <HeaderSellPage
      bigTitle="Cùng xem thời gian bán và mức giá dự kiến cho những món đồ của bạn nhé!"
      smallTitle="Những yếu tố ảnh hưởng như loại thương hiệu, giá niêm yết"
    />
    <div className={styles.sellProcessWrapper}>
      <Breadcrumb>
        <Link href="/sell-and-donate" passHref>
          Bán/
        </Link>
        <Link href="/sell-process" passHref>
          <span> Bán & Từ Thiện</span>
        </Link>
      </Breadcrumb>
      <div className={styles.sellDetail}>
        <div className={styles.cardSellDetail}>
          <div className={styles.bigTitle}>Danh sách bán</div>
          <div className={cls(styles.smallText, "mt-10")}>
            Những món đồ đạt tiêu chuẩn sẽ được đăng bán trong 60-90 ngày. Bạn sẽ thu lại tiền khi
            và cho mỗi sản phẩm đã bán được.
          </div>
          <table className={cls(styles.tableSellDetail, "mt-30")}>
            <tr>
              <th>Thời gian bán</th>
              <th>Loại thương hiệu</th>
            </tr>
            <tr>
              <td>60</td>
              <td className={styles.p50}>
                <div className={styles.boldTitle}>Phổ thông & Local brand</div>
                <div className={cls(styles.smallTitle, "mt-20")}>Levis, H&M, Zara,..</div>
              </td>
            </tr>
            <tr>
              <td>90</td>
              <td className={styles.p50}>
                <div className={styles.boldTitle}>Cao cấp & Thiết kế</div>
                <div className={cls(styles.smallTitle, "mt-20")}>Levis, H&M, Zara,..</div>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.cardSellDetail}>
          <div className={styles.bigTitle}>Chiết khấu bán</div>
          <div className={cls(styles.smallText, "mt-10")}>
            Bạn sẽ nhận theo % giá đăng bán. Những món đồ giá trị càng cao bạn sẽ nhận được càng
            nhiều, giá đăng bán có thể thay đổi.
          </div>
          <table className={cls(styles.tableSellDetail, styles.tableSellDetail2, "mt-30")}>
            <tr>
              <th>Giá đăng bán</th>
              <th>Bạn nhận được</th>
            </tr>
            <tr>
              <td>10,000 VND - 200,000 VND</td>
              <td>3% - 15%</td>
            </tr>
            <tr>
              <td>200,000 VND - 500,000 VND</td>
              <td>15% - 30%</td>
            </tr>
            <tr>
              <td>500,000 VND - 1,000,000 VND</td>
              <td>30% - 60%</td>
            </tr>
            <tr>
              <td>1,000,000 VND - 5,000,000 VND</td>
              <td>60% - 80%</td>
            </tr>
            <tr>
              <td>Trên 5,000,000 VND</td>
              <td>80%</td>
            </tr>
          </table>
        </div>
      </div>
      <div className={styles.sellPricePrediction}>
        <div className={styles.bigTitle}>Giá bán dự kiến</div>
        <div className={cls(styles.smallText, "mt-20")}>
          Việc định giá dựa trên nhiều yếu tố, bao gồm giá niêm yết,
          <br />
          thương hiệu, mùa và chất lượng của từng món đồ.
        </div>
        <div className={styles.selectionCard}>
          <div className={styles.column}>
            <div className={styles.mediumTitle}>Thương hiệu</div>
            <Select placeholder="H&M" options={[]} />
          </div>
          <div className={styles.column}>
            <div className={styles.mediumTitle}>Phân loại</div>
            <Select placeholder="Clothes" options={[]} />
          </div>
          <div className={styles.column}>
            <div className={styles.mediumTitle}>Giá bán dự kiến</div>
            <div className={styles.primaryText}>~100,000 VND</div>
          </div>
        </div>
        <div className={cls(styles.bigTitle, "mt-40")}>Ví dụ</div>
        <div className={cls(styles.exampleCardWrapper)}>
          <div className={styles.exampleCard}>
            <div className={styles.exampleImage}>
              <Image width="150px" height="150px" src="/images/example-Tshirt.png" />
            </div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá bán dự kiến: 105,500VND</div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá trả (15%):</div>
            <div className={cls(styles.primaryText, "mt-10")}>15,750 VND</div>
            <div className={cls(styles.desExample, "mt-10")}>Bán trong vòng: 90 ngày</div>
          </div>
          <div className={styles.exampleCard}>
            <div className={styles.exampleImage}>
              <Image width="150px" height="150px" src="/images/sell-process/skirt.png" />
            </div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá bán dự kiến: 550,000VND</div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá trả (40%):</div>
            <div className={cls(styles.primaryText, "mt-10")}>220,000 VND</div>
            <div className={cls(styles.desExample, "mt-10")}>Bán trong vòng: 90 ngày</div>
          </div>
          <div className={styles.exampleCard}>
            <div className={styles.exampleImage}>
              <Image width="150px" height="150px" src="/images/sell-process/boots.png" />
            </div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá bán dự kiến: 1,200,000 VND</div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá trả (60%)</div>
            <div className={cls(styles.primaryText, "mt-10")}>720,000 VND</div>
            <div className={cls(styles.desExample, "mt-10")}>Bán trong vòng: 90 ngày</div>
          </div>
          <div className={styles.exampleCard}>
            <div className={styles.exampleImage}>
              <Image width="150px" height="150px" src="/images/sell-process/leather-bag.png" />
            </div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá bán dự kiến: 4,500,000 VND</div>
            <div className={cls(styles.titleExample, "mt-10")}>Giá trả (75%)</div>
            <div className={cls(styles.primaryText, "mt-10")}>3,375,000 VND</div>
            <div className={cls(styles.desExample, "mt-10")}>Bán trong vòng: 90 ngày</div>
          </div>
        </div>

        <div className={cls(styles.sellRoadMap)}>
          <div className={cls(styles.bigTitle)}>Lộ trình đăng bán</div>
          <div className={cls(styles.smallText, "mt-20")}>
            You can adjust listing prices at any time except for when items
            <br />
            are available for bids or reserved in someone’s cart.
          </div>
          <div className={cls(styles.wrapperSellRoute)}>
            <div className={styles.itemSellRoute}>
              <div className={styles.iconWrapper}>
                <div style={{ background: "#2FD8A4" }} className={styles.borderImage}>
                  <Image width={24} height={24} src="/icons/sell-process/check.svg" />
                </div>
                <span className={styles.labelText}>Đồ được duyệt</span>
                <div className={styles.grayStroke} />
              </div>
              12 tiếng
              <br />
              <span
                data-background-color="#000000"
                data-effect="solid"
                data-tip="Tính năng sắp được update trong thời gian tới bạn nha!"
                className={styles.importantText}
              >
                Chỉnh sửa giá
              </span>
            </div>
            <div className={styles.itemSellRoute}>
              <div className={styles.iconWrapper}>
                <div style={{ background: "#F0B84F" }} className={styles.borderImage}>
                  <Image width={24} height={24} src="/icons/sell-process/support.svg" />
                </div>
                <span className={styles.labelText}>Đồ được duyệt</span>
                <div className={styles.grayStroke} />
              </div>
              12 tiếng
              <br />
              <span
                data-background-color="#000000"
                data-effect="solid"
                data-tip="Tính năng sắp được update trong thời gian tới bạn nha!"
                className={styles.importantText}
              >
                Điều chỉnh giá
              </span>
            </div>
            <div className={styles.itemSellRoute}>
              <div className={styles.iconWrapper}>
                <div style={{ background: "#E32639" }} className={styles.borderImage}>
                  <Image width={24} height={24} src="/icons/sell-process/label.svg" />
                </div>
                <span className={styles.labelText}>Đồ được duyệt</span>
                <div className={styles.grayStroke} />
              </div>
              Từ 60 - 90 ngày đăng bán
            </div>
            <div className={styles.itemSellRoute}>
              <div className={styles.iconWrapper}>
                <div style={{ background: "#30D8A4" }} className={styles.borderImage}>
                  <Image width={24} height={24} src="/icons/sell-process/box.svg" />
                </div>
                <span className={styles.labelText}>Đồ được duyệt</span>
                <div className={styles.grayStroke} />
              </div>
              Up to 14- day delivery window
            </div>
            <div className={styles.itemSellRoute}>
              <div className={styles.iconWrapper}>
                <div style={{ background: "#A35DB5" }} className={styles.borderImage}>
                  <Image width={24} height={24} src="/icons/sell-process/truck.svg" />
                </div>
                <span className={styles.labelText}>Đồ được duyệt</span>
                <div className={styles.grayStroke} />
              </div>
              14 ngày
              <br />
              <span className={styles.importantText}>
                <Link href="/faq" passHref>
                  Hoàn trả
                </Link>
              </span>
              <div className={cls(styles.iconWrapper, styles.lastItem)}>
                <div style={{ background: "#E04A08" }} className={styles.borderImage}>
                  <Image width={24} height={24} src="/icons/sell-process/dollar.svg" />
                </div>
                <span className={styles.labelText}>Thanh toán</span>
                <div className={styles.grayStroke} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.suitableShop}>
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
    <ReactTooltip />
  </LayoutWrapper>
);

export default SellProcess;
