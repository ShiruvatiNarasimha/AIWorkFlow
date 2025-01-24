import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ title, description, icon, strategy }: Props) => {
  return (
    <div className="border-2 border-[#3352CC] rounded-2xl gap-x-5 p-5 flex items-center">
      {icon}
      <div className="flex flex-col flex-q">
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-[#9D9D9D] text-base w-full md:w-10/12 xl:w:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IntegrationCard;
