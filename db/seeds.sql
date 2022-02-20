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
  ('Sean', 'Hanks', 2, 'Daniel Johnson'),
  ('Kim', 'Jones', 3, 'Daniel Johnson'),
  ('Lisa', 'Sumset', 4, NULL),
  ('Donald', 'Pick', 5, 'Lisa Sumset'),
  ('Joan', 'Break', 6, NULL),
  ('Cathy', 'Man', 7, 'Joan Break'),
  ('Tom', 'Bell', 8, 'Joan Break'),
  ('Oscar', 'Butter0', 9, 'Joan Break'),
  ('Paul', 'Spice', 10, NULL), 
  ('Mel', 'Brown', 11, 'Daniel Johnson'), 
  ('Emma', 'Bunton', 12, NULL), 
  ('Melanie', 'Chisolm', 13, 'Emma Bunton'), 
  ('Geri', 'Hali', 14,'Emma Bunton'),
  ('Brian', 'Spears', 15, NULL),
  ('Fred', 'Mac', 16, 'Brain Spears');