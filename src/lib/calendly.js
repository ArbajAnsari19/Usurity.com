import { PopupWidget } from "react-calendly";


const CALENDLY_URL = "https://cal.com/founders-office-cune/30min";

export const openCalendly = () => {
  try {
    PopupWidget({ url: CALENDLY_URL });
  } catch (error) {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }
};

export const getCalendlyUrl = () => CALENDLY_URL;

export default openCalendly;

