import { useState } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from 'shared/ui/theme-switcher/theme-switcher';
import LangSwitcher from 'shared/ui/lang-switcher/lang-switcher';
import Button from 'shared/ui/button/button';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();

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
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
            >
                {t('Toggle btn')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
