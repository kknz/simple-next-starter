import css from "../styles/components/brand.scss";

const Brand = ({ children, cssClass, icon }) => {
  return <div className={`${css.brand} ${cssClass}`}>{icon}</div>;
};

export default Brand;
