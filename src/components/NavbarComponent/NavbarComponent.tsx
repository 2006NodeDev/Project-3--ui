import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            color: "#f26926",
            marginLeft: 'auto'
        },
        title: {
            color: "#f26926",
            margins: 'auto',
            flexGrow: 1,
            fontFamily: "Impact"
        },
        button: {
            backgroundColor: "white",
            color: "#86449e"
        },
        Link: {
            textDecoration: "none"
        },
        bar: {
            backgroundColor: "white",
            borderColor: "#f26926"
        },
        logo: {
            alignItems: 'screenLeft'
        }
    }),
);

export const NavBarComponent: FunctionComponent<any> = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let menuItems = []

    menuItems.push(<MenuItem key={'updatePassword'} onClick={handleClose}><Link to='updatePassword'>Update Password</Link></MenuItem>)
    menuItems.push(<MenuItem key={'associateInfo'} onClick={handleClose}><Link to='/associateInfo'>Associate Information</Link></MenuItem>)
    menuItems.push(<MenuItem key={'allAssociate'} onClick={handleClose}><Link to='/allAssociate'>All Associates</Link></MenuItem>)
    menuItems.push(<MenuItem key={'currentBatches'} onClick={handleClose}><Link to='/currentBatches'>Current Batches</Link></MenuItem>)
    return (
            <nav>
                <AppBar position="static">
                    <Toolbar className={classes.bar}>
                    
                        <img className={classes.logo} src={('https://3g4d13k75x47q7v53surz1gi-wpengine.netdna-ssl.com/wp-content/themes/revature/imgs/logo.png')} alt = 'Revature Logo'/>
                        <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                            <MenuIcon />
                        </IconButton>
                        <Menu id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            {menuItems}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </nav>

    )
}