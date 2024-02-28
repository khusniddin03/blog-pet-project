import React, {
    useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import { useTheme } from 'app/providers/theme-providers';
import cls from './modal.module.scss';
import { Portal } from '../portal/portal';

interface IProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: IProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
