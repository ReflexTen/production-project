import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useEffect } from 'react';

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error('Voott errorr');
    }
  }, []);

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
