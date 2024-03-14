import { classNames } from 'shared/lib/class-names/class-names';
import Button from 'shared/ui/button/button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input/input';
import cls from './login-form.module.scss';

interface IProps {
    className?: string;
}

export const LoginForm = ({ className }: IProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
