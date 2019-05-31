import { withRouter } from "next/router";
import Link from "next/link";
import css from "../styles/nav.scss";

const ActiveLink = ({ children, router, href, linkClass = "" }) => {
  let className = router.pathname === href ? css.active : "";

  if (linkClass != "") {
    if (className != "") {
      className = className + " " + linkClass;
    } else {
      className = linkClass;
    }
  }

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default withRouter(ActiveLink);
