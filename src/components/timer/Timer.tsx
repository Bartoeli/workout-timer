import React from "react";
import { useIntl } from "react-intl";

export const Timer: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <h1>{formatMessage({ id: "timer_time" })}</h1>
    </div>
  );
};
