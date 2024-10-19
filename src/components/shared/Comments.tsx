
'use client';

import { useUser } from '@/context/user.provider';
import { useCreateComment } from '@/hooks/userPost/UserPost';

// import { commentSchema } from '@/ZodSchema/commentsSchema';
// import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/input'
import { Avatar, Button } from '@nextui-org/react'
import { SendHorizontal } from 'lucide-react';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";



export default function Comments(id: {id: string}) {
    const user = useUser();
    
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({
        // resolver: zodResolver(commentSchema)
    });
const {mutate:handelUserComments  } = useCreateComment()

    const onSubmit: SubmitHandler<FieldValues> = (data ) => {
      
      const formdata = {
          id: id.id,
           comment : {
            comment: data.comment,
            userId: user?.user?._id as string
           }
        };
        
        handelUserComments(formdata);
        reset();
      };

  return (
    <div>
        <form className='flex' onSubmit={handleSubmit(onSubmit)} >
        <Input
        {... register('comment')}
          type="text"
          placeholder="your comments"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center p-1">
               <Avatar src={user?.user?.profileImage} size="sm" />
            </div>
          }
          isInvalid={true}
          errorMessage={errors?.comment && `${errors?.comment?.message}`}
        />
        <Button variant='light' type='submit' className='cursor-pointer hover:bg-none'> <SendHorizontal fill='blue' size={60} stroke='0' /></Button>
        </form>
    </div>
  )
}
