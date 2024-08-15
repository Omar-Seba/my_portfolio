import React from "react";

const JobDescription: React.FC<{ date: string; title: string }> = ({ date, title }) => {
  return (
    <li className="flex items-start gap-4 text-hfour">
      <div className="flex items-center gap-2">
        <div className="bg-[#B3B3B3] rounded-full w-1.5 h-1.5"></div>
        <span className="w-full text-secondary whitespace-nowrap">{date}:</span>
      </div>
      {title}
    </li>
  );
};

export default JobDescription;
