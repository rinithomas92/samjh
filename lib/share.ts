import type { StoredResult } from "@/lib/storage";

export function challengePath(result: Pick<StoredResult, "socialIq" | "personaId">) {
  return `/challenge/${result.socialIq}-${result.personaId}`;
}

export function absoluteChallengeUrl(result: Pick<StoredResult, "socialIq" | "personaId">) {
  if (typeof window === "undefined") return challengePath(result);
  return `${window.location.origin}${challengePath(result)}`;
}

export async function shareText(title: string, text: string, url: string) {
  const browserNavigator = typeof window !== "undefined" ? window.navigator : undefined;
  if (browserNavigator?.share) {
    await browserNavigator.share({ title, text, url });
    return "shared";
  }
  await browserNavigator?.clipboard?.writeText(url);
  return "copied";
}
