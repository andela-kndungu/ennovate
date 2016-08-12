import Documents from '../../models/documents.js';

const find = {
  // Retrieve all documents
  all: (req, res) => {
    // Users can only access public documents or those
    // belonging to a role they are assigned
    const rolesOfUser = req.decoded.roles || [];
    console.log(req.decoded);

    const query = Documents.find({
      $or: [{
        accessibleBy: 'user'
      }, {
        accessibleBy: {
          $in: rolesOfUser
        }
      }]
    });

    query.populate('owner');

    if (req.query.category) {
      query.where('category').equals(req.query.category);
    }

    // Sort by date in descendig order (latest first)
    query.sort({
      createdAt: -1
    });

    // Execute the query and return the results
    query.exec((error, documents) => {
      // Inform user of errors with the database
      if (error) {
        documents = {
          success: false,
          message: 'There was a databse error'
        };
      }
      console.log(documents);
      if (req.query.username) {
        documents = documents.filter((document) => {
          const user = document.owner.username;
          return user === req.query.username;
        });
      }
      res.json(documents);
    });
  },

  public: (req, res) => {
    // Users can only access public documents or those
    // belonging to a role they are assigned
    const query = Documents.find({ accessibleBy: 'user' });

    query.populate('owner');

    if (req.query.category) {
      query.where('category').equals(req.query.category);
    }

    // Sort by date in descendig order (latest first)
    query.sort({
      createdAt: -1
    });

    // Execute the query and return the results
    query.exec((error, documents) => {
      // Inform user of errors with the database
      if (error) {
        documents = {
          success: false,
          message: 'There was a databse error'
        };
      }
      console.log(documents);
      if (req.query.username) {
        documents = documents.filter((document) => {
          const user = document.owner.username;
          return user === req.query.username;
        });
      }
      res.json(documents);
    });
  }
};

export default find;

