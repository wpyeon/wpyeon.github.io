import { useEffect } from "react";

export default function ScrollableMainSection({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('ScrollableMainSection mounted');
  }, []);

  return (
    <main className="no-scrollbar h-full rounded-t-xl overflow-y-scroll">
      <div className="h-fit rounded-xl p-4 bg-surface mb-4 desktop:p-8 desktop:mb-0">
        {children}
      </div>
    </main>
  );
}
