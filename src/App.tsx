import React from 'react';
import './App.scss';

import ProjectsPage from './pages/projects/projects.page';
import BlogsPage from './pages/blogs/blogs.page';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router';
import HomePage from './pages/home/home.page';
import JourneyPage from './pages/journey/journey.pages';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/blogs' component={BlogsPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/journey' component={JourneyPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
