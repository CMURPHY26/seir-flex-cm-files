-- Open up psql and create a sql_lab database if you haven't already done so. 
-- If you already have a sql_lab database, no need to create it again.

-- Write SQL commands under the prompts below, and run the file to get results.

-- In case there is already a televisions table, drop it
    DROP TABLE televisions;
    DROP TABLE tv_models;

-- Create a televisions table
    CREATE TABLE televisions (id serial, model_name varchar(20), screen_size int, resolution int, price int, release_date varchar(20), photo_url varchar(100));

--  The table should have id, model_name, screen_size, resolution,
--  price, release_date, photo_url


-- Insert 4 televisions into the tv_models table
    INSERT INTO televisions (model_name, screen_size, resolution, price, release_date, photo_url)
    VALUES
    ('Samsung', 55, 1080, 1500, '2020-03-15', 'https://tst.com/photo.jpg'),
    ('Vizio', 65, 1080, 900, '2020-02-20', 'https://tst.com/photo.jpg'),
    ('Sony', 560, 1080, 1000, '2019-12-15', 'https://tst.com/photo.jpg'),
    ('Samsung', 65, 1080, 1800, '2020-01-13', 'https://tst.com/photo.jpg');

-- Select all entries from the tv_models table
    SELECT * FROM televisions;

-- HUNGRY FOR MORE? 
-- Look at this afternoon's instructor notes and read on altering tables before attempting below

-- Alter the tv_models, removing the resolution column
--  and add vertical_resolution and horizontal_resolution columns
ALTER TABLE televisions RENAME TO tv_models;
ALTER TABLE tv_models DROP COLUMN resolution;
ALTER TABLE tv_models ADD COLUMN vertical_resolution int;
ALTER TABLE tv_models ADD COLUMN horizontal_resolution int;

SELECT * FROM tv_models