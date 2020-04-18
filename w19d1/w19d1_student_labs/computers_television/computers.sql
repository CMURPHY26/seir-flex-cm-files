-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a computers table, drop it
    DROP TABLE computers;
-- Create a computers table
    CREATE TABLE computers (id serial, make varchar(20), model varchar(20), cpu_speed int, memory_size int, price int, release_date varchar(30), photo_url varchar(100), storage_amount int, number_usb_ports int, number_firewire_ports int, number_thunderbolt_ports int);

-- The table should have id, make, model, cpu_speed, memory_size,
--  price, release_date, photo_url, storage_amount, number_usb_ports,
--  number_firewire_ports, number_thunderbolt_ports


-- Insert 4 computers into the computers table
INSERT INTO computers (make, model, cpu_speed, memory_size, price, release_date, photo_url, storage_amount, number_usb_ports, number_firewire_ports, number_thunderbolt_ports)
VALUES
    ('Apple', 'MacBook Pro', 3.8, 8, 2500, '2020-03-15', 'http://www.test.com/photo.jpg', 500, 3, 3, 3),
    ('Dell', 'XPS15', 5.5, 16, 2000, '2019-12-15', 'http://www.test.com/photo.jpg', 1000, 2, 3, 4),
    ('Dell', 'XPS13', 3.5, 8, 1600, '2019-11-15', 'http://www.test.com/photo.jpg', 500, 2, 2, 2);

-- Select all entries from the computers table
    SELECT * FROM computers;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the computers_models, removing the storage_amount column
ALTER TABLE computers RENAME model TO computer_model;
ALTER TABLE computers DROP COLUMN storage_amount;
-- and add storage_type and storage_size columns
ALTER TABLE computers ADD COLUMN storage_type VARCHAR(20);
ALTER TABLE computers ADD COLUMN storage_size int;

SELECT * FROM computers;

