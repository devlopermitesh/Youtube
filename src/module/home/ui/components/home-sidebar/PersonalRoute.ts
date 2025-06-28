"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface RouteItem {
  title: string;
  url: string;
  icon: string;
  auth: boolean;
  is_Active?: boolean;
}

const usePersonalRoutes = (): RouteItem[] => {
  const pathname = usePathname();

  const routes = useMemo((): RouteItem[] => {
    return [
      {
        title: "You",
        url: "/you",
        icon: "user",
        auth: true,
        is_Active: pathname === "/you",
      },
      {
        title: "History",
        url: "/feed/history",
        icon: "clock",
        auth: true,
        is_Active: pathname === "/feed/history",
      },
      {
        title: "Playlists",
        url: "/you/playlists",
        icon: "listVideo",
        auth: true,
        is_Active: pathname === "/you/playlists",
      },
      {
        title: "Your Videos",
        url: "/you/videos",
        icon: "video",
        auth: true,
        is_Active: pathname === "/you/videos",
      },
      {
        title: "Watch Later",
        url: "/playlist?list=WL",
        icon: "clock4",
        auth: true,
        is_Active:
          pathname === "/playlist" &&
          typeof window !== "undefined" &&
          window.location.search.includes("list=WL"),
      },
      {
        title: "Liked Videos",
        url: "/playlist?list=LL",
        icon: "thumbsUp",
        auth: true,
        is_Active:
          pathname === "/playlist" &&
          typeof window !== "undefined" &&
          window.location.search.includes("list=LL"),
      },
      {
        title: "Downloads",
        url: "/downloads",
        icon: "download",
        auth: true,
        is_Active: pathname === "/downloads",
      },
    ];
  }, [pathname]);

  return routes;
};

export default usePersonalRoutes;
