import { Suspense } from "react";
import { I18nProvider } from "./i18n/i18nProvider";
import { MyRoutes } from "./routing/MyRoutes";

function App() {
  return (
    <Suspense>
      <I18nProvider>
        {/* <AuthInit> */}
        <MyRoutes />
        {/* </AuthInit> */}
      </I18nProvider>
    </Suspense>
  );
}

export default App;
