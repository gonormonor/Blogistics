import { ClipboardListIcon } from "@heroicons/react/outline";
import React from "react";

function OrdersCard({ length, allorders }) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-gray-800 shadow-lg rounded-md border border-gray-600">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <ion-icon name="clipboard-outline" class='text-3xl text-white'></ion-icon>
        </header>
        <h2 className="text-lg font-semibold text-gray-200 mb-2">
          All Orders
        </h2>
       
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-100 mr-2">
            {allorders || length}
          </div>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default OrdersCard;
