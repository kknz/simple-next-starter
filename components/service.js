import css from "../styles/components/service.scss";

const Service = ({ children, title, icon }) => {
  return (
    <div className={css.service}>
      <div className={css.service_icon}>{icon}</div>
      <div className={css.service_content}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Service;
