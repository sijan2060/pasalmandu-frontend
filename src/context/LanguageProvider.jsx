import { useState } from "react";
import { LanguageContext } from "./languageContext";
import en from "../features/localization/locales/en";
import np from "../features/localization/locales/np";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = language === "en" ? en : np;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "np" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};