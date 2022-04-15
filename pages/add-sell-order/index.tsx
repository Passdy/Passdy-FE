/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import cls from "classnames";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import BigNumber from "bignumber.js";
import { useCountUp } from "react-countup";
import Link from "next/link";
import Select from "react-select";
import { toast } from "react-toastify";
import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "./AddSellItem.module.scss";
import SelectCircleItem from "../../components/SelectCircleItem";
import useAddressOption from "../../hooks/useAddressOption";
import Breadcrumb from "../../components/Shared/Breadcrumb";
import UseReasonSection from "../../components/Shared/UseReasonSection/UseReasonSection";
import OrderServies from "../../services/OrderServies";
import LayoutWrapper from "../../components/Shared/LayoutWrapper";
import SubmitButton from "../../components/Shared/SubmitButton";

type TypeGive = "sell" | "donate";
type TypeReceive = "recycling" | "resend";
type Inputs = {
  type_give: string;
  type_receive: string;
  cloth_num: number;
  address_name: string;
  phone: number;
  city_id: number;
  district_id: number;
  ward_id: number;
  address: string;
  address_type: "apartment" | "company";
};

const AddSellItem: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const cityId = watch("city_id");
  const districtId = watch("district_id");
  const clothNumber = watch("cloth_num");
  const [isHomeAddress, setIsHomeAddress] = useState<boolean>(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);
  const [typeGive, setTypeGive] = useState<TypeGive>();
  const [typeReceive, setTypeReceive] = useState<TypeReceive>();
  const [listProvince] = useAddressOption("province", 0);
  const [listDistrict] = useAddressOption("district", cityId);
  const [listWard] = useAddressOption("ward", districtId);
  const countUpRef = React.useRef(null);
  const countUpWaterRef = React.useRef(null);

  const [co2Saved, waterLiterSave] = useMemo(() => {
    const co2Kg = new BigNumber(clothNumber || 0).times(0.5).toNumber();
    const waterLitter = new BigNumber(clothNumber || 0).times(3.78).toNumber();
    return [co2Kg, waterLitter];
  }, [clothNumber]);

  const onSetTypeGive = useCallback((type: TypeGive) => {
    setTypeGive(type);
    setValue("type_give", type);
  }, []);

  const onSetTypeReceive = useCallback((type: TypeReceive) => {
    setTypeReceive(type);
    setValue("type_receive", type);
  }, []);

  const { update } = useCountUp({
    ref: countUpRef,
    start: 1,
    end: 0,
    duration: 1,
    decimals: 2,
  });

  const { update: updateWater } = useCountUp({
    ref: countUpWaterRef,
    start: 1,
    end: 0,
    duration: 1,
    decimals: 2,
  });

  useEffect(() => {
    update(co2Saved);
    updateWater(waterLiterSave);
  }, [co2Saved, update]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const params = {
      ...data,
      address_type: isHomeAddress ? "apartment" : "company",
    };
    setIsLoadingBtn(true);
    const res = await OrderServies.createOrder(params);
    if (res && res.data) {
      setIsLoadingBtn(false);
      toast.success("Thêm order thành công!");
      await router.push("/sell-and-donate");
    } else {
      setIsLoadingBtn(false);
      toast.error("Đã xảy ra lỗi !");
    }
  };

  const wrapperQuestion = (text: string, idTip: string, importantText?: string) => (
    <div className={styles.wrapperQuestion}>
      <Image
        data-tip="hello world"
        width={11}
        src="/icons/circle-question.svg"
        height={11}
        data-for={idTip}
      />
      <ReactTooltip
        id={idTip}
        backgroundColor="#E4E4E4"
        effect="solid"
        type="light"
        place="bottom"
        className={styles.customTooltip}
      >
        <div>
          {text} <span className={styles.importantText}>{importantText}</span>.
        </div>
      </ReactTooltip>
    </div>
  );

  return (
    <LayoutWrapper>
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <div className={styles.biggerFormWrapper}>
            <Breadcrumb>
              <Link href="/sell-and-donate" passHref>
                Bán/
              </Link>
              <Link href="/sell-and-donate" passHref>
                <span> Bán & Từ Thiện</span>
              </Link>
            </Breadcrumb>
            <div className={styles.bigWrapper}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.cardWrapper}>
                  <div className={styles.card}>
                    <div className={styles.titleNumber}>01</div>
                    <div className={cls(styles.titleMedium, "mt-10")}>
                      Đồ của bạn gửi với mục đích:
                    </div>
                    <div
                      className={cls(styles.buttonWrapper, "mt-40", {
                        [styles.activeButton]: typeGive === "sell",
                      })}
                    >
                      <button type="button" onClick={() => onSetTypeGive("sell")}>
                        Pass đi
                      </button>
                      {wrapperQuestion(
                        "Quần áo của bạn sẽ được pass đi để nhận tiền. Không những tiết kiệm thời gian dọn tủ đồ mà còn thêm thu nhập.",
                        "tip1",
                      )}
                    </div>
                    <div
                      className={cls(styles.buttonWrapper, "mt-20", {
                        [styles.activeButton]: typeGive === "donate",
                      })}
                    >
                      <button onClick={() => onSetTypeGive("donate")} type="button">
                        Từ thiện
                      </button>
                      {wrapperQuestion(
                        "Quần áo của bạn sẽ được dùng với mục đích từ thiện, trực tiếp gửi đến những tổ chức từ thiện.",
                        "tip2",
                      )}
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.titleNumber}>02</div>
                    <div className={cls(styles.titleMedium, "mt-10")}>
                      Đồ không đạt tiêu chuẩn sẽ được
                    </div>
                    <div
                      className={cls(styles.buttonWrapper, "mt-40", {
                        [styles.activeButton]: typeReceive === "recycling",
                      })}
                    >
                      <button onClick={() => onSetTypeReceive("recycling")} type="button">
                        Tái chế
                      </button>
                      {wrapperQuestion(
                        "Với những món đồ không qua kiểm duyệt, Passdy sẽ giúp bạn tái chế xanh hoặc quyên góp những bộ quần áo này",
                        "tip3",
                        "hoàn toàn miễn phí.",
                      )}
                    </div>
                    <div
                      className={cls(styles.buttonWrapper, "mt-20", {
                        [styles.activeButton]: typeReceive === "resend",
                      })}
                    >
                      <button onClick={() => onSetTypeReceive("resend")} type="button">
                        Hoàn trả
                      </button>
                      {wrapperQuestion(
                        "Những món đồ không qua kiểm duyệt sẽ được gửi lại cho bạn với mức phí là",
                        "tip4",
                        "99.000đ",
                      )}
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.titleNumber}>03</div>
                    <div className={cls(styles.titleMedium, "mt-10")}>
                      Số lượng đồ bạn gửi Passdy:
                    </div>
                    <div className={cls(styles.inputWrapper, "mt-40")}>
                      <input
                        {...register("cloth_num", { required: true })}
                        className={styles.formInput}
                        inputMode="numeric"
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                      {errors.cloth_num && (
                        <span className="text-danger">
                          {errors.cloth_num?.type === "required" &&
                            "Số lượng đồ bạn gửi Passdy là bắt buộc."}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.centerCardWrapper}>
                  <div className={styles.centerCard}>
                    <div className={styles.imageWrapper}>
                      <Image src="/icons/green-earth.svg" width={86} height={108} />
                    </div>
                    <div className={styles.contentBig}>
                      <div className={cls(styles.titleMedium, "mt-20")}>Bạn đã giúp giảm thải</div>
                      <div className={styles.wrapperSaved}>
                        <div className={cls(styles.smallItemWrapper, "mt-30")}>
                          <div className={styles.itemNumber}>
                            <span ref={countUpRef} />
                            kg
                          </div>
                          <div className={cls(styles.smallText, "mt-20")}>Khí thải CO2</div>
                        </div>
                        <div className={cls(styles.smallItemWrapper, "mt-30")}>
                          <div className={styles.itemNumber}>
                            <span ref={countUpWaterRef} />l
                          </div>
                          <div className={cls(styles.smallText, "mt-20")}>Nước sạch</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.formCardWrapper}>
                  <div className={styles.titleNumber}>04</div>
                  <div className={cls(styles.titleMedium)}>Thông tin của bạn</div>
                  <div className={cls(styles.formLine, "mt-40")}>
                    <div className={styles.formItemWrapper}>
                      <div className={styles.titleItemForm}>Họ và tên</div>
                      <input
                        {...register("address_name", {
                          required: true,
                          pattern: /^[^*|":<>[\]{}`\\()';@&$]+$/,
                          maxLength: 30,
                        })}
                        placeholder="Name"
                        className={styles.formInput}
                        type="text"
                      />
                      {errors.address_name && (
                        <span className="text-danger">
                          {errors.address_name?.type === "required" && "Họ và tên là bắt buộc."}
                          {errors.address_name?.type === "pattern" &&
                            "Họ tên có chứa ký tự đặc biệt!"}
                          {errors.address_name?.type === "maxLength" &&
                            "Họ tên không thể vượt quá 30 ký tự."}
                        </span>
                      )}
                    </div>
                    <div className={styles.formItemWrapper}>
                      <div className={styles.titleItemForm}>Số điện thoại</div>
                      <input
                        {...register("phone", {
                          required: true,
                          pattern: /^[0-9]*$/,
                          maxLength: 15,
                        })}
                        placeholder="Phone"
                        className={styles.formInput}
                        type="text"
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          {errors.phone?.type === "required" && "Số điện thoại là bắt buộc."}
                          {errors.phone?.type === "pattern" &&
                            "Số điện thoại không thể chứa ký tự đặc biệt."}
                          {errors.phone?.type === "maxLength" &&
                            "Số điện thoại không thể vượt quá 15 ký tự."}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={cls(styles.formLine, "mt-40")}>
                    <div className={styles.formItemWrapper}>
                      <div className={styles.titleItemForm}>Thành phố</div>
                      <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, value, name } }) => (
                          <Select
                            value={listProvince.find((c) => c.value === value)}
                            name={name}
                            options={listProvince}
                            onChange={(selectedOption: any) => {
                              onChange(selectedOption.value);
                            }}
                          />
                        )}
                        name="city_id"
                      />
                      {errors.city_id && (
                        <span className="text-danger">
                          {errors.city_id?.type === "required" && "Thành phố là bắt buộc."}
                        </span>
                      )}
                    </div>
                    <div className={styles.districtWrapper}>
                      <div>
                        <div className={styles.titleItemForm}>Quận</div>
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, value, name } }) => (
                            <Select
                              value={listDistrict.find((c) => c.value === value)}
                              name={name}
                              options={listDistrict}
                              onChange={(selectedOption: any) => {
                                onChange(selectedOption.value);
                              }}
                            />
                          )}
                          name="district_id"
                        />
                        {errors.district_id && (
                          <span className="text-danger">
                            {errors.district_id?.type === "required" && "Quận là bắt buộc."}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className={styles.titleItemForm}>Phường</div>
                        <Controller
                          control={control}
                          rules={{ required: true }}
                          render={({ field: { onChange, value, name } }) => (
                            <Select
                              value={listWard.find((c) => c.value === value)}
                              name={name}
                              options={listWard}
                              onChange={(selectedOption: any) => {
                                onChange(selectedOption.value);
                              }}
                            />
                          )}
                          name="ward_id"
                        />
                        {errors.ward_id && (
                          <span className="text-danger">
                            {errors.ward_id?.type === "required" && "Phường là bắt buộc."}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={cls("mt-40")}>
                    <div className={styles.formItemWrapper}>
                      <div className={styles.titleItemForm}>Địa chỉ cụ thể</div>
                      <textarea
                        {...register("address", {
                          required: true,
                          maxLength: 100,
                        })}
                        rows={4}
                        className={styles.formInput}
                      />
                      {errors.address && (
                        <span className="text-danger">
                          {errors.address?.type === "required" && "Địa chỉ cụ thể là bắt buộc."}
                          {errors.address?.type === "maxLength" &&
                            "Địa chỉ cụ thể không thể quá 100 ký tự."}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={cls("mt-40", styles.addressWrapper)}>
                    <span>Loại địa chỉ:</span>
                    <div className={styles.addressTypeWrapper}>
                      <SelectCircleItem
                        onClick={() => setIsHomeAddress(true)}
                        className={styles.mr70}
                        isSelected={isHomeAddress}
                        label="Nhà riêng"
                      />
                      <SelectCircleItem
                        onClick={() => setIsHomeAddress(false)}
                        isSelected={!isHomeAddress}
                        label="Nơi làm việc"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.confirmButtonWrapper}>
                  <SubmitButton loading={isLoadingBtn}>Xác nhận</SubmitButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <UseReasonSection />
    </LayoutWrapper>
  );
};

export default AddSellItem;
