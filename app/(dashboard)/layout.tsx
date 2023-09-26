// React
import { ReactNode } from "react";
// Auth
import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: ReactNode }) => (
  <div>
    <header>
      <div className="h-full w-full px-6 flex items-center justify-end">
        <UserButton />
      </div>
    </header>
    {children}
  </div>
);

export default DashboardLayout;
