import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }) => (
  <div>
    <header>
      {" "}
      <div className="h-full w-full px-6 flex items-center justify-end">
        <UserButton />
      </div>
    </header>
    {children}
  </div>
);

export default DashboardLayout;
