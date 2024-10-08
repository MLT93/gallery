import React from 'react';
import styles from './errorPage.module.scss';

type ErrorProps = {
  error: string;
};

export const ErrorPage = React.forwardRef<HTMLHeadingElement, ErrorProps>(
  ({ error }: { error: string }, ref) => {
    return (
      <h1 ref={ref} className={styles.errorPage}>
        {error}
      </h1>
    );
  },
);
