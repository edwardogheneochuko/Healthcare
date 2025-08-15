
export interface SidebarItem {
    id: number;
    title: string;
    path: string;
    label: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    bg: string;
    hover: string;
}
  