-- Insert profile data for Sheikh Mohammad Sayem
INSERT INTO profiles (full_name, title, bio, email, phone, address, profile_image, linkedin_url, facebook_url)
VALUES (
  'Sheikh Mohammad Sayem',
  'Prospective Graduate Student | Aspiring Economist & Researcher',
  'I am an aspiring Economist and Researcher with a rigorous academic foundation in Economics and a growing focus on labor economics, environmental and resource economics, development economics, and political economy. I am interested in how economic theory connects with global development, labor markets, and public policy. This approach helps me understand the complex issues economies face today. I bring both analytical skills and creative thinking, which help me work with data and find practical solutions. Driven by a commitment to meaningful impact, I aim to apply my expertise to real-world issues and contribute to policies that are effective, inclusive, and equitable.',
  'smsayem049@gmail.com',
  '+8801580592082',
  '105/2, South Donia, Kadamtali, Dhaka -1236',
  '/placeholder.svg?height=400&width=400',
  'https://linkedin.com/in/sheikh-mohammad-sayem',
  'https://facebook.com/sheikh.mohammad.sayem'
) ON CONFLICT DO NOTHING;

-- Insert education data
INSERT INTO education (institution, degree, field_of_study, start_date, end_date, cgpa, location, achievements, status, display_order)
VALUES 
(
  'University of Chittagong',
  'Bachelor of Social Science in Economics',
  'Economics',
  'Jan 2020',
  'Dec 2023 (Degree officially awarded in 2025 due to COVID-19 delays)',
  'CGPA: 3.76/4.00 (Summa Cum Laude)',
  'Chattogram',
  'Advanced Macroeconomics, Advanced Microeconomics, Advanced Statistics, Econometrics, Resource and Environmental Economics, Research Methodology, Public Finance, Labor Economics, Financial Investment and Security Analysis, Health Economics, and Political Economy of Underdevelopment',
  'Completed',
  1
),
(
  'Dhaka College',
  'Higher Secondary Certificate (HSC)',
  'Science',
  'Jul 2017',
  'Jul 2019',
  'GPA 5.00/5.00',
  'Dhaka',
  NULL,
  'Completed',
  2
),
(
  'AK School And College',
  'Secondary School Certificate (SSC)',
  'Science',
  'Jan 2015',
  'May 2017',
  'GPA 5.00/5.00',
  'Dhaka',
  NULL,
  'Completed',
  3
);

