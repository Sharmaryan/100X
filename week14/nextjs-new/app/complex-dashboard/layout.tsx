export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      {children}
      <div className="flex gap-4">
        {notifications}
        {revenue}
        {users}
      </div>
    </div>
  ) : (
    <div>{login}</div>
  );
}
