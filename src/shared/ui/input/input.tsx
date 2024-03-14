import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/class-names/class-names';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    placeholder?: string;
}

export const Input = (props: IProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autofocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [caretPosition, setCaretPosition] = useState<number>(0);

    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e?.target?.value);
        setCaretPosition(e?.target?.value?.length ?? 0);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
        const event = e as { target: { selectionStart?: number } };
        setCaretPosition(event?.target?.selectionStart ?? 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef?.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    className={cls.input}
                    value={value}
                    onChange={onHandleChange}
                    type={type}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    ref={inputRef}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
};
