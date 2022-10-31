import { FC } from "react";
import { useLang } from "./I18n";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/cs";
import "@formatjs/intl-relativetimeformat/locale-data/en";

import csMessages from "./messages/cs";
import enMessages from "./messages/en";

type I18nProviderProps = {
  children: React.ReactNode;
};

const allMessages = {
  cs: csMessages,
  en: enMessages,
};

const I18nProvider: FC<I18nProviderProps> = ({ children }) => {
  const locale = useLang();
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

export { I18nProvider };
