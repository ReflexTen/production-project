import { Loader } from 'shared/ui/Loader/Loader';
import * as cls from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.pageLoader, [className])}>
      <Loader />
    </div>
  );
};
