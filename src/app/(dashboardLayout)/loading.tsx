import { Spinner } from "@nextui-org/react";
import React from "react";

export default function loading() {
  return (
    <div>
      <Spinner label="Loading..." color="warning" />
    </div>
  );
}
