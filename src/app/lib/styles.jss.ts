import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  li: {
    borderRadius: 25,
    border: "solid",
    borderColor: "black",
    padding: 5,
    margin: 5,
  },
  bg: {
    backgroundColor: "cyan",
  },
  container: () => {
    return {
      margin: 0,
      padding: 0,
      position: "relative",
    };
  },
  ul: {
    listStyle: "none",
  },
});

export default useStyles;
