import { BugButton } from 'app/providers/error-boundary';
// import { Counter } from 'entities/counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input/input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
            {/* <Counter /> */}
            <Input autofocus value={value} onChange={onChange} />
        </div>
    );
};

export default MainPage;
