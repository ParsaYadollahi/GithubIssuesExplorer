import React, { Component, Fragment } from 'react';
import Navbar from '../Layout/Navbar';
import PropTypes from 'prop-types';
import axios from 'axios';
import IssueBox from './IssueBox';

// Router
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


// MUI
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

// Icons
import ErrorOutlineSharpIcon from '@material-ui/icons/ErrorOutlineSharp';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const styles = theme => ({
    buttonsBar: {
        background: 'transparent',
        boxShadow: 'none',
    },
    buttonsToolBar: {
        padding: 0,
    },
    buttons: {
        fontSize: '12px',
        textTransform: 'none',
    },
    wrongUrlCard: {
        backgroundColor: '#eceff1',
        width: '40%',
        height: 'auto',
        marginTop: '10%'
    },
    errorButton: {
        backgroundColor: '#E91E63',
        color: '#FFFFFF',
        fontSize: '12px',
        textTransform: 'none',
        margin: '0.75em 0 2em 0',
    }
});

class IssuesPage extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            displayWrongUrl: '',
            display: 'all',
            issues: {
                all: [],
                open: [],
                closed: []
            },
            pulls: [],
            pull_url: '',
            windowSize: 0
        };
        // Add event listener for resizing the number of boxes per row
        window.addEventListener("resize", this.updateWindowSize);
    };

    updateWindowSize = () => {
        this.setState({
            windowSize: window.innerWidth
        });
      };

    componentDidMount() {
        this.updateWindowSize();
        const gitUrl = this.props.location.state.gitUrl;
        let updateUrl = gitUrl.replace(
            'https://github.com/',
            'https://api.github.com/repos/'
        );
        // Get all the repo urls for the API
        const issuesUrlAll = updateUrl + '/issues?state=all';
        const issuesUrlOpen = updateUrl + '/issues?state=open';
        const issuesUrlClosed = updateUrl + '/issues?state=closed';
        const pullsUrl = updateUrl + '/pulls?state=all';
        this.setState({
            pullsUrl: pullsUrl
        });

        // Fetch the data from API
        const repoData = Promise.all([
            axios.get(issuesUrlAll),
            axios.get(issuesUrlOpen),
            axios.get(issuesUrlClosed),
            axios.get(pullsUrl)
        ]);
        repoData
            .then((res) => {
                const dataIssuesAll = res[0].data;
                const dataIssuesOpen = res[1].data;
                const dataIssuesClosed = res[2].data;
                const dataPulls = res[3].data;

                this.setState({
                    loaded: true,
                    issues: {
                        all: dataIssuesAll,
                        open: dataIssuesOpen,
                        closed: dataIssuesClosed
                    },
                    pulls: dataPulls
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    displayWrongUrl: 'This is not a repo, please go back'
                });
            });
    };

    displayIssues = () => {
        // states for grid resizing
        const windowSize =
            this.state.windowSize < 1000 ? 8 :
            this.state.windowSize < 1300 ? 6 : 4;

        // Cases for which data to send to <IssueBox.js>
        switch(this.state.display) {
            case 'all':
            case 'open':
            case 'closed':
                return this.state.issues[this.state.display].map((issue) => {
                    return (
                        // Send each of the issues
                        <Grid
                            xs={windowSize}
                            item
                            key={issue.node_id}>
                                <IssueBox
                                    url={issue.html_url}
                                    title={issue.title}
                                    body={issue.body}
                                    labels={issue.labels}
                                    state={issue.state}
                                    pull_request={issue.pull_request}/>
                        </Grid>
                    );
                });
            case 'pull':
                return this.state.pulls.map((pr) => {
                    return (
                        // Send each of the pull requests
                        <Grid
                            item xs={windowSize}
                            key={pr.node_id}>
                                <IssueBox
                                    url={pr.html_url}
                                    title={pr.title}
                                    body={pr.body}
                                    labels={pr.labels}
                                    pull_request={'Pull Request'} />
                        </Grid>
                    );
                });
            default:
                // Will never happen
                return (
                    <div>
                        ISSUES
                    </div>
                );
        };
    };
    handleButton = (event) => {
        this.setState({
            display: event
        });
    };

    render() {
        const { classes } = this.props;
        // The All - Open - closed - Pr buttons
        const buttonsBar =
            <AppBar position='static' className={classes.buttonsBar}>
                    <Toolbar className={classes.buttonsToolBar}>
                        <Button
                            style={{
                                backgroundColor: 'transparent',
                                // Change color depending on state
                                color: this.state.display=== 'all' ? '#E91E63' : '#607D8B'
                            }}
                            className={classes.buttons}
                            disableRipple
                            value='all'
                            onClick={() => this.handleButton('all')}>
                                All Issues
                        </Button>
                        <Button
                            onClick={() => this.handleButton('open')}
                            style={{
                                backgroundColor: 'transparent',
                                // Change color depending on state
                                color: this.state.display=== 'open' ? '#E91E63' : '#607D8B'
                            }}
                            className={classes.buttons}
                            disableRipple
                            value='open'>
                                Open Issues
                        </Button>
                        <Button
                            onClick={() => this.handleButton('closed')}
                            style={{
                                backgroundColor: 'transparent',
                                // Change color depending on state
                                color: this.state.display=== 'closed' ? '#E91E63' : '#607D8B'
                            }}
                            className={classes.buttons}
                            disableRipple
                            value='closed'>
                                Closed Issues
                        </Button>
                        <Button
                            onClick={() => this.handleButton('pull')}
                            style={{
                                backgroundColor: 'transparent',
                                color: this.state.display=== 'pull' ? '#E91E63' : '#607D8B'
                            }}
                            className={classes.buttons}
                            disableRipple
                            value='pull'>
                                Pull Requests
                        </Button>
                    </Toolbar>
                </AppBar>

        return (
            <Fragment>
                <Navbar />
                {/* Display Button Bar */}
                <Grid style={{ margin: '5%', marginTop: '2%'}}>
                    {buttonsBar}
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={9}
                        item>
                            {/* Display Issues if the API has returned a correct response */}
                            {this.state.loaded ? (
                                this.displayIssues()
                            ) : this.state.displayWrongUrl !== '' ? (
                                // Display a 404 error if the user input a repo that doesn't exist
                                <Grid container spacing={3} className={classes.wrongUrlCard}>
                                    <Grid container
                                        direction="column"
                                        justify="center"
                                        alignItems="center">
                                        <Typography
                                            style={{
                                                textAlign: 'center',
                                                fontSize: '18px',
                                                padding: '0.4em',
                                                color: '#E91E63' ,
                                                fontWeight: 'bold'}}>
                                                    OOPS
                                        </Typography>
                                        <ErrorOutlineSharpIcon style={{ color: '#E91E63' }} />
                                        <Typography
                                            style={{
                                                textAlign: 'center',
                                                padding: '0.4em'
                                                }}>
                                                    Error 404
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        justify="center"
                                        direction='column'
                                        alignItems="center">
                                            <Typography
                                                style={{
                                                    textAlign: 'center',
                                                    padding: '0.75em'
                                                }}>
                                                    This repo does not exist, please search again
                                            </Typography>
                                            <Button
                                                component={Link}
                                                to="/"
                                                className={classes.errorButton}
                                                startIcon={
                                                    <KeyboardBackspaceIcon
                                                        style={{ fontSize: '25px', color : '#FFFFFF' }}/>
                                                }>
                                                    Back to Search
                                            </Button>
                                    </Grid>
                                </Grid>
                                ) : (
                                    // Display a circular progress if the API hasnt returned any response
                                <div>
                                    <CircularProgress />
                                </div>
                            )}
                    </Grid>
                </Grid>
            </Fragment>
        );
    };
};

IssuesPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(IssuesPage));
