"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/ZodSchema/categorySchema";
import { useUpdateCategory } from "@/hooks/admin/category";
import LoadingBlur from "@/components/shared/loading";
import { Pencil } from "lucide-react";
import { TCategoty } from "@/types/admin/category";

export default function UpdateCategoryModal(item: TCategoty) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { mutate: handelUpdateCategory, isPending } = useUpdateCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
    defaultValues: { name: item.name },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // const id = item._id;
    const updatedata = {
      data,
      id: item._id as string,
    };
    handelUpdateCategory(updatedata);
  };
  if (isPending) {
    <LoadingBlur />;
  }
  return (
    <div>
      <Button isIconOnly onPress={onOpen}>
        <Pencil color="green" size={20} />
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

                  <Button color="primary" type="submit" onPress={onClose}>
                    Save
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
