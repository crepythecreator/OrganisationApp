import style from './statusBarUI.module.css';

export type IStatusBarUIProps = {
  sold: number;
  total: number;
}

export default function StatusBarUI ({sold, total}: IStatusBarUIProps) {

  const percent = total > 0 ? Math.min(100, Math.max(0, (sold / total) * 100)) : 0;

  return (
    <div className={style.main}>
      <div className={style.text}>
        <span className={style.title}>Продано</span>
        <span>{`${sold}/${total}`}</span>
      </div>
      <div className={style.statusBar}>
        <div className={style.progress} style={{width: `${percent}%`}} />  
      </div> 
    </div>
  );
}
