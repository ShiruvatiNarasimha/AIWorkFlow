import { ChevronRight } from "lucide-react";
import React from "react";

type Props = {};

const AutomationsBreadCrumb = (props: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#118181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center"></span>
      </div>
    </div>
  );
};

export default AutomationsBreadCrumb;
