import { columns, removeJob } from "./columns";
import DataTable from "@/components/shared/DataTable";
import Search from "@/components/shared/Search";
import { CiFilter } from "react-icons/ci";

const users = [
  {
    pid: "1",
    name: "Fareed",
    userTypes: "Creator",
    bluPoints: 10,
    email: "fareedjaved203@gmail.com",
    rewards: "1",
  },
  {
    pid: "2",
    name: "Alice",
    userTypes: "Contributor",
    bluPoints: 20,
    email: "alice@example.com",
    rewards: "2",
  },
  {
    pid: "3",
    name: "Bob",
    userTypes: "Creator",
    bluPoints: 15,
    email: "bob@example.com",
    rewards: "1",
  },
  {
    pid: "4",
    name: "Charlie",
    userTypes: "Viewer",
    bluPoints: 5,
    email: "charlie@example.com",
    rewards: "0",
  },
  {
    pid: "5",
    name: "Diana",
    userTypes: "Contributor",
    bluPoints: 25,
    email: "diana@example.com",
    rewards: "3",
  },
  {
    pid: "6",
    name: "Ethan",
    userTypes: "Creator",
    bluPoints: 30,
    email: "ethan@example.com",
    rewards: "4",
  },
  {
    pid: "7",
    name: "Fiona",
    userTypes: "Viewer",
    bluPoints: 12,
    email: "fiona@example.com",
    rewards: "1",
  },
  {
    pid: "8",
    name: "George",
    userTypes: "Contributor",
    bluPoints: 22,
    email: "george@example.com",
    rewards: "2",
  },
  {
    pid: "9",
    name: "Hannah",
    userTypes: "Creator",
    bluPoints: 18,
    email: "hannah@example.com",
    rewards: "3",
  },
  {
    pid: "10",
    name: "Isaac",
    userTypes: "Viewer",
    bluPoints: 8,
    email: "isaac@example.com",
    rewards: "0",
  },
  {
    pid: "11",
    name: "Jack",
    userTypes: "Contributor",
    bluPoints: 28,
    email: "jack@example.com",
    rewards: "2",
  },
  {
    pid: "12",
    name: "Kara",
    userTypes: "Creator",
    bluPoints: 35,
    email: "kara@example.com",
    rewards: "5",
  },
  {
    pid: "13",
    name: "Leo",
    userTypes: "Viewer",
    bluPoints: 11,
    email: "leo@example.com",
    rewards: "1",
  },
  {
    pid: "14",
    name: "Mia",
    userTypes: "Contributor",
    bluPoints: 26,
    email: "mia@example.com",
    rewards: "3",
  },
  {
    pid: "15",
    name: "Nina",
    userTypes: "Creator",
    bluPoints: 19,
    email: "nina@example.com",
    rewards: "2",
  },
];

const jobSeekers = async (pageNo = 1) => {
  const jobs = users;
  const limit = 10;
  const startIndex = (pageNo - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = jobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(jobs.length / limit);

  return {
    data: slicedData,
    pagination: {
      pageNo,
      limit,
      totalPages,
      totalRecords: jobs.length,
    },
  };
};

async function User({ searchParams }) {
  console.log("id is: ", removeJob);
  const { page } = searchParams;
  const { data, pagination } = await jobSeekers(page);

  return (
    <div
      className="container mx-auto py-7 rounded-xl pl-6 mb-4"
      style={{ backgroundColor: "white" }}
    >
      <div className="flex justify-between items-center pb-8">
        <div
          className="font-mulish"
          style={{ fontSize: "28px", fontWeight: "900" }}
        >
          Users
        </div>
        <div className="">
          <Search />
        </div>
        <div>
          <CiFilter size={36} />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        title={"Total Users"}
      />
    </div>
  );
}

export default User;
