import { classNames } from 'shared/lib/class-names/class-names';
import { useState } from 'react';
import ThemeSwitcher from 'shared/ui/theme-switcher/theme-switcher';
import LangSwitcher from 'shared/ui/lang-switcher/lang-switcher';
import cls from './sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames(
            cls.saidbar,
            { [cls.collapsed]: collapsed },
            [className],
        )}
        >
            <button type="button" onClick={onToggle}>Toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
