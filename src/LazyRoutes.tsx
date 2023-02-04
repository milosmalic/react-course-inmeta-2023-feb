import React, { ElementType, lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router';

/*
 * Suspense is a component that wraps the custom components and enables them to communicate
 *  to React that they're waiting for some data to load before the component is rendered.
 * */
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

/* Lazy Loaded Pages for code splitting*/
const WorkTodosPage = Loadable(lazy(() => import('./pages/WorkTodosPage')));
const ShoppingListPage = Loadable(
  lazy(() => import('./pages/ShoppingListPage')),
);
const LoginPage = Loadable(lazy(() => import('./pages/LoginPage')));

type Paths = {
  work: string;
  shoppingList: string;
  auth: string;
};

export const pathNames: Paths = {
  work: '/',
  shoppingList: '/shopping-list',
  auth: '/auth',
};

const lazyRoutes: RouteObject[] = [
  {
    path: pathNames.work,
    element: <WorkTodosPage />,
  },
  {
    path: pathNames.shoppingList,
    element: <ShoppingListPage />,
  },
  {
    path: pathNames.auth,
    element: <LoginPage />,
  },
];

export default lazyRoutes;
