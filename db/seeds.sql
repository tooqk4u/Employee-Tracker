INSERT INTO department (name)
VALUES
  ('Human Resources'),
  ('Engineering'),
  ('Sales'),
  ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Legal', 100000, 1),
  ('Engineering', 90000, 2),
  ('Sales', 80000, 3),
  ('Human Resources', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Daniel', 'Jonson', 1, NULL),
  ('Sean', 'Hanks', 2, NULL),
  ('Kim', 'Jones', 3, NULL),
  ('Lisa', 'Sumset', 4, NULL),
  ('Donald', 'Pick', 1, 1),
  ('Joan', 'Break', 1, 1),
  ('Cathy', 'Man', 2, 2),
  ('Tom', 'Bell', 3, 3),
  ('Oscar', 'Butter', 4, 4);