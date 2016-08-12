import Documents from '../../models/documents.js';

const authorised = (req, document) => {
  // User's roles
  const userRoles = req.decoded.roles;

  // Roles which can access the document
  const documentRoles = document.accessibleBy;

  // Check whether the user is authorized to access the document
  for (let i = 0; i < userRoles.length; i++) {
    if (documentRoles.indexOf(userRoles[i]) > -1) {
      return true;
    }
  }

  return false;
};

const destroy = (req, res) => {
  // Find document to delete
  Documents.findById(req.params.id, (error, document) => {
    // Inform user of errors with the database
    if (error) {
      return res.status(500).json({
        success: false,
        message: 'There was an error reading from the database'
      });
    }

    // Document found, confirm user has access to it
    if (document) {
      if (authorised(req, document)) {
        Documents.findByIdAndRemove(req.params.id, (e, d) => {
          if (!e) {
            return res.json(d);
          }
        });
      } else {
        // User not authorized
        return res.status(401).json({
          success: false,
          message: 'Not authorized to access document'
        });
      }
    } else {
      // Failed, no document with specified ID
      return res.status(404).json({
        success: false,
        message: 'Document does not exist',
      });
    }
  });
};

export default destroy;

