export type TCategoty = {
  _id?: string;
  name: string;
};

export type TCategotyResopnse = {
  data: [string];
  message: string;
  statusCode: number;
  success: boolean;
};
