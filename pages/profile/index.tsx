import React, { useCallback, useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Link from "next/link";
import styles from "../../styles/Profile.module.scss";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import { setUser } from "../../store/user";

const Profile: NextPage = () => {
  const user = useSelector((state: any) => state.user.value);
  const router = useRouter();
  const dispatch = useDispatch();

  const signOut = useCallback(() => {
    dispatch(setUser({}));
    Cookies.remove("access_token");
    router.push("/login");
  }, [dispatch, router]);

  useEffect(() => {
    // console.log(storage.getItem("user"));
    // if (!user) {
    //   router.push("/login");
    // }
  }, []);

  return (
    <LayoutWrapper>
      <div className={styles.profileWrapper}>
        <div className={styles.leftProfile}>
          <div className={styles.avatarWrapper}>
            <Image src="/images/avatar.png" layout="fill" />
          </div>
          <div className={styles.nameTitle}>{user?.full_name}</div>
          <div className={styles.sinceText}>Passdi-er từ {user?.created_at}</div>
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
          <div onClick={() => signOut()} className={styles.primaryText}>
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
