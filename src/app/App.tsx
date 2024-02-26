import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button type="button" onClick={toggleTheme}>{t('Toggle Theme')}</button>
            <Suspense fallback="">
                <LangSwitcher />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
