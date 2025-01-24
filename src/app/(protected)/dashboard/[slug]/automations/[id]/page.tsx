import Trigger from "@/components/global/automations/tigger";
import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automations";
import { Warning } from "@/icons";
import React from "react";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={params.id} />
      <div className="w-full lg:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-y-2">
          <Warning />
          <div className="text-white">When...</div>
        </div>
        <div className="text-white">
          <Trigger id={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Page;
