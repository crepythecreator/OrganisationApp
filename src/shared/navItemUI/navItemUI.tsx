import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import style from './navItemUI.module.css';

export type INavItemUIProps = {
  path?: string;
  count?: number;
  index: number;
  title: string;
}

export default function NavItemUI ({path, count, index, title}: INavItemUIProps) {
  return (
    <NavLink className={({ isActive }) => clsx(style.main, {[style.active]: isActive })} to={`/${path ?? ''}`} key={index}>
      <span className={style.index}>{'0'+index}</span>
      <div className={style.content}>
        <span>{title}</span>
        <span>{count ?? ''}</span>
      </div>
    </NavLink>
  );
}
