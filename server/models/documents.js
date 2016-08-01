import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DocumentsSchema = new Schema({
  owner: {
    type: String,
  },

  title: {
    type: String,
    required: [true, 'A title must be provided'],
  },

  content: {
    type: String,
    required: [true, 'Some content must be provided']
  },

  tags: {
    type: Array
  },

  accessibleBy: {
    type: Array
  }

}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

export default mongoose.model('Documents', DocumentsSchema);

