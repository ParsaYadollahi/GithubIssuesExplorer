import React from 'react';
import './App.css';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// MUI
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Pages
import SearchPage from './pages/SearchPage';
import IssuesPage from './pages/IssuesPage';
import themeFile from './util/theme';

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route exact path='/issues' component={IssuesPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
