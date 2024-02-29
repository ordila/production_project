import { FC, useState } from "react";

import styles from "./SideBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwithcer";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";

interface SiderBarProps {
  className?: string;
}

export const SiderBar: FC<SiderBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    console.log(collapsed);
    setCollapsed((prevState) => !prevState);
  };
  return (
    <div
      className={classNames(styles.sideBar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}> Toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
