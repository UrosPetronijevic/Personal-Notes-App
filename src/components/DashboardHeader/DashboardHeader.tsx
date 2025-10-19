type DashboardHeaderProps = {
  session: any;
  handleSignOut: any;
};

export default function DashboardHeader({
  session,
  handleSignOut,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="justify-self-end">Welcome: {session?.user?.email}</h2>
      <p
        onClick={handleSignOut}
        className="hover:cursor-pointer border inline-block px-4 py-3 justify-self-start"
      >
        Sign out
      </p>
    </div>
  );
}
