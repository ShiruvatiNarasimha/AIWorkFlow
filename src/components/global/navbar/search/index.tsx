import { SearchIcon } from "lucide-react";
import React from "react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div
      className="hidden lg:flex overflow-hidden gap-x-2 border-[1px] 
  border-[#3352CC] rounded-full px-4 py-1 items-center flex-1"
    >
      <SearchIcon color="#335CC"/>
    </div>
  );
};

export default Search;
