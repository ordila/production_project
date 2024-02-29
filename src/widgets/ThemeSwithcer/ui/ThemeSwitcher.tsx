import { Theme, useTheme } from "app/providers/ThemeProvider";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import LightIcon from "shared/assets/icons/light-on.svg";
import DarkIcon from "shared/assets/icons/light-off.svg";

import styles from "./ThemeSwitcher.module.scss";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={40} height={40} />
      ) : (
        <LightIcon width={40} height={40} />
      )}
    </Button>
  );
};
