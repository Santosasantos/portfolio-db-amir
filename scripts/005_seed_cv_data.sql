-- Insert profile data for MD. AMIR HOSSEN
INSERT INTO profiles (full_name, title, bio, email, phone, address, profile_image, linkedin_url, facebook_url)
VALUES (
  'MD. AMIR HOSSEN',
  'Aspiring Economist & Researcher',
  'I am an aspiring Economist and Researcher with a strong theoretical and hands-on knowledge in Economics. My research interest area is development economics, applied microeconomics, labor economics, environment and resources economics, agriculture and resources, and climate resilience. I try to realize how economic interventions, sometimes as simple as a microcredit or a skill-development initiative, effective policy, could rebuild not just sustainable economic growth, but enrich human resources and dignity, and the world with environment friendly. I achieve both analytical skills and creative thinking, which help me to understand data-telling story and heterogeneity for complex issues. I aim to create tangible impact to make a real change against the real-world problem by applying my expertise.',
  '20401026@std.cu.ac.bd',
  '+880 1625144740',
  'Chittagong University, Hathazari- 4331, Chittagong, Bangladesh',
  '/placeholder.svg?height=400&width=400',
  'https://linkedin.com/in/md-amir-hossen',
  'https://facebook.com'
);

-- Insert education data
INSERT INTO education (institution, degree, field_of_study, start_date, end_date, cgpa, location, achievements, status, display_order)
VALUES 
(
  'University of Chittagong',
  'Bachelor of Social Science (BSS) in Economics',
  'Economics',
  'Jan 2020',
  'Dec 2023 (Degree officially awarded in 2025 due to COVID-19 delays)',
  'CGPA: 3.39/4.00 (Summa Cum Laude)',
  'Chittagong, Bangladesh',
  'Core Courses: Advanced Macroeconomics, Advanced Microeconomics, Advanced Statistics, Econometrics, Resource and Environmental Economics, Research Methodology, Public Finance, Labor Economics, Financial Investment and Security Analysis, Health Economics, and Political Economy of Underdevelopment',
  'Completed',
  1
),
(
  'Fatikchari Govt. College',
  'Higher Secondary Certificate (HSC)',
  'Humanities',
  'Jul 2017',
  'Jul 2019',
  'GPA 4.33/5.00',
  'Fatikchari',
  NULL,
  'Completed',
  2
),
(
  'Juggachola High School',
  'Secondary School Certificate (SSC)',
  'Humanities',
  'Jan 2015',
  'May 2017',
  'GPA 4.55/5.00',
  'Juggachola',
  NULL,
  'Completed',
  3
);

