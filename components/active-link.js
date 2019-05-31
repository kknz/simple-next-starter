import { withRouter } from "next/router";
import Link from "next/link";

import css from "../styles/nav.scss";

const ActiveLink = ({ children, router, href }) => {
  let className = router.pathname === href ? css.active : "";

  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default withRouter(ActiveLink);
