import React, { useEffect, useState } from "react";
import cls from "classnames";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getSession } from "next-auth/react";
import HeaderSellPage from "../../components/HeaderSellPage";
import styles from "../../styles/SellDonate.module.scss";
import commonStyles from "../../styles/common.module.scss";
import UseReasonSection from "../../components/Shared/UseReasonSection/UseReasonSection";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import Breadcrumb from "../../components/Shared/Breadcrumb";

const options = [
  { value: "0", label: "Trong tháng này" },
  { value: "3", label: "Trong 3 tháng gần nhất" },
  { value: "6", label: "Trong 6 tháng gần nhất" },
];

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ITEM_PER_PAGE = 2;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/sell-step",
      },
      props: {},
    };
  }
  return {
    redirect: {
      permanent: false,
      destination: "/add-sell-order",
    },
    props: {},
  };
};

const SellAndDonatePage: NextPage = () => {
  const [selectedFilter] = useState<{ value: string; label: string }>({
    value: "0",
    label: "Trong tháng này",
  });
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const router = useRouter();

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
      <HeaderSellPage
        bigTitle="Túi đồ của bạn đang đến với thời trang bền vững"
        smallTitle="Cùng xem lại các túi đồ bạn đã gửi đến Passdy"
      />
      <div className={styles.yourPackageWrapper}>
        <Breadcrumb>
          <Link href="/sell-and-donate" passHref>
            Bán/
          </Link>
          <Link href="/sell-and-donate" passHref>
            <span> Bán & Từ Thiện</span>
          </Link>
        </Breadcrumb>
        <div>
          <div className={styles.titleLine}>
            <span>Túi dọn đồ của bạn:</span>
            <button
              onClick={() => router.push("add-sell-order")}
              type="submit"
              className={cls(commonStyles.button)}
            >
              PASS ĐỒ KHÁC
            </button>
          </div>
          <div className={styles.filterLine}>
            Thời gian
            <Select styles={customStyles} defaultValue={selectedFilter} options={options} />
          </div>
          <div className={styles.itemWrapper}>
            {[1, 2].map((index) => (
              <div key={index} className={styles.cardPackage}>
                <div className={styles.idPackageColumn}>
                  <div className={styles.titleColumn}>Mã túi #34567</div>
                  <div className={styles.smallText}>Ngày 09/02/2022</div>
                </div>
                <div className={styles.totalNumber}>
                  <div className={styles.titleColumn}>Tổng số đồ</div>
                  <div className={styles.itemNumber}>10</div>
                </div>
                <div className={styles.bigColumnWrapper}>
                  <Image src="/icons/green-earth.svg" width={86} height={108} />
                  <div className={styles.contentBig}>
                    <div className={cls(styles.titleColumn)}>Bạn đã giúp giảm thải</div>
                    <div className="d-flex space-between">
                      <div className={styles.smallItemWrapper}>
                        <div className={styles.itemNumber}>16kg</div>
                        <div className={cls(styles.smallText, "mt-20")}>Khí thải CO2</div>
                      </div>
                      <div className={styles.smallItemWrapper}>
                        <div className={styles.itemNumber}>30l</div>
                        <div className={cls(styles.smallText, "mt-20")}>Nước sạch</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={cls(commonStyles.paginateLine)}>
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
            <div className={styles.passButtonWrapper}>
              <button type="button" className={commonStyles.outlineButton}>
                PASS ĐỒ KHÁC
              </button>
            </div>
          </div>
        </div>
      </div>
      <UseReasonSection />
    </LayoutWrapper>
  );
};

export default SellAndDonatePage;
