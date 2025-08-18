
import { SidebarItem } from "@/src/types/type";
 
import { 
    HomeIcon,
    GroupIcon,
    ShirtIcon,
    InfoIcon,
    ShoppingBag,
    NewspaperIcon,
    CircleDollarSignIcon
  } from "lucide-react";
  
  export const sideBar: SidebarItem[] = [
    { id: 1, title: 'Home', path: '/dashboard', label: HomeIcon, bg: 'bg-green-700', hover: 'hover:bg-green-900', border:'hover:border-green-900'},
    { id: 2, title: 'Membership', path: '/membership', label: GroupIcon, bg: 'bg-neutral-700', hover: 'hover:bg-neutral-900', border:'hover:border-neutral-900' },
    { id: 3, title: 'Corporate', path: '/corporate', label: ShirtIcon, bg: 'bg-blue-700', hover: 'hover:bg-blue-900', border: 'hover:border-blue-900'},
    { id: 4, title: 'About Us', path: '/aboutus', label: InfoIcon , bg: 'bg-amber-700', hover: 'hover:bg-amber-900', border: 'hover:border-amber-900'},
    { id: 5, title: 'Shop', path: '/shop', label: ShoppingBag , bg: 'bg-pink-700', hover: 'hover:bg-pink-900', border: 'hover:border-pink-900' },
    { id: 6, title: 'Newsletter', path: '/newsletter', label: NewspaperIcon ,bg: 'bg-gray-700', hover: 'hover:bg-gray-900', border: 'hover:border-gray-900'},
    { id: 7, title: 'Deals', path: '/deals', label: CircleDollarSignIcon, bg: 'bg-fuchsia-700', hover: 'hover:bg-fuchsia-900', border: 'hover:border-fuchsia-900'},
  ];
  