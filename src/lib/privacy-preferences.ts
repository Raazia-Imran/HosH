export const PRIVACY_KEY = "hosh-privacy-v1";
export const SCROLL_KEY = "tsr-scroll-restoration-v1_3";
export const PRIVACY_EVENT = "hosh:privacy-settings";
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;

export type PrivacyPreferences = {
  version: 1;
  navigation: boolean;
  savedAt: number;
};

export function readPrivacyPreferences(): PrivacyPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PRIVACY_KEY);
    const value = raw ? (JSON.parse(raw) as Partial<PrivacyPreferences>) : null;
    if (
      value?.version === 1 &&
      typeof value.navigation === "boolean" &&
      typeof value.savedAt === "number" &&
      value.savedAt <= Date.now() &&
      Date.now() - value.savedAt < MAX_AGE
    ) {
      if (!value.navigation) sessionStorage.removeItem(SCROLL_KEY);
      return value as PrivacyPreferences;
    }
    localStorage.removeItem(PRIVACY_KEY);
    sessionStorage.removeItem(SCROLL_KEY);
  } catch {
    // Storage can be disabled by the visitor. Optional storage stays off.
  }
  return null;
}

export function savePrivacyPreferences(navigation: boolean): PrivacyPreferences | null {
  if (typeof window === "undefined") return null;
  const value: PrivacyPreferences = { version: 1, navigation, savedAt: Date.now() };
  try {
    localStorage.setItem(PRIVACY_KEY, JSON.stringify(value));
    if (!navigation) sessionStorage.removeItem(SCROLL_KEY);
    return value;
  } catch {
    return null;
  }
}

export function openPrivacySettings() {
  window.dispatchEvent(new Event(PRIVACY_EVENT));
}
