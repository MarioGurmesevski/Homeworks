-- Part 1

-- Find all Employees with FirstName = Antonio

SELECT * 
FROM Employee
WHERE firstname = 'Antonio'

-- Find all Employees with DateOfBirth greater than ‘01.01.1979’

SELECT * 
FROM Employee
WHERE dateofbirth > '1979-01-01'

-- Find all Male Employees

SELECT * 
FROM Employee
WHERE gender = 'M'

-- Find all Employees with LastName starting With ‘T’

SELECT * 
FROM Employee
WHERE lastname ILIKE 't%'

-- Find all Employees hired in January/1988

SELECT * 
FROM Employee
WHERE hiredate  BETWEEN '1988-01-01' AND '1988-01-31'

-- Find all Employees with LastName starting With ‘J’ hired in January/1988

SELECT * 
FROM Employee
WHERE hiredate  BETWEEN '1988-01-01' AND '1988-01-31'
AND
lastname ILIKE 'j%'

-- Part 2

-- Find all Employees with FirstName = Antonio ordered by Last Name

SELECT * 
FROM Employee
WHERE firstname = 'Antonio'
ORDER BY lastname ASC

-- List all Employees ordered by FirstName

SELECT * 
FROM Employee
ORDER BY name ASC

-- Find all Male employees ordered by HireDate, starting from the last hired

SELECT * 
FROM Employee
ORDER BY hiredate DESC

-- Part 3
-- List all Business Entity region and Customer region names in single result set WITH duplicates

SELECT region
FROM BusinessEntity
UNION ALL
SELECT regionname
FROM Customer

-- List all Business Entity region and Customer region names in single result set WITHOUT duplicates

SELECT region
FROM BusinessEntity
UNION
SELECT regionname
FROM Customer

-- List all common region names between Business Entities and Customers

SELECT region
FROM BusinessEntity
INTERSECT
SELECT regionname
FROM Customer

-- Part 4

-- Provide create table script for the Order table where it won’t allow an orderDate before 01.01.2010

CREATE TABLE "Order"
(
	id serial PRIMARY KEY NOT NULL,
	orderDate date CHECK(orderDate>='2010-01-01')
)

-- Provide create table script for the Product table where the price will always be AT LEAST 20% higher than the cost

CREATE TABLE Product
(
	id serial PRIMARY KEY NOT NULL,
	cost integer,
	price integer CHECK(price >=1.2 * cost)
)

-- Provide create table script for the Product table where all description values will be UNIQUE

CREATE TABLE Product
(
	id serial PRIMARY KEY NOT NULL,
	cost integer,
	price integer CHECK(price >=1.2 * cost),
	description varchar(500) UNIQUE
) 

-- Part 5

--Create Foreign key constraints for the Order table with script

CREATE TABLE "Order"
(
	id serial PRIMARY KEY NOT NULL,
	orderDate date CHECK(orderDate>='2010-01-01'),
	product_id integer REFERENCES Product(id)
)

-- Part 6

-- List all possible combinations of Customer names and Product names that can be ordered from a specific customer



-- List all Business Entities that has any order



-- List all Business Entities without orders


 







