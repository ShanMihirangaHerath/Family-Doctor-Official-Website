<?php
require 'db.php';
header("Content-Type: application/json; charset=UTF-8");

try {
    $stmt = $pdo->query("SELECT * FROM videos ORDER BY id DESC");
    $videoList = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($videoList);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>