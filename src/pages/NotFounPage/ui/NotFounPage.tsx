import { useTranslation } from 'react-i18next';
import * as cls from './NotFounPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFounPageProps {
  className?: string;
}

export const NotFounPage = ({ className }: NotFounPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFounPage, [className])}>
      {t('notFoundPage')}
    </div>
  );
};
