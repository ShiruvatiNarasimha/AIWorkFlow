"use client";
import { Button } from "@/components/ui/button";
import { AutomationDuoToneBlue } from "@/icons";
import React from "react";
import Loader from "../loader";
import { useCreateAutomation } from "@/hooks/use-automations";

type Props = {};

const CreateAutomation = (props: Props) => {
  // WIP: Create the automation in the database using mutate
  const { isPending, mutate } = useCreateAutomation();

  return (
    <Button
      className="lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white
    rounded-full from-[#3352CC] font-medium to-[#1C2D70]"
      onClick={() => mutate({ name: "TESTING" })}
    >
      <Loader state={isPending}>
        <AutomationDuoToneBlue />
        <p className="lg:inline hidden">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
