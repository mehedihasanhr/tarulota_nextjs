//css
import styles from "./nav.module.css";

//default components
import Link from "next/link";

interface NavProps {
  elements:
    {
      path: string;
      displayName: string;
    }[]
  className?: string;
}

const Nav = ({ elements, className }: NavProps) => {
  return (
    <ul className={`${styles.__nav} ${className}`}>
      {elements.map((el, idx) => (
        <li className={styles.__nav_item} key={idx}>
          <Link href={el.path}>
            <a className={styles.__nav_link}> {el.displayName} </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
