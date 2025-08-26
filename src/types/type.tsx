export interface SidebarItem {
    id: number;
    title: string;
    path: string;
    label: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    bg: string;
    hover: string;
    border: string;
}

export interface ForgotPasswordState {
    email: string;
    resetSent: boolean;
    setEmail: (email: string) => void;
    setResetSent: (sent: boolean) => void;
}

export interface User {
    id: string;
    email: string;
    name: string;
    image?: string | null;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    setAuth: (user: User, token: string) => void;
    clearAuth: () => void;
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

export interface EmailOptions {
    to: string;
    subject: string;
    html: string;
  }
  