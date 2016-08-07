import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';

const CardExampleWithAvatar = (props) => {
  console.log(props.owner);
  const user = JSON.parse(props.owner);
  return (<Card style={{ width: '300px', margin: '20px', float: 'left' }}>
    <CardHeader
      style={{ fontSize: '15px' }}
      title={user.username || 'kinuthia'}
      subtitle={
        <div style={{ fontSize: '11px' }}>
          <div>{moment(props.date).format('Do MMMM YYYY')}</div>
          <div>{moment(props.date).format('h:mm:ss a')}</div>
      </div>}
      avatar={user.photo || "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png"}
      actAsExpander
    />
    <CardTitle title={props.title} actAsExpander />
    <CardText expandable>
      <div>
        {props.content}
      </div>
    </CardText>
    <CardActions style={{ textAlign: 'right' }}>
      <FlatButton label="Edit" secondary={true} />
    </CardActions>
  </Card>
  );
}

export default CardExampleWithAvatar;
