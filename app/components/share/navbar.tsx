import {
  Tabs,
  // TabsContent,
  TabsList,
  TabsTrigger,
} from "./../../components/ui/tabs";
import { useNavigate } from "@remix-run/react";

export interface NavbarProps {
  arm: string;
}
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Tabs className="w-full">
      <TabsList>
        <TabsTrigger value="dashboard" onClick={() => navigate("/dashboard")}>
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="music" onClick={() => navigate("/music")}>
          Music
        </TabsTrigger>
        <TabsTrigger value="mail" onClick={() => navigate("/mail")}>
          Mail
        </TabsTrigger>
        <TabsTrigger value="tasks" onClick={() => navigate("/tasks")}>
          Tasks
        </TabsTrigger>
        <TabsTrigger value="forms" onClick={() => navigate("/forms/profile")}>
          Forms
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
