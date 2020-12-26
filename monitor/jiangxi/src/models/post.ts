import mongoose from 'mongoose';

interface JiangxiAttrs {
  content: string;
  userId: string;
  tag: string;
}

interface JiangxiDoc extends mongoose.Document {
  content: string;
  userId: string;
  tag: string;
  likeUsersId: Array<string>;
  commentsId: Array<string>;
}

interface JiangxiModel extends mongoose.Model<JiangxiDoc> {
  build(attrs: JiangxiAttrs): JiangxiDoc;
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

postSchema.statics.build = (attrs: JiangxiAttrs) => {
  return new Jiangxi(attrs);
};

const Jiangxi = mongoose.model<JiangxiDoc, JiangxiModel>('Jiangxi', postSchema);

export { Jiangxi };
