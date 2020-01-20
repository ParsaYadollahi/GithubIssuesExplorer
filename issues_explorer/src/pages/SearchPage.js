import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { withRouter } from 'react-router';

// MUI
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

// Icons
import SearchIcon from '@material-ui/icons/Search';



const styles = theme => ({
    containerDiv: {
        backgroundColor: '#E91E63',
        height: '100vh',
        width: '100vw'
    },
    title: {
        color: '#FFFFFF',
        align: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: "'Montserrat'; sans-serif",
        fontWeight: 'bold',
        marginBottom: '15px'
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        textAlign: 'center',
        border: '#E91E63',
        width: '700px'
    },
    resize: {
        fontSize: '20px',
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
    },
    error: {
        marginTop: '10px',
        color: '#FFFFFF',
    }
});


class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            githubLink: '',
            errors: ''
        };
    };

    handleChange = (event) => {
        this.setState ({
            githubLink: event.target.value
        });
    };

    handleSubmit = (event) => {
        // Regex for git url
        event.preventDefault();
        const gitRegex = /^https:\/\/github\.com\/\w+\/\w+$/;
        if (this.state.githubLink.match(gitRegex)) {
            // Go to next issues page
            this.props.history.push({
                pathname: '/issues',
                state: {
                    gitUrl: this.state.githubLink
                }
            });
        } else {
            // Display an error message and clean form
            this.setState({
                errors: 'Invalid url, please try again',
                githubLink: ''
            });
        };
    };

    render() {
        const { classes } = this.props;
        // Error container
        const errorDisplay = this.state.errors ? (
                <Typography
                    variant='h5'
                    className={classes.error}>
                        {this.state.errors}
                </Typography>
        ) : null;

        return (
            <div className={classes.containerDiv}>
                <Grid container // outter grid to space in middle
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{minHeight: '100vh', maxWidth: '100%'}}>
                        {/* Display title of page */}
                        <Grid item sm={9} align="center">
                            <Typography
                                variant='h2'
                                className={classes.title}>
                                    GitHub Issue Viewer
                            </Typography>
                            {/* Form to input gitUrl */}
                            <form onSubmit={this.handleSubmit}>
                                <TextField
                                    name='githubLink'
                                    id='githubLink'
                                    variant="outlined"
                                    type='link'
                                    placeholder='Paste a link to GitHub repo!'
                                    size='medium'
                                    fullWidth
                                    value={this.state.githubLink}
                                    className={classes.searchBar}
                                    onChange={this.handleChange}
                                    InputProps={{
                                        classes: {
                                            input: classes.resize,
                                        },
                                        // Search Icon
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                              <SearchIcon style={{ height: '20px', color: '#a9a9a9'}}/>
                                            </InputAdornment>
                                        )
                                    }}/>
                            </form>
                            {/* Display error */}
                            {errorDisplay}
                        </Grid>
                </Grid>
            </div>
        );
    };
};

SearchPage.protoTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(SearchPage));
