import React, { useMemo, useState } from "react";
import cls from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import { NextPage } from "next";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Login.module.scss";
import CheckSvg from "../../components/Icons/CheckSvg";
import AuthServices from "../../services/AuthServices";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import SubmitButton from "../../components/Shared/SubmitButton";

type Inputs = {
  password: string;
  fullname: string;
  email: string;
};

const SignUpPage: NextPage = () => {
  const [isShowPassWord, setIsShowPassWord] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  const passwordInput = watch("password");
  const [isValidLength, isHasSpecial, isHasNumber] = useMemo(
    () => [
      /^.{8,}$/.test(passwordInput),
      /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(passwordInput),
      /.*[0-9].*/.test(passwordInput),
    ],
    [passwordInput],
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const formData = {
      username: data.fullname,
      password: data.password,
      rePassword: data.password,
      email: data.email,
    };
    AuthServices.register(formData)
      .then(() => {
        toast.success("Đăng ký tài khoản thành công! Kiểm tra email của bạn.");
        router.push("/login");
      })
      .catch((e) => {
        if (e.response.data.key === "EMAIL_EXIST") {
          setError("email", {
            type: "manual",
            message: "Email đã tồn tại.",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <LayoutWrapper>
      <div className={styles.mainWrapper}>
        <div className={styles.leftSide}>
          <div className={styles.bigTitle}>Thành viên mới!</div>
          <div className={styles.smallTitle}>
            Chào mừng bạn đến mới cộng đồng “Diện văn minh" của Passdy
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formWrapper}>
              <div className={styles.smallTitle}>Họ tên</div>
              <input
                className={styles.input}
                placeholder="Nhập họ tên"
                type="text"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <div className={styles.errorLine}>
                  <Image width={16} height={16} src="/icons/red-warning.svg" />
                  <span>{errors.fullname?.type === "required" && "Họ tên là bắt buộc!"}</span>
                </div>
              )}

              <div className={cls(styles.smallTitle, "mt-40")}>Thông tin đăng nhập</div>
              <input
                className={styles.input}
                {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                placeholder="Email"
                type="text"
              />
              {errors.email && (
                <div className={styles.errorLine}>
                  <Image width={16} height={16} src="/icons/red-warning.svg" />
                  <span>
                    {errors.email?.type === "required" && "Email là bắt buộc!"}
                    {errors.email?.type === "manual" && "Email đã tồn tại."}
                    {errors.email?.type === "pattern" && "Email không hợp lệ!"}
                  </span>
                </div>
              )}
              <div className={styles.formItem}>
                <input
                  className={cls(styles.input, "mt-20")}
                  placeholder="Password"
                  type={isShowPassWord ? "text" : "password"}
                  {...register("password", { required: true })}
                />
                <svg
                  onClick={() => setIsShowPassWord(!isShowPassWord)}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2495 20.9996C20.151 20.9998 20.0534 20.9804 19.9624 20.9427C19.8714 20.905 19.7888 20.8496 19.7193 20.7798L3.21931 4.27976C3.0846 4.13797 3.01061 3.94915 3.01311 3.75358C3.01561 3.55801 3.09442 3.37115 3.23272 3.23285C3.37102 3.09455 3.55787 3.01575 3.75345 3.01325C3.94902 3.01074 4.13783 3.08473 4.27963 3.21945L20.7796 19.7194C20.8844 19.8243 20.9558 19.9579 20.9847 20.1034C21.0136 20.2488 20.9988 20.3996 20.9421 20.5366C20.8853 20.6736 20.7892 20.7907 20.666 20.8731C20.5427 20.9555 20.3978 20.9995 20.2495 20.9996Z"
                    fill="#707070"
                  />
                  <path
                    d="M11.9835 17.9996C10.0387 17.9996 8.16322 17.424 6.40916 16.2887C4.81213 15.2574 3.37447 13.7804 2.25135 12.023V12.0193C3.18603 10.6801 4.20978 9.54757 5.30947 8.63445C5.31942 8.62613 5.32753 8.61584 5.3333 8.60423C5.33907 8.59262 5.34237 8.57993 5.34298 8.56698C5.3436 8.55403 5.34152 8.54109 5.33688 8.52898C5.33225 8.51688 5.32515 8.50586 5.31603 8.49664L4.38228 7.56429C4.36569 7.54756 4.34341 7.5377 4.31987 7.53665C4.29633 7.53561 4.27326 7.54347 4.25525 7.55867C3.08713 8.54304 2.00291 9.75054 1.01713 11.1643C0.847525 11.4077 0.75412 11.6961 0.748778 11.9927C0.743436 12.2893 0.8264 12.5809 0.987126 12.8302C2.2251 14.7676 3.81838 16.3993 5.594 17.5482C7.59322 18.8434 9.74478 19.4996 11.9835 19.4996C13.192 19.4959 14.3918 19.2967 15.5367 18.9099C15.5518 18.9048 15.5653 18.8959 15.576 18.8841C15.5867 18.8723 15.5942 18.8579 15.5979 18.8424C15.6015 18.8268 15.6011 18.8106 15.5967 18.7953C15.5923 18.78 15.584 18.766 15.5728 18.7548L14.5612 17.7432C14.5379 17.7205 14.5091 17.7042 14.4776 17.696C14.4462 17.6878 14.4131 17.6879 14.3817 17.6963C13.5983 17.8981 12.7925 18 11.9835 17.9996Z"
                    fill="#707070"
                  />
                  <path
                    d="M23.0076 11.184C21.7673 9.26586 20.1581 7.63648 18.3543 6.47164C16.3588 5.18164 14.1557 4.49961 11.9835 4.49961C10.7879 4.50173 9.6012 4.70503 8.47306 5.10101C8.45803 5.10624 8.44458 5.11521 8.43398 5.12708C8.42337 5.13895 8.41596 5.15332 8.41244 5.16884C8.40893 5.18436 8.40942 5.20052 8.41387 5.2158C8.41833 5.23108 8.4266 5.24497 8.43791 5.25617L9.44806 6.26632C9.47158 6.28944 9.50078 6.30595 9.53271 6.31418C9.56464 6.32241 9.59818 6.32207 9.62994 6.3132C10.3973 6.10563 11.1886 6.00019 11.9835 5.99961C13.8909 5.99961 15.7607 6.58226 17.5406 7.73398C19.1676 8.78398 20.6221 10.2596 21.7481 11.9996C21.7489 12.0007 21.7494 12.002 21.7494 12.0034C21.7494 12.0047 21.7489 12.006 21.7481 12.0071C20.9308 13.2938 19.9165 14.4442 18.7424 15.4163C18.7324 15.4246 18.7242 15.4349 18.7183 15.4465C18.7125 15.4582 18.7091 15.4709 18.7084 15.4839C18.7078 15.4969 18.7098 15.5099 18.7145 15.5221C18.7191 15.5343 18.7262 15.5453 18.7354 15.5546L19.6682 16.4869C19.6847 16.5036 19.7069 16.5135 19.7303 16.5146C19.7537 16.5157 19.7767 16.508 19.7948 16.493C21.0482 15.4377 22.1332 14.1971 23.0123 12.8143C23.1677 12.5706 23.2498 12.2874 23.249 11.9984C23.2482 11.7094 23.1644 11.4268 23.0076 11.184Z"
                    fill="#707070"
                  />
                  <path
                    d="M11.9995 7.49961C11.6624 7.49942 11.3264 7.53716 10.9978 7.61211C10.9812 7.61555 10.9658 7.62344 10.9533 7.63492C10.9409 7.6464 10.9317 7.66104 10.9269 7.6773C10.9221 7.69356 10.9218 7.71081 10.926 7.72723C10.9302 7.74365 10.9388 7.75862 10.9509 7.77054L16.2285 13.0468C16.2405 13.0588 16.2554 13.0674 16.2718 13.0717C16.2883 13.0759 16.3055 13.0756 16.3218 13.0708C16.338 13.0659 16.3527 13.0568 16.3642 13.0443C16.3756 13.0319 16.3835 13.0165 16.387 12.9999C16.5372 12.3409 16.5371 11.6564 16.3866 10.9975C16.236 10.3385 15.939 9.72188 15.5174 9.19345C15.0959 8.66502 14.5608 8.23834 13.9517 7.9451C13.3427 7.65186 12.6754 7.49959 11.9995 7.49961Z"
                    fill="#707070"
                  />
                  <path
                    d="M7.77041 10.9524C7.75848 10.9404 7.74352 10.9318 7.7271 10.9276C7.71068 10.9233 7.69342 10.9236 7.67717 10.9285C7.66091 10.9333 7.64626 10.9424 7.63478 10.9549C7.6233 10.9673 7.61542 10.9827 7.61197 10.9993C7.44198 11.742 7.46332 12.5156 7.67401 13.2478C7.88469 13.9799 8.27782 14.6466 8.81654 15.1853C9.35526 15.7241 10.0219 16.1172 10.7541 16.3279C11.4863 16.5386 12.2599 16.5599 13.0026 16.3899C13.0192 16.3865 13.0345 16.3786 13.047 16.3671C13.0595 16.3556 13.0686 16.341 13.0734 16.3247C13.0782 16.3085 13.0786 16.2912 13.0743 16.2748C13.0701 16.2584 13.0615 16.2434 13.0495 16.2315L7.77041 10.9524Z"
                    fill="#707070"
                  />
                </svg>
              </div>
              {errors.password && (
                <div className={styles.errorLine}>
                  <Image width={16} height={16} src="/icons/red-warning.svg" />
                  <span>{errors.password?.type === "required" && "Mật khẩu là bắt buộc!"}</span>
                </div>
              )}
              {passwordInput && (
                <div className="mt-10">
                  <div className={cls(styles.validationLine, { [styles.isActive]: isValidLength })}>
                    <CheckSvg isSuccess={isValidLength} />
                    <span>Thối thiếu 8 ký tự</span>
                  </div>
                  <div className={cls(styles.validationLine, { [styles.isActive]: isHasSpecial })}>
                    <CheckSvg isSuccess={isHasSpecial} />
                    <span>Có kí tự đặc biệt (vd: !@#$%^&*) </span>
                  </div>
                  <div className={cls(styles.validationLine, { [styles.isActive]: isHasNumber })}>
                    <CheckSvg isSuccess={isHasNumber} />
                    <span>Có số (0-9)</span>
                  </div>
                </div>
              )}
              <SubmitButton fullWidthMobile loading={isLoading} className="mt-40">
                Đăng ký
              </SubmitButton>
              <div className={cls("mt-20", styles.lastRow)}>
                <span className={styles.smallTitle}>Đã có tài khoản?</span>
                <Link href="/login" passHref>
                  <span className={styles.underLineText}>Đăng nhập</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.splitRow} />
        <div className={styles.rightSide}>
          <div className={styles.bigTitle}>Điểm cân bằng của thời trang</div>
          <div className={styles.smallTitle}>
            Passdy là một platform kí gửi các sản phẩm thời trang giúp tiết kiệm cho bạn và cả môi
            trường
          </div>
          <div className={styles.logoWrapper}>
            <Image width="274px" height="294px" src="/images/passdy-logo1.png" />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SignUpPage;
