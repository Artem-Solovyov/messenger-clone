import Sidebar from "../components/Sidebar/Sidebar";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <main className="lg:pl-20 h-full">
        <div className="h-full">{children}</div>
      </main>
    </Sidebar>
  );
}
