import React from 'react';
import {MenuPage} from './Pages/MenuPage'
import {TrucoPage} from './Pages/TrucoPage'
import {ChinchonPage} from './Pages/ChinchonPage'
import {ChorizoPage} from './Pages/ChorizoPage'
import {ThemeProvider,createMuiTheme} from '@material-ui/core'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';


function App() {
  const theme=createMuiTheme({
    palette: {
      primary:{
        main:'#311b92',
        light:'#6746c3',
        dark:'#000063',
        contrastText:'#ffffff'
      },
      secondary:{
        main:'#00796b',
        light:'#48a999',
        dark:'#004c40',
        contrastText:'#ffffff'
      },
      danger:{
        main: '#c62828'
      },
      success:{
        main: '#689f38'
      },
      type:'dark'
    }
})
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MenuPage}/>
            <Route exact path='/Truco' component={TrucoPage}/>
            <Route exact path='/Chinchon' component={ChinchonPage}/>
            <Route exact path='/Chorizo' component={ChorizoPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
