import clsx from 'clsx';

import { type statusTypes,statusWords } from '../types/types';
import style from './statusUI.module.css';

export type IStatusUIProps = {
  type: statusTypes,
  count?: number;
}

export default function StatusUI ({type, count}: IStatusUIProps) {
  return (
    <div className={clsx(style.status, style[type])}>
      <div className={clsx(style.circle, style[`circle${type}`])} />
      <span className={style.title}>
        {count ?? statusWords[type]}
      </span>
    </div>
  );
};
