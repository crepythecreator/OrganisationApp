import type { Ref } from 'react';

import style from './filterInputUI.module.css'

export type IFilterInputUIProps = {
  title: string;
  type: 'search' | 'date';
  ref?: Ref<HTMLInputElement>;
}

export default function FilterInputUI ({title, type, ref}: IFilterInputUIProps) {
  return (
    <div className={style.main}>
      <span className={style.title}>{title}</span>
      <input type={type} className={style.input} name={type} ref={ref}/>
    </div>
  );
}
