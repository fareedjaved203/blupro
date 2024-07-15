import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DetailsModal = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[#E7E7E7] rounded-md mb-2 py-4 w-full"
          style={{ color: "black" }}
        >
          View more details
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-[90vw] sm:max-w-[550px] text-sm"
        style={{ backgroundColor: "white" }}
      >
        <DialogHeader className={`flex justify-center items-center py-4 pt-8`}>
          <DialogTitle>User&#39;s Detail</DialogTitle>
        </DialogHeader>
        <div className="overflow-x-auto px-4 mb-3">
          <div className="shadow-xl">
            {/* <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                PID
              </div>
              <div className="w-full md:w-1/2 p-3" style={{ color: "#999999" }}>
                #123
              </div>
            </div> */}
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Name
              </div>
              <div className="w-full md:w-1/2 p-3">{data?.name}</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                User Types
              </div>
              <div className="w-full md:w-1/2 p-3 ">{data?.userTypes}</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Blu Points
              </div>
              <div className="w-full md:w-1/2 p-3">{data?.bluPoints}</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Email
              </div>
              <div className="w-full md:w-1/2 p-3">{data?.email}</div>
            </div>
            <div className="flex flex-row border-b border-gray-300">
              <div
                className="w-full md:w-1/2 p-3 bg-pinkColor"
                style={{ color: "white" }}
              >
                Rewards
              </div>
              <div className="w-full md:w-1/2 p-3">{data?.rewards}</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsModal;
