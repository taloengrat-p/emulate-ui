import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "./../../components/ui/tabs";

export interface NavbarProps {
  defaultValue?: string;
  items: Array<{
    title: string;
    value: string;
    onClick: () => void;
    disabled?: boolean;
  }>;
}
export default function Navbar({ items, defaultValue }: NavbarProps) {
  return (
    <Tabs className="w-full m-4" defaultValue={defaultValue}>
      <TabsList>
        {items.map((el, index) => (
          <TabsTrigger
            key={index}
            value={el.value}
            onClick={el.onClick}
            disabled={el.disabled}
          >
            {el.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
