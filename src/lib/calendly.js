import { openPopupWidget } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/arbaj-right/30min";

export const openCalendly = () => {
  try {
    openPopupWidget({ url: CALENDLY_URL });
  } catch (error) {
    // Fallback: open in new tab
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
};

export const getCalendlyUrl = () => CALENDLY_URL;

export default openCalendly;

