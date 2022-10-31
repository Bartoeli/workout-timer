import React, { FC, createContext, useContext } from "react";

const I18N_CONFIG_KEY = process.env.REACT_APP_I18N_CONFIG_KEY || "i18nConfig";

type Props = {
  selectedLang: "cs" | "en";
};
const initialState: Props = {
  selectedLang: "cs",
};

function getConfig(): Props {
  const ls = localStorage.getItem(I18N_CONFIG_KEY);
  if (ls) {
    try {
      return JSON.parse(ls) as Props;
    } catch (er) {
      console.error(er);
    }
  }
  return initialState;
}

// Side effect
export function setLanguage(lang: string) {
  localStorage.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }));
  window.location.reload();
}

const I18nContext = createContext<Props>(initialState);

const useLang = () => {
  return useContext(I18nContext).selectedLang;
};

type MyI18nProviderProps = {
  children: React.ReactNode;
};

const MyI18nProvider: FC<MyI18nProviderProps> = ({ children }) => {
  const lang = getConfig();
  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>;
};

export { MyI18nProvider, useLang };
