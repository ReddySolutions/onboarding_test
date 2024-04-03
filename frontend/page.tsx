"use client";

import React from "react";

import useBoard from "@/hooks/useBoard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import LeftPart from "@/components/LeftPart";

const page = () => {
  const { data, isLoading, isSuccess, refetch } = useBoard();

  return (
    <div className="w-full flex flex-row items-center">
      <LeftPart />
      {isLoading ? (
        <h3 className="text-3xl text-center text-blue-500">Loading...</h3>
      ) : (
        <></>
      )}
      <div className="w-full  h-screen p-5 bg-slate-200">
        {isSuccess ? (
          <Table>
            <TableCaption>Recent Leaderboard</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Username</TableHead>
                <TableHead className="text-center">Score</TableHead>
                <TableHead>User Activity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((eachScore: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {eachScore.user}
                  </TableCell>
                  <TableCell className="text-center">
                    {eachScore.score}
                  </TableCell>
                  <TableCell>{eachScore.activity_name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default page;
