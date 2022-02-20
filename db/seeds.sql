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
  ('Sean', 'Hanks', 2, NULL),
  ('Kim', 'Jones', 3, NULL),
  ('Lisa', 'Sumset', 20, NULL),
  ('Donald', 'Pick', 21, 'Kim Jones'),
  ('Joan', 'Break', 30, 'Kim Jones'),
  ('Cathy', 'Man', 31, 'Kim Jones'),
  ('Tom', 'Bell', 33, 'Kim Jones'),
  ('Oscar', 'Butter', 40, 'Kim Jones'),
  ('Posh', 'Spice', 50, 'Kim Jones'), 
  ('Mel', 'Brown', 52, 'Kim Jones'), 
  ('Emma', 'Bunton', 51, 'Kim Jones'), 
  ('Melanie', 'Chisolm', 53, 'Kim Jones'), 
  ('Geri', 'Hali', 60,'Kim Jones'),
  ('Brian', 'Spears', 61, 'Kim Jones'),
    ('Fred', 'Mac', 4, 'Kim Jones');