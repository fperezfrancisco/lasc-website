import { UserIcon } from "lucide-react";
import React from "react";

const TeamCard = ({ image, team, coach }) => {
  return (
    <div className="w-full max-w-[800px] sm:mx-auto h-full px-0 flex flex-col gap-4">
      <div className="w-full h-[300px] aspect-video rounded-[8px] bg-neutral-200 overflow-hidden">
        {image && image.url ? (
          <img src={image.url} className="w-full h-full object-cover" />
        ) : (
          <p className="text-sm p-4 text-neutral-500">
            Team Picture Comming Soon
          </p>
        )}
      </div>
      <div className="flex flex-col items-start w-full">
        <h2 className="text-lg lg:text-xl font-extrabold uppercase text-text">
          {team}
        </h2>
        <p className="w-full">{coach}</p>
      </div>
    </div>
  );
};

export default TeamCard;
