import {
  Tabs,
  // TabsContent,
} from "./../../components/ui/tabs";

import { ShareTabsList, TabItem } from "./tabs-list";
export interface NavbarProps {
  defaultValue?: string;
  items: Array<{
    title: string;
    value: string;
    disabled?: boolean;
  }>;
  onTabClick: (item: TabItem) => void;
}
export default function Navbar({
  items,
  onTabClick,
  defaultValue,
}: NavbarProps) {
  function onClickTab(item: TabItem) {
    onTabClick(item);
  }

  return (
    <Tabs className="w-full m-4" defaultValue={defaultValue}>
      <ShareTabsList items={items} onChange={onClickTab}></ShareTabsList>
    </Tabs>
  );
}
