import React, { useState, useEffect } from 'react';
import { Newspaper, Play, Video, Globe, Calendar, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MediaArchivePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') || 'news';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [newsArticles, setNewsArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost/fd-admin/get_news.php').then(res => res.json()),
      fetch('http://localhost/fd-admin/get_videos.php').then(res => res.json())
    ]).then(([newsData, videosData]) => {
      if (!newsData.error) setNewsArticles(newsData);
      if (!videosData.error) setVideos(videosData);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 pt-4">
          <Link to="/news" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0B8793] font-bold mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Highlights
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Media & News Archive</h1>
          <p className="text-slate-500 mt-2 font-medium">Browse our entire history of articles and video guides.</p>
        </div>

        <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-px">
          <button 
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'news' ? 'border-[#0B8793] text-[#0B8793]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
          >
            <Newspaper className="w-5 h-5" /> All News
          </button>
          <button 
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'videos' ? 'border-red-500 text-red-500' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
          >
            <Play className="w-5 h-5" /> All Videos
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#0B8793]">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="font-bold">Loading Archive...</p>
          </div>
        ) : (
          <div>
            {activeTab === 'news' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-[#0B8793]/10 text-[#0B8793] px-3 py-1 rounded-full text-xs font-bold uppercase">{article.category}</span>
                        <span className="text-slate-400 text-xs font-semibold flex items-center gap-1"><Calendar className="w-3 h-3"/> {article.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{article.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">{article.summary}</p>
                      <a 
                        href={article.content} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#0B8793] font-bold text-sm flex items-center gap-2 mt-auto border-t border-slate-50 pt-4 hover:gap-3 transition-all"
                      >
                        Read on Medium <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos Tab Content */}
            {activeTab === 'videos' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                  <div key={video.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-4">
                    <div className="relative w-full aspect-video bg-slate-200 rounded-xl overflow-hidden mb-4">
                      <iframe src={video.embed_url} title={video.title} className="absolute top-0 left-0 w-full h-full" allowFullScreen></iframe>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {video.platform === 'youtube' ? (
                          <span className="text-red-500 text-xs font-bold flex items-center gap-1"><Video className="w-3 h-3" /> YouTube</span>
                        ) : (
                          <span className="text-blue-500 text-xs font-bold flex items-center gap-1"><Globe className="w-3 h-3" /> Facebook</span>
                        )}
                      </div>
                      <h3 className="text-md font-bold text-slate-800 line-clamp-2">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default MediaArchivePage;