import { useTheme } from './providers/theme-providers/lib/use-theme';
import { classNames } from '../shared/lib/class-names/class-names';
import { AppRouter } from './providers/router';
import { Link } from 'react-router-dom';
import './styles/index.scss';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter />
        </div>
    );
}

export default App;