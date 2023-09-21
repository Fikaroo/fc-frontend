"use client";

import { Fragment, useEffect, useState } from "react";
import {
  checkAuthClient,
  logoutClient,
  refleshClient,
} from "@/graphql/client/auth";
import { useRouter } from "next/navigation";

const WithAuth = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: checkAuthData } = await checkAuthClient();

      if (checkAuthData?.checkAuth?.auth) {
        router.refresh();
        return setLoading(false);
      }
      const { data: refleshData } = await refleshClient();
      if (refleshData?.reflesh?.message) {
        router.refresh();
        return setLoading(false);
      }
      logoutClient();
      router.refresh();
      return setLoading(false);
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return <Fragment>{children}</Fragment>;
};

export default WithAuth;
