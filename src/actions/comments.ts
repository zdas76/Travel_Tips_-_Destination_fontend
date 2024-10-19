"use server"
import nexiosInstance from "@/config/nexios.config";
import { TComents, TComentsUpdate } from "@/types/post";


export const createComments = async (data: {id: string, comment: TComents}) => {
    const {id, comment}= data;
    try {
      const res = await nexiosInstance.put(`/post/comment/${id}`, comment  );
      
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };


export const updateComments = async (data: {id: string, comment: TComentsUpdate}) => {
    const {id, comment}= data;
    try {
      const res = await nexiosInstance.put(`/post/comment-update/${id}`, comment  );
      
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };