import React, { useState, useEffect } from 'react';
import { Play, Newspaper, Calendar, ArrowRight, Share2, Video, Globe, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsAndMediaPage = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingVideos, setLoadingVideos] = useState(true);

  useEffect(() => {
    fetch('http://localhost/fd-admin/get_news.php')
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setNewsArticles(data);
        setLoadingNews(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoadingNews(false);
      });

    fetch('http://localhost/fd-admin/get_videos.php')
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) setVideos(data);
        setLoadingVideos(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setLoadingVideos(false);
      });
  }, []);

  const topVideos = videos.slice(0, 2);
  const topNews = newsArticles.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0f2b3c] via-[#1a4a5a] to-[#0B8793] text-white pt-32 pb-20 md:pt-40 md:pb-28 mb-20 shadow-inner relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Health News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38ef7d] to-[#0bd2c3]">Media</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl">
              Stay updated with the latest medical advice, health tips, and official announcements from FD.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 shadow-sm">
                <Play className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Top Videos</h2>
            </div>
            {videos.length > 0 && (
              <Link to="/media-archive?tab=videos" className="hidden md:flex items-center gap-2 text-[#0B8793] font-bold hover:gap-3 transition-all">
                See All Videos <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>

          {loadingVideos ? (
            <div className="flex flex-col items-center justify-center py-20 text-red-500">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="font-bold text-lg">Loading Videos...</p>
            </div>
          ) : videos.length === 0 ? (
             <div className="bg-white rounded-[2rem] p-10 text-center border border-slate-100 shadow-sm">
              <p className="text-slate-500 font-medium text-lg">No videos published yet.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                {topVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md border border-slate-100 group transition-all duration-300">
                    <div className="relative w-full aspect-video bg-slate-200">
                      <iframe src={video.embed_url} title={video.title} className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        {video.platform === 'youtube' ? (
                          <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-red-100">
                            <Video className="w-3.5 h-3.5" /> YouTube Video
                          </span>
                        ) : (
                          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border border-blue-100">
                            <Globe className="w-3.5 h-3.5" /> Facebook Video
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#0B8793] transition-colors leading-snug">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              {videos.length > 0 && (
                <div className="mt-8 text-center md:hidden">
                  <Link to="/media-archive?tab=videos" className="inline-flex items-center gap-2 bg-[#0B8793]/10 text-[#0B8793] px-6 py-3 rounded-xl font-bold">
                    See All Videos <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </>
          )}
        </section>

        {/* ================== News Highlights ================== */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0B8793]/10 rounded-2xl flex items-center justify-center text-[#0B8793] shadow-sm">
                <Newspaper className="w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Latest FD News</h2>
            </div>
            {newsArticles.length > 0 && (
              <Link to="/media-archive?tab=news" className="hidden md:flex items-center gap-2 text-[#0B8793] font-bold hover:gap-3 transition-all">
                See All News <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>

          {loadingNews ? (
            <div className="flex flex-col items-center justify-center py-20 text-[#0B8793]">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <p className="font-bold text-lg">Loading News...</p>
            </div>
          ) : newsArticles.length === 0 ? (
            <div className="bg-white rounded-[2rem] p-10 text-center border border-slate-100 shadow-sm">
              <p className="text-slate-500 font-medium text-lg">No news published yet.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {topNews.map((article) => (
                  <div key={article.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
                    <div className="relative h-60 overflow-hidden bg-slate-100 flex items-center justify-center">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/mylogo.png';
                          e.target.className = 'w-1/2 h-1/2 object-contain opacity-50';
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-extrabold text-slate-800 shadow-sm tracking-wide uppercase">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold mb-4">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0B8793] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow font-medium">
                        {article.summary}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-100">
                        <a 
                          href={article.content} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#0B8793] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                        >
                          Read on Medium <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {newsArticles.length > 0 && (
                <div className="mt-8 text-center md:hidden">
                  <Link to="/media-archive?tab=news" className="inline-flex items-center gap-2 bg-[#0B8793]/10 text-[#0B8793] px-6 py-3 rounded-xl font-bold">
                    See All News <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </>
          )}
        </section>

      </div>
    </div>
  );
};

export default NewsAndMediaPage;