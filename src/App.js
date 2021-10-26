
import {HashRouter as Switch,Route} from 'react-router-dom'

import React from 'react'
import { routes } from './routes'
import '../src/assets/styles/styles.scss'

export class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
    )
  }
}

