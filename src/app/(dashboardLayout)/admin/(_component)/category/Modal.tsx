"use client";
import React from "react";
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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/ZodSchema/categorySchema";
import { useCreateCategory } from "@/hooks/admin/category";
import LoadingBlur from "@/components/shared/loading";

export default function CreateCategoryModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate: handelCreateCategory, isPending } = useCreateCategory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handelCreateCategory(data);
    reset();
  };
  if (isPending) {
    <LoadingBlur />;
  }
  return (
    <div>
      <Button color="primary" onPress={onOpen}>
        Create
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 uppercase">
                Create Category
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex w-full flex-wrap mb-8 gap-6 "
                >
                  <Input
                    {...register("name")}
                    type="name"
                    variant="underlined"
                    label="Name"
                    placeholder="Enter category name"
                    isInvalid={true}
                    errorMessage={errors.name && `${errors?.name?.message}`}
                  />

                  <Button color="primary" type="submit">
                    Save
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" onPress={onClose}>
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