-- Insert research experiences
INSERT INTO experiences (position, organization, project_name, start_date, end_date, location, employment_type, description, responsibilities, category, display_order)
VALUES
(
  'Research Assistant',
  'Department of Economics, University of Chittagong',
  'Exploring Sustainable Economic Growth Through the Tea Industry: A Case Study of Tea Garden Workers in Fatikchhari, Chattogram',
  'Nov 2024',
  'Feb 2025',
  'Fatikchhari, Chattogram',
  'Full Time',
  'Assistant to Ms. Tonmoyee Hasan Ayon, Assistant Professor of Economics at CU. Conducted extensive fieldwork examining labor welfare and sustainability in the tea industry.',
  ARRAY[
    'Conducted an extensive literature review on sustainable economic growth, labor welfare, and the tea industry to support empirical research',
    'Led primary data collection (276 interviews) from 4 tea gardens in Fatikchhari, Bangladesh, employing rigorous fieldwork methods',
    'Participated in 8 Focus Group Discussions (FGDs) and 4 Key Informant Interviews (KIIs) to gather qualitative insights from tea garden workers and stakeholders',
    'Organized, cleaned, and analyzed quantitative and qualitative data using Microsoft Excel, ensuring accuracy and research integrity'
  ],
  'Research',
  1
),
(
  'Research Assistant',
  'Department of Economics, University of Chittagong',
  'The Impact of Climate Change on Labor Health and Agricultural Production: A Case Study in Rangpur, Kurigram, Gaibandha, Dinajpur, and Sunamganj Districts',
  'May 2025',
  'Aug 2025',
  'Rangpur, Kurigram, Gaibandha, Dinajpur, and Sunamganj',
  'Full Time',
  'Assistant to Mohammad Tarequl Hasan Chowdhury, Professor of Economics at CU. Examining climate change impacts on agricultural labor and productivity.',
  ARRAY[
    'Assisted in drafting, revising, and finalizing research proposals for external grant applications',
    'Conducted comprehensive literature review on climate change, labor health, and agricultural productivity',
    'Designed and refined structured survey questionnaires for field-level data collection',
    'Led primary data collection (400 sample size) across five districts of Bangladesh',
    'Performed data cleaning, coding, and preparation to ensure accuracy for econometric analysis',
    'Contributed to data reporting and preliminary analysis'
  ],
  'Research',
  2
),
(
  'Research Assistant',
  'Department of Communication and New Media, National University of Singapore (NUS)',
  'Digital Media and Youth Culture',
  'Apr 2025',
  'May 2025',
  'Remote (Online sources)',
  'Full Time',
  'Assistant to Md Tareq Hossain, Ph.D. research Scholar. Analyzing digital media engagement and youth culture.',
  ARRAY[
    'Collected and curated primary data from online and digital platforms (YouTube, Facebook) relevant to youth culture',
    'Transcribed audio and digital materials with high degree of accuracy to support qualitative analysis',
    'Translated research materials from Bangla to English, ensuring conceptual accuracy and cultural nuance',
    'Maintained research integrity and confidentiality throughout data handling and documentation'
  ],
  'Research',
  3
),
(
  'Field Research Coordinator',
  'Innovations for Poverty Action (IPA) collaborated with BRAC',
  'Impact of Community Masking on COVID-19: A Cluster Randomized Trial in Bangladesh',
  'Nov 2020',
  'Jan 2021',
  'Hathazari, Chittagong',
  'Full Time',
  'Contributed to landmark study published in Science journal examining community masking interventions during COVID-19.',
  ARRAY[
    'Conducted field-based primary data collection (200 sample) across 3 unions of Hathazari Upazila',
    'Implemented structured surveys and in-person interviews following strict research protocols',
    'Ensured data accuracy, ethical compliance, and respondent confidentiality in line with IPA and BRAC standards',
    'Contributed to groundbreaking research published in Science journal: https://www.science.org/doi/10.1126/science.abi9069'
  ],
  'Research',
  4
),
(
  'Econometrics and Mathematical Economics Tutor',
  'University of Chittagong',
  'Private Tutoring',
  'Jan 2023',
  'Oct 2024',
  'Chittagong',
  'Part Time',
  'Provided specialized tutoring in Econometrics and Mathematical Economics to undergraduate students.',
  ARRAY[
    'Assisted 60 third-year students in improving theoretical understanding of Econometrics following Introductory Econometrics by Jeffrey Wooldridge',
    'Helped 20 students secure high GPA in Calculus and Linear Algebra following Fundamental Methods of Mathematical Economics by Alpha Chiang',
    'Evaluated students progress and implemented customized coaching identifying individual development needs',
    'Taught basics of relevant statistical software like EViews 10 and SPSS'
  ],
  'Research',
  5
),
(
  'Discussion Leader',
  'Freshers Reception Program, University of Chittagong',
  'Student Mentorship',
  'Jan 2021',
  'Dec 2023',
  'Chittagong',
  'Part Time',
  'Led group discussions for first-year students on core economics subjects.',
  ARRAY[
    'Led group discussion for first-year students on Principles of Microeconomics',
    'Facilitated learning sessions on Mathematics for Economists-1',
    'Conducted tutorial sessions on Statistics for Economists'
  ],
  'Research',
  6
),
(
  'Coordinating Debate & Public Speaking Sessions',
  'Young Economists Society, CU',
  'Skills Development Program',
  'Jan 2021',
  'Present',
  'Chittagong',
  'Voluntary',
  'Organized and coordinated debate competitions and public speaking training sessions.',
  ARRAY[
    'Planned and led training sessions to help overcome Glossophobia (Fear of public speaking)',
    'Organized Debate Competitions and evaluated performances',
    'Presided over weekly Economic Discussions and Discourses'
  ],
  'Research',
  7
),
(
  'Content Writer',
  'The Daily Observer',
  'Article Writing',
  'Jan 2024',
  'Present',
  'Remote',
  'Part Time',
  'Writing articles on national and global economic and social issues.',
  ARRAY[
    'Write weekly or monthly articles on national and global issues',
    'Cover topics related to economics, development, and social policy',
    'Published multiple opinion pieces on contemporary economic challenges'
  ],
  'Industry',
  8
);

