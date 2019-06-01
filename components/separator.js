import css from "../styles/components/separator.scss";

const Separator = ({ children, type = "left" }) => {
  let className = css.separator;
  className = type === "center" ? className + " " + css.center : className;

  return <div className={className} />;
};

export default Separator;
