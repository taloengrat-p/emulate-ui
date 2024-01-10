import { TabsList, TabsTrigger } from "../../components/ui/tabs";

export interface TabItem {
  title: string;
  value: string;
  disabled?: boolean;
}

interface TabsListProps {
  items: Array<TabItem>;
  onChange?: (item: TabItem) => void;
}

export function ShareTabsList({ items, onChange }: TabsListProps) {
  function handleClick(item: TabItem) {
    onChange!(item);
  }

  return (
    <TabsList>
      {items.map((el, index) => (
        <TabsTrigger
          key={index}
          value={el.value}
          disabled={el.disabled}
          onClick={() => {
            handleClick(el);
          }}
        >
          {el.title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
}
