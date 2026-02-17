"use client";

import { useEffect } from "react";

type ProfileBridgePageProps = {
  params: {
    id: string;
  };
};

const APP_SCHEME = "indicai-app://";
const DEFAULT_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.indicai.app";
const DEFAULT_APP_STORE_URL = "https://apps.apple.com/";
const FALLBACK_DELAY_MS = 1600;

function resolveStoreUrl() {
  const ua = navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua);
  return isIOS
    ? process.env.NEXT_PUBLIC_APP_STORE_URL || DEFAULT_APP_STORE_URL
    : process.env.NEXT_PUBLIC_PLAY_STORE_URL || DEFAULT_PLAY_STORE_URL;
}

export default function ProfileBridgePage({ params }: ProfileBridgePageProps) {
  useEffect(() => {
    const professionalId = String(params?.id || "").trim();
    if (!professionalId) {
      window.location.replace(resolveStoreUrl());
      return;
    }

    const appUrl = `${APP_SCHEME}profissionais/${professionalId}`;
    const storeUrl = resolveStoreUrl();

    const fallbackTimer = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.replace(storeUrl);
      }
    }, FALLBACK_DELAY_MS);

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        window.clearTimeout(fallbackTimer);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.location.replace(appUrl);

    return () => {
      window.clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [params?.id]);

  return null;
}

