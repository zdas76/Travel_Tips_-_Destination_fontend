import { logOutUser } from "@/actions/authActions";
import { TUser } from "@/types/auth";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";

export default function UserDropdown(user: TUser) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar src={user.profileImage} />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>
          <Link href={`${user.role}`}>Dashboard</Link>
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => logOutUser()}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