-- Insert research experiences
INSERT INTO experiences (position, organization, project_name, start_date, end_date, location, employment_type, description, responsibilities, category, display_order)
VALUES
(
  'Research Associate',
  'Center for Green Financing and Sustainability Studies Lab',
  'Higher Education Acceleration and Transformation (HEAT) | Supported by World Bank',
  'Oct 2025',
  'Present',
  'Remote',
  'Full Time',
  'Conducting cutting-edge research on green finance''s role in building a circular economy.',
  ARRAY[
    'Analyzed panel datasets on green finance''s role in building a circular economy',
    'Estimated difference-in-differences models of green financing''s impact on academic outcomes using Stata; ran robustness checks (event study, placebo tests)',
    'Designed and coded stakeholder surveys (Qualtrics → R) to assess adoption of green practices in higher education institutions',
    'Prepared reproducible replication files (R/Stata scripts, README) for transparency and policy use'
  ],
  'Research',
  1
),
(
  'Research Intern',
  'Bangladesh Foreign Trade Institute (BFTI)',
  'Identifying the Area of Products for Imposing Anti-Dumping and Countervailing Duties',
  'Mar 2025',
  'May 2025',
  'Karwan Bazar, Dhaka',
  'Full Time',
  'Examined customs and tariff data (2020-2024) using panel regressions and event-study methods to assess the impact of anti-dumping and countervailing measures.',
  ARRAY[
    'Analyzed customs and tariff data (2020-2024) using panel regressions and event-study methods to assess the impact of anti-dumping and countervailing measures',
    'Scraped and compiled import price series; computed injury margins and estimated pass-through effects',
    'Designed data collection tools and conducted field interviews with industry stakeholders',
    'Delivered data-driven policy briefs identifying sectors vulnerable to predatory pricing'
  ],
  'Research',
  2
),
(
  'Research Assistant',
  'Department of Economics, University of Chittagong',
  'Sustainable Economic Growth Through the Tea Industry',
  'Nov 2024',
  'Feb 2025',
  'Fatikchhari, Chattogram',
  'Full Time',
  'Conducted extensive fieldwork examining labor welfare and sustainability in the tea industry.',
  ARRAY[
    'Conducted an extensive literature review on sustainable economic growth, labor welfare, and the tea industry to support empirical research',
    'Led primary data collection (276 interviews) from 4 tea gardens in Fatikchhari, Bangladesh, employing rigorous fieldwork methods',
    'Participated in 8 Focus Group Discussions (FGDs) and 4 Key Informant Interviews (KIIs) to gather qualitative insights',
    'Organized, cleaned, and analyzed quantitative and qualitative data using Microsoft Excel, ensuring accuracy and research integrity'
  ],
  'Research',
  3
),
(
  'Field Research Coordinator',
  'Innovations for Poverty Action (IPA) collaborated with BRAC',
  'Impact of Community Masking on COVID-19: A Cluster Randomized Trial',
  'Nov 2020',
  'Jan 2021',
  'Hathazari, Chittagong',
  'Full Time',
  'Contributed to the landmark study published in Science examining community masking interventions.',
  ARRAY[
    'Conducted field-based primary data collection (200 sample) and reporting across 3 unions following strict research protocols',
    'Implemented structured surveys and in-person interviews to support a cluster randomized controlled trial (RCT)',
    'Ensured data accuracy, ethical compliance, and respondent confidentiality in line with IPA and BRAC research standards',
    'Contributed to groundbreaking research published in Science journal'
  ],
  'Research',
  4
);

-- Insert publications
INSERT INTO publications (title, authors, journal, publication_date, status, category, keywords, abstract, url, display_order)
VALUES
(
  'Exchange Rate Volatility in Bangladesh: An Exploration of the Leverage Effect of Positive and Negative Economic News',
  'Mostafa Monir, Asrarul Hasanat, Jahedul Islam and S.M. Sayem',
  'South Asian Journal of Social Sciences and Humanities',
  'Jun 2025',
  'Published',
  'Academic Publication',
  ARRAY['Exchange rate', 'Volatility', 'GARCH', 'TGARCH', 'EGARCH', 'Leverage effect', 'Bangladesh'],
  'This paper investigates how positive and negative economic news affect exchange rate volatility in Bangladesh, focusing on the BDT/USD rate from 1982 to 2022. Using an advanced EGARCH (1,1) model, the study reveals a reversed leverage effect, where positive (currency appreciation) leads to higher volatility than negative news. This finding contrasts with traditional financial theory, which usually associates greater volatility with bad news. The study highlights unique dynamics in Bangladesh''s exchange market and offers valuable insights for policymakers, investors, and financial analysts. It contributes to the literature by uncovering asymmetric volatility behavior in an emerging economy context.',
  'https://journals.sagepub.com/doi/10.1177/journal-example',
  1
),
(
  'Leveraging Blockchain Technology for Supply Chain Transparency and Resilience',
  'S.M. Sayem, Mohammad Rahman, Fatima Ahmed',
  'International Journal of Supply Chain Management',
  NULL,
  'Under Review',
  'Academic Publication',
  ARRAY['Blockchain', 'Supply Chain', 'Transparency', 'Resilience', 'Technology'],
  'This research explores how blockchain technology can revolutionize supply chain management by improving transparency, reducing fraud, and building resilient systems capable of withstanding disruptions.',
  NULL,
  2
),
(
  'The Future of Digital Banking in Emerging Markets',
  'Sheikh Mohammad Sayem',
  'The Daily Observer',
  'Jul 7, 2023',
  'Published',
  'Non-Academic Publication',
  ARRAY['Digital Banking', 'Emerging Markets', 'Fintech'],
  'Explores the transformation of banking services through digital platforms in emerging economies.',
  'https://www.observerbd.com/news/426874',
  3
);

