import { useTranslation } from 'react-i18next';
import * as cls from './ErrorPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface ErrorPageProps {
  className?: string;
  error: Error;
}

export const ErrorPage = ({ className, error }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.errorPage, [className])}>
      <div>{t('unexpectedError')}</div>
      <div>{error.message}</div>
      <Button onClick={reloadPage}>{t('reloadPage')}</Button>
    </div>
  );
};
