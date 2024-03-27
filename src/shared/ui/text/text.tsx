import { FC } from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface IProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

export const Text: FC<IProps> = (props: IProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
