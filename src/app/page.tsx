import { DrawerDialogDemo } from "@/components/drawer-dialog-demo";
import { type FC } from "react";

const Home: FC = () => {
  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
      <DrawerDialogDemo />
    </div>
  );
};

export default Home;
