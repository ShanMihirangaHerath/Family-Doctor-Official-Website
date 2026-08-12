<?php
session_start();
if (isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true) {
    header("Location: dashboard.php");
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    require 'db.php';

    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if (!empty($username) && !empty($password)) {
        $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = :username LIMIT 1");
        $stmt->execute(['username' => $username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && $user['password'] === $password) {
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['admin_username'] = $user['username'];
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Invalid username or password!";
        }
    } else {
        $error = "Please fill all fields!";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Family Doctor - Admin Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-[#0f2b3c] to-[#0B8793] min-h-screen flex items-center justify-center font-sans">
    
    <div class="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-8 m-4">
        
        <div class="text-center mb-8">
            <div class="w-16 h-16 bg-[#0B8793]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-[#0B8793]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
            </div>
            <h2 class="text-3xl font-extrabold text-slate-800">FD <span class="text-[#0B8793]">Admin</span></h2>
            <p class="text-slate-500 mt-2 text-sm font-medium">Please sign in to access the CMS</p>
        </div>

        <?php if ($error): ?>
            <div class="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-bold mb-6 text-center border border-red-100">
                <?php echo $error; ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="" class="space-y-5">
            <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0B8793] outline-none transition-all font-medium text-slate-800"
                    placeholder="Enter admin username"
                    required
                >
            </div>

            <div>
                <label class="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    class="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0B8793] outline-none transition-all font-medium text-slate-800"
                    placeholder="Enter password"
                    required
                >
            </div>

            <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-[0.98] mt-4">
                Login to Dashboard
            </button>
        </form>

    </div>

</body>
</html>