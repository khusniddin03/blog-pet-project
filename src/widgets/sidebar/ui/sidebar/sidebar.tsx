import { useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import ThemeSwitcher from 'shared/ui/theme-switcher/theme-switcher';
import LangSwitcher from 'shared/ui/lang-switcher/lang-switcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/button/button';
import AppLink, { AppLinkTheme } from 'shared/ui/app-link/app-link';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/route-config/route-config';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.saidbar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon
                        className={cls.icon}
                    />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon
                        className={cls.icon}
                    />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};

export default Sidebar;
