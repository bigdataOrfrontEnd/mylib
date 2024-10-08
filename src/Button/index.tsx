import classNames from 'classnames';
import React, { memo } from 'react';
import styles from './index.module.less'; // 引入样式
type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
type ButtonHTMLType = 'submit' | 'button' | 'reset';
export interface ButtonProps {
  /** 按钮类型 */
  type?: ButtonType;
  htmlType?: ButtonHTMLType;
  disabled?: boolean;
  loading?: boolean;
  /** 按钮文字 */
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default',
    children,
    onClick,
    htmlType = 'button',
    disabled = false,
    loading = false,
  } = props;
  console.log(styles, styles['button']);

  const buttonClass = classNames(styles['button'], styles[type], {
    [styles.disabled]: disabled,
    [styles.loading]: loading,
  });
  return (
    <button
      type={htmlType}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span className={styles.spinner}></span> : children}
    </button>
  );
};
export default memo(Button);
