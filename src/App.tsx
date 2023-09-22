import React, { useEffect } from "react";
import LandingPage from './components/LandingPage/LandingPage';
import './App.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import RepoDetailPage from './components/RepoDetailPage/RepoDetailPage';
import Header from './components/Header/Header';
import { useDispatch } from "react-redux";
import { setRepos } from "services/repos/repoSlice";

export const AppWithHeader = () => {
  return <>
    <Header />
    <Outlet />
  </>
}

export const App = () => {

  const dispatch = useDispatch();

  const getRepos = async () => {
    const repoResponse = await (await fetch('https://api.github.com/orgs/godaddy/repos')).json();
    dispatch(setRepos(repoResponse));
  }

  useEffect(()=>{
    getRepos();
    // eslint-disable-next-line
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppWithHeader />,
      children:[
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/repo/:id",
          element: <RepoDetailPage />,
        }
      ]
    }
  ]);

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
