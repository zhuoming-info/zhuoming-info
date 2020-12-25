import mongoose from 'mongoose';

interface CommentAttrs {
  content: string;
  userId: string;
  postId: string;
}

interface CommentDoc extends mongoose.Document {
  content: string;
  userId: string;
  postId: string;
  likeUsersId: Array<string>;
  commentsId: Array<string>;
}

interface CommentModel extends mongoose.Model<CommentDoc> {
  build(attrs: CommentAttrs): CommentDoc;
}

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userId: { type: String, required: true },
    postId: { type: String, required: true },
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

commentSchema.statics.build = (attrs: CommentAttrs) => {
  return new Comment(attrs);
};

const Comment = mongoose.model<CommentDoc, CommentModel>('Comment', commentSchema);

export { Comment };
