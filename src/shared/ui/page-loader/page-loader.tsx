import { classNames } from 'shared/lib/class-names/class-names';
import { Loader } from '../loader/loader';
import cls from './page-loader.module.scss';

const PageLoader = () => (
    <div className={classNames(cls.PageLoader)}>
        <Loader />
    </div>
);

export default PageLoader;
