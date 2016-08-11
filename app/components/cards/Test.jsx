import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import moment from 'moment';
import { fetchDocuments } from '../../redux/actions';
import store from '../../redux/store';

const DocumentCard = (props) => {
  return (
    <Card style={{ width: '300px', margin: '20px', float: 'left' }}>
      <CardHeader
        style={{ fontSize: '15px' }}
        title={props.owner.username}
        subtitle={
          <div style={{ fontSize: '11px' }}>
            <div>{moment(props.date).format('Do MMMM YYYY')}</div>
            <div>{moment(props.date).format('h:mm:ss a')}</div>
          </div>
          }
        avatar={props.owner.photo}
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
        <Chip
          style={{
            float: 'left',
            marginBottom: '12px',
            marginLeft: '7px',
            backgroundColor: props.isPublic ? 'lightgreen' : 'lightblue'
          }}
          onTouchTap={() => {
            fetchDocuments({ category: props.category }, (action) => {
              store.dispatch(action);
            });
          }}
        >
          {props.category}
        </Chip>
        <FlatButton
          label="Delete"
          secondary
          disabled={!props.canDelete}
        />
      </CardActions>
    </Card>
  );
};

DocumentCard.propTypes = {
  date: React.PropTypes.string,
  title: React.PropTypes.string,
  content: React.PropTypes.string,
  canDelete: React.PropTypes.bool,
  isPublic: React.PropTypes.bool,
  category: React.PropTypes.string,
  owner: React.PropTypes.shape({
    username: React.PropTypes.string,
    photo: React.PropTypes.string,
  })
};

export default DocumentCard;

