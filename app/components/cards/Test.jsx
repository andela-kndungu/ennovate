import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleWithAvatar = (props) => {
  return (<Card style={{ width: '300px', margin: '20px', float: 'left' }}>
    <CardHeader
      style={{ fontSize: '15px' }}
      title="kinuthia"
      subtitle={<div style={{ fontSize: '11px' }}><div>{props.date}</div><div>{props.date}</div></div>}
      avatar="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png"
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
