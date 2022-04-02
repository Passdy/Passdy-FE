import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import Link from "next/link";
import styles from "../../styles/Profile.module.scss";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  return { props: {} };
};

const Profile: NextPage = () => {
  const { data: session } = useSession();

  return (
    <LayoutWrapper>
      <div className={styles.profileWrapper}>
        <div className={styles.leftProfile}>
          <div className={styles.avatarWrapper}>
            <Image src="/images/avatar.png" layout="fill" />
          </div>
          <div className={styles.nameTitle}>{session?.user.email}</div>
          <div className={styles.sinceText}>{session?.user.created_at}</div>
          <div className={styles.wrapperButton}>
            <button
              data-background-color="#000000"
              data-effect="solid"
              data-tip="Tính năng sắp được update trong thời gian tới bạn nha!"
              type="button"
              className={styles.editButton}
            >
              Chỉnh sửa
            </button>
          </div>
          <div onClick={() => signOut({ callbackUrl: "/login" })} className={styles.primaryText}>
            Đăng xuất
          </div>
        </div>
        <div className={styles.rightProfile}>
          <div className={styles.cardData}>
            <div className={styles.itemWrapper}>
              <Link href="/sell-and-donate" passHref>
                Bán và từ thiện
              </Link>
            </div>
            <div className={styles.breakLine} />
            <div className={styles.itemWrapper}>
              <Link href="/faq" passHref>
                Hỗ trợ
              </Link>
              <br />
              <span>Về cách mua, bán và từ thiện</span>
            </div>
          </div>
        </div>
      </div>
      <ReactTooltip />
    </LayoutWrapper>
  );
};

export default Profile;
