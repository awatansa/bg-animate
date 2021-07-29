import React, { PropsWithChildren } from "react";
import useStyle from "./styles.jss";

const RawBackgroundAnimation = ({ children }: PropsWithChildren<any>) => {
  const classes = useStyle();
  return (
    <div className={classes.bg}>
      {children}
    </div>
  );
};

export { RawBackgroundAnimation };

