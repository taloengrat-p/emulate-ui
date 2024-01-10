import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface DashboardCardProps {
  title: string;
  content: string;
  subTitle: string;
  children: React.ReactNode;
}

export function DashboardCard({
  title,
  content,
  subTitle,
  children,
}: DashboardCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {children}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="text-xs text-muted-foreground">{subTitle}</p>
      </CardContent>
    </Card>
  );
}
