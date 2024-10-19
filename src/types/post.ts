
export interface IReplay {
  comment: string;
  userId: string;
}

export interface IComment {
  comment: string;
  userId: string;
  replay?: IReplay[];
}

export interface TPost extends Document {
  _id?: string;
  userId: string;
  category: string;
  title: string;
  description: string;
  image: string;
  comments?: IComment[];
  vote: [
    {
      value: string;
      user: string;
    }
  ];

  premium: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}


export type TComents = {
  comment: string;
  userId: string
}

export type TComentsUpdate = {
  comment: string;
  commentId: string
}