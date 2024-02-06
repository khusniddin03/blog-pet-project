import { classNames } from 'shared/lib/class-names/class-names';
import './loader.scss';

interface IProps {
    className?: string;
}

export const Loader = ({ className }: IProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
