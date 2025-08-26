
export interface SidebarItem {
    id: number;
    title: string;
    path: string;
    label: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    bg: string;
    hover: string;
    border: string
}
  

export interface UserProps {
    userName: string;
    onLogout: () => void;
}


export interface Plan {
    name: string;
    price: string;
    coverage: string[];
}
  
export interface Provider {
    id: number;
    title: string;
    plans: Plan[];
}