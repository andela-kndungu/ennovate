import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card style={{ width: '300px', margin: '20px', float: 'left' }}>
    <CardHeader
      style={{ fontSize: '15px' }}
      title="kinuthia"
      subtitle={<div style={{ fontSize: '11px' }}><div>31/1/2999</div><div>24:59</div></div>}
      avatar="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png"
    />
    <CardTitle title="Card title" />
    <CardText>
      <div>>
        orem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </div>
    </CardText>
    <CardActions>
      <FlatButton label="View" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>

);

export default CardExampleWithAvatar;
