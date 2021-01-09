import mongoose from 'mongoose';

interface FoldersAttrs {
  name: string;
  userId: string;
  level: number;
}

interface FoldersDoc extends mongoose.Document {
  name: string;
  userId: string;
  level: number;
}

interface FoldersModel extends mongoose.Model<FoldersDoc> {
  build(attrs: FoldersAttrs): FoldersDoc;
}

const foldersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, required: true },
    level: { type: Number, required: true },
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

foldersSchema.statics.build = (attrs: FoldersAttrs) => {
  return new Folders(attrs);
};

const Folders = mongoose.model<FoldersDoc, FoldersModel>('Folders', foldersSchema);

export { Folders };
