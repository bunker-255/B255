
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { api } from '../lib/api';
import { Users, Database, ShieldAlert, Terminal, Trash2, Edit, Loader, Plus, X, Save, Lock, Mail, Building, ToggleLeft, ToggleRight, AlertTriangle, Siren, DollarSign, Calendar, CheckSquare, FileText, CheckCircle, PenTool, Image as ImageIcon, Link as LinkIcon, Eye, Type, Bold } from 'lucide-react';

interface AdminFormData {
  email: string;
  password: string;
  role: string;
  business_name: string;
  subscriptions: {
    [key: string]: any;
  };
}

interface SosTicketData {
    id: number | null;
    status: string;
    issue_type: string;
    urgency: string;
    description: string;
    solution: string;
    cost: string;
    market_cost: string;
    is_paid: boolean;
    created_at: string;
}

interface ProjectData {
    id: number | null;
    status: string;
    project_name: string;
    description: string;
    price: string;
    eta: string;
    completed_at: string;
    contact_info: string;
}

interface BlogPostData {
    id: number | null;
    title: string;
    slug: string;
    image_url: string;
    excerpt: string;
    content: string;
    is_published: boolean;
}

export const Admin: React.FC = () => {
  const { t } = useLanguage();
  
  // Data States
  const [users, setUsers] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // UI States
  const [activeTab, setActiveTab] = useState<'users' | 'sos' | 'projects' | 'blog'>('users');
  
  // Modal States
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isSosModalOpen, setIsSosModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  
  // Message Modal
  const [messageModal, setMessageModal] = useState({ 
    isOpen: false, 
    title: '', 
    text: '', 
    isError: false 
  });

  // Editing States
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editingTicketId, setEditingTicketId] = useState<number | null>(null);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  // Forms
  const [userFormData, setUserFormData] = useState<AdminFormData>({
    email: '',
    password: '',
    role: 'CLIENT',
    business_name: '',
    subscriptions: { sos_business: false }
  });

  const [sosFormData, setSosFormData] = useState<SosTicketData>({
      id: null,
      status: 'pending',
      issue_type: '',
      urgency: '',
      description: '',
      solution: '',
      cost: '-',
      market_cost: '-',
      is_paid: false,
      created_at: ''
  });

  const [projectFormData, setProjectFormData] = useState<ProjectData>({
      id: null,
      status: 'pending',
      project_name: '',
      description: '',
      price: '-',
      eta: '',
      completed_at: '',
      contact_info: ''
  });

  const [blogFormData, setBlogFormData] = useState<BlogPostData>({
      id: null,
      title: '',
      slug: '',
      image_url: '',
      excerpt: '',
      content: '',
      is_published: false
  });

  const fetchUsers = async () => {
    try {
        const res = await api.records.list('app_users');
        setUsers(res.records.map((r: any) => ({ id: r.id, ...r.data })).sort((a: any, b: any) => a.id - b.id));
    } catch (error) {
        console.error("Error fetching users:", error);
    }
  };

  const fetchTickets = async () => {
    try {
        const res = await api.records.list('sos_tickets');
        setTickets(res.records.map((r: any) => ({ id: r.id, ...r.data })).sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
    } catch (error) {
        console.error("Error fetching tickets:", error);
    }
  };

  const fetchProjects = async () => {
      try {
          const res = await api.records.list('service_orders');
          setProjects(res.records.map((r: any) => ({ id: r.id, ...r.data })).sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      } catch (error) {
          console.error("Error fetching projects:", error);
      }
  };

  const fetchPosts = async () => {
      try {
          const res = await api.records.list('blog_posts');
          setPosts(res.records.map((r: any) => ({ id: r.id, ...r.data })).sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      } catch (error) {
          console.error("Error fetching posts:", error);
      }
  };

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchUsers(), fetchTickets(), fetchProjects(), fetchPosts()]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- Message Helper ---
  const showMessage = (title: string, text: string, isError = true) => {
    setMessageModal({ isOpen: true, title, text, isError });
  };
  const closeMessage = () => setMessageModal(prev => ({ ...prev, isOpen: false }));


  // --- USER Logic (Keep existing) ---
  const handleOpenUserModal = (user?: any) => {
    if (user) {
        setEditingUserId(user.id);
        let userSubs = user.subscriptions;
        if (typeof userSubs === 'string') {
            try { userSubs = JSON.parse(userSubs); } catch(e) { console.error("Error parsing subs", e); }
        }
        if (!userSubs) userSubs = { sos_business: false };

        setUserFormData({
            email: user.email,
            password: user.password,
            role: user.role,
            business_name: user.business_name || '',
            subscriptions: userSubs
        });
    } else {
        setEditingUserId(null);
        setUserFormData({
            email: '',
            password: '',
            role: 'CLIENT',
            business_name: '',
            subscriptions: { sos_business: false }
        });
    }
    setIsUserModalOpen(true);
  };

  const handleDeleteUser = async (id: number) => {
    if (window.confirm(t.admin.actions.confirmDelete)) {
        try {
            await api.records.delete('app_users', id);
            fetchUsers();
        } catch (error: any) {
            showMessage("DELETE ERROR", error.message, true);
        }
    }
  };

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const basePayload = {
        email: userFormData.email,
        password: userFormData.password,
        role: userFormData.role,
        business_name: userFormData.business_name,
    };
    const fullPayload = { ...basePayload, subscriptions: userFormData.subscriptions };

    try {
        if (editingUserId) {
            await api.records.update('app_users', editingUserId, fullPayload);
        } else {
            await api.records.create('app_users', fullPayload);
        }

        setIsUserModalOpen(false);
        fetchUsers();
    } catch (error: any) {
        if (error.message?.includes('subscriptions')) {
            try {
                if (editingUserId) await api.records.update('app_users', editingUserId, basePayload);
                else await api.records.create('app_users', basePayload);
                setIsUserModalOpen(false);
                fetchUsers();
                showMessage("PARTIAL SAVE", "User saved without subscriptions (DB column missing).", true);
                return;
            } catch(e) {}
        }
        showMessage("SAVE ERROR", error.message || 'Unknown error', true);
    }
  };

  const toggleSubscription = (key: string) => {
      setUserFormData(prev => ({
          ...prev,
          subscriptions: { ...prev.subscriptions, [key]: !prev.subscriptions[key] }
      }));
  };

  // --- SOS Logic (Keep existing) ---
  const handleOpenSosModal = (ticket: any) => {
      setEditingTicketId(ticket.id);
      setSosFormData({
          id: ticket.id,
          status: ticket.status || 'pending',
          issue_type: ticket.issue_type,
          urgency: ticket.urgency,
          description: ticket.description,
          solution: ticket.solution || '',
          cost: ticket.cost || '-',
          market_cost: ticket.market_cost || '-',
          is_paid: ticket.is_paid || false,
          created_at: ticket.created_at
      });
      setIsSosModalOpen(true);
  };

  const handleDeleteTicket = async (id: number) => {
      if(window.confirm(t.admin.actions.confirmDelete)) {
          try {
              await api.records.delete('sos_tickets', id);
              fetchTickets();
          } catch (error: any) {
              showMessage("DELETE ERROR", error.message, true);
          }
      }
  };

  const handleSaveTicket = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingTicketId) return;

      try {
          await api.records.update('sos_tickets', editingTicketId, {
              status: sosFormData.status,
              cost: sosFormData.cost,
              market_cost: sosFormData.market_cost,
              solution: sosFormData.solution,
              is_paid: sosFormData.is_paid,
              issue_type: sosFormData.issue_type,
              urgency: sosFormData.urgency,
              description: sosFormData.description,
              created_at: sosFormData.created_at
          });
          setIsSosModalOpen(false);
          fetchTickets();
      } catch (error: any) {
          showMessage("SAVE ERROR", error.message, true);
      }
  };

  // --- Projects Logic ---
  const handleOpenProjectModal = (project: any) => {
      setEditingProjectId(project.id);
      setProjectFormData({
          id: project.id,
          status: project.status || 'pending',
          project_name: project.project_name,
          description: project.description,
          price: project.price || '-',
          eta: project.eta ? new Date(project.eta).toISOString().slice(0, 16) : '',
          completed_at: project.completed_at ? new Date(project.completed_at).toISOString().slice(0, 16) : '',
          contact_info: project.contact_info || ''
      });
      setIsProjectModalOpen(true);
  };

  const handleDeleteProject = async (id: number) => {
      if(window.confirm(t.admin.actions.confirmDelete)) {
          try {
              await api.records.delete('service_orders', id);
              fetchProjects();
          } catch (error: any) {
              showMessage("DELETE ERROR", error.message, true);
          }
      }
  };

  const handleSaveProject = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingProjectId) return;

      try {
          await api.records.update('service_orders', editingProjectId, {
              status: projectFormData.status,
              project_name: projectFormData.project_name,
              description: projectFormData.description,
              price: projectFormData.price,
              eta: projectFormData.eta || null,
              completed_at: projectFormData.completed_at || null,
              contact_info: projectFormData.contact_info
          });
          setIsProjectModalOpen(false);
          fetchProjects();
      } catch (error: any) {
          showMessage("SAVE ERROR", error.message, true);
      }
  };

  // --- Blog Logic ---
  const handleOpenBlogModal = (post?: any) => {
      if (post) {
          setEditingPostId(post.id);
          setBlogFormData({
              id: post.id,
              title: post.title,
              slug: post.slug,
              image_url: post.image_url || '',
              excerpt: post.excerpt || '',
              content: post.content || '',
              is_published: post.is_published || false
          });
      } else {
          setEditingPostId(null);
          setBlogFormData({
              id: null,
              title: '',
              slug: '',
              image_url: '',
              excerpt: '',
              content: '',
              is_published: false
          });
      }
      setIsBlogModalOpen(true);
  };

  const handleDeletePost = async (id: number) => {
      if(window.confirm(t.admin.actions.confirmDelete)) {
          try {
              await api.records.delete('blog_posts', id);
              fetchPosts();
          } catch (error: any) {
              showMessage("DELETE ERROR", error.message, true);
          }
      }
  };

  const handleSavePost = async (e: React.FormEvent) => {
      e.preventDefault();
      const payload = {
          title: blogFormData.title,
          slug: blogFormData.slug,
          image_url: blogFormData.image_url,
          excerpt: blogFormData.excerpt,
          content: blogFormData.content,
          is_published: blogFormData.is_published
      };

      try {
          if (editingPostId) {
             await api.records.update('blog_posts', editingPostId, payload);
          } else {
             await api.records.create('blog_posts', payload);
          }
          setIsBlogModalOpen(false);
          fetchPosts();
      } catch (error: any) {
          showMessage("SAVE ERROR", error.message, true);
      }
  };

  const insertTag = (tag: string) => {
    const textarea = document.getElementById('blog-content') as HTMLTextAreaElement;
    if (!textarea) return;
    
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end, text.length);
    
    let insertion = '';
    switch(tag) {
        case 'h2': insertion = '\n<h2 class="text-2xl font-bold text-white mt-6 mb-4">Heading</h2>\n'; break;
        case 'h3': insertion = '\n<h3 class="text-xl font-bold text-white mt-4 mb-2">Subheading</h3>\n'; break;
        case 'p': insertion = '\n<p class="text-slate-300 leading-relaxed mb-4">Your text here...</p>\n'; break;
        case 'img': insertion = '\n<img src="URL" alt="Description" class="w-full rounded border border-white/10 my-4" />\n'; break;
        case 'a': insertion = '<a href="URL" class="text-neon-green hover:underline">Link Text</a>'; break;
        case 'b': insertion = '<strong>Bold Text</strong>'; break;
    }
    
    const newText = before + insertion + after;
    setBlogFormData({...blogFormData, content: newText});
    
    setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + insertion.length, start + insertion.length);
    }, 0);
  };


  return (
    <div className="container mx-auto px-4 md:px-6 py-12 relative min-h-screen">
      <div className="flex items-center gap-4 mb-10 border-b border-neon-red/30 pb-6">
        <div className="p-3 bg-neon-red/10 border border-neon-red/30 rounded">
             <ShieldAlert className="text-neon-red" size={32} />
        </div>
        <div>
            <h1 className="text-3xl font-tech font-bold text-white uppercase tracking-wider">{t.admin.title}</h1>
            <p className="text-neon-red font-mono text-xs">RESTRICTED AREA // LEVEL 5 CLEARANCE</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 overflow-x-auto">
          {['users', 'sos', 'projects', 'blog'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-3 font-mono uppercase font-bold text-sm transition-all clip-corner-br ${
                    activeTab === tab
                    ? 'bg-neon-green text-bunker-950' 
                    : 'bg-bunker-900 text-slate-500 border border-white/10 hover:text-white'
                }`}
              >
                  {/* @ts-ignore */}
                  {t.admin.tabs[tab]}
              </button>
          ))}
      </div>

      {/* Stats (Dynamic based on Tab) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
         {activeTab === 'users' ? (
             <>
                <div className="bg-bunker-900 border border-white/10 p-6 flex items-center justify-between group hover:border-neon-green/50 transition-colors">
                    <div>
                        <div className="text-slate-400 text-xs font-mono uppercase mb-2">{t.admin.stats.users}</div>
                        <div className="text-3xl font-tech text-white">{users.length}</div>
                    </div>
                    <Users className="text-neon-green opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
                </div>
             </>
         ) : activeTab === 'sos' ? (
             <>
                <div className="bg-bunker-900 border border-white/10 p-6 flex items-center justify-between group hover:border-neon-green/50 transition-colors">
                    <div>
                        <div className="text-slate-400 text-xs font-mono uppercase mb-2">Total Tickets</div>
                        <div className="text-3xl font-tech text-white">{tickets.length}</div>
                    </div>
                    <Siren className="text-neon-green opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
                </div>
             </>
         ) : activeTab === 'projects' ? (
             <>
                 <div className="bg-bunker-900 border border-white/10 p-6 flex items-center justify-between group hover:border-neon-green/50 transition-colors">
                    <div>
                        <div className="text-slate-400 text-xs font-mono uppercase mb-2">Total Projects</div>
                        <div className="text-3xl font-tech text-white">{projects.length}</div>
                    </div>
                    <FileText className="text-neon-green opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
                </div>
                <div className="bg-bunker-900 border border-white/10 p-6 flex items-center justify-between group hover:border-neon-cyan/50 transition-colors">
                    <div>
                        <div className="text-slate-400 text-xs font-mono uppercase mb-2">Pending</div>
                        <div className="text-3xl font-tech text-white">{projects.filter(p => p.status === 'pending').length}</div>
                    </div>
                    <AlertTriangle className="text-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
                </div>
             </>
         ) : (
            <>
                <div className="bg-bunker-900 border border-white/10 p-6 flex items-center justify-between group hover:border-neon-green/50 transition-colors">
                   <div>
                       <div className="text-slate-400 text-xs font-mono uppercase mb-2">Total Posts</div>
                       <div className="text-3xl font-tech text-white">{posts.length}</div>
                   </div>
                   <PenTool className="text-neon-green opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
               </div>
               <div className="bg-bunker-900 border border-white/10 p-6 flex items-center justify-between group hover:border-neon-cyan/50 transition-colors">
                   <div>
                       <div className="text-slate-400 text-xs font-mono uppercase mb-2">Published</div>
                       <div className="text-3xl font-tech text-white">{posts.filter(p => p.is_published).length}</div>
                   </div>
                   <Eye className="text-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" size={40} />
               </div>
            </>
         )}
      </div>

      {/* Content Area */}
      <div className="bg-bunker-900 border border-white/10 clip-corner relative min-h-[400px]">
         <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {activeTab === 'users' ? <Users size={20} className="text-slate-400"/> 
                : activeTab === 'sos' ? <Siren size={20} className="text-slate-400"/> 
                : activeTab === 'projects' ? <FileText size={20} className="text-slate-400"/>
                : <PenTool size={20} className="text-slate-400"/>}
                
                {activeTab === 'users' ? t.admin.users 
                : activeTab === 'sos' ? t.admin.tabs.sos 
                : activeTab === 'projects' ? t.admin.tabs.projects
                : t.admin.tabs.blog}
            </h2>
            <div className="flex items-center gap-4">
                <div className="text-xs font-mono text-slate-500 hidden md:block">DB_CONNECTION: {loading ? 'FETCHING...' : 'ESTABLISHED'}</div>
                {(activeTab === 'users' || activeTab === 'blog') && (
                    <button 
                        onClick={() => activeTab === 'users' ? handleOpenUserModal() : handleOpenBlogModal()} 
                        className="flex items-center gap-2 bg-neon-green/10 text-neon-green border border-neon-green/30 px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-neon-green hover:text-bunker-950 transition-all"
                    >
                        <Plus size={14} />
                        {activeTab === 'users' ? t.admin.actions.addUser : t.admin.blog_modal.createTitle}
                    </button>
                )}
            </div>
         </div>
         
         <div className="overflow-x-auto">
            {loading ? (
                 <div className="p-12 flex justify-center text-neon-green animate-pulse"><Loader /></div>
            ) : (
                <>
                {/* USERS TABLE */}
                {activeTab === 'users' && (
                    <table className="w-full text-left">
                        <thead className="bg-bunker-950 text-slate-500 font-mono text-xs uppercase">
                            <tr>
                                <th className="p-4">{t.admin.table.email}</th>
                                <th className="p-4">{t.admin.table.role}</th>
                                <th className="p-4">Business</th>
                                <th className="p-4">Subs</th>
                                <th className="p-4 text-right">{t.admin.table.actions}</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-mono">
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white font-bold">{user.email}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 text-[10px] border rounded ${
                                            user.role === 'ADMIN' ? 'text-neon-red border-neon-red/30 bg-neon-red/10' : 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-400">{user.business_name}</td>
                                    <td className="p-4 text-slate-400 text-xs">
                                        {user.subscriptions?.sos_business && (
                                            <span className="text-neon-green border border-neon-green/30 px-1 rounded bg-neon-green/10">SOS</span>
                                        )}
                                    </td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleOpenUserModal(user)} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded">
                                            <Edit size={14} />
                                        </button>
                                        <button onClick={() => handleDeleteUser(user.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded">
                                            <Trash2 size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* SOS TABLE */}
                {activeTab === 'sos' && (
                    <table className="w-full text-left">
                        <thead className="bg-bunker-950 text-slate-500 font-mono text-xs uppercase">
                            <tr>
                                <th className="p-4">{t.admin.sos_table.id}</th>
                                <th className="p-4">{t.admin.sos_table.user}</th>
                                <th className="p-4">{t.admin.sos_table.issue}</th>
                                <th className="p-4">{t.admin.sos_table.status}</th>
                                <th className="p-4">{t.admin.sos_table.cost}</th>
                                <th className="p-4">{t.admin.sos_table.paid}</th>
                                <th className="p-4 text-right">{t.admin.sos_table.actions}</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-mono">
                            {tickets.map((ticket) => (
                                <tr key={ticket.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-neon-green">SOS-{ticket.id}</td>
                                    <td className="p-4 text-white">
                                        <div>{ticket.user_email}</div>
                                        <div className="text-[10px] text-slate-500">{new Date(ticket.created_at).toLocaleDateString()}</div>
                                    </td>
                                    <td className="p-4 text-slate-400 max-w-xs truncate">{ticket.issue_type}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 text-[10px] uppercase border ${
                                            ticket.status === 'resolved' ? 'text-neon-green border-neon-green/30 bg-neon-green/10' :
                                            ticket.status === 'pending' ? 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10' :
                                            'text-slate-400 border-slate-500/30'
                                        }`}>
                                            {ticket.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        <div>{ticket.cost}</div>
                                        {ticket.market_cost && ticket.market_cost !== '-' && (
                                            <div className="text-[10px] text-slate-500">Mkt: {ticket.market_cost}</div>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {ticket.is_paid ? <span className="text-neon-green">YES</span> : <span className="text-red-500">NO</span>}
                                    </td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleOpenSosModal(ticket)} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded">
                                            <Edit size={14} />
                                        </button>
                                        <button onClick={() => handleDeleteTicket(ticket.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded">
                                            <Trash2 size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* PROJECTS TABLE */}
                {activeTab === 'projects' && (
                    <table className="w-full text-left">
                        <thead className="bg-bunker-950 text-slate-500 font-mono text-xs uppercase">
                            <tr>
                                <th className="p-4">{/* @ts-ignore */}{t.projects.id}</th>
                                <th className="p-4">{/* @ts-ignore */}{t.admin.sos_table.user}</th>
                                <th className="p-4">{/* @ts-ignore */}{t.projects.name}</th>
                                <th className="p-4">{/* @ts-ignore */}{t.projects.status}</th>
                                <th className="p-4">{/* @ts-ignore */}{t.projects.price}</th>
                                <th className="p-4">{/* @ts-ignore */}{t.projects.eta}</th>
                                <th className="p-4 text-right">{t.admin.sos_table.actions}</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-mono">
                            {projects.map((project) => (
                                <tr key={project.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-neon-green">PRJ-{project.id}</td>
                                    <td className="p-4 text-white">
                                        <div>{project.user_email}</div>
                                        <div className="text-[10px] text-slate-500">{new Date(project.created_at).toLocaleDateString()}</div>
                                    </td>
                                    <td className="p-4 text-slate-400 max-w-xs truncate">{project.project_name}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-0.5 text-[10px] uppercase border ${
                                            project.status === 'completed' ? 'text-neon-green border-neon-green/30 bg-neon-green/10' :
                                            project.status === 'pending' ? 'text-yellow-500 border-yellow-500/30 bg-yellow-500/10' :
                                            'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-300">{project.price}</td>
                                    <td className="p-4 text-slate-300">
                                        {project.eta ? new Date(project.eta).toLocaleDateString() : '-'}
                                    </td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleOpenProjectModal(project)} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded">
                                            <Edit size={14} />
                                        </button>
                                        <button onClick={() => handleDeleteProject(project.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded">
                                            <Trash2 size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {/* BLOG TABLE */}
                {activeTab === 'blog' && (
                    <table className="w-full text-left">
                        <thead className="bg-bunker-950 text-slate-500 font-mono text-xs uppercase">
                            <tr>
                                <th className="p-4">{t.admin.blog_table.title}</th>
                                <th className="p-4">{t.admin.blog_table.slug}</th>
                                <th className="p-4">{t.admin.blog_table.published}</th>
                                <th className="p-4 text-right">{t.admin.blog_table.actions}</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-mono">
                            {posts.map((post) => (
                                <tr key={post.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-white font-bold">{post.title}</td>
                                    <td className="p-4 text-slate-400">{post.slug}</td>
                                    <td className="p-4">
                                        {post.is_published 
                                            ? <span className="text-neon-green border border-neon-green/30 bg-neon-green/10 px-2 py-0.5 rounded text-[10px] uppercase">YES</span> 
                                            : <span className="text-slate-500 border border-slate-500/30 bg-slate-500/10 px-2 py-0.5 rounded text-[10px] uppercase">DRAFT</span>
                                        }
                                    </td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <button onClick={() => handleOpenBlogModal(post)} className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded">
                                            <Edit size={14} />
                                        </button>
                                        <button onClick={() => handleDeletePost(post.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded">
                                            <Trash2 size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                </>
            )}
         </div>
      </div>

      {/* USER MODAL */}
      {isUserModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bunker-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-bunker-900 border border-white/20 w-full max-w-md clip-corner shadow-2xl relative animate-fade-in-up">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-xl font-tech font-bold text-white">
                        {editingUserId ? t.admin.actions.editUser : t.admin.actions.addUser}
                    </h3>
                    <button onClick={() => setIsUserModalOpen(false)} className="text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>
                
                <form onSubmit={handleSaveUser} className="p-6 space-y-4">
                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.auth.email}</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-500" size={16} />
                            <input 
                                type="email" 
                                required
                                value={userFormData.email}
                                onChange={e => setUserFormData({...userFormData, email: e.target.value})}
                                className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-green outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.auth.password}</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-slate-500" size={16} />
                            <input 
                                type="text" 
                                required
                                value={userFormData.password}
                                onChange={e => setUserFormData({...userFormData, password: e.target.value})}
                                className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-green outline-none font-mono"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.profile.form.name}</label>
                        <div className="relative">
                            <Building className="absolute left-3 top-3 text-slate-500" size={16} />
                            <input 
                                type="text" 
                                value={userFormData.business_name}
                                onChange={e => setUserFormData({...userFormData, business_name: e.target.value})}
                                className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-green outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.table.role}</label>
                        <select 
                            value={userFormData.role}
                            onChange={e => setUserFormData({...userFormData, role: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        >
                            <option value="CLIENT">CLIENT</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="OPERATOR">OPERATOR</option>
                        </select>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <label className="block text-xs font-mono text-neon-green mb-3 uppercase tracking-widest">{t.admin.subs.title}</label>
                        <div className="space-y-3">
                            <div 
                                onClick={(e) => { e.preventDefault(); toggleSubscription('sos_business'); }}
                                className={`flex items-center justify-between p-3 border cursor-pointer transition-all select-none ${
                                    userFormData.subscriptions?.sos_business 
                                    ? 'bg-neon-green/10 border-neon-green/50' 
                                    : 'bg-bunker-900 border-white/10 hover:border-white/30'
                                }`}
                            >
                                <span className={`text-sm font-bold ${userFormData.subscriptions?.sos_business ? 'text-white' : 'text-slate-400'}`}>{t.admin.subs.sos_business}</span>
                                { userFormData.subscriptions?.sos_business ? <ToggleRight size={24} className="text-neon-green" /> : <ToggleLeft size={24} className="text-slate-600" /> }
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button type="button" onClick={() => setIsUserModalOpen(false)} className="flex-1 py-3 border border-white/10 text-slate-400 hover:text-white font-mono uppercase text-xs font-bold">{t.admin.actions.cancel}</button>
                        <button type="submit" className="flex-1 py-3 bg-neon-green text-bunker-950 font-mono uppercase text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"><Save size={14} />{t.admin.actions.save}</button>
                    </div>
                </form>
            </div>
        </div>
      )}

      {/* SOS MODAL */}
      {isSosModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bunker-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-bunker-900 border border-white/20 w-full max-w-2xl clip-corner shadow-2xl relative animate-fade-in-up">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-xl font-tech font-bold text-white flex items-center gap-2">
                        <Edit size={20} className="text-neon-cyan"/>
                        {t.admin.sos_modal.title_edit} #SOS-{sosFormData.id}
                    </h3>
                    <button onClick={() => setIsSosModalOpen(false)} className="text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>
                
                <form onSubmit={handleSaveTicket} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Status & Date */}
                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.sos_modal.status}</label>
                        <select 
                            value={sosFormData.status}
                            onChange={e => setSosFormData({...sosFormData, status: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-cyan outline-none"
                        >
                            <option value="pending">PENDING</option>
                            <option value="in_progress">IN PROGRESS</option>
                            <option value="resolved">RESOLVED</option>
                            <option value="cancelled">CANCELLED</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.sos_modal.date}</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3 text-slate-500" size={16} />
                            <input 
                                type="datetime-local" 
                                value={sosFormData.created_at ? new Date(sosFormData.created_at).toISOString().slice(0, 16) : ''}
                                onChange={e => setSosFormData({...sosFormData, created_at: new Date(e.target.value).toISOString()})}
                                className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-cyan outline-none text-xs font-mono"
                            />
                        </div>
                    </div>

                    {/* Issue Type & Urgency (Full Editing) */}
                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.sos.form.issueType}</label>
                        <input 
                            type="text" 
                            value={sosFormData.issue_type}
                            onChange={e => setSosFormData({...sosFormData, issue_type: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-cyan outline-none"
                        />
                    </div>
                     <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.sos.form.urgency}</label>
                        <select 
                            value={sosFormData.urgency}
                            onChange={e => setSosFormData({...sosFormData, urgency: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-cyan outline-none"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="critical">CRITICAL</option>
                        </select>
                    </div>


                    {/* Description */}
                    <div className="md:col-span-2">
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.sos.form.desc}</label>
                        <textarea 
                            rows={3}
                            value={sosFormData.description}
                            onChange={e => setSosFormData({...sosFormData, description: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-cyan outline-none"
                        ></textarea>
                    </div>

                    {/* Admin Fields (Cost, Paid) */}
                    <div>
                        {/* @ts-ignore */}
                        <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase">{t.admin.sos_modal.cost}</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-3 text-slate-500" size={16} />
                            <input 
                                type="text" 
                                value={sosFormData.cost}
                                onChange={e => setSosFormData({...sosFormData, cost: e.target.value})}
                                className="w-full bg-bunker-950 border border-neon-cyan/30 pl-10 pr-4 py-3 text-white focus:border-neon-cyan outline-none"
                                placeholder="e.g. 500"
                            />
                        </div>
                    </div>
                    <div>
                        {/* @ts-ignore */}
                        <label className="block text-xs font-mono text-neon-green mb-2 uppercase">{t.admin.sos_modal.market_cost}</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-3 text-slate-500" size={16} />
                            <input 
                                type="text" 
                                value={sosFormData.market_cost}
                                onChange={e => setSosFormData({...sosFormData, market_cost: e.target.value})}
                                className="w-full bg-bunker-950 border border-neon-green/30 pl-10 pr-4 py-3 text-white focus:border-neon-green outline-none"
                                placeholder="e.g. 800"
                            />
                        </div>
                    </div>

                    <div className="flex items-end pb-3 md:col-span-2">
                         <div 
                            onClick={() => setSosFormData({...sosFormData, is_paid: !sosFormData.is_paid})}
                            className={`w-full flex items-center justify-between p-3 border cursor-pointer transition-all select-none ${
                                sosFormData.is_paid
                                ? 'bg-neon-green/10 border-neon-green/50' 
                                : 'bg-bunker-900 border-white/10 hover:border-white/30'
                            }`}
                        >
                            <span className={`text-sm font-bold font-mono uppercase ${sosFormData.is_paid ? 'text-neon-green' : 'text-slate-400'}`}>{t.admin.sos_modal.is_paid}</span>
                            { sosFormData.is_paid ? <ToggleRight size={24} className="text-neon-green" /> : <ToggleLeft size={24} className="text-slate-600" /> }
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="md:col-span-2">
                        <label className="block text-xs font-mono text-neon-cyan mb-2 uppercase">{t.admin.sos_modal.solution}</label>
                        <textarea 
                            rows={4}
                            value={sosFormData.solution}
                            onChange={e => setSosFormData({...sosFormData, solution: e.target.value})}
                            className="w-full bg-bunker-950 border border-neon-cyan/30 px-4 py-3 text-white focus:border-neon-cyan outline-none"
                            placeholder="Enter solution details, notes, or response..."
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex gap-3 pt-4 border-t border-white/10">
                        <button type="button" onClick={() => setIsSosModalOpen(false)} className="flex-1 py-3 border border-white/10 text-slate-400 hover:text-white font-mono uppercase text-xs font-bold">{t.admin.actions.cancel}</button>
                        <button type="submit" className="flex-1 py-3 bg-neon-cyan text-bunker-950 font-mono uppercase text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"><Save size={14} />{t.admin.actions.save}</button>
                    </div>
                </form>
            </div>
        </div>
      )}

      {/* PROJECTS MODAL */}
      {isProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bunker-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-bunker-900 border border-white/20 w-full max-w-2xl clip-corner shadow-2xl relative animate-fade-in-up">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-xl font-tech font-bold text-white flex items-center gap-2">
                        <Edit size={20} className="text-neon-cyan"/>
                         Edit Project #{projectFormData.id}
                    </h3>
                    <button onClick={() => setIsProjectModalOpen(false)} className="text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSaveProject} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">Status</label>
                        <select 
                            value={projectFormData.status}
                            onChange={e => setProjectFormData({...projectFormData, status: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        >
                            <option value="pending">PENDING</option>
                            <option value="in_progress">IN PROGRESS</option>
                            <option value="completed">COMPLETED</option>
                            <option value="cancelled">CANCELLED</option>
                        </select>
                    </div>
                     <div>
                        {/* @ts-ignore */}
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.projects.name}</label>
                        <input 
                            type="text" 
                            value={projectFormData.project_name}
                            onChange={e => setProjectFormData({...projectFormData, project_name: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        />
                    </div>
                    
                    <div className="md:col-span-2">
                        {/* @ts-ignore */}
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.projects.desc}</label>
                        <textarea 
                            rows={3}
                            value={projectFormData.description}
                            onChange={e => setProjectFormData({...projectFormData, description: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        ></textarea>
                    </div>

                    <div>
                         {/* @ts-ignore */}
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.projects.price}</label>
                        <input 
                            type="text" 
                            value={projectFormData.price}
                            onChange={e => setProjectFormData({...projectFormData, price: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        />
                    </div>
                     <div>
                         {/* @ts-ignore */}
                        <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.projects.eta}</label>
                        <input 
                            type="datetime-local" 
                            value={projectFormData.eta}
                            onChange={e => setProjectFormData({...projectFormData, eta: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none font-mono text-xs"
                        />
                    </div>

                    <div className="md:col-span-2 flex gap-3 pt-4 border-t border-white/10">
                        <button type="button" onClick={() => setIsProjectModalOpen(false)} className="flex-1 py-3 border border-white/10 text-slate-400 hover:text-white font-mono uppercase text-xs font-bold">{t.admin.actions.cancel}</button>
                        <button type="submit" className="flex-1 py-3 bg-neon-green text-bunker-950 font-mono uppercase text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"><Save size={14} />{t.admin.actions.save}</button>
                    </div>
                </form>
            </div>
          </div>
      )}

      {/* BLOG MODAL (New) */}
      {isBlogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bunker-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="bg-bunker-900 border border-white/20 w-full max-w-6xl h-[90vh] flex flex-col clip-corner shadow-2xl relative animate-fade-in-up">
                <div className="p-4 border-b border-white/10 flex justify-between items-center shrink-0">
                    <h3 className="text-xl font-tech font-bold text-white flex items-center gap-2">
                        <PenTool size={20} className="text-neon-green"/>
                        {editingPostId ? t.admin.blog_modal.editTitle : t.admin.blog_modal.createTitle}
                    </h3>
                    <button onClick={() => setIsBlogModalOpen(false)} className="text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                    {/* Left: Editor */}
                    <div className="w-full md:w-1/2 p-4 md:p-6 overflow-y-auto border-b md:border-b-0 md:border-r border-white/10">
                        <form id="blog-form" onSubmit={handleSavePost} className="space-y-4">
                             <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.blog_modal.title}</label>
                                <input 
                                    type="text" 
                                    required
                                    value={blogFormData.title}
                                    onChange={e => setBlogFormData({...blogFormData, title: e.target.value})}
                                    className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.blog_modal.slug}</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={blogFormData.slug}
                                        onChange={e => setBlogFormData({...blogFormData, slug: e.target.value})}
                                        className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.blog_modal.image}</label>
                                    <input 
                                        type="text" 
                                        value={blogFormData.image_url}
                                        onChange={e => setBlogFormData({...blogFormData, image_url: e.target.value})}
                                        className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.admin.blog_modal.excerpt}</label>
                                <textarea 
                                    rows={2}
                                    value={blogFormData.excerpt}
                                    onChange={e => setBlogFormData({...blogFormData, excerpt: e.target.value})}
                                    className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                                ></textarea>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-xs font-mono text-slate-400 uppercase">{t.admin.blog_modal.content}</label>
                                    <div className="flex gap-1">
                                        <button type="button" onClick={() => insertTag('h2')} className="p-1 text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded" title="Heading"><Type size={14}/></button>
                                        <button type="button" onClick={() => insertTag('h3')} className="p-1 text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded" title="Subheading"><Type size={12}/></button>
                                        <button type="button" onClick={() => insertTag('b')} className="p-1 text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded" title="Bold"><Bold size={14}/></button>
                                        <button type="button" onClick={() => insertTag('p')} className="p-1 text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded" title="Paragraph"><FileText size={14}/></button>
                                        <button type="button" onClick={() => insertTag('img')} className="p-1 text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded" title="Image"><ImageIcon size={14}/></button>
                                        <button type="button" onClick={() => insertTag('a')} className="p-1 text-slate-400 hover:text-white bg-white/5 border border-white/10 rounded" title="Link"><LinkIcon size={14}/></button>
                                    </div>
                                </div>
                                <textarea 
                                    id="blog-content"
                                    rows={12}
                                    value={blogFormData.content}
                                    onChange={e => setBlogFormData({...blogFormData, content: e.target.value})}
                                    className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none font-mono text-sm"
                                ></textarea>
                                <p className="text-[10px] text-slate-500 mt-1">{t.admin.blog_modal.helper}</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div 
                                    onClick={() => setBlogFormData({...blogFormData, is_published: !blogFormData.is_published})}
                                    className={`flex items-center gap-3 p-3 border cursor-pointer transition-all select-none rounded w-fit ${
                                        blogFormData.is_published
                                        ? 'bg-neon-green/10 border-neon-green/50' 
                                        : 'bg-bunker-950 border-white/10 hover:border-white/30'
                                    }`}
                                >
                                    { blogFormData.is_published ? <ToggleRight size={24} className="text-neon-green" /> : <ToggleLeft size={24} className="text-slate-600" /> }
                                    <span className={`text-sm font-bold font-mono uppercase ${blogFormData.is_published ? 'text-neon-green' : 'text-slate-400'}`}>{t.admin.blog_modal.is_published}</span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right: Preview */}
                    <div className="w-full md:w-1/2 flex flex-col bg-black">
                        <div className="p-2 bg-bunker-950 border-b border-white/10 text-xs font-mono text-slate-500 uppercase tracking-widest text-center">
                            {t.admin.blog_modal.preview}
                        </div>
                        <div className="flex-1 overflow-y-auto p-8 prose prose-invert max-w-none">
                            {/* Header Preview */}
                            {blogFormData.image_url && (
                                <img src={blogFormData.image_url} alt="Cover" className="w-full h-48 object-cover mb-6 rounded-lg border border-white/10" />
                            )}
                            <h1 className="text-3xl md:text-4xl font-tech font-bold text-white mb-4">{blogFormData.title || 'Post Title'}</h1>
                            {blogFormData.excerpt && <p className="text-lg text-slate-400 italic mb-8 border-l-2 border-neon-green pl-4">{blogFormData.excerpt}</p>}
                            
                            {/* Content Preview */}
                            <div dangerouslySetInnerHTML={{ __html: blogFormData.content }} />
                        </div>
                    </div>
                </div>

                <div className="p-4 border-t border-white/10 bg-bunker-900 flex justify-end gap-3 shrink-0">
                    <button type="button" onClick={() => setIsBlogModalOpen(false)} className="px-6 py-3 border border-white/10 text-slate-400 hover:text-white font-mono uppercase text-xs font-bold">{t.admin.actions.cancel}</button>
                    <button type="button" onClick={handleSavePost} className="px-6 py-3 bg-neon-green text-bunker-950 font-mono uppercase text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2"><Save size={14} />{t.admin.actions.save}</button>
                </div>
            </div>
          </div>
      )}

      {/* Message Modal (Existing) */}
      {messageModal.isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
             <div className={`bg-bunker-900 border ${messageModal.isError ? 'border-red-500/50' : 'border-neon-green/50'} p-8 max-w-sm w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] clip-corner relative animate-fade-in-up`}>
                 <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 border rounded-full shrink-0 ${messageModal.isError ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-neon-green/10 border-neon-green/30 text-neon-green'}`}>
                        {messageModal.isError ? <AlertTriangle size={24} /> : <CheckCircle size={24} />}
                    </div>
                    <div>
                        <h3 className={`text-xl font-tech font-bold uppercase mb-2 ${messageModal.isError ? 'text-red-500' : 'text-neon-green'}`}>
                            {messageModal.title}
                        </h3>
                        <p className="text-slate-300 font-mono text-sm leading-relaxed">
                            {messageModal.text}
                        </p>
                    </div>
                 </div>
                 
                 <button 
                    onClick={closeMessage} 
                    className={`w-full py-3 font-bold uppercase tracking-widest text-xs border transition-all ${
                        messageModal.isError 
                        ? 'bg-red-500 text-white border-red-500 hover:bg-white hover:text-red-500' 
                        : 'bg-neon-green text-bunker-950 border-neon-green hover:bg-white'
                    }`}
                 >
                    ACKNOWLEDGE
                 </button>
             </div>
        </div>
      )}

    </div>
  );
};
