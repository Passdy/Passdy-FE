import React, { useEffect, useState } from "react";
import cls from "classnames";
import ReactPaginate from "react-paginate";
import Select from "react-select";
import parentStyles from "../../../styles/SaleAccount.module.scss";
import styles from "./WithdrawPage.module.scss";
import commonStyles from "../../../styles/common.module.scss";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
};
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ITEM_PER_PAGE = 6;
const WithdrawPage = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);

  const [selectedTime, setSelectedTime] = useState({
    value: "",
    label: "Trong tháng này",
  });

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + ITEM_PER_PAGE;
    setPageCount(Math.ceil(items.length / ITEM_PER_PAGE));
  }, [itemOffset]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.accountMoney}>
        <span className={parentStyles.bigTitle}>Tài khoản: </span>
        <span className={parentStyles.bigValueTitle}>0 VNĐ</span>
      </div>
      <div className={styles.breakLine} />
      <div className={styles.formWrapper}>
        <div className={styles.formControl}>
          <div className={styles.leftForm}>
            <div className={styles.formItem}>
              <div className={styles.formTitle}>Từ tài khoản</div>
              <input type="text" />
            </div>
            <div className={cls(styles.formItem, "mt-20")}>
              <div className={styles.formTitle}>Đến tài khoản</div>
              <input type="text" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.angleDown} src="/icons/angle-down.svg" alt="" />
            </div>
            <div className={styles.addAccountText}>+ Thêm tài khoản</div>
            <div className={cls(styles.formItem, "mt-20", styles.maxMoneyLine)}>
              <div className={cls(styles.formTitle)}>
                Số tiền tối đa được chuyển
              </div>
              <div className={styles.moneyForm}>0 VND</div>
            </div>
          </div>
          <div className={styles.rightForm}>
            <div className={cls(styles.formItem, "align-start", "h-full")}>
              <div className={styles.formTitle}>Nội dung chuyển</div>
              <textarea rows={4} className={styles.formInput} />
            </div>
          </div>
        </div>
        <div className={styles.formControl}>
          <div className={styles.leftForm}>
            <div className={cls(styles.formItem, "mt-20", styles.moneyNumberRow)}>
              <div className={styles.formTitle}>Số tiền chuyển</div>
              <input type="number" inputMode="numeric" />
              <span className={cls(styles.formTitle, styles.vndSymbol)}>VND</span>
            </div>
            <div className={cls(styles.smallText, "mt-40")}>
              Phí chuyển tiền: xx VND (Money transfer fee is paid by the sender and applied
              according to the current bank fee schedule)
            </div>
          </div>
          <div className={styles.rightForm}>
            <div className={cls(styles.formItem, "mt-20")}>
              <div className={styles.formTitle}>Mật khẩu</div>
              <input type="password" />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.confirmButton} type="submit">
            Xác nhận
          </button>
          <button className={styles.cancelButton} type="button">
            Hủy bỏ
          </button>
        </div>
      </div>
      <div className={styles.filterWrapper}>
        <span className={styles.smallText}>Thời gian</span>
        <Select
          onChange={(value: any) => setSelectedTime(value)}
          styles={customStyles}
          value={selectedTime}
          options={[]}
          className="ml-20"
        />
      </div>
      <div className={styles.tableHistory}>
        <table className={cls(styles.tableSellDetail)}>
          <tr>
            <th>Ngày</th>
            <th>Tên người nhận</th>
            <th>Số tài khoản</th>
            <th>Ngân hàng</th>
            <th>Số tiền chuyển</th>
            <th>Trạng thái</th>
          </tr>
          <tr>
            <td>60</td>
            <td>Nguyễn Khánh Linh</td>
            <td>03705788900</td>
            <td>TPB HANOI</td>
            <td>200.000 VNĐ</td>
            <td>Hoàn thành</td>
          </tr>
          <tr>
            <td>60</td>
            <td>Nguyễn Khánh Linh</td>
            <td>03705788900</td>
            <td>TPB HANOI</td>
            <td>200.000 VNĐ</td>
            <td>Hoàn thành</td>
          </tr>
        </table>
      </div>
      <div className={cls(commonStyles.paginateLine, "mt-40")}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          activeClassName={commonStyles.selected}
          renderOnZeroPageCount={undefined}
        />
      </div>
      <div className={styles.warningWrapper}>
        <div className={styles.title}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src="/icons/orange-warning.svg" alt="" />
          Bạn có thể đặt lệnh chuyển tiền 24/7 trong đó:
        </div>
        <div className={styles.bulletWrapper}>
          <ul>
            <li>
              Các lệnh chuyển tiền 8h-16h00 với lệnh chuyển tiền ra tài khoản ngân hàng sẽ được thưc
              hiện ngay trong ngày giao dịch
            </li>
            <li>
              Các lệnh ngoài khung giờ này sẽ được lưu lại trên hệ thống và thực hiện vào ngày giao
              dịch kế tiếp
            </li>
            <li>Số dư tiền trong tài khoản chỉ bị cắt khỏi tài khoản khi lệnh được thực hiện</li>
            <li>
              Bạn có thể hủy, sửa lệnh đang ở trạng thái “đợi xử lý" (tối đa 15’ sau khi xác nhận
              giao dịch chuyển tiền). Bấm vào icon Hủy/Sửa
            </li>
            <li>
              Bạn nhớ kiểm tra kỹ thông tin tài khoản thụ hưởng nhé. Passdy không chịu trách nhiệm
              kết quả chuyển tiền nếu thông tin thụ hưởng của bạn không chính xác
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WithdrawPage;
