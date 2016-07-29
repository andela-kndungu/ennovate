import Documents from '../../models/documents.js';

const find = {
  // Retrieve all documents
  all: (req, res) => {
    Documents.find({}, (error, documents) => {
      res.json(documents);
    });
  }
};

export default find;

