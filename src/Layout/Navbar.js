import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


// MUI things
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { Typography, Tooltip } from '@material-ui/core';


const styles = theme => ({
    appBar: {
        backgroundColor: '#E91E63',
    },
    appBarTitle: {
        color: '#FFFFFF',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    appBarUrl: {
        color: '#1A237E',
        fontSize: '18px',
        textAlign: 'right',
        flex: 1
    }
});

export class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position='static' className={classes.appBar}>
                {/* Left side of Navbar */}
                <Toolbar>
                    <Button
                        component={Link}
                        to="/"
                        style={{ textTransform: 'none' }}>
                            <Tooltip title="Go back to Search">
                                <Typography className={classes.appBarTitle}>
                                    Github Issues Viewer
                                </Typography>
                            </Tooltip>
                    </Button>
                    {/* Right side (url) */}
                    <Typography className={classes.appBarUrl}>
                        <Tooltip title="Go to Repo">
                                <a href={this.props.location.state.gitUrl}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style = {{
                                        textDecoration: 'none',
                                        color: '#1A237E'
                                    }}>
                                    {this.props.location.state.gitUrl}
                                </a>
                        </Tooltip>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    };
};

Navbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Navbar));
