import { Metadata } from "next";

import { ScrollArea, ScrollBar } from "./../components/ui/scroll-area";
import { Separator } from "./../components/ui/separator";
import { TabsContent } from "./../components/ui/tabs";
import { Button } from "./../components/ui/button";

import { AlbumArtwork } from "./../components/music/album-artwork";
import { Menu } from "./../components/music/menu";
import { PodcastEmptyPlaceholder } from "./../components/music/podcast-empty-placeholder";
import { Sidebar } from "./../components/music/sidebar";
import {
  listenNowAlbums,
  madeForYouAlbums,
} from "./../components/music/data/albums";
import { playlists } from "./../components/music/data/playlists";
import ShareNavbar from "./../components/share/navbar";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

const listenNowTabItems = [
  {
    title: "Music",
    value: "music",
  },
  {
    title: "Podcasts",
    value: "podcasts",
  },
  {
    title: "Live",
    value: "live",
  },
];

export default function Music() {
  return (
    <div className="hidden md:block">
      <Menu />
      <div className="border-t">
        <div className="bg-background">
          <div className="grid lg:grid-cols-5">
            <Sidebar playlists={playlists} className="hidden lg:block" />
            <div className="col-span-3 lg:col-span-4 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <ShareNavbar
                  items={listenNowTabItems}
                  defaultValue="music"
                  tabAction={
                    <div className="ml-auto mr-4">
                      <Button>
                        <PlusCircledIcon className="mr-2 h-4 w-4" />
                        Add music
                      </Button>
                    </div>
                  }
                  tabClassName="space-between flex items-center"
                >
                  <TabsContent
                    value="music"
                    className="border-none p-0 outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Listen Now
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {listenNowAlbums.map((album) => (
                            <AlbumArtwork
                              key={album.name}
                              album={album}
                              className="w-[250px]"
                              aspectRatio="portrait"
                              width={250}
                              height={330}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                    <div className="mt-6 space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Made for You
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Your personal playlists. Updated daily.
                      </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="relative">
                      <ScrollArea>
                        <div className="flex space-x-4 pb-4">
                          {madeForYouAlbums.map((album) => (
                            <AlbumArtwork
                              key={album.name}
                              album={album}
                              className="w-[150px]"
                              aspectRatio="square"
                              width={150}
                              height={150}
                            />
                          ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="podcasts"
                    className="h-full flex-col border-none p-0 data-[state=active]:flex"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          New Episodes
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your favorite podcasts. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <PodcastEmptyPlaceholder />
                  </TabsContent>
                </ShareNavbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
