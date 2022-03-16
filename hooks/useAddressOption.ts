import { useCallback, useEffect, useState } from "react";
import { SelectOptionType } from "../helpers";
import AddressServices from "../services/AddressServices";

type TypeAddress = "province" | "district" | "ward";
const useAddressOption = (
  addressType: TypeAddress,
  parentId?: number,
): [SelectOptionType[], () => void] => {
  const [listData, setListData] = useState<SelectOptionType[]>([]);

  const fetchData = useCallback(() => {
    if (!parentId) {
      setListData([]);
      return;
    }
    AddressServices.getAddress({ address_type: addressType, parent_id: parentId }).then((res) => {
      const newOptionsList = res.data.map((e: any) => ({
        value: e.id,
        label: e.name,
      }));
      setListData(newOptionsList);
    });
  }, [addressType, parentId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [listData, fetchData];
};
export default useAddressOption;
