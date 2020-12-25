import mongoose from 'mongoose';

interface DocumentAttrs {
  content: string;
  userId: string;
  tag: string;
}

interface DocumentDoc extends mongoose.Document {
  content: string;
  userId: string;
  tag: string;
  likeUsersId: Array<string>;
  commentsId: Array<string>;
}

interface DocumentModel extends mongoose.Model<DocumentDoc> {
  build(attrs: DocumentAttrs): DocumentDoc;
}

const documentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userId: { type: String, required: true },
    tag: { type: String, required: true },
    likeUsersId: { type: [{ type: String }] },
    commentsId: { type: [{ type: String }] },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

documentSchema.statics.build = (attrs: DocumentAttrs) => {
  return new Document(attrs);
};

const Document = mongoose.model<DocumentDoc, DocumentModel>('Document', documentSchema);

export { Document };
