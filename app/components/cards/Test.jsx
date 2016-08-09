import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';

const DocumentCard = (props) => {
  return (
    <Card style={{ width: '300px', margin: '20px', float: 'left' }}>
      <CardHeader
        style={{ fontSize: '15px' }}
        title={props.owner.username || 'kinuthia'}
        subtitle={
          <div style={{ fontSize: '11px' }}>
            <div>{moment(props.date).format('Do MMMM YYYY')}</div>
            <div>{moment(props.date).format('h:mm:ss a')}</div>
          </div>
          }
        avatar={props.owner.photo || "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png"}
        actAsExpander
      />
      <CardTitle
        title={props.title}
        actAsExpander
        style={{ paddingTop: '0px', paddingBottom: '0px' }}
      />
      <CardText expandable>
        <div style={{ fontWeight: '300' }}>
          {props.content}
        </div>
      </CardText>
      <CardActions style={{ textAlign: 'right' }}>
        <FlatButton
          label="Edit"
          secondary
          disabled={props.disableEdit}
        />
      </CardActions>
    </Card>
  );
};

DocumentCard.propTypes = {
  date: React.PropTypes.string,
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  disableEdit: React.PropTypes.bool
};

export default DocumentCard;

