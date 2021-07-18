import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography color="inherit">
                React & Material-UI Sample Application
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}
