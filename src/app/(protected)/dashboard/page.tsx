import { onBoardUser } from "@/actions/user";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const user = await onBoardUser();

  return <div>Shiruvati</div>;
};

export default Page;
