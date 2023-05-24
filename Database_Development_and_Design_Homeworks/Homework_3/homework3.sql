-- Part 1

-- Calculate the count of all grades in the system

SELECT COUNT(grade) AS grade_count
FROM grade;

-- Calculate the count of all grades per Teacher in the system

SELECT t.Id AS teacher_id, t.FirstName, t.LastName, COUNT(g.Id) AS grade_count
FROM teacher t
LEFT JOIN grade g ON t.Id = g.TeacherID
GROUP BY t.Id, t.FirstName, t.LastName;

-- Calculate the count of all grades per Teacher in the system for first 100 Students (ID < 100)

SELECT t.Id AS teacher_id, t.FirstName, t.LastName, COUNT(g.Id) AS grade_count
FROM teacher t
LEFT JOIN grade g ON t.Id = g.TeacherID
INNER JOIN student s ON g.StudentID = s.Id
WHERE s.Id < 100
GROUP BY t.Id, t.FirstName, t.LastName;


-- Find the Maximal Grade, and the Average Grade per Student on all grades in the system

SELECT
  StudentID,
  MAX(Grade) AS MaxGrade,
  AVG(Grade) AS AverageGrade
FROM
  grade
GROUP BY
  StudentID;


-- Part 2

-- Calculate the count of all grades per Teacher in the system and filter only grade count greater then 200



-- Calculate the count of all grades per Teacher in the system for first 100 Students (ID < 100) and filter teachers with more than 50 Grade count



-- Find the Grade Count, Maximal Grade, and the Average Grade per Student on all grades in the system. Filter only records where Maximal Grade is equal to Average Grade



-- List Student First Name and Last Name next to the other details from previous query



-- Part 3

-- Create new view (vw_StudentGrades) that will List all StudentIds and count of Grades per student



-- Change the view to show Student First and Last Names instead of StudentID



-- List all rows from view ordered by biggest Grade Count



-- Create new view (vw_StudentGradeDetails) that will List all Students (FirstName and LastName) and Count the courses he passed through the exam




-- Selects

SELECT * FROM student
SELECT * FROM teacher
SELECT * FROM grade
SELECT * FROM gradedetails
SELECT * FROM course
SELECT * FROM achievementtype

-- Tables

CREATE TABLE IF NOT EXISTS student
(
	Id INTEGER PRIMARY KEY,
	FirstName varchar(20) NOT NULL,
	LastName varchar(30) NOT NULL,
	DateOfBirth date NOT NULL,
	EnrolledDate date NOT NULL,
	Gender nchar(1) NOT NULL,
	NationalIDNumber INTEGER NOT NULL,
	StudentCardNumber INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS teacher
(
	Id INTEGER PRIMARY KEY,
	FirstName varchar(20) NOT NULL,
	LastName varchar(30) NOT NULL,
	DateOfBirth date NOT NULL,
	AcademicRank varchar(20) NOT NULL,
	HireDate date NOT NULL
);

CREATE TABLE IF NOT EXISTS grade
(
	Id INTEGER PRIMARY KEY,
	StudentID INTEGER NOT NULL,
	CourseID INTEGER NOT NULL,
	TeacherID INTEGER NOT NULL,
	Grade smallint NOT NULL,
	Comment varchar(100) NOT NULL,
	CreatedDate date NOT NULL
);

CREATE TABLE IF NOT EXISTS gradedetails
(
	Id INTEGER PRIMARY KEY,
	CourseID INTEGER NOT NULL,
	AchievementTypeID INTEGER NOT NULL,
	AchievementPoints INTEGER NOT NULL,
	AchievementMaxPoints INTEGER NOT NULL,
	AchievementDate date NOT NULL
);

CREATE TABLE IF NOT EXISTS course
(
	Id INTEGER PRIMARY KEY,
	Name varchar(50) NOT NULL,
	Credit INTEGER NOT NULL,
	AcademicYear varchar(9) NOT NULL,
	Semester smallint NOT NULL
);

CREATE TABLE IF NOT EXISTS achievementtype
(
	Id INTEGER PRIMARY KEY,
	Name varchar(50) NOT NULL,
	Description varchar(100) NOT NULL,
	ParticipationRate decimal(3,2)
);

-- Dummy Data

INSERT INTO student (Id, FirstName, LastName, DateOfBirth, EnrolledDate, Gender, NationalIDNumber, StudentCardNumber)
VALUES
    (1, 'John', 'Doe', '2000-01-01', '2021-09-01', 'M', 123456789, 987654321),
    (2, 'Jane', 'Smith', '2001-02-03', '2021-09-01', 'F', 987654321, 123456789),
    (3, 'David', 'Johnson', '1999-05-10', '2021-09-01', 'M', 456789123, 321654987);

INSERT INTO teacher (Id, FirstName, LastName, DateOfBirth, AcademicRank, HireDate)
VALUES
    (1, 'Michael', 'Brown', '1975-08-15', 'Professor', '2010-01-01'),
    (2, 'Emily', 'Davis', '1982-03-22', 'Associate Professor', '2015-07-01'),
    (3, 'Daniel', 'Wilson', '1990-11-27', 'Assistant Professor', '2020-09-01');

INSERT INTO grade (Id, StudentID, CourseID, TeacherID, Grade, Comment, CreatedDate)
VALUES
    (1, 1, 1, 1, 85, 'Good work!', '2023-05-01'),
    (2, 2, 1, 1, 92, 'Excellent performance!', '2023-05-02'),
    (3, 3, 2, 2, 78, 'Showing improvement.', '2023-05-03');

INSERT INTO gradedetails (Id, CourseID, AchievementTypeID, AchievementPoints, AchievementMaxPoints, AchievementDate)
VALUES
    (1, 1, 1, 10, 15, '2023-04-15'),
    (2, 1, 2, 25, 30, '2023-04-20'),
    (3, 2, 1, 12, 20, '2023-04-22');

INSERT INTO course (Id, Name, Credit, AcademicYear, Semester)
VALUES
    (1, 'Mathematics', 4, '2023-2024', 1),
    (2, 'English Literature', 3, '2023-2024', 1),
    (3, 'Science', 5, '2023-2024', 2);


INSERT INTO achievementtype (Id, Name, Description, ParticipationRate)
VALUES
    (1, 'Homework', 'Completion of assigned homework', 0.8),
    (2, 'Exam', 'Performance in exams', 0.6),
    (3, 'Project', 'Quality of project submission', 0.9);





























