import { NextPage } from "next";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "../../store/user";

const Logout: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setUser({}));
    router.push("/login");
  }, []);

  return <div>loading</div>;
};

export default Logout;