-- Insert skills
INSERT INTO skills (name, category, proficiency, display_order)
VALUES
('Teamwork', 'Interpersonal', 'Expert', 1),
('Negotiation', 'Interpersonal', 'Advanced', 2),
('Public Speaking', 'Interpersonal', 'Expert', 3),
('Work Ethics', 'Interpersonal', 'Expert', 4),
('STATA', 'Technical', 'Advanced', 5),
('EViews', 'Technical', 'Advanced', 6),
('SPSS', 'Technical', 'Intermediate', 7),
('Python', 'Technical', 'Intermediate', 8),
('R Programming', 'Technical', 'Intermediate', 9),
('Kobo Toolbox', 'Technical', 'Advanced', 10),
('Microsoft Excel', 'Technical', 'Expert', 11),
('Bengali', 'Languages', 'Native', 12),
('English', 'Languages', 'Fluent', 13);

-- Insert awards
INSERT INTO awards (title, issuer, date, description, display_order)
VALUES
(
  'Runners Up',
  'Essay Writing Competition [2025]',
  '2025',
  'Achieved Runner-Up position in prestigious national essay writing competition',
  1
),
(
  'Bronze Level Winner',
  'The Duke of Edinburgh''s International Award [2024]',
  '15 July 2024',
  'Earned Bronze Standard recognition for excellence in skill development, physical recreation, voluntary service, and adventurous journey',
  2
),
(
  '2nd Runners Up',
  'Bangladesh and World Olympiad [2023]',
  '2023',
  'Secured 2nd Runners Up position in Current Affairs & International Global Mind of Pakistan hosted by DSAC',
  3
);

-- Insert volunteering activities
INSERT INTO volunteering (role, organization, start_date, end_date, description, display_order)
VALUES
(
  'Convocation Volunteer Coordinator',
  '5th Convocation, University of Chittagong',
  'May 2025',
  'May 2025',
  'Coordinated volunteer team, assisted professors to distribute convocation materials and food to graduated students in the Department of Economics',
  1
),
(
  'Budget Olympiad Organizer',
  'National Democratic Movement powered by Action Aid',
  'Sep 2021',
  'Sep 2021',
  'Organized Chittagong Regional Round of national-level contest to stimulate national budgetary issues',
  2
),
(
  'Scholarship Distribution Coordinator',
  'Department of Economics, University of Chittagong',
  'Sep 2020',
  'Sep 2020',
  'Assisted 60 undergraduate students who were adversely impacted by Covid-19 with scholarship distribution',
  3
);

-- Insert scholarly activities
INSERT INTO scholarly_activities (title, type, organization, date, description, display_order)
VALUES
(
  'Bengal Delta Conference 2025',
  'Conference Presentation',
  'Hotel InterContinental, Dhaka',
  'Aug 29-30, 2025',
  'Presented research paper on Inflation and Socioeconomic Challenges in the Chittagong Hill Tracks',
  1
),
(
  'Research and Innovation Festival 2025',
  'Best Stall Award',
  'JNICMPS and CURHS',
  'Feb 2025',
  'Selected Best Stall in Social Sciences and Law Faculty category for research presentation',
  2
),
(
  'Bangladesh Economics Olympiad 2025',
  'National Organizer',
  'Young Economists Society',
  'May 2025',
  'Organized national-level competition to encourage economic-minded youth',
  3
);

-- Insert certifications
INSERT INTO certifications (name, issuer, issue_date, credential_url, display_order)
VALUES
('Data Science Math Skills', 'Duke University', '2024', 'https://coursera.org/verify/example1', 1),
('Python Basics for Data Science', 'University of Michigan', '2024', 'https://coursera.org/verify/example2', 2),
('Machine Learning with Python', 'IBM', '2024', 'https://coursera.org/verify/example3', 3),
('The Classical Linear Regression Model', 'Queen Mary University of London', '2023', 'https://coursera.org/verify/example4', 4),
('Leading Teams: Developing as a Leader', 'University of Illinois', '2023', 'https://coursera.org/verify/example5', 5),
('Foundation: Data, Data, Everywhere', 'Google', '2023', 'https://coursera.org/verify/example6', 6);
