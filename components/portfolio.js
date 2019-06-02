import css from "../styles/components/portfolio.scss";

const Portfolio = ({ children, src, alt, company, name }) => {
  return (
    <div className={css.portfolio}>
      <img src={src} alt={alt} />
      <div className={css.portfolio_content}>
        <div>
          <h3>{company}</h3>
          <h4>{children}</h4>
          <h5>- {name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
