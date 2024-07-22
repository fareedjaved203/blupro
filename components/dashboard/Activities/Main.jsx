import { columns, removeJob } from "./columns";
import DataTable from "@/components/shared/DataTable";
import Search from "@/components/shared/Search";
import { CiFilter } from "react-icons/ci";

const Main = ({ data, pagination }) => {
  return (
    <div className="" style={{ backgroundColor: "white" }}>
      <div className="border rounded-xl py-7 mb-4 pl-6">
        <div className="flex justify-between items-center pb-8">
          <div
            className="font-mulish"
            style={{ fontSize: "28px", fontWeight: "900" }}
          >
            Recent Acitivities
          </div>
          <div className="">
            <Search />
          </div>
          <div className="bg-[#38B6FF1A] p-2 rounded-md mr-4">
            <CiFilter size={36} />
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          pagination={pagination}
          title={"Recent Activites"}
        />
      </div>
    </div>
  );
};

export default Main;
