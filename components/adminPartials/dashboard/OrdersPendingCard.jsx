import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React from "react";

function OrdersPendingCard({
  length,
  allpending,
  pendingorders,
  pendingProduced,
  pendingtest,
  pendingtransport,
  desc,
}) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-800 shadow-lg rounded-md border border-gray-600">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <ExclamationCircleIcon className="h-12 text-gray-200" />
        </header>
        <h2 className="text-lg font-semibold text-gray-200 mb-2">
          All Pending Orders
        </h2>
        <div className="text-xs font-semibold text-slate-200 uppercase mb-1">
          Total number of pending orders {desc || ""}
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-100 mr-2">
            {allpending ||
              length ||
              pendingorders ||
              pendingProduced ||
              pendingtest ||
              pendingtransport ||
              0}
          </div>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default OrdersPendingCard;
