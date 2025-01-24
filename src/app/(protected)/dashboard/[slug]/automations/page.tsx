import AutomationList from "@/components/global/automation-list";
import CreateAutomation from "@/components/global/createAutomation";
import { Check } from "lucide-react";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
      <div className="lg:col-span-4 text-white">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div
          className="flex flex-col rounded-xl bg-background-80 gap-y-6
        p-5 border-[1px] overflow-hidden border-in-active"
        >
          <div>
            <h2 className="texxt-xl text-white">Automations</h2>
            <p className="text-text-secondary">
              Your live automations will show here.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start justify-between">
                <div className="flex flex-col">
                  <h3 className="font-medium text-white">
                    Direct traffic towards website
                  </h3>
                  <p className="text-text-secondary text-sm">Jan 24 2025</p>
                </div>
                <Check className="text-white" />
              </div>
            ))}
          </div>
          <CreateAutomation />
        </div>
      </div>
    </div>
  );
};

export default Page;
