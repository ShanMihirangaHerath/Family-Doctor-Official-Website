<?php
require 'db.php';

header("Content-Type: application/json; charset=UTF-8");

try {
    $stmt = $pdo->query("SELECT * FROM news ORDER BY id DESC");
    $newsList = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($newsList);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>