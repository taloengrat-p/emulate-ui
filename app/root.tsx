import { cssBundleHref } from "@remix-run/css-bundle";
import styles from "./tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import ShareNavbar from "./components/share/navbar";
import { useNavigate } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import { TabItem } from "./components/share/tabs-list";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

const navItems = [
  {
    title: "Dashboard",
    value: "dashboard",
    to: "/dashboard",
  },
  {
    title: "Music",
    value: "music",
    to: "/music",
  },
  {
    title: "Mail",
    value: "mail",
    to: "/mail",
  },
  {
    title: "Tasks",
    value: "tasks",
    to: "/tasks",
  },
  {
    title: "Forms",
    value: "forms",
    to: "/forms/profile",
  },
];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <ShareNavbar
            defaultValue={location.pathname.replace("/", "")}
            items={navItems.map((el) => ({
              title: el.title,
              value: el.value,
            }))}
            onTabClick={(item: TabItem) => {
              const tabItem = navItems.find((e) => e.title === item.title);
              if (tabItem) {
                navigate(tabItem.to);
              }
            }}
          ></ShareNavbar>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
