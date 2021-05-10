import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Cart, Checkout, Product } from 'pages'
import { theme } from 'theme'

import 'firebase/firestore'
import { FirebaseAppProvider } from 'reactfire'

export const firebaseConfig = {
  apiKey: "AIzaSyDedpbGW98bqXiyotQipuehqy16fIPHccU",
  authDomain: "online-store-7da28.firebaseapp.com",
  projectId: "online-store-7da28",
  storageBucket: "online-store-7da28.appspot.com",
  messagingSenderId: "832278548571",
  appId: "1:832278548571:web:34e908d5038f850ac6af7e",
  measurementId: "G-FW0F9LP55B"
};

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Product />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </FirebaseAppProvider>
  )
}

export default App
