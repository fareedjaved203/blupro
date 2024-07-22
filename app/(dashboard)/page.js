import Summary from "@/components/dashboard/summary/Summary";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import users from "./users.json";
import Main from "@/components/dashboard/Activities/Main";

const jobSeekers = async (pageNo = 1) => {
  const jobs = await users;
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

const Dashboard = async ({ searchParams }) => {
  const { page } = searchParams;
  const { data, pagination } = await jobSeekers(page);

  return (
    <div>
      <Summary />
      <>
        <Tabs defaultValue="feed" className="w-full">
          <TabsList>
            <TabsTrigger value="feed">Feed Posts</TabsTrigger>
            <TabsTrigger value="learning">Learning Posts</TabsTrigger>
          </TabsList>
          <TabsContent value="feed">
            <Main data={data} pagination={pagination} />
          </TabsContent>
          <TabsContent value="learning">Change your password here.</TabsContent>
        </Tabs>
      </>
    </div>
  );
};

export default Dashboard;
