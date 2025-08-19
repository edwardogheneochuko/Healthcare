
import { SidebarItem } from "@/src/types/type";
 
import { 
    MenuIcon,
    CrossIcon,
    AmbulanceIcon,
    UsersIcon,
    SyringeIcon,
  } from "lucide-react";
  
  export const sideBar: SidebarItem[] = [
    { id: 1, title: 'Home', path: '/dashboard', label: MenuIcon, bg: 'bg-green-700', hover: 'hover:bg-gray-900', border:'hover:border-gray-50'},
    { id: 2, title: 'Diagnosis', path: '/diagnosis', label: CrossIcon, bg: 'bg-neutral-700', hover: 'hover:bg-purple-900', border:'hover:border-neutral-900' },
    { id: 3, title: 'Medications', path: '/medications', label: SyringeIcon, bg: 'bg-blue-700', hover: 'hover:bg-red-900', border: 'hover:border-blue-900'},
    { id: 4, title: 'Family', path: '/family', label: UsersIcon, bg: 'bg-fuchsia-700', hover: 'hover:bg-neutral-900', border: 'hover:border-fuchsia-900'},
    { id: 5, title: 'Ambulance', path: '/ambulance', label: AmbulanceIcon ,bg: 'bg-gray-700', hover: 'hover:bg-gray-900', border: 'hover:border-gray-900'},
  ];
  