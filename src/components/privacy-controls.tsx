import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PRIVACY_EVENT,
  PRIVACY_KEY,
  readPrivacyPreferences,
  savePrivacyPreferences,
  type PrivacyPreferences,
} from "@/lib/privacy-preferences";

export function PrivacyControls() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [ready, setReady] = useState(false);
  const [preferences, setPreferences] = useState<PrivacyPreferences | null>(null);
  const [navigation, setNavigation] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = readPrivacyPreferences();
    setPreferences(stored);
    setNavigation(stored?.navigation ?? false);
    setReady(true);
    const open = () => {
      setNavigation(readPrivacyPreferences()?.navigation ?? false);
      setError("");
      dialog.current?.showModal();
    };
    window.addEventListener(PRIVACY_EVENT, open);
    const sync = (event: StorageEvent) => {
      if (event.key === PRIVACY_KEY || event.key === null) window.location.reload();
    };
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(PRIVACY_EVENT, open);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function save(allowNavigation: boolean) {
    const previous = preferences?.navigation ?? false;
    const saved = savePrivacyPreferences(allowNavigation);
    if (!saved) {
      setError(
        "Your browser prevented us from saving this choice. You can manage stored data through your browser settings.",
      );
      return;
    }
    setPreferences(saved);
    setNavigation(allowNavigation);
    dialog.current?.close();
    if (previous !== allowNavigation) window.location.reload();
  }

  function open() {
    setNavigation(preferences?.navigation ?? false);
    setError("");
    dialog.current?.showModal();
  }

  if (!ready) return null;
  return (
    <>
      {!preferences && (
        <section className="privacy-banner" aria-label="Privacy choices">
          <div>
            <h2>Your privacy choices</h2>
            <p>
              Optional navigation storage is off until you choose. We use no advertising or
              analytics trackers. Your choice is remembered on this browser for up to 180 days.
            </p>
            <a href="/cookies">Read about cookies and storage</a>
          </div>
          <div className="privacy-actions">
            <Button variant="outline" onClick={() => save(false)}>
              Essential only
            </Button>
            <Button variant="outline" onClick={() => save(true)}>
              Allow navigation storage
            </Button>
            <Button variant="link" onClick={open}>
              Cookie settings
            </Button>
          </div>
          {error && <p role="alert">{error}</p>}
        </section>
      )}
      <dialog
        ref={dialog}
        className="privacy-dialog"
        aria-labelledby="privacy-title"
        aria-describedby="privacy-description"
      >
        <div className="privacy-dialog-heading">
          <h2 id="privacy-title">Cookie and privacy settings</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close cookie settings"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </Button>
        </div>
        <p id="privacy-description">
          Choose how this website uses browser storage. You can reopen these settings from the
          footer at any time.
        </p>
        <div className="privacy-option">
          <div>
            <h3>Essential preferences</h3>
            <p>
              Remembers your privacy choice on this browser. It does not contain your enquiry
              details.
            </p>
          </div>
          <span>Always used</span>
        </div>
        <div className="privacy-option">
          <div>
            <h3>
              <label htmlFor="navigation-storage">Remember navigation positions</label>
            </h3>
            <p>
              Optional session storage remembers where you were on a page. Off by default. Changing
              this setting reloads the page.
            </p>
          </div>
          <input
            id="navigation-storage"
            type="checkbox"
            checked={navigation}
            onChange={(event) => setNavigation(event.target.checked)}
          />
        </div>
        <div className="privacy-option">
          <div>
            <h3>Analytics and advertising</h3>
            <p>
              Not used by this website. These settings do not control cookies on Gmail, Web3Forms or
              other sites you choose to visit.
            </p>
          </div>
          <span>Not installed</span>
        </div>
        {error && <p role="alert">{error}</p>}
        <div className="privacy-actions">
          <Button variant="outline" onClick={() => save(false)}>
            Reject optional storage
          </Button>
          <Button variant="outline" onClick={() => save(true)}>
            Allow navigation storage
          </Button>
          <Button onClick={() => save(navigation)}>Save choices</Button>
        </div>
        <a className="privacy-policy-link" href="/cookies">
          Cookies and Browser Storage
        </a>
      </dialog>
    </>
  );
}
