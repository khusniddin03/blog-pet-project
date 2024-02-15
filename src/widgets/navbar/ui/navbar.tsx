import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import AppLink, { AppLinkTheme } from 'shared/ui/app-link/app-link';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
