"use client";

import {
  checkAuthClient,
  refleshClient,
  logoutClient,
} from "@/graphql/client/auth";
import { useUser } from "@/store/store";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AdminLayout = ({
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: checkAuthData } = await checkAuthClient();

      if (checkAuthData?.checkAuth?.auth) {
        setLoading(false);
        return setAuth(true);
      }
      const { data: refleshData } = await refleshClient();
      if (refleshData?.reflesh?.message) {
        setLoading(false);
        return setAuth(true);
      }

      logoutClient();
      setLoading(false);
      return setAuth(false);
    };
    checkAuth();
  }, [user]);

  if (isLoading) {
    return <>Loading...</>;
  }
  return isAuth ? dashboard : login;
};

export default AdminLayout;
