-- Initialize database
CREATE DATABASE IF NOT EXISTS nodedb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE nodedb;

-- Create people table
CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert initial data
INSERT INTO people (name) VALUES ('Initial User') ON DUPLICATE KEY UPDATE name = name;

-- Create user for application
CREATE USER IF NOT EXISTS 'app'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON nodedb.* TO 'app'@'%';
FLUSH PRIVILEGES;
