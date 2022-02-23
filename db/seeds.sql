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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ('Daniel', 'Jonson', 1, NULL),
  ('Sean', 'Hanks', 2, NULL),
  ('Kim', 'Jones', 3, 2),
  ('Lisa', 'Sumset', 4, NULL),
  ('Donald', 'Pick', 5, 3),
  ('Joan', 'Break', 6, NULL),
  ('Cathy', 'Man', 7, NULL),
  ('Tom', 'Bell', 8, 5),
  ('Oscar', 'Butter0', 9, 6),
  ('Paul', 'Spice', 10, NULL), 
  ('Mel', 'Brown', 11, 1), 
  ('Emma', 'Bunton', 12, NULL), 
  ('Melanie', 'Chisolm', 13, NULL), 
  ('Geri', 'Hali', 14,3),
  ('Brian', 'Spears', 15, NULL),
  ('Fred', 'Mac', 16, 3);