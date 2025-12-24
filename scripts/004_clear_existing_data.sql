-- Clear all existing data from tables
DELETE FROM certifications;
DELETE FROM scholarly_activities;
DELETE FROM volunteering;
DELETE FROM awards;
DELETE FROM skills;
DELETE FROM publications;
DELETE FROM experiences;
DELETE FROM education;
DELETE FROM profiles;

-- Reset sequences if they exist
ALTER SEQUENCE IF EXISTS profiles_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS education_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS experiences_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS publications_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS skills_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS awards_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS volunteering_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS scholarly_activities_id_seq RESTART WITH 1;
ALTER SEQUENCE IF EXISTS certifications_id_seq RESTART WITH 1;
