import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <Header />
      <main className="ml-64 p-6 min-h-[calc(100vh-4rem)]">
        {children}
      </main>
    </div>
  );
}