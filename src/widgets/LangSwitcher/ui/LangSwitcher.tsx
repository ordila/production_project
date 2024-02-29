import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { Button, ThemeButton } from "shared/ui/Button/Button";

import styles from "./LangSwitcher.module.scss";

import { FC } from "react";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  };

  return (
    <Button
      className={classNames(styles.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggleLanguage}
    >
      {t("language")}
    </Button>
  );
};
