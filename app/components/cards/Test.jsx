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
import { Editor, EditorState } from 'draft-js';

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

class DocumentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <Card style={{ width: '300px', margin: '20px', float: 'left' }}>
        <CardHeader
          style={{ fontSize: '15px', cursor: 'pointer' }}
          title={this.props.owner.username}
          subtitle={
            <div style={{ fontSize: '11px' }}>
              <div>{moment(this.props.date).format('Do MMMM YYYY')}</div>
              <div>{moment(this.props.date).format('h:mm:ss a')}</div>
            </div>
            }
            avatar={this.props.owner.photo}
            onTouchTap={() => {
              fetchDocuments({ username: this.props.owner.username }, (action) => {
                store.dispatch(action);
              });
            }}
          />
          <CardTitle
            title={this.props.title}
            actAsExpander
            style={{ paddingTop: '0px', paddingBottom: '0px' }}
          />
          <CardText expandable>
            <div>
            <div style={{ fontWeight: '300' }}>
              {this.props.content}
            </div>
            <Editor editorState={this.state.editorState} onChange={this.onChange}/>
          </div>
          </CardText>
          <CardActions style={{ textAlign: 'right' }}>
            <Chip
              style={{
                float: 'left',
                marginBottom: '12px',
                marginLeft: '7px',
                backgroundColor: this.props.isPublic ? 'lightgreen' : 'lightblue'
              }}
              onTouchTap={() => {
                fetchDocuments({ category: this.props.category }, (action) => {
                  store.dispatch(action);
                });
              }}
            >
              {this.props.category}
            </Chip>
            <FlatButton
              label="Delete"
              secondary
              disabled={!this.props.canDelete}
              onTouchTap={(event) => {
                event.preventDefault();

                deleteDocument(this.props.documentId);
              }}
            />
          </CardActions>
        </Card>
    );
  }
}

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

