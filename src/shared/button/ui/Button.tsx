import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import type { ButtonProps, ButtonType } from '../model/types';

const buttonConfig: Record<ButtonType, { label: string; variant: string }> = {
  save: { label: 'Сохранить', variant: 'primaryBlack' },
  publish: { label: 'Опубликовать', variant: 'primaryRed' },
  copy: { label: 'Скопировать ссылку', variant: 'primaryBlue' },
  cancel: { label: 'Отмена', variant: 'outlineBlack' },
  details: { label: 'Подробнее', variant: 'outlineGray' },
  delete: { label: 'Удалить', variant: 'outlineRed' },
};

export const Button: React.FC<ButtonProps> = ({ type, onClick, className }) => {
  const config = buttonConfig[type];

  if (!config) {
    console.log(`button type "${type}" is not supported`);
    return null;
  }

  return (
    <button
      type="button"
      className={classNames(styles.button, styles[config.variant], className)}
      onClick={onClick}
    >
      {config.label}
    </button>
  );
};
