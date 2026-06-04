
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { BlogPost } from '../types';
import { useLanguage } from '../lib/LanguageContext';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Loader } from 'lucide-react';

export const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Format date utility
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'he' ? 'he-IL' : language === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto mb-16 border-b border-white/10 pb-8">
         <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-0.5 border border-neon-green/50 text-neon-green font-mono text-[10px] uppercase">System_Log</span>
             <span className="w-12 h-px bg-white/10"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-6 uppercase">
            {/* @ts-ignore */}
            {t.blog.title}
        </h1>
        <p className="text-lg text-slate-400 font-light max-w-2xl border-l-2 border-neon-green/30 pl-6">
          {/* @ts-ignore */}
          {t.blog.subtitle}
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-neon-green">
           <Loader className="animate-spin mr-2" />
           {/* @ts-ignore */}
           <span className="font-mono text-sm uppercase">{t.blog.loading}</span>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 bg-bunker-900/50">
           <FileText className="mx-auto text-slate-600 mb-4" size={48} />
           <p className="text-slate-400 font-mono">ARCHIVE_EMPTY</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {posts.map((post) => (
             <div key={post.id} className="group bg-bunker-900 border border-white/10 hover:border-neon-green/50 transition-all flex flex-col clip-corner overflow-hidden h-full">
                {/* Image */}
                <div className="aspect-video w-full overflow-hidden border-b border-white/5 relative">
                   {post.image_url ? (
                     <img 
                        src={post.image_url} 
                        alt={post.title} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                     />
                   ) : (
                     <div className="w-full h-full bg-bunker-950 flex items-center justify-center text-slate-700">
                        <FileText size={40} />
                     </div>
                   )}
                   <div className="absolute top-2 right-2 bg-black/70 backdrop-blur text-neon-green text-[10px] font-mono px-2 py-1 border border-neon-green/20">
                      LOG #{post.id}
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                   <div className="mb-4">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                        {formatDate(post.created_at)}
                      </span>
                      <h2 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h2>
                   </div>
                   
                   <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow font-light">
                      {post.excerpt}
                   </p>
                   
                   <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-2 text-neon-green border-b border-transparent group-hover:border-neon-green pb-1 transition-all w-fit font-mono text-xs uppercase tracking-widest"
                   >
                      {/* @ts-ignore */}
                      {t.blog.readMore}
                      <ArrowRight size={14} className={`transform transition-transform group-hover:translate-x-1 ${language === 'he' ? 'rotate-180' : ''}`} />
                   </Link>
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};
