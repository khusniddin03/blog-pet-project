import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                {t}
                /
            </div>
        </div>
    );
};

export default Navbar;
