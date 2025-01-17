import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollableMainSection({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  }, [location.pathname]); // Watch for route changes instead of children

  return (
    <main className="no-scrollbar w-full h-full rounded-t-xl overflow-y-scroll desktop:max-w-[800px]">
      <div className="h-fit w-full rounded-xl p-4 bg-surface mb-4 desktop:p-8 desktop:mb-0">
        {children}
      </div>
    </main>
  );
}
