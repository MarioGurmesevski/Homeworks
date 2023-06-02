-- Functions

-- Part 1

-- Calculate “(price + cost) / weight” for all products.

SELECT Id, (price +cost) / weight AS calculation_result
FROM product;

-- Get a round number that is higher or equal for the costs and a round number that is lower or equal for the prices for all products.



-- Get all orders and generate a random number between 0 and 100 for every order.

SELECT *, RANDOM() * 101 AS RandomNumber
FROM "Order";

-- Concatenate the name, region and zipcode from every business entity and add the delimiter ‘; ‘ between them.

SELECT CONCAT(name, ', ', region, ', ', zipcode) AS don_t_know_a_name
FROM businessentity;

-- Declare temp table that will contain LastName and HireDate columns. The HireDate column must not allow dates after 01.01.2010. 
-- Insert 5 rows of dummy data and display every row inserted.

CREATE TEMPORARY TABLE temp_employee (
  LastName varchar(100),
  HireDate date CHECK (HireDate <= '2010-01-01')
);

INSERT INTO temp_employee (LastName, HireDate)
VALUES
  ('Bob', '2003-06-15'),
  ('John', '1995-03-21'),
  ('Mario', '2009-12-31'),
  ('Nikola', '2009-12-30'),
  ('Jonny', '1993-02-28');

SELECT * FROM temp_employee;


-- Part 2

-- Create a function (get_employees_hired_later_than) that will return all employees that were hired after a provided date. Return the following columns:

	-- The first and last name concatenated into one column with a space between them. The column should be named “Full name”.
	-- The age that the employee was at the time he was employed. Column should be named “Age of employee on hiring”.
	-- The national ID number concatenated with the gender, with a ‘; ‘ delimiter between them.
	
CREATE OR REPLACE FUNCTION get_employees_hired_later_than(hire_date date)
RETURNS TABLE (full_name varchar, age_of_employee_on_hiring numeric, national_id_and_gender varchar) 
AS $$
BEGIN
    RETURN QUERY 
        SELECT CONCAT(e.firstname, ' ', e.lastname)::varchar AS full_name,
               EXTRACT(YEAR FROM AGE(hire_date, e.dateofbirth)) AS age_of_employee_on_hiring,
               CONCAT(e.nationalidnumber, '; ', e.gender)::varchar AS national_id_and_gender
        FROM Employee e
        WHERE e.hiredate > hire_date;
END;
$$ LANGUAGE plpgsql;




SELECT * FROM get_employees_hired_later_than('2010-01-01');

-- Part 3

 -- Create a function (get_employee_orders) that will return all orders done by a specific employee. Return the following columns:
	-- The first 3 letters of the name, the last 3 characters of the code and the full description concatenated delimited with the character ‘; ‘
	-- of the product for which the order was made.
	-- The quantity of the order.
	-- The business entity name for which the order was made.

CREATE OR REPLACE FUNCTION get_employee_orders(employee_id integer)
RETURNS TABLE (product_description varchar, quantity integer, business_entity_name varchar)
AS $$
BEGIN
    RETURN QUERY
        SELECT
            (p.name || '; ' || p.code || '; ' || p.description)::varchar AS product_description, od.quantity, be.name AS business_entity_name
        FROM
            "Order" o
        INNER JOIN
            orderdetails od ON o.id = od.orderid
        INNER JOIN
            product p ON od.productid = p.id
        INNER JOIN
            businessentity be ON o.businessentityid = be.id
        WHERE
            o.employeeid = employee_id;
END;
$$ LANGUAGE plpgsql;




SELECT * FROM get_employee_orders(10);

-- IF ELSE

-- Create a function that returns all information from the products table for a given order ID, using a row variable.



-- Create a function doing the same thing from above but using a record.



-- Create a function that will return all customers that bought a certain product, determined by the product ID, with all of their information.



-- Create a function that returns the quantity for a given order ID, only if the quantity is bigger than 50. If it is not, raise a notice. Use the if/else statement.

CREATE OR REPLACE FUNCTION get_quantity(order_id integer)
    RETURNS integer
AS $$
DECLARE
    order_quantity integer;
BEGIN
    SELECT quantity INTO order_quantity
    FROM orderdetails
    WHERE orderId = order_id;
    
    IF order_quantity > 50 THEN
        RETURN order_quantity;
    ELSE
        RAISE NOTICE 'Quantity is under 50.';
		-- RETURN null mislam treba ova da bide tuka ama neznam
    END IF;
END;
$$ LANGUAGE plpgsql;

SELECT get_quantity(2);


-- Create a function that returns all customers that bought a certain product, only if their name starts with a, e, i, o, u. 
-- If there are none, use an if/else statement to raise a notice.







-- Selects
SELECT * FROM "Order"
SELECT * FROM businessentity
SELECT * FROM customer
SELECT * FROM employee
SELECT * FROM orderdetails
SELECT * FROM product