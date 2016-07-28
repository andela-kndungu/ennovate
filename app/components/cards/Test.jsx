import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = () => (
  <Card style={{ width: '300px', margin: '20px', float: 'left' }}>
    <CardHeader
      title="kinuthia"
      subtitle="3/4/2016"
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
