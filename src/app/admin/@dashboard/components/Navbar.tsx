"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArchiveIcon,
  DashboardIcon,
  PieChartIcon,
} from "@radix-ui/react-icons";

import { ModeToggle } from "@/components/ModeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

interface IRouters {
  id: number;
  title: string;
  icon: React.ReactElement;
  href: string;
  active: boolean;
}

const Navbar = () => {
  const pathname = usePathname();
  const routes: IRouters[] = [
    {
      id: 1,
      title: "Overview",
      icon: <PieChartIcon />,
      href: `/admin`,
      active: pathname === `/admin`,
    },
    {
      id: 2,
      title: "Categories",
      icon: <DashboardIcon />,
      href: `/admin/categories`,
      active: pathname === `/admin/categories`,
    },
    {
      id: 3,
      title: "Products",
      icon: <ArchiveIcon />,
      href: `/admin/products`,
      active: pathname === `/admin/products`,
    },
  ];

  return (
    <NavigationMenu className="justify-between max-w-full py-4">
      <NavigationMenuList>
        {routes.map(({ id, title, icon, href, active }) => (
          <NavigationMenuItem key={id}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink
                active={active}
                className={cn(navigationMenuTriggerStyle(), "gap-2")}
              >
                {icon}
                {title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