-- Insert publications
INSERT INTO publications (title, authors, journal, publication_date, status, category, keywords, abstract, url, display_order)
VALUES
(
  'Inflation and Socioeconomic Challenges in the Chittagong Hill Tracks: Implication for Sustainable Development in the Post-LDC Bangladesh',
  'Md. Amir Hossen, Jahedul Islam, Nusrat Jahan Jothi, Dr. Mohammad Abul Hossain',
  'The International Journal of Social Economics',
  NULL,
  'Submitted for Publication',
  'Academic Publication',
  ARRAY['CHT', 'SDG', 'Inflation', 'Sustainable Development', 'Post-LDC Bangladesh'],
  'This study examines how inflation affects access to food, healthcare, education, employment, housing, and transportation in the Chittagong Hill Tracts (CHT), and its impact on the purchasing power and resilience. With Bangladesh now beyond LDC status, the government needs policies to address inflation and protect households. By offering recommendations for improving economic stability, reinforcing social safety nets, and tailoring region-specific strategies to address inflation, this study contributes to the ongoing discussion on sustainable development in post-LDC Bangladesh.',
  NULL,
  1
),
(
  'Bengal Delta Conference 2025 - Inflation and Socioeconomic Challenges in the Chittagong Hill Tracks',
  'Md. Amir Hossen, Jahedul Islam, Nusrat Jahan Jothi, Dr. Mohammad Abul Hossain',
  'Bengal Delta Conference 2025, Hotel InterContinental, Dhaka',
  'Aug 29-30, 2025',
  'Published',
  'Conference Publication',
  ARRAY['Conference', 'CHT', 'Inflation', 'Sustainable Development'],
  'Paper presentation at the Bengal Delta Conference 2025 examining inflation and socioeconomic challenges in the Chittagong Hill Tracks and implications for sustainable development in post-LDC Bangladesh.',
  NULL,
  2
),
(
  'The Future of Digital Banking',
  'Amir Hossen',
  'The Daily Observer',
  'Jul 7, 2023',
  'Published',
  'Non-Academic Publication',
  ARRAY['Digital Banking', 'Fintech', 'Bangladesh'],
  'Opinion piece exploring the transformation of banking services through digital platforms.',
  'https://www.observerbd.com/news/426874',
  3
),
(
  'Economic Reforms and Development',
  'Md Amir Hossen',
  'The Daily Observer',
  'Apr 30, 2023',
  'Published',
  'Non-Academic Publication',
  ARRAY['Economic Reforms', 'Development', 'Policy'],
  'Analysis of economic reform initiatives and their impact on development.',
  'https://www.observerbd.com/news/417342',
  4
),
(
  'Climate Change and Agriculture',
  'Amir Hossen',
  'The Daily Observer',
  'Jan 16, 2025',
  'Published',
  'Non-Academic Publication',
  ARRAY['Climate Change', 'Agriculture', 'Bangladesh'],
  'Examining the relationship between climate change and agricultural practices in Bangladesh.',
  'https://www.observerbd.com/news/507562',
  5
),
(
  'Labor Market Dynamics',
  'Md Amir Hossen',
  'The Daily Observer',
  'Aug 22, 2025',
  'Published',
  'Non-Academic Publication',
  ARRAY['Labor Market', 'Employment', 'Economics'],
  'Analysis of labor market trends and employment challenges.',
  'https://www.observerbd.com/news/486329',
  6
),
(
  'The Impact of Ethnicity on Earning Gaps in Bangladesh: Evidence from the Chittagong Hill Tracts',
  'Md. Amir Hossen et al.',
  'TBD',
  NULL,
  'Work in Progress',
  'Work in Progress',
  ARRAY['Ethnicity', 'Earning Gaps', 'CHT', 'Bangladesh'],
  'Research examining the relationship between ethnicity and income inequality in the Chittagong Hill Tracts region. Data collection and analysis are currently in progress.',
  NULL,
  7
);

-- Insert skills
INSERT INTO skills (name, category, proficiency, display_order)
VALUES
('Teamwork', 'Interpersonal', 'Expert', 1),
('Negotiation', 'Interpersonal', 'Expert', 2),
('Public Speaking', 'Interpersonal', 'Expert', 3),
('MS Office (Word, Excel, PowerPoint)', 'Technical', 'Expert', 4),
('STATA', 'Technical', 'Advanced', 5),
('EViews', 'Technical', 'Advanced', 6),
('SPSS', 'Technical', 'Advanced', 7),
('Python (For Data Science and Research)', 'Technical', 'Intermediate', 8),
('Kobo Toolbox', 'Technical', 'Advanced', 9),
('Zotero', 'Technical', 'Advanced', 10),
('🇧🇩 Bengali', 'Languages', 'Native', 11),
('🇬🇧 English', 'Languages', 'Fluent', 12);

-- Insert awards
INSERT INTO awards (title, issuer, date, description, display_order)
VALUES
(
  'Best Stall Award',
  'Research and Innovation Festival 2025',
  'Feb 2025',
  'Selected Best Stall in the Social Sciences and Law Faculty category at national-level research fest organized by JNICMPS and CURHS',
  1
),
(
  'Best Speaker & Champion',
  'Inter-Department Bangla Debate Competition',
  'Sep 2023',
  'Won Best Speaker award and Championship at Inter-Department Bangla Debate competition organized by Faculty of Social Science, University of Chittagong',
  2
),
(
  'Runner-up',
  'Inter-Department English Debate Competition',
  'Sep 2022',
  'Achieved Runner-up position at Inter-Department English Debate competition organized by Faculty of Social Science, University of Chittagong',
  3
);

-- Insert volunteering activities
INSERT INTO volunteering (role, organization, start_date, end_date, description, display_order)
VALUES
(
  'Volunteer Coordinator',
  '5th Convocation - 2025, University of Chittagong',
  'May 2025',
  'May 2025',
  'Coordinated volunteer team, assisted professors to distribute convocation materials and food to graduated students in the Department of Economics',
  1
),
(
  'Organizer',
  'Budget Olympiad: Chittagong Regional Round',
  'Sep 2021',
  'Sep 2021',
  'Organized regional round of national-level contest to stimulate national budgetary issues, organized by National Democratic Movement and powered by Action Aid, Bangladesh',
  2
),
(
  'Scholarship Coordinator',
  'Need-Based Scholarship Distribution Project',
  'Sep 2020',
  'Sep 2020',
  'Assisted 60 undergraduate students who were adversely impacted by Covid-19 with scholarship project undertaken by Department of Economics, University of Chittagong',
  3
),
(
  'Tree Plantation Volunteer',
  '1/24 Social Movement (in collaboration with YES)',
  'Jan 2020',
  'Dec 2021',
  'Volunteered in planting 1000 trees across CU as part of initiative to plant 100 thousand trees around the country for Health, Education and Environment',
  4
),
(
  'Chief Organizer',
  'Bangladesh Economics Olympiad 2025',
  'May 2025',
  'May 2025',
  'Organized national-level competition aimed to encourage the Economic minded youth creating new trajectory to rebuild the country',
  5
),
(
  'Organizing Committee Member',
  '1st National Economics Fest - 2025',
  'Feb 2025',
  'Feb 2025',
  'Organized national-level Economics fest to craft innovative policy competition and discussions aligned with Professor Muhammad Yunus transformation 3ZERO vision',
  6
),
(
  'Session Organizer',
  'Career Development Sessions',
  'Jan 2024',
  'Present',
  'Responsible to arrange monthly session on career, soft skills, programming language, and IT related sessions inviting experts in these fields',
  7
);

-- Insert scholarly activities
INSERT INTO scholarly_activities (title, type, organization, date, description, display_order)
VALUES
(
  'Joint Secretary',
  'Leadership Position',
  'Young Economists Society (16th Executive Committee)',
  'Jan 2025 - Jan 2026',
  'Serving as Joint Secretary of the 16th Executive Committee of Young Economists Society, the only club within the Department of Economics, University of Chittagong',
  1
),
(
  'Publication Secretary',
  'Leadership Position',
  'Young Economists Society (15th Executive Committee)',
  'Jan 2024 - Jan 2025',
  'Served as Publication Secretary of the 15th Executive Committee of Young Economists Society',
  2
),
(
  'Assistant Publication Secretary',
  'Leadership Position',
  'Young Economists Society (14th Executive Committee)',
  'Jan 2023 - Jan 2024',
  'Served as Assistant Publication Secretary of the 14th Executive Committee of Young Economists Society',
  3
),
(
  'Joint Secretary',
  'Leadership Position',
  'Bhujpur Students Forum (2022-2023 Executive Committee)',
  'Feb 2022 - Feb 2023',
  'Served as Joint Secretary of Bhujpur Students Forum at University of Chittagong',
  4
),
(
  'Finance Secretary',
  'Leadership Position',
  'Bhujpur Students Forum (2021-2022 Executive Committee)',
  'Feb 2021 - Feb 2022',
  'Served as Finance Secretary of Bhujpur Students Forum at University of Chittagong',
  5
),
(
  'Campus Ambassador',
  'Student Representation',
  'Scholarship School BD',
  'Jan 2021 - Jan 2022',
  'Represented Scholarship School BD as Campus Ambassador at University of Chittagong',
  6
);

-- Insert certifications
INSERT INTO certifications (name, issuer, issue_date, credential_url, display_order)
VALUES
('Data Science Math Skills', 'Duke University (Coursera)', '2023', NULL, 1),
('Python Basics for Data Science', 'University of Michigan (Coursera)', '2023', NULL, 2),
('Machine Learning with Python', 'IBM (Coursera)', '2024', NULL, 3),
('The Classical Linear Regression Model', 'Queen Mary University of London (Coursera)', '2023', NULL, 4),
('Leading Teams: Developing as a Leader', 'University of Illinois (Coursera)', '2023', NULL, 5),
('Foundation: Data, Data, Everywhere', 'Google (Coursera)', '2023', NULL, 6),
('EViews for Academic Research', 'Training Certificate', 'Jul 2023', NULL, 7),
('R Programming for Academic Research', 'Training Certificate', 'Jul 2023', NULL, 8),
('Data Analysis with Excel', 'Training Certificate', '2023', NULL, 9);
