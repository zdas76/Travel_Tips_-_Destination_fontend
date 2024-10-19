/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { HTMLMotionProps } from "framer-motion";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useUpdateComment } from "@/hooks/userPost/UserPost";
import { SendHorizontal } from "lucide-react";
import { useParams } from "next/navigation";
import { TComentsUpdate } from "@/types/post";


export default function CommentUpdate(comment: any ) {
  
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const {postId} = useParams();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comment : comment?.comment
    }
    // resolver: zodResolver(commentSchema)
  });
  const { mutate: handelUserCommentsUpdate } = useUpdateComment();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formdata: {id: string | any, comment: TComentsUpdate} = {
        id: postId,
         comment : {
          comment: data.comment as string,
          commentId: comment._id as string
         }
      };

    handelUserCommentsUpdate(formdata);
    reset();
  };

  return (
    <div>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit
              </ModalHeader>
              <ModalBody>
                <form  onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    {...register("comment")}
                    type="text"
                    placeholder="your comments"
                    labelPlacement="outside"
                    
                    errorMessage={
                      errors?.comment && `${errors?.comment?.message}`
                    }
                  />
                  <Button
                    variant="light"
                    type="submit"
                    className="cursor-pointer hover:bg-none"
                  >
                    
                    <SendHorizontal fill="blue" size={60} stroke="0" />
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export type MotionProps = HTMLMotionProps<"div">; // @see https://www.framer.com/motion/
