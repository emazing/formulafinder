CREATE TABLE formula
    (`id` int primary key, `formula` text, `left_member` tinytext, `sign` tinytext, `right_member` tinytext, `var` tinytext, `var_meaning` text)
;
CREATE TABLE creation
	(`id` int primary key, `creator` tinytext, `date` tinytext, `place` tinytext, `circumstances` text)
;
CREATE TABLE description 
    (`id` int primary key, `matter` tinytext, `submatter` tinytext, `level` tinyint, `upload_date` timestamp, `upload_buddy` tinytext)
;
	
INSERT INTO formula
	(`id`, `formula`, `left_member`, `sign`, `right_member`, `var`, `var_meaning`)
VALUES
	(1, 'E=mc^2', 'E', '=', 'mc^2', 'E,m,c', 'energy,mass,celerity'),
	(2, 'a^2+b^2=c^2', 'a^2+b^2', '=', 'c^2', 'a,b,c', 'length')
;

INSERT INTO description
	(`id`, `matter`, `submatter`, `level`, `upload_date`, `upload_buddy`)
VALUES
	(1, 'Physics', 'Quantum Mechanics', '2', '20160807163535', 'Erwin'),
	(2, 'a^2+b^2=c^2', 'a^2+b^2', '-3', '20160807163536', 'Erwin')
;

INSERT INTO creation
	(`id`, `creator`, `date`, `place`, `circumstances`)
VALUES
	(1, 'Albert Einstein', 'XXst century', 'Unknown', '20160807163535'),
	(2, 'a^2+b^2=c^2', '-540', 'Greece', '20160807163536')
;
