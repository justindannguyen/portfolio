import background from "./assets/images/bg.jpg";
import green from '@material-ui/core/colors/green';

const style = theme => ({
  root: {
    backgroundImage: `url(${background})`,
    height: "100vh",
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center center",
    margin: 0,
    padding: 0,
    border: 0,
    display: "flex"
  },
  introduction: {
    height: "100vh",
    backgroundColor: "rgb(0,0,0,.3)"
  },
  title: {
    fontWeight: "700",
    fontFamily: '"Reem Kufi","Times New Roman", "sans-serif"',
    color: "#fff",
    margin: "5px",
    fontSize: "3.8em",
    textAlign: "center"
  },
  subTitle: {
    fontSize: "1.8em",
    fontFamily: '"Roboto", "Times New Roman", "serif"',
    fontWeight: "200",
    marginBottom: "20px"
  },
  version: {
    color: "#fff",
    margin: "10px",
    fontFamily: '"Roboto", "Times New Roman", "serif"',
    fontWeight: "200"
  },
  avatar: {
    [theme.breakpoints.up("md")]: {
      width: 300,
      height: 300
    },
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 200
    }
  },
  button: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  }
});

export default style;
