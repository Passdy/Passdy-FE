import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/Profile.module.scss";

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

  console.log(session);
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.leftProfile}>
        <div className={styles.avatarWrapper}>
          <Image src="/images/avatar.png" layout="fill" />
        </div>
        <div className={styles.nameTitle}>kekeke</div>
        <div className={styles.sinceText}>Passdi-er từ 15-01-2022</div>
        <div className={styles.wrapperButton}>
          <button type="button" className={styles.editButton}>
            Chỉnh sửa
          </button>
        </div>
        <div className={styles.primaryText}>Gold Tier</div>
      </div>
      <div className={styles.rightProfile}>
        <div className={styles.cardData}>
          <div className={styles.itemWrapper}>Tài khoản bán</div>
          <div className={styles.breakLine} />
          <div className={styles.itemWrapper}>
            Hỗ trợ
            <br />
            <span>Về cách mua, bán và từ thiện</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
