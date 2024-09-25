import useMetaData from "@/hooks/useMetaData";

const DashboardPage = () => {
  useMetaData("Dashboard");

  return (
    <div>
      <h1>Dashboard Page</h1>
      {/* Nội dung trang Dashboard */}
    </div>
  );
};

export default DashboardPage;
