
import { NavItem, Service, CaseStudy, Course, TeamMember, Partner } from './types';
import { 
  Brain, Globe, Cpu, MessageSquare, Siren, Server, Shield, Code, Database, Search, 
  Wrench, Rocket, Layout, Camera, Wifi, Settings, Network 
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', path: '/' },
  { id: 'sos', path: '/sos' },
  { id: 'profile', path: '/profile' },
];

export const TEAM_LIST: TeamMember[] = [
    { id: 'alex', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300' },
    { id: 'sarah', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300' },
]; 

export const PARTNERS_LIST: Partner[] = [
    { id: 'tech_corp', logo: '' },
    { id: 'cyber_sec', logo: '' },
    { id: 'ai_labs', logo: '' },
    { id: 'cloud_sys', logo: '' },
];

export const SERVICES_LIST: Service[] = [
  { id: 'ai_chatbots', icon: MessageSquare, category: 'ai' },
  { id: 'web_apps', icon: Globe, category: 'web' },
  { id: 'mvp_product', icon: Rocket, category: 'web' },
  { id: 'landing_page', icon: Layout, category: 'web' },
  { id: 'custom_code', icon: Code, category: 'web' },
  { id: 'hardware_repair', icon: Wrench, category: 'hardware' },
  { id: 'iot_proto', icon: Cpu, category: 'hardware' },
  { id: 'camera_install', icon: Camera, category: 'hardware' },
  { id: 'camera_fix', icon: Settings, category: 'hardware' },
  { id: 'network_install', icon: Network, category: 'hardware' },
  { id: 'network_setup', icon: Wifi, category: 'hardware' },
  { id: 'it_consulting', icon: Brain, category: 'consulting' },
  { id: 'security_audit', icon: Shield, category: 'consulting' },
  { id: 'sos_business', icon: Siren, category: 'sos' },
];

export const CASES_LIST: CaseStudy[] = [
    { id: 'project_alpha', category: 'ai', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80' },
    { id: 'project_beta', category: 'web', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' },
    { id: 'project_gamma', category: 'hardware', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80' },
];

export const COURSES_LIST: Course[] = [
    { id: 'python_basic', levelKey: 'beginner' },
    { id: 'web_fullstack', levelKey: 'advanced' },
    { id: 'cyber_security', levelKey: 'expert' },
];
