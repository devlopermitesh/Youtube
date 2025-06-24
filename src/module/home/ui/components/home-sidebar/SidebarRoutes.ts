"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface RouteItem {
  title: string;
  url: string;
  icon: string; // just name like "home", "flame", etc.
  auth: boolean;
  is_Active?: boolean;
}

const useRoutes = (): RouteItem[] => {
  const pathname = usePathname();

  const routes = useMemo((): RouteItem[] => {
    return [
    {
        title: "Home",
        url: "/",
        icon: "home",
        auth: false,
        is_Active: pathname === "/",
      },
      {
        title: "Shorts",
        url: "/shorts",
        icon: " badgeCheck",
        auth: false,
        is_Active: pathname === "/shorts",
      },
      {
        title: "Subscriptions",
        url: "/subscription",
        icon: "youtube",
        auth: true,
        is_Active: pathname === "/subscription",
      },
      {
        title: "Trending",
        url: "/feed/trending",
        icon: "flame",
        auth: false,
        is_Active: pathname === "/feed/trending",
      },
    ];
  }, [pathname]);

  return routes;
};

export default useRoutes;
