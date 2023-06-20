DROP TABLE Users;
CREATE TABLE Users (
  UserID SERIAL PRIMARY KEY,
  Name VARCHAR(50),
  Role VARCHAR(50),
  Email VARCHAR(50),
  Password VARCHAR(100)
);
INSERT INTO Users (Name, Role, Email)
VALUES (
    'Jakub Lewandowski',
    'CEO',
    'jlewandowski3@edu.cdv.pl'
  );
INSERT INTO Users (Name, Role, Email)
VALUES ('Kacper Blotny', 'CEO', 'kblotny@edu.cdv.pl');
INSERT INTO Users (Name, Role, Email)
VALUES (
    'Rasmus Lerdorf',
    'manager',
    'rlerdorf@gmail.com'
  );
INSERT INTO Users (Name, Role, Email)
VALUES (
    'Kajetan Wachowski',
    'employee',
    'kwachowski@edu.cdv.pl'
  );
SELECT *
FROM Users;
-- workingHours TABLE
CREATE TABLE workingHours (
  UserID INT PRIMARY KEY,
  Date DATE,
  StartTime TIME,
  EndTime TIME
);
-- querie