import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { BlogPost as BlogPostType } from '../types';
import { useLanguage } from '../lib/LanguageContext';
import { ArrowLeft, Calendar, Loader, FileWarning } from 'lucide-react';
import { SEO } from '../components/SEO';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(language === 'he' ? 'he-IL' : language === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Generate Article Schema for AI
  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image_url ? [post.image_url] : ["https://bunker255.com/og-image.svg"],
    "datePublished": post.created_at,
    "dateModified": post.created_at,
    "author": {
        "@type": "Organization",
        "name": "BUNKER-255 Lab"
    },
    "publisher": {
        "@type": "Organization",
        "name": "BUNKER-255",
        "logo": {
            "@type": "ImageObject",
            "url": "https://bunker255.com/og-image.svg"
        }
    },
    "description": post.excerpt,
    "articleBody": post.content ? post.content.replace(/<[^>]*>?/gm, '') : "" // Strip HTML for AI text body
  } : undefined;

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
         <div className="flex flex-col items-center gap-4 text-neon-green">
             <Loader className="animate-spin w-8 h-8" />
             {/* @ts-ignore */}
             <span className="font-mono text-sm uppercase tracking-widest">{t.blog.loading}</span>
         </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center container mx-auto px-4">
          <SEO title="404 Not Found | BUNKER-255" description="Blog post not found." />
          <div className="text-center max-w-md bg-bunker-900 border border-red-500/30 p-8 clip-corner">
              <FileWarning className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">ERROR 404</h2>
              {/* @ts-ignore */}
              <p className="text-slate-400 mb-6 font-mono text-sm">{t.blog.notFound}</p>
              <Link to="/blog" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest border border-white/10">
                 {/* @ts-ignore */}
                 {t.blog.backToBlog}
              </Link>
          </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen pb-20">
      <SEO 
        title={`${post.title} | BUNKER-255 Blog`} 
        description={post.excerpt} 
        schema={articleSchema}
      />
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden bg-bunker-950 border-b border-white/10">
         <div className="absolute inset-0 bg-gradient-to-t from-bunker-950 via-bunker-950/50 to-transparent z-10"></div>
         {post.image_url && (
            <img src={post.image_url} alt={post.title} className="w-full h-full object-cover opacity-60" />
         )}
         <div className="absolute bottom-0 left-0 w-full z-20 container mx-auto px-4 md:px-6 pb-12">
             <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-neon-green transition-colors mb-6 font-mono text-xs uppercase tracking-widest bg-black/50 px-3 py-1 backdrop-blur border border-white/10 rounded-full w-fit">
                 <ArrowLeft size={14} className={language === 'he' ? 'rotate-180' : ''} />
                 {/* @ts-ignore */}
                 {t.blog.backToBlog}
             </Link>
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-tech font-bold text-white leading-tight max-w-4xl text-glow">
                 {post.title}
             </h1>
         </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-10">
         <div className="max-w-3xl mx-auto">
             {/* Meta Data */}
             <div className="flex items-center gap-4 text-xs md:text-sm font-mono text-slate-500 mb-10 border-b border-white/5 pb-6">
                 <div className="flex items-center gap-2">
                     <Calendar size={14} className="text-neon-green" />
                     {/* @ts-ignore */}
                     <span>{t.blog.publishedAt}: {formatDate(post.created_at)}</span>
                 </div>
                 {post.category && (
                     <>
                        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                        <span className="text-slate-300 uppercase border border-white/10 px-2 py-0.5 rounded">{post.category}</span>
                     </>
                 )}
             </div>

             {/* Content */}
             <div 
                className="prose prose-invert prose-lg max-w-none prose-headings:font-tech prose-headings:uppercase prose-a:text-neon-green prose-pre:bg-bunker-900 prose-pre:border prose-pre:border-white/10 prose-img:rounded-lg prose-img:border prose-img:border-white/10"
                dangerouslySetInnerHTML={{ __html: post.content }} 
             />
             
             {/* Footer Actions */}
             <div className="mt-16 pt-10 border-t border-white/10 flex justify-between items-center">
                 <Link to="/blog" className="text-slate-400 hover:text-white transition-colors font-mono text-sm flex items-center gap-2 group">
                     <ArrowLeft size={16} className={`group-hover:-translate-x-1 transition-transform ${language === 'he' ? 'rotate-180' : ''}`} />
                     {/* @ts-ignore */}
                     {t.blog.backToBlog}
                 </Link>
             </div>
         </div>
      </div>
    </article>
  );
};