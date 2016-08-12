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
import request from 'superagent';

import { fetchDocuments } from '../../redux/actions';
import store from '../../redux/store';
import socket from '../../socket';

const deleteDocument = (documentId) => {
  console.log('+++++++++++++');
  console.log(documentId);
  console.log('+++++++++++++');
  request
    .delete(`api/documents/${documentId}`)
    .set('x-access-token', localStorage.getItem('token'))
    .end((error, response) => {
      if (error) {
        console.log(response);
        return null;
      }
      console.log(response.body);

      return socket.emit('newDocument', response.body);
    });
};

const DocumentCard = (props) => {
  return (
    <Card style={{ width: '300px', margin: '20px', float: 'left' }}>
      <CardHeader
        style={{ fontSize: '15px', cursor: 'pointer' }}
        title={props.owner.username}
        subtitle={
          <div style={{ fontSize: '11px' }}>
            <div>{moment(props.date).format('Do MMMM YYYY')}</div>
            <div>{moment(props.date).format('h:mm:ss a')}</div>
          </div>
        }
        avatar={props.owner.photo}
        onTouchTap={() => {
          fetchDocuments({ username: props.owner.username }, (action) => {
            store.dispatch(action);
          });
        }}
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
          onTouchTap={(event) => {
            event.preventDefault();

            deleteDocument(props.documentId);
          }}
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
  documentId: React.PropTypes.string,
  owner: React.PropTypes.shape({
    username: React.PropTypes.string,
    photo: React.PropTypes.string,
  })
};

export default DocumentCard;

