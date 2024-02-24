import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { LangSwitcher } from "shared/ui/LangSwitcher";


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Suspense fallback="">
                <LangSwitcher />
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
