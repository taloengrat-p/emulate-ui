import { cn } from "./../../lib/utils";
import { Button } from "./../../components/ui/button";
import { ScrollArea } from "./../../components/ui/scroll-area";

import { Playlist } from "./data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
  discoverItems: Array<{ title: string; icon: string }>;
  libraryItems: Array<{ title: string; icon: string }>;
}

export function Sidebar({
  className,
  playlists,
  discoverItems,
  libraryItems,
}: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            {discoverItems.map((discover, index) => (
              <Button
                key={`${discover}-${index}`}
                variant={index === 0 ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <img
                  src={discover.icon}
                  width={16}
                  alt=""
                  className="mr-2 h-4 w-4"
                />
                {discover.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            {libraryItems.map((library, index) => (
              <Button
                key={`${library}-${index}`}
                variant="ghost"
                className="w-full justify-start"
              >
                <img
                  src={library.icon}
                  width={16}
                  alt=""
                  className="mr-2 h-4 w-4"
                />
                {library.title}
              </Button>
            ))}
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, index) => (
                <Button
                  key={`${playlist}-${index}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
