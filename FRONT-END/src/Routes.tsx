import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Orders from './Orders'

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/orders" component={Orders} />

      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes;