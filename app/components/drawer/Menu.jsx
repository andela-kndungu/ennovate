import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import Categories from './Categories.jsx';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',

  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',

  },
  textDiv: {
    color: 'white',
    fontSize: '32px',
    fontWeight: 300,
    padding: '12px'
  },

};

const MenuExampleIcons = () => (
  <div>
    <div style={{ height: '64px', backgroundColor: '#607D8B' }}><div style={style.textDiv}>ennovate</div></div>
    <Categories />
    <Menu>
      <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
      <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
      <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
      <Divider />
      <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
      <MenuItem primaryText="Download" leftIcon={<Download />} />
      <Divider />
      <MenuItem primaryText="Remove" leftIcon={<Delete />} />
    </Menu>
    <Menu>
      <MenuItem primaryText="Clear Config" />
      <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
      <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
      <MenuItem
        primaryText="Workspace"
        rightIcon={
          <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>

          }
        />
        <MenuItem primaryText="Paragraph" rightIcon={<b style={style.rightIcon}>¶</b>} />
        <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}>§</b>} />
      </Menu>
    </div>

);

export default MenuExampleIcons;
