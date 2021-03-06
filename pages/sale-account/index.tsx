import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import cls from "classnames";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import Select from "react-select";
import styles from "../../styles/SaleAccount.module.scss";
import commonStyles from "../../styles/common.module.scss";
import WithdrawPage from "../../components/SaleAccount/WithdrawPage";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import Breadcrumb from "../../components/Shared/Breadcrumb";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
};
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ITEM_PER_PAGE = 8;

const SaleAccountPage: NextPage = () => {
  const [isWithdrawPage, setIsWithDraw] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [selectedBrand, setSelectedBrand] = useState<{ value: string; label: string }>({
    value: "all",
    label: "All",
  });

  const [categorySelected, setCategorySelected] = useState({
    value: "",
    label: "All",
  });
  const [selectedTime, setSelectedTime] = useState({
    value: "",
    label: "The last one month",
  });
  const [selectedTab, setSelectedTab] = useState<string>("selling");

  useEffect(() => {
    // Fetch items from another resources.
    // const endOffset = itemOffset + ITEM_PER_PAGE;
    setPageCount(Math.ceil(items.length / ITEM_PER_PAGE));
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <LayoutWrapper>
      <div className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <Breadcrumb>
            <Link href="/sell-and-donate" passHref>
              B??n/
            </Link>
            <Link href="/sale-account" passHref>
              <span> B??n & T??? Thi???n</span>
            </Link>
          </Breadcrumb>
          {!isWithdrawPage ? (
            <>
              <div className={styles.accountWrapper}>
                <div className={styles.bigTitle}>T???ng quan t??i kho???n</div>
                <div className={styles.dataTable}>
                  <div className={cls(styles.totalMoneyRow, "d-flex space-between")}>
                    <div className={styles.wrapperMobile}>
                      <div className={styles.mediumTitle}>T???ng gi?? tr???</div>
                      <div className={cls(styles.bigValueTitle, "mt-20")}>10.000.000 VN??</div>
                    </div>
                    <div className={styles.withdrawButtonWrapper}>
                      <button
                        onClick={() => setIsWithDraw(true)}
                        type="button"
                        className={commonStyles.button}
                      >
                        R??T TI???N
                      </button>
                    </div>
                  </div>
                  <div className={styles.strokeLineMb} />
                  <div className={cls("d-flex", styles.lastRowTableWrapper)}>
                    <div className={styles.firstRow}>
                      <div className={styles.mediumTitle}>S??? ????? ???? ????ng b??n</div>
                      <div className={cls(styles.bigValueTitle, "mt-30")}>50</div>
                    </div>
                    <div className={styles.firstRow}>
                      <div className={styles.mediumTitle}>S??? ????? ???? b??n</div>
                      <div className={cls(styles.bigValueTitle, "mt-30")}>10</div>
                    </div>
                    <div className={styles.strokeLineMb} />
                    <div className={styles.lastRow}>
                      <div className={styles.imageWrapper}>
                        <Image src="/icons/green-earth.svg" height={132} width={132} />
                      </div>
                      <div>
                        <div className={styles.mediumTitle}>B???n ???? gi??p gi???m th???i</div>
                        <div className="d-flex mt-20">
                          <div className={styles.twoColumWrapper}>
                            <div className={cls(styles.bigValueTitle)}>16KG</div>
                            <div className={cls(styles.smallText, "mt-20")}>Kh?? th???i CO2</div>
                          </div>
                          <div className={cls(styles.twoColumWrapper, "ml-60")}>
                            <div className={cls(styles.bigValueTitle)}>30l</div>
                            <div className={cls(styles.smallText, "mt-20")}>N?????c s???ch</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.yourItemWrapper}>
                <div className={styles.bigTitle}>Nh???ng m??n ????? c???a b???n</div>
                <div className={styles.navigationWrapper}>
                  <div className="d-flex">
                    <div
                      onClick={() => setSelectedTab("selling")}
                      className={cls(styles.item, {
                        [styles.activeTab]: selectedTab === "selling",
                      })}
                    >
                      ??ang b??n
                    </div>
                    <div
                      onClick={() => setSelectedTab("sold")}
                      className={cls(styles.item, { [styles.activeTab]: selectedTab === "sold" })}
                    >
                      ???? b??n
                    </div>
                  </div>
                  <div className={styles.lineWrapper}>
                    <div
                      className={cls(styles.activeLine, {
                        [styles.selectedSold]: selectedTab === "sold",
                      })}
                    />
                    <div className={styles.breakLine} />
                  </div>
                </div>
                <div className={styles.filterWrapper}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.filterItemWrapper}>
                      <span>Th????ng hi???u</span>
                      <Select
                        styles={customStyles}
                        value={selectedBrand}
                        onChange={(value: any) => setSelectedBrand(value)}
                        options={[]}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </div>
                    <div className={cls(styles.filterItemWrapper, "ml-40")}>
                      <span>Ph??n lo???i</span>
                      <Select
                        onChange={(value: any) => setCategorySelected(value)}
                        styles={customStyles}
                        value={categorySelected}
                        options={[]}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </div>
                    <div className={cls(styles.filterItemWrapper, "ml-40")}>
                      <span>Th???i gian</span>
                      <Select
                        onChange={(value: any) => setSelectedTime(value)}
                        styles={customStyles}
                        value={selectedTime}
                        options={[]}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                      />
                    </div>
                  </div>
                  <div className={cls(styles.rightWrapper)}>
                    <button
                      type="button"
                      className={cls(commonStyles.outlineButton, styles.outlineButton)}
                    >
                      T??m ki???m
                    </button>
                    <button type="button" className={cls(commonStyles.button, "ml-20")}>
                      T???i l???i
                    </button>
                  </div>
                </div>
                <div className={styles.listItemWrapper}>
                  <div className={styles.cardItem}>
                    <div className={styles.cardImageWrapper}>
                      <img src="/icons/heart.svg" className={styles.heartIcon} alt="" />
                      <Image src="/images/example-Tshirt.png" layout="fill" />
                    </div>
                    <div className={styles.nameTitle}>T??n s???n ph???m</div>
                    <div className={styles.priceTitle}>250.000 VN??</div>
                  </div>
                  <div className={styles.cardItem}>
                    <div className={styles.cardImageWrapper}>
                      <img src="/icons/heart.svg" className={styles.heartIcon} alt="" />
                      <Image src="/images/example-Tshirt.png" width={240} height={240} />
                    </div>
                    <div className={styles.nameTitle}>T??n s???n ph???m</div>
                    <div className={styles.priceTitle}>250.000 VN??</div>
                  </div>
                  <div className={styles.cardItem}>
                    <div className={styles.cardImageWrapper}>
                      <img src="/icons/heart.svg" className={styles.heartIcon} alt="" />
                      <Image src="/images/example-Tshirt.png" width={240} height={240} />
                    </div>
                    <div className={styles.nameTitle}>T??n s???n ph???m</div>
                    <div className={styles.priceTitle}>250.000 VN??</div>
                  </div>
                  <div className={styles.cardItem}>
                    <div className={styles.cardImageWrapper}>
                      <img src="/icons/heart.svg" className={styles.heartIcon} alt="" />
                      <Image src="/images/example-Tshirt.png" width={240} height={240} />
                    </div>
                    <div className={styles.nameTitle}>T??n s???n ph???m</div>
                    <div className={styles.priceTitle}>250.000 VN??</div>
                  </div>
                  <div className={styles.cardItem}>
                    <div className={styles.cardImageWrapper}>
                      <img src="/icons/heart.svg" className={styles.heartIcon} alt="" />
                      <Image src="/images/example-Tshirt.png" width={240} height={240} />
                    </div>
                    <div className={styles.nameTitle}>T??n s???n ph???m</div>
                    <div className={styles.priceTitle}>250.000 VN??</div>
                  </div>
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
              </div>
            </>
          ) : (
            <WithdrawPage />
          )}
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SaleAccountPage;
