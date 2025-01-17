import { Outlet } from "react-router-dom";
import ScrollableMainSection from "../components/ScrollableMainSection";

export default function Layout() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 pt-4 h-dvh desktop:w-screen desktop:flex-row desktop:justify-center desktop:h-full desktop:p-8 desktop:gap-8">
      <aside className="h-fit flex gap-4 p-2 items-center bg-surface rounded-xl shadow-md desktop:sticky desktop:p-4 desktop:gap-8 desktop:w-[300px] desktop:flex-col desktop:p-8 desktop:top-8">
        <div className="rounded-full overflow-hidden -mr-2 w-[56px] h-[56px] desktop:w-[200px] desktop:h-[200px] desktop:mr-0">
          <img
            src="/profile/profile-mobile.png"
            alt="Profile image"
            className="desktop:hidden w-full h-full object-cover"
          />
          <img
            src="/profile/profile-desktop.png"
            alt="Profile image"
            className="hidden desktop:block w-full h-full object-cover"
          />
        </div>
        <div className="items-center">
          <div className="mb-0 mt-1 text-m font-bold desktop:text-xl desktop:mb-4">
            Woojang Pyeon
          </div>
          <p className="hidden desktop:block text-gray-600 mb-0">
            Software Engineer
          </p>
          <p className="hidden desktop:block text-gray-600 mb-4">
            📍 Hong Kong
          </p>
          <div className="inline-flex justify-center gap-2">
            <a
              href="https://github.com/wpyeon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/woojang-pyeon-81600122b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/profile/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume(PDF)
            </a>
          </div>
        </div>
      </aside>

      <ScrollableMainSection>
        <Outlet />
      </ScrollableMainSection>
    </div>
  );
}
