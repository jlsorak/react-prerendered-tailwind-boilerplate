import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import loadable from "@loadable/component"
import { PrerenderedComponent } from "react-prerendered-component"

const prerenderedLoadable = dynamicImport => {
  const LoadableComponent = loadable(dynamicImport)
  return React.memo(props => (
    // you can use the `.preload()` method from react-loadable or react-imported-component`
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ))
}

const Home = prerenderedLoadable(() => import('./pages/Home'))
const About = prerenderedLoadable(() => import('./pages/About'))

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
