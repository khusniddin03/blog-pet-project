import { Suspense } from 'react';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { useTheme } from './providers/theme-providers/lib/use-theme';
import { classNames } from '../shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
