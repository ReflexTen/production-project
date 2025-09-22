import * as cls from './Loader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export const Loader = () => {
  return (
    <div className={classNames(cls.ldsRoller)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
