import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchUI() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-violet-900" : "bg-violet-500"}
          relative flex items-center h-[20px] w-[39px] shrink-0 cursor-pointer border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 rounded-full`}
    >
      {/* <span className="sr-only">Use setting</span> */}
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-[18px]" : "translate-x-[-1px]"}
            pointer-events-none inline-block h-[18px] w-[18px] transform  bg-white shadow-lg ring-0 transition duration-200 ease-in-out rounded-full`}
      />
    </Switch>
  );
}
