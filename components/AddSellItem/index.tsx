import React, { useState } from "react";
import cls from "classnames";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import Select from "react-select";
import styles from "./AddSellItem.module.scss";
import commonStyles from "../../styles/common.module.scss";
import SelectCircleItem from "../SelectCircleItem";
import { SelectOptionType } from "../../helpers";
import useAddressOption from "../../hooks/useAddressOption";

type AddProps = {
  listProvince: SelectOptionType[];
};
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

const AddSellItem = ({ listProvince }: AddProps) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const cityId = watch("city_id");
  const districtId = watch("district_id");
  const [isHomeAddress, setIsHomeAddress] = useState<boolean>(false);
  const [typeGive, setTypeGive] = useState<TypeGive>();
  const [typeReceive, setTypeReceive] = useState<TypeReceive>();
  const [listDistrict, fetchListDistrict] = useAddressOption("district", cityId);
  const [listWard, fetchListWard] = useAddressOption("ward", districtId);

  console.log(districtId);
  console.log(listWard);
  // console.log(listDistrict)

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
    <div className={styles.bigWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.titleNumber}>01</div>
            <div className={cls(styles.titleMedium, "mt-10")}>Đồ của bạn gửi với mục đích:</div>
            <div
              className={cls(styles.buttonWrapper, "mt-40", {
                [styles.activeButton]: typeGive === "sell",
              })}
            >
              <button type="button" onClick={() => setTypeGive("sell")}>
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
              <button onClick={() => setTypeGive("donate")} type="button">
                Từ thiện
              </button>
              {wrapperQuestion(
                "Quần áo của bạn sẽ được dùng với mục đích từ thiện, trực tiếp gửi đến những tổ chức từ thiện.",
                "",
                "tip2",
              )}
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.titleNumber}>02</div>
            <div className={cls(styles.titleMedium, "mt-10")}>Đồ không đạt tiêu chuẩn sẽ được</div>
            <div
              className={cls(styles.buttonWrapper, "mt-40", {
                [styles.activeButton]: typeReceive === "recycling",
              })}
            >
              <button onClick={() => setTypeReceive("recycling")} type="button">
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
              <button onClick={() => setTypeReceive("resend")} type="button">
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
            <div className={cls(styles.titleMedium, "mt-10")}>Số lượng đồ bạn gửi Passdy:</div>
            <div className={cls(styles.inputWrapper, "mt-40")}>
              <input
                {...register("cloth_num", { required: true })}
                className={styles.formInput}
                type="text"
              />
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
              <div className="d-flex space-between">
                <div className={cls(styles.smallItemWrapper, "mt-30")}>
                  <div className={styles.itemNumber}>16kg</div>
                  <div className={cls(styles.smallText, "mt-20")}>Khí thải CO2</div>
                </div>
                <div className={cls(styles.smallItemWrapper, "mt-30")}>
                  <div className={styles.itemNumber}>30l</div>
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
                {...register("address_name")}
                placeholder="Name"
                className={styles.formInput}
                type="text"
              />
            </div>
            <div className={styles.formItemWrapper}>
              <div className={styles.titleItemForm}>Số điện thoại</div>
              <input
                {...register("phone")}
                placeholder="Phone"
                className={styles.formInput}
                type="text"
              />
            </div>
          </div>
          <div className={cls(styles.formLine, "mt-40")}>
            <div className={styles.formItemWrapper}>
              <div className={styles.titleItemForm}>Thành phố</div>
              <Controller
                control={control}
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
              {/*<Select {...register("city_id")} placeholder="City" options={listProvince} />*/}
            </div>
            <div className={styles.districtWrapper}>
              <div>
                <div className={styles.titleItemForm}>Quận</div>
                <Controller
                  control={control}
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
              </div>
              <div>
                <div className={styles.titleItemForm}>Phường</div>
                <Controller
                  control={control}
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
              </div>
            </div>
          </div>
          <div className={cls("mt-40")}>
            <div className={styles.formItemWrapper}>
              <div className={styles.titleItemForm}>Địa chỉ cụ thể</div>
              <textarea rows={4} className={styles.formInput} />
            </div>
          </div>
          <div className={cls("mt-40", styles.addressWrapper)}>
            <span>Loại địa chỉ:</span>
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
        <div className={styles.confirmButtonWrapper}>
          <button type="button" className={commonStyles.button}>
            XÁC NHẬN
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSellItem;
