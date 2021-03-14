import React from 'react';
import './App.scss';

import ProjectsPage from './pages/projects/projects.page';
import AboutPage from './pages/about/about.pages';
import BlogsPage from './pages/blogs/blogs.page';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router';
import HomePage from './pages/home/home.page';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/blogs' component={BlogsPage} />
        <Route exact path='/projects' component={ProjectsPage} />
        <Route exact path='/about' component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
