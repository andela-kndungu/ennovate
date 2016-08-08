import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A category title must be provided'],
    unique: true
  }
});

export default mongoose.model('Categories', CategoriesSchema);

