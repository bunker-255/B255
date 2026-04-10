
import { 
  Cpu, 
  Globe, 
  Bot,
  Camera,
  Wrench,
  Zap,
  Hammer,
  Network,
  LifeBuoy,
  Briefcase,
  Headset
} from 'lucide-react';
import { NavItem, Service, CaseStudy, TeamMember, Partner } from './types';

// IDs correspond to translation keys
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', path: '/' },
  { id: 'services', path: '/services' },
  { id: 'tools', path: '/tools' },
  { id: 'academy', path: 'https://academy.bunker-255.com' },
  { id: 'about', path: '/about' },
  { id: 'blog', path: '/blog' },
  { id: 'entrepreneurs', path: '/entrepreneurs' },
];

export const SERVICES_LIST: Service[] = [
  { id: 'ai_dev', icon: Bot, category: 'ai' },
  { id: 'automation', icon: Cpu, category: 'ai' },
  { id: 'chatbots', icon: Bot, category: 'ai' },
  { id: 'cv', icon: Bot, category: 'ai' },
  
  { id: 'corp_sites', icon: Globe, category: 'web' },
  { id: 'web_apps', icon: Globe, category: 'web' },
  { id: 'ecommerce', icon: Globe, category: 'web' },
  
  { id: 'iot', icon: Cpu, category: 'hardware' },
  { id: 'smart_sys', icon: Cpu, category: 'hardware' },
  
  { id: 'consulting', icon: Briefcase, category: 'consulting' },
  { id: 'support', icon: Headset, category: 'consulting' },

  // SOS Services
  { id: 'cctv_install', icon: Camera, category: 'sos' },
  { id: 'cctv_maint', icon: Wrench, category: 'sos' },
  { id: 'electricity', icon: Zap, category: 'sos' },
  { id: 'equipment_dev', icon: Hammer, category: 'sos' },
  { id: 'net_wiring', icon: Network, category: 'sos' },
  { id: 'tech_troubleshoot', icon: LifeBuoy, category: 'sos' },
];

export const CASES_LIST: CaseStudy[] = [
  { id: 'c1', category: 'ai', image: 'https://picsum.photos/800/600?random=1' },
  { id: 'c2', category: 'web', image: 'https://picsum.photos/800/600?random=2' },
  { id: 'c3', category: 'hardware', image: 'https://picsum.photos/800/600?random=3' },
];

export const TEAM_LIST: TeamMember[] = [
  { id: 'm1', image: 'https://raw.githubusercontent.com/bunker-255/bunker-images/refs/heads/main/main/illya_lazarev.jpg' },
  { id: 'm2', image: 'https://raw.githubusercontent.com/bunker-255/bunker-images/refs/heads/main/main/AndreyLivinberg.png' },
  { id: 'm3', image: 'https://raw.githubusercontent.com/bunker-255/bunker-images/refs/heads/main/main/kilia_khablo.jpg' }
];

export const PARTNERS_LIST: Partner[] = [
  { id: 'p1', logo: 'https://placehold.co/400x200/0a0a0c/00ffa3?text=OnTech' },
  { id: 'p2', logo: 'https://placehold.co/400x200/0a0a0c/00ffa3?text=BizInSpace' },
  { id: 'p3', logo: 'https://placehold.co/400x200/0a0a0c/00ffa3?text=DEV+SQUAD' },
  { id: 'p4', logo: 'https://placehold.co/400x200/0a0a0c/00ffa3?text=SECURE+NET' }
];
