import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import image3 from "../../../assets/03.png";

const dropdownMenuGroupItems1 = [
  { title: "Profile", shortcut: "⇧⌘P" },
  { title: "Billing", shortcut: "⌘B" },
  { title: "Settings", shortcut: "⌘S" },
];
const dropdownMenuGroupItems2 = [{ title: "Log out", shortcut: "⇧⌘Q" }];

export function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={image3} alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {dropdownMenuGroupItems1.map((e, index) => (
            <DropdownMenuItem key={`dropdown-1-${index}`}>
              {e.title}
              <DropdownMenuShortcut>{e.shortcut}</DropdownMenuShortcut>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {dropdownMenuGroupItems2.map((e, index) => (
          <DropdownMenuItem key={`dropdown-2-${index}`}>
            {e.title}
            <DropdownMenuShortcut>{e.shortcut}</DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
