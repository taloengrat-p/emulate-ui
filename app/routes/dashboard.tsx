// import { Metadata } from "next";
// import Image from "next/image";

import { Button } from "./../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./../components/ui/card";
import { CalendarDateRangePicker } from "./../components/dashboard/date-range-picker";
import { MainNav } from "./../components/dashboard/main-nav";
import { Overview } from "./../components/dashboard/overview";
import { RecentSales } from "./../components/dashboard/recent-sales";
import { Search } from "./../components/dashboard/search";
import TeamSwitcher from "./../components/dashboard/team-switcher";
import { UserNav } from "./../components/dashboard/user-nav";
import { DashboardCard } from "./../components/dashboard/dashboard-card";

import card1 from "../../assets/images/dashboard/card_1.svg";
import card2 from "../../assets/images/dashboard/card_2.svg";
import card3 from "../../assets/images/dashboard/card_3.svg";
import card4 from "../../assets/images/dashboard/card_4.svg";

const cardItems = [
  {
    title: "Total Revenue",
    content: "$45,231.89",
    subTitle: "+20.1% from last month",
    icon: card1,
  },
  {
    title: "Subscriptions",
    content: "+2350",
    subTitle: "+180.1% from last month",
    icon: card2,
  },
  {
    title: "Sales",
    content: "+12,234",
    subTitle: "+19% from last month",
    icon: card3,
  },
  {
    title: "Active Now",
    content: "+573",
    subTitle: "+201 since last hour",
    icon: card4,
  },
];

const tabListItems = [
  {
    title: "Overview",
    value: "overview",
    disabled: false,
  },
  {
    title: "Analytics",
    value: "analytics",
    disabled: true,
  },
  {
    title: "Reports",
    value: "reports",
    disabled: true,
  },
  {
    title: "Notifications",
    value: "notifications",
    disabled: true,
  },
];
export default function DashboardPage() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            {tabListItems.map((e, index) => (
              <TabsTrigger key={index} value={e.value} disabled={e.disabled}>
                {e.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {cardItems.map((el, index) => (
                <DashboardCard
                  key={index}
                  title={el.title}
                  content={el.content}
                  subTitle={el.subTitle}
                  icon={el.icon}
                ></DashboardCard>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
