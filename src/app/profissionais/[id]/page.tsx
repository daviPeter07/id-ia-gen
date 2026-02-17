import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DEFAULT_PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.indicai.app";
const DEFAULT_APP_STORE_URL = "https://apps.apple.com/";

function resolveStoreUrl(userAgent: string) {
  const ua = userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(ua);
  return isIOS
    ? process.env.NEXT_PUBLIC_APP_STORE_URL || DEFAULT_APP_STORE_URL
    : process.env.NEXT_PUBLIC_PLAY_STORE_URL || DEFAULT_PLAY_STORE_URL;
}

export default async function ProfileBridgePage() {
  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent") || "";
  const storeUrl = resolveStoreUrl(userAgent);

  redirect(storeUrl);
}
