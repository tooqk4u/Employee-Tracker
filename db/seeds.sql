INSERT INTO department (name)
VALUES
  ('Management'),
  ('Engineering'),
  ('Sales'),
  ('Marketing'),
  ('Legal'),
  ('Human Resources');


INSERT INTO role (title, salary, department_id)
VALUES 
  ('Executive Officer', 200000, 1),
  ('Finanacial Officer', 200000, 1),
  ('Operations Manager', 100500, 1),
  ('Marketing Manager', 40500, 4),
  ('Marketing Assistant', 40000, 4),
  ('Engineering Manager', 200000, 2),
  ('Software Engineering Lead', 168000, 2),
  ('Senior Engineer', 90000, 2),
  ('Junior Engineer', 80000, 2),
  ('Lawyer', 160000, 4),
  ('Accountant', 58000, 4),
  ('Sales Manager', 50000, 3),
  ('Sales Assistant', 25000, 3),
  ('Sales Associate', 20000, 3),
  ('HR Manager', 50000, 6),
  ('HR Rep', 20000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES 
  ('Daniel', 'Jonson', 1, NULL),
  ('Sean', 'Hanks', 2, 'Cathy Man'),
  ('Kim', 'Jones', 3, 'Cathy Man'),
  ('Lisa', 'Sumset', 4, 'Cathy Man'),
  ('Donald', 'Pick', 5, 'Kim Jones'),
  ('Joan', 'Break', 6, 'Kim Jones'),
  ('Cathy', 'Man', 7, 'Kim Jones'),
  ('Tom', 'Bell', 8, 'Kim Jones'),
  ('Oscar', 'Butter0', 9, 'Kim Jones'),
  ('Posh', 'Spice', 10, 'Kim Jones'), 
  ('Mel', 'Brown', 11, 'Kim Jones'), 
  ('Emma', 'Bunton', 12, 'Kim Jones'), 
  ('Melanie', 'Chisolm', 13, 'Kim Jones'), 
  ('Geri', 'Hali', 14,'Kim Jones'),
  ('Brian', 'Spears', 15, 'Kim Jones'),
  ('Fred', 'Mac', 66, 'Kim Jones');