import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
