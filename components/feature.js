import css from "../styles/components/feature.scss";

const Feature = ({ children, title, icon }) => {
  return (
    <div className={css.web_service}>
      <div>{icon}</div>
      <div className={css.web_service_name}>{title}</div>
      <div className={css.web_service_content}>{children}</div>
    </div>
  );
};

export default Feature;
