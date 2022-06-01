import React, { PropsWithChildren } from "react";
import useStyles from "./styles.jss";

interface IOptions {
  regular?: boolean;
  padding?: number;
  margin?: number;
}

const BackgroundAnimation = ({
  children,
  regular,
  margin,
  padding,
}: PropsWithChildren<IOptions>) => {
  const classes = useStyles({ margin, padding, regular });

  if (regular) {
    console.log("default settings is applied");
  }

  const Balls = () => {
    return <li className={classes.li}></li>;
  };

  return (
    <div>
      <div className={classes.container}>
        <ul className={classes.ul}>
          <Balls></Balls>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default BackgroundAnimation;
