/**
 * High level router.
 */

import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimerPage from "../pages/TimerPage/TimerPage";

const MyRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TimerPage />} />
      </Routes>
    </Router>
  );
};

export { MyRoutes };
