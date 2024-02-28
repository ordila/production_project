import { FC } from "react";

import styles from "./NavBar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwithcer";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navBar, {}, [className])}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink
          className={styles.mainLink}
          to="/"
          theme={AppLinkTheme.SECONDARY}
        >
          Home
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};
