import mongoose from 'mongoose';

interface PostAttrs {
  content: string;
  userId: string;
}

interface PostDoc extends mongoose.Document {
  content: string;
  userId: string;
  tags: Array<string>;
  likeUsersId: Array<string>;
  commentsId: Array<string>;
}

interface PostModel extends mongoose.Model<PostDoc> {
  build(attrs: PostAttrs): PostDoc;
}

const postSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    userId: { type: String, required: true },
    tags: { type: [{ type: String }] },
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

postSchema.statics.build = (attrs: PostAttrs) => {
  return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);

export { Post };
