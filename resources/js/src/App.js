import React from 'react';
import ReactDOM from 'react-dom';
import{
    HashRouter as Router,
    Switch,
    Route,
    Link
}from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {
    return (
        <Router className="App__container">
        <Switch>
            
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          
          <Route exact path="/edit/:id">
            <Edit />
          </Route>

          <Route path="/edit">
            <Edit />
          </Route>

        </Switch>
        </Router>
    );

    
}

ReactDOM.render(<App />, document.getElementById('app'));
/*
function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">App Component ehek</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}*/

