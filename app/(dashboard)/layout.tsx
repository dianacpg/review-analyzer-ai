// React
import { ReactNode } from "react";
// Auth
import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <header className="bg-gray-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl text-gray-800 font-semibold">
          Review AI Analyzer
        </h1>
        <UserButton />
      </div>
    </header>
    <main className="container mx-auto p-4">{children}</main>
  </div>
);

export default DashboardLayout;
