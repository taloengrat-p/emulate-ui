import { Tabs } from "./../../components/ui/tabs";

import { ShareTabsList, TabItem } from "./tabs-list";
export interface NavbarProps {
  defaultValue?: string;
  items: Array<{
    title: string;
    value: string;
    disabled?: boolean;
  }>;
  onTabClick?: (item: TabItem) => void;
  children?: React.ReactNode;
}

export default function ShareNavbar({
  items,
  onTabClick,
  defaultValue,
  children,
}: NavbarProps) {
  function onClickTab(item: TabItem) {
    if (onTabClick) onTabClick(item);
  }

  return (
    <Tabs className="w-full m-4" defaultValue={defaultValue}>
      <ShareTabsList items={items} onChange={onClickTab}></ShareTabsList>
      {children}
    </Tabs>
  );
}
