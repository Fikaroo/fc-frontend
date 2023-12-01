"use client";

import Loading from "@/components/Loading";
import {
  checkAuthClient,
  refleshClient,
  logoutClient,
} from "@/graphql/auth/client-action";
import { useUser } from "@/store/store";
import useStore from "@/store/useStore";
import React, { useEffect, useLayoutEffect, useState } from "react";

const AdminLayout = ({
  dashboard,
  login,
}: {
  dashboard: React.ReactNode;
  login: React.ReactNode;
}) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuth, setAuth] = useState(false);
  const userAction = useStore(useUser, (state) => state);

  useLayoutEffect(() => {
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
      userAction?.removeUser();
      setLoading(false);
      return setAuth(false);
    };
    checkAuth();
  }, [userAction?.user]);

  if (isLoading) {
    return <Loading />;
  }

  return isAuth ? dashboard : login;
};

export default AdminLayout;
