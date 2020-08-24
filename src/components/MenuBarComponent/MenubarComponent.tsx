import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function MenubarComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        
        <MenuItem key={'updatePassword'} onClick={handleClose}><Link to='updatePassword'>Update Password</Link></MenuItem>
 <MenuItem key={'home'} onClick={handleClose}><Link to='/home'>Quick Links</Link></MenuItem>)
 <MenuItem key={'updatePassword'} onClick={handleClose}><Link to='updatePassword'>Update Password</Link></MenuItem>
 <MenuItem key={'associateInfo'} onClick={handleClose}><Link to='/associateInfo'>Associate Information</Link></MenuItem>
 <MenuItem key={'allAssociate'} onClick={handleClose}><Link to='/allAssociate'>All Associates</Link></MenuItem>
 <MenuItem key={'batchInfo'} onClick={handleClose}><Link to='/batchInfo'>Batch Profile</Link></MenuItem>
 <MenuItem key={'currentBatches'} onClick={handleClose}><Link to='/currentBatches'>Current Batches</Link></MenuItem>
 <MenuItem key={'allProfile'} onClick={handleClose}><Link to='/allProfile'>Profile Service</Link></MenuItem>

      </Menu>
    </div>
  );
}
