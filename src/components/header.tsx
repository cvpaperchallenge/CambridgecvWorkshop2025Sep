import { Link } from "react-router";

import { ThemeToggle } from "./ui/theme-toggle";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";

// const navItems = [
//   // { name: "Home", path: "/" },
//   // { name: "Call for Papers", path: "/call-for-papers" },
//   // { name: "Schedule", path: "/iccv2025/schedule" },
//   // { name: "Program", path: "/program" },
//   // { name: "Organizers", path: "/organizers" },
//   // { name: "Past Events", path: "/iccv2025/past-events" },
//   // { name: "Contact", path: "/contact" },
// ];

export function Header() {
  return (
    <header className="top-0 z-50 w-full border-b border-border bg-header-background/70 backdrop-blur-md flex justify-center">
      <div className="container flex h-16 items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Cambridge CV Workshop</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* {navItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link to={item.path}>
                    <NavigationMenuLink className="bg-transparent hover:bg-header-accent dark:hover:bg-header-accent/50">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))} */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Navigation */}
          {/* <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-header-background/80 backdrop-blur-md"
            >
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link
                      to={item.path}
                      className="block px-2 py-1 text-lg font-medium hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </header>
  );
}
