export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return <div>{children}
  <div className="flex gap-4">
    {notifications}
    {revenue}
    {users}
  </div>
  
  </div>;
}
