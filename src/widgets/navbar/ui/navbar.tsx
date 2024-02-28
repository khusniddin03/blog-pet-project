import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/class-names/class-names';
import { Modal } from 'shared/ui/modal/modal';
import Button, { ButtonTheme } from 'shared/ui/button/button';
import cls from './navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t(`Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Pariatur 
                id sit molestias commodi. Impedit voluptate dolorum
                 voluptates ad porro amet veritatis recusandae repellat iste. 
                 Itaque deleniti ex incidunt fugiat est iusto laboriosam, quasi quae 
                 eligendi voluptatem dolor tenetur pariatur esse nobis delectus. Tempore 
                 magnam aperiam reiciendis enim culpa laborum consequuntur?`)}
            </Modal>
        </div>
    );
};

export default Navbar;
