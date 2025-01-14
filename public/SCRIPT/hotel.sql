CREATE TABLE station (
	sta_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	sta_name VARCHAR(50) NOT NULL,
	sta_altitude INT
);

CREATE TABLE hotel (
	hot_id 			INT AUTO_INCREMENT NOT NULL,
	hot_sta_id 		INT NOT NULL,
	hot_name 		VARCHAR(50) NOT NULL,
	hot_category 	INT NOT NULL,
	hot_address		VARCHAR(50) NOT NULL,
	hot_city 		VARCHAR(50) NOT NULL, 
	FOREIGN KEY (hot_sta_id) REFERENCES station(sta_id),
	PRIMARY KEY (hot_id)
);

CREATE TABLE room (
	roo_id INT NOT NULL AUTO_INCREMENT,
	roo_hot_id INT NOT NULL,
	roo_number INT NOT NULL,
	roo_capacity INT NOT NULL,
	roo_type INT NOT NULL,
	FOREIGN KEY (roo_hot_id) REFERENCES hotel(hot_id),
	PRIMARY KEY (roo_id)
);

CREATE TABLE client (
	cli_id INT NOT NULL AUTO_INCREMENT,
	cli_last_name VARCHAR(50),
	cli_first_name VARCHAR(50),
	cli_address VARCHAR(50),
	cli_city VARCHAR(50),
	PRIMARY KEY (cli_id)
);

CREATE TABLE reservation (
	res_id INT NOT NULL AUTO_INCREMENT,
	res_roo_id INT NOT NULL,
	res_cli_id INT NOT NULL,
	res_date DATETIME NOT NULL,
	res_start_date DATETIME NOT NULL,
	res_end_date DATETIME NOT NULL,
	res_price DECIMAL(6,2) NOT NULL,
	res_deposit DECIMAL(6,2),
	FOREIGN KEY (res_roo_id) REFERENCES room(roo_id),
	FOREIGN KEY (res_cli_id) REFERENCES client(cli_id),
	PRIMARY KEY (res_id)
);
