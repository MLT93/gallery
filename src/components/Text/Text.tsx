import React from 'react';
import classNames from 'classnames';
import styles from './styles/text.modules.scss';

type TextProps = {
  size: string;
  color?: string;
  label: string;
  textColorEnd?: string;
};

/**
 * * A versatile Text component for rendering various text elements with customizable styles.
 *
 * @param {string} size - The size of text element to render ('span__bold', 'a', ...).
 * @param {string} color - Optional color class to apply to the text.
 * @param {string} label - The text content to display.
 * @param {string} textColorEnd - Optional text to append with a different color.
 *
 * @returns JSX.Element representing the text with applied styles and properties.
 *
 * @examples
 * ```
 * //* Rendering a bold span element
 * <Text type="span__bold" label="Important Notice" color="warning" />
 *
 * //* Rendering an anchor element with custom onClick handler
 * <Text
 *   type="a"
 *   label="Click here"
 *   color="primary"
 *   onClick={() => console.log('Link clicked')}
 * />
 *
 * //* Using with additional HTML attributes
 * <Text
 *   type="span__bold"
 *   label="Hover me"
 *   color="info"
 *   title="Additional information"
 *   onMouseEnter={() => console.log('Mouse entered')}
 * />
 * ```
 *  @author Marcos Lambir Torres
 */

export const Text = React.forwardRef<HTMLElement, TextProps & React.HTMLAttributes<HTMLElement>>(
  ({ size, color, label, textColorEnd, ...props }, ref): JSX.Element => {
    return (
      <>
        {/* {size === 'h1' && (
          <h1
            className={classNames(styles.h1, styles[`text-color-${color}`], { ...props.style })}
            {...props}
            ref={ref}>
            {label}
            <span className={classNames(styles.h1_bold, styles['text-color-3'])}>
              {textColorEnd && ` ${textColorEnd}`}
            </span>
          </h1>
        )}
        {size === 'h1_bold' && (
          <h1
            className={classNames(styles.h1_bold, styles[`text-color-${color}`], { ...props })}
            {...props}
            ref={ref}>
            {label}
            <span className={styles['text-color-3']}>{textColorEnd && ` ${textColorEnd}`}</span>
          </h1>
        )}
        {size === 'h2' && (
          <h2
            className={classNames(styles.h2, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={classNames(styles.h2_bold, styles['text-color-3'])}>
              {textColorEnd && ` ${textColorEnd}`}
            </span>
          </h2>
        )}
        {size === 'h2_bold' && (
          <h2
            className={classNames(styles.h2_bold, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={styles['text-color-3']}>{textColorEnd && ` ${textColorEnd}`}</span>
          </h2>
        )}
        {size === 'h3' && (
          <h3
            className={classNames(styles.h3, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={classNames(styles.h3_bold, styles['text-color-3'])}>
              {textColorEnd && ` ${textColorEnd}`}
            </span>
          </h3>
        )}
        {size === 'h3_bold' && (
          <h3
            className={classNames(styles.h3_bold, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={styles['text-color-3']}>{textColorEnd && ` ${textColorEnd}`}</span>
          </h3>
        )}
        {size === 'h4' && (
          <h4
            className={classNames(styles.h4, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={classNames(styles.h4_bold, styles['text-color-3'])}>
              {textColorEnd && ` ${textColorEnd}`}
            </span>
          </h4>
        )}
        {size === 'h4_bold' && (
          <h4
            className={classNames(styles.h4_bold, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={styles['text-color-3']}>{textColorEnd && ` ${textColorEnd}`}</span>
          </h4>
        )}
        {size === 'h5' && (
          <h5
            className={classNames(styles.h5, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={classNames(styles.h5_bold, styles['text-color-3'])}>
              {textColorEnd && ` ${textColorEnd}`}
            </span>
          </h5>
        )}
        {size === 'h5_bold' && (
          <h5
            className={classNames(styles.h5_bold, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={styles['text-color-3']}>{textColorEnd && ` ${textColorEnd}`}</span>
          </h5>
        )}
        {size === 'pa' && (
          <p className={classNames(styles.pa, styles[`text-color-${color}`], className)} {...props} ref={ref}>
            {label}
            <span className={classNames(styles.pa_bold, styles['text-color-3'])}>
              {textColorEnd && ` ${textColorEnd}`}
            </span>
          </p>
        )}
        {size === 'pa_bold' && (
          <p
            className={classNames(styles.pa_bold, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
            <span className={styles['text-color-3']}>{textColorEnd && ` ${textColorEnd}`}</span>
          </p>
        )}
        {size === 'span' && (
          <span
            className={classNames(styles.span, styles[`text-color-${color}`], className)}
            {...props}
            ref={ref}>
            {label}
          </span>
        )} */}
        {size === 'span__bold' && (
          <span
            className={classNames(
              (styles as Record<string, string>).span__bold,
              color ? (styles as Record<string, string>)[`text-color-${color}`] : null,
              { ...props.style },
            )}
            {...props}
            ref={ref}>
            {label}
          </span>
        )}
        {size === 'a' && (
          <span
            className={classNames(
              [(styles as Record<string, string>).a],
              color ? (styles as Record<string, string>)[`text-color-${color}`] : null,
              {
                ...props.style,
              },
            )}
            {...props}
            ref={ref}>
            {label}
          </span>
        )}
      </>
    );
  },
);
