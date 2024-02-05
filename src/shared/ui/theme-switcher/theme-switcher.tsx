import { useTheme } from 'app/providers/theme-providers';
import { Theme } from 'app/providers/theme-providers/types';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ButtonTheme } from '../button/button';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.DARK
                ? <DarkIcon />
                : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
