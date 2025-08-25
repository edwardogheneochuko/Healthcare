
import { Provider, SidebarItem } from "@/src/types/type";
 
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
    { id: 4, title: 'Ambulance', path: '/ambulance', label: AmbulanceIcon ,bg: 'bg-gray-700', hover: 'hover:bg-gray-900', border: 'hover:border-gray-900'},
  ];
  

  export const ProviderPlans: Provider[] = [
    {
      id: 1,
      title: 'AXA Mansard Health Limited',
      plans: [
        { name: 'EasyCare Plan', price: '₦12,000 - ₦20,000 / year', coverage: ['Maternity', 'HIV/AIDS care', 'Mental health', 'CT/MRI scans'] },
        { name: 'Bronze Plan', price: '₦86,500 / year', coverage: ['Basic inpatient & outpatient care'] },
        { name: 'Rhodium Plan', price: '₦1,939,777 / year', coverage: ['Premium worldwide care', 'Dental & Optical', 'Physiotherapy'] },
        { name: 'Global Health Plan', price: 'Varies', coverage: ['International coverage', 'Evacuation', 'Cancer treatment'] },
      ],
    },
    {
      id: 2,
      title: 'Hygeia HMO',
      plans: [
        { name: 'HyBasic', price: '₦55,590 / year', coverage: ['General ward', 'Outpatient & Inpatient', 'Surgeries', 'Immunizations'] },
        { name: 'HyPrime', price: '₦166,974 / year', coverage: ['Semi-private ward', 'Maternity & Neonatal care', 'Chronic conditions'] },
        { name: 'HyPrime Plus', price: '₦448,902 / year', coverage: ['Private ward', 'Comprehensive chronic & specialist care'] },
      ],
    },
    {
      id: 3,
      title: 'Avon HMO',
      plans: [
        { name: 'Life Starter Plan', price: '₦27,500 / year', coverage: ['Consultations', 'Mental health', 'Minor surgeries', 'Emergency care'] },
        { name: 'Life Plus Plan', price: '₦49,500 / year', coverage: ['Enhanced outpatient & inpatient care'] },
        { name: 'Comprehensive Plan', price: '₦2.5M limit', coverage: ['Full inpatient/outpatient', 'Maternity', 'Specialist care'] },
      ],
    },
    {
      id: 4,
      title: 'Leadway Health Insurance',
      plans: [
        { name: 'Basic Care Plan', price: '₦200,000 / year', coverage: ['Student & young professional cover'] },
        { name: 'Affordable Care Plan', price: '₦1M / year', coverage: ['Inpatient & outpatient'] },
        { name: 'Gold Plan', price: '₦12M / year', coverage: ['Medical evacuation', 'Overseas treatment', 'Maternity', 'Dental & Optical'] },
      ],
    },
    {
      id: 5,
      title: 'Total Health Trust (THT)',
      plans: [
        { name: 'Alldo Package', price: '₦44,600 / year', coverage: ['Outpatient & inpatient', 'Diagnostics', 'Telemedicine'] },
      ],
    },
    {
      id: 6,
      title: 'Clearline HMO',
      plans: [
        { name: 'KiaKia Plan', price: '₦5,000 / year', coverage: ['Telemedicine only'] },
        { name: 'Personal Care Plan', price: '₦50,000 / year', coverage: ['Outpatient & inpatient'] },
      ],
    },
    {
      id: 7,
      title: 'SUNU Health',
      plans: [
        { name: 'Pearl Plan', price: '₦46,904 / year', coverage: ['Outpatient', 'Emergency care'] },
      ],
    },
    {
      id: 8,
      title: 'Well Health Network',
      plans: [
        { name: 'Basic Plan', price: '₦18,500 / year', coverage: ['Essential outpatient & inpatient care'] },
        { name: 'Basic Plus Plan', price: '₦25,000 / year', coverage: ['Extended coverage'] },
        { name: 'HI Compact', price: '₦46,500 / year', coverage: ['Comprehensive cover'] },
      ],
    },
    {
      id: 9,
      title: 'Novo Health Africa HMO',
      plans: [
        { name: 'Standard Insurance Plan', price: '₦31,500 / year', coverage: ['Basic outpatient & inpatient care'] },
        { name: 'Corporate/Geriatric Plans', price: 'Varies', coverage: ['Tailored for companies and elderly'] },
      ],
    },
  ];
  