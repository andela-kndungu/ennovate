import Documents from '../../models/documents.js';

const find = {
  // Retrieve all documents
  all: (req, res) => {
    console.log(req.decoded);
    // Roles of user trying to access document
    const rolesOfUser = ['kinuthia'];

    // Users can only access public documents or those
    // belonging to a role they are assigned
    const query = Documents.find({
      $or: [{
        accessibleBy: 'user'
      }, {
        accessibleBy: {
          $in: rolesOfUser
        }
      }]
    });

    // Return documents created on a specific day
    if (req.query.category) {
      query.where('category').equals(req.query.category);
    }

    query.populate('owner');

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
      res.json(documents);
    });
  }
};

export default find;

