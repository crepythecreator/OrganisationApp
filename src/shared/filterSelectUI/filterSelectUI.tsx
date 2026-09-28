import type { Ref } from 'react';

import style from './filterSelectUI.module.css'

export type IfilterSelectUIProps = {
  title: string;
  data: string[];
  ref?: Ref<HTMLSelectElement>;
}

export default function FilterSelectUI ({title, data, ref}: IfilterSelectUIProps) {
  return (
    <div className={style.main}>
      <span className={style.title}>{title}</span>
      <select className={style.select} ref={ref}>
        {data.map((e, i) => {
          return <option value={e} key={i}>{e}</option>
        })}
      </select>
    </div>
  );
}
