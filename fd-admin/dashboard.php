<?php
session_start();
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: index.php");
    exit;
}
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add_news'])) {
    $title = trim($_POST['title']); $category = trim($_POST['category']);
    $date = trim($_POST['date']); $image = trim($_POST['image']);
    $summary = trim($_POST['summary']); 
    $content = trim($_POST['content']);

    if (!empty($title) && !empty($image)) {
        $stmt = $pdo->prepare("INSERT INTO news (title, category, date, image, summary, content) VALUES (?, ?, ?, ?, ?, ?)");
        if ($stmt->execute([$title, $category, $date, $image, $summary, $content])) {
            $_SESSION['message'] = "<div class='bg-green-50 text-green-600 p-4 rounded-xl font-bold mb-6 border border-green-200'>✅ News Added Successfully!</div>";
            header("Location: dashboard.php");
            exit;
        }
    }
}
if (isset($_GET['delete'])) {
    $stmt = $pdo->prepare("DELETE FROM news WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    $_SESSION['message'] = "<div class='bg-red-50 text-red-500 p-4 rounded-xl font-bold mb-6 border border-red-200'>🗑️ News Deleted!</div>";
    header("Location: dashboard.php"); 
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add_video'])) {
    $v_title = trim($_POST['v_title']); 
    $v_platform = trim($_POST['v_platform']);
    $v_embed = trim($_POST['v_embed']);

    if (!empty($v_title) && !empty($v_embed)) {
        $stmt = $pdo->prepare("INSERT INTO videos (title, platform, embed_url) VALUES (?, ?, ?)");
        if ($stmt->execute([$v_title, $v_platform, $v_embed])) {
            $_SESSION['message'] = "<div class='bg-green-50 text-green-600 p-4 rounded-xl font-bold mb-6 border border-green-200'>✅ Video Added Successfully!</div>";
            header("Location: dashboard.php");
            exit;
        }
    }
}
if (isset($_GET['delete_video'])) {
    $stmt = $pdo->prepare("DELETE FROM videos WHERE id = ?");
    $stmt->execute([$_GET['delete_video']]);
    $_SESSION['message'] = "<div class='bg-red-50 text-red-500 p-4 rounded-xl font-bold mb-6 border border-red-200'>🗑️ Video Deleted!</div>";
    header("Location: dashboard.php"); 
    exit;
}

$message = '';
if (isset($_SESSION['message'])) {
    $message = $_SESSION['message'];
    unset($_SESSION['message']);
}

$newsList = $pdo->query("SELECT * FROM news ORDER BY id DESC")->fetchAll(PDO::FETCH_ASSOC);
$videoList = $pdo->query("SELECT * FROM videos ORDER BY id DESC")->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FD Admin - Manage CMS</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 min-h-screen font-sans pb-20">
    
    <nav class="bg-white shadow-sm border-b border-slate-100 p-4 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-extrabold text-slate-800">FD <span class="text-[#0B8793]">Admin</span></h1>
            <div class="flex items-center gap-4">
                <span class="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">👤 <?php echo htmlspecialchars($_SESSION['admin_username']); ?></span>
                <a href="logout.php" class="bg-red-50 text-red-500 px-4 py-2 rounded-lg font-bold hover:bg-red-100">Logout</a>
            </div>
        </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 mt-8">
        <?php echo $message; ?>
        
        <!-- ================= VIDEOS SECTION ================= -->
        <h2 class="text-2xl font-extrabold text-slate-800 mb-6 border-b pb-2">🎥 Manage Videos</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div class="lg:col-span-1">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">➕ Add New Video</h3>
                    <form method="POST" action="" class="space-y-4">
                        <input type="text" name="v_title" placeholder="Video Title" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                        <select name="v_platform" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                            <option value="youtube">YouTube</option>
                            <option value="facebook">Facebook</option>
                        </select>
                        <input type="url" name="v_embed" placeholder="Embed URL (src link)" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                        <button type="submit" name="add_video" class="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-bold shadow-md transition-all active:scale-95">Add Video</button>
                    </form>
                </div>
            </div>

            <div class="lg:col-span-2 space-y-4">
                <?php if(empty($videoList)): ?>
                    <div class="bg-white p-8 rounded-3xl text-center border shadow-sm text-slate-500">No videos published yet.</div>
                <?php else: ?>
                    <?php foreach($videoList as $video): ?>
                        <div class="bg-white p-5 rounded-3xl border shadow-sm flex justify-between items-center">
                            <div>
                                <span class="text-xs font-bold px-2 py-1 rounded-md uppercase <?php echo $video['platform'] == 'youtube' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'; ?>">
                                    <?php echo htmlspecialchars($video['platform']); ?>
                                </span>
                                <h3 class="text-lg font-bold text-slate-900 mt-2"><?php echo htmlspecialchars($video['title']); ?></h3>
                            </div>
                            <a href="?delete_video=<?php echo $video['id']; ?>" onclick="return confirm('Delete this video?');" class="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-100">🗑️</a>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>

        <!-- ================= NEWS SECTION ================= -->
        <h2 class="text-2xl font-extrabold text-slate-800 mb-6 border-b pb-2">📰 Manage News</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-1">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h3 class="text-lg font-bold text-slate-800 mb-4">➕ Add New Article</h3>
                    <form method="POST" action="" class="space-y-4">
                        <input type="text" name="title" placeholder="Title" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                        <div class="grid grid-cols-2 gap-4">
                            <select name="category" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                                <option value="Health Tips">Health Tips</option>
                                <option value="Medical Advice">Medical Advice</option>
                                <option value="FD Updates">FD Updates</option>
                            </select>
                            <input type="date" name="date" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                        </div>
                        <input type="url" name="image" placeholder="Cover Image URL" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                        
                        <textarea name="summary" rows="2" placeholder="Short Summary" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none"></textarea>
                        
                        <input type="url" name="content" placeholder="Medium Article URL (https://medium.com/...)" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-[#0B8793] outline-none">
                        
                        <button type="submit" name="add_news" class="w-full bg-[#0B8793] hover:bg-[#096d76] text-white py-4 rounded-xl font-bold shadow-md transition-all active:scale-95">Publish News</button>
                    </form>
                </div>
            </div>

            <div class="lg:col-span-2 space-y-4">
                <?php if(empty($newsList)): ?>
                    <div class="bg-white p-8 rounded-3xl text-center border shadow-sm text-slate-500">No news published yet.</div>
                <?php else: ?>
                    <?php foreach($newsList as $news): ?>
                        <div class="bg-white p-5 rounded-3xl border shadow-sm flex justify-between items-start">
                            <div class="flex gap-4">
                                <img src="<?php echo htmlspecialchars($news['image']); ?>" class="w-20 h-20 rounded-xl object-cover bg-slate-200">
                                <div>
                                    <span class="text-xs font-bold text-[#0B8793]"><?php echo htmlspecialchars($news['category']); ?></span>
                                    <h3 class="text-md font-bold text-slate-900 mt-1"><?php echo htmlspecialchars($news['title']); ?></h3>
                                    <div class="text-xs text-slate-400 mt-1">📅 <?php echo htmlspecialchars($news['date']); ?></div>
                                </div>
                            </div>
                            <a href="?delete=<?php echo $news['id']; ?>" onclick="return confirm('Delete this news?');" class="bg-red-50 text-red-500 p-2 rounded-xl hover:bg-red-100">🗑️</a>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>

</body>
</html>