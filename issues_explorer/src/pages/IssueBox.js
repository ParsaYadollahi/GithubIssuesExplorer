import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from 'react-router';
import { ReactComponent as Closed } from '../images/issue-closed.svg'
import { ReactComponent as Pull } from '../images/pull-request.svg'




// MUI things
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

// Icon
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Tooltip } from '@material-ui/core';

const styles = theme => ({
    card: {
        height: '30vh',
        boxShadow: '0px 0px 51px -25px rgba(0,0,0,0.70)',
        position: 'relative'
    },
    cardTitle: {
        backgroundColor: '#3F51B5'
    },
    cardTitleContent: {
        color: '#FFFFFF',
        fontSize: '18px',
        fontWeight: 'bold'
    },
    cardBody: {
        height: '10vh',
    },
    cardBodyContent: {
        overflow: 'hidden',
        height: '10vh',
        fontSize: '12px'
    },
    cardLabel: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        width: '93%',
        padding: '15px !important',
    },
    cardButton: {
        margin: 'auto 4% 1.4% auto',
        backgroundColor: '#E91E63',
        textTransform: 'none',
        cursor: 'default',
        "&:hover": {
            backgroundColor: "#E91E63"
        }
    },
    cardLabelContent: {
        fontSize: '12px',
        color: '#FFFFFF',
    },
    icons: {
        float: 'right'
    }
});

class IssueBox extends Component {
    render() {
        const { classes } = this.props;

        // Diaplay the icon at the top right of each box
        const stateIcon =
            (this.props.state === 'Pull Request' || this.props.pull_request) ? (
                <Pull height="15px" className={classes.icons}/>
            ) : this.props.state === 'closed' ? (
                <Closed height="15px" className={classes.icons}/>
            ) : null;

        // What to display for the tooltip
        const issueState = this.props.pull_request ? 'Pull Request' : 'Closed';

        return (
            <Card className={classes.card}>
                {/* Icon of box */}
                <CardContent className={classes.cardTitle}>
                    <Tooltip title={issueState} placement='top'>
                        <span style={{float: 'right'}}>{stateIcon}</span>
                    </Tooltip>
                    {/* Title of box */}
                    <Typography className={classes.cardTitleContent}>
                        <Tooltip title="Go to issue" placement='top'>
                                <a href={this.props.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    style = {{
                                        color: '#FFFFFF',
                                        textDecoration: 'none'
                                    }}>
                                        {this.props.title}
                                </a>
                        </Tooltip>
                    </Typography>
                </CardContent>
                {/* Description of box */}
                <CardContent className={classes.cardBody}>
                    <Typography className={classes.cardBodyContent}>
                        {this.props.body}
                    </Typography>
                </CardContent>
                {/* Labels of box */}
                <CardContent className={classes.cardLabel}>
                    {this.props.labels ? this.props.labels.map((label) => (
                        <Button
                            key={label.id}
                            disableRipple
                            className={classes.cardButton}
                            startIcon={
                                <FiberManualRecordIcon
                                    style={{ fontSize: '10px', color : '#FFFFFF' }}/>
                            }>
                                <Typography className={classes.cardLabelContent}>
                                    {label.name}
                                </Typography>
                        </Button>
                    )) : null}
                </CardContent>
            </Card>
        );
    };
};

IssueBox.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(IssueBox));
