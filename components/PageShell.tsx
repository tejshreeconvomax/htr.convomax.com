import { Sidebar } from "./Sidebar";

export function TitleBar({ children }: { children: React.ReactNode }) {
  return <h1 className="htr-title-bar mb-6">{children}</h1>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-10 lg:flex-row">
        <Sidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
