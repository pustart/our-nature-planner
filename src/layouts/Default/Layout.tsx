import React, {
  FC,
} from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from '../../components/modules';
import s from './Layout.module.scss';

function Layout({
  children,
  isAuthorized = false,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Header isAuthorized={isAuthorized}/>
      <main className={s.main}>{children}</main>
    </>
  );
}

export const withDefaultLayout = <T,>(
  Component: FC<T>,
  isAuthorized: boolean
) =>
  function WithLayoutComponent(props: T & LayoutProps): JSX.Element {
    return (
      <Layout isAuthorized={isAuthorized}>
        <Component {...props} />
      </Layout>
    );
  };
