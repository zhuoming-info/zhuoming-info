import mongoose from 'mongoose';

interface JxswAttrs {
  content: string;
  userId: string;
  tag: string;
}

interface JxswDoc extends mongoose.Document {
  content: string;
  userId: string;
  tag: string;
  likeUsersId: Array<string>;
  commentsId: Array<string>;
}

interface JxswModel extends mongoose.Model<JxswDoc> {
  build(attrs: JxswAttrs): JxswDoc;
}

const postSchema = new mongoose.Schema(
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

postSchema.statics.build = (attrs: JxswAttrs) => {
  return new Jxsw(attrs);
};

const Jxsw = mongoose.model<JxswDoc, JxswModel>('Jxsw', postSchema);

export { Jxsw };
