export type Language = 'en' | 'zh'

const storageKey = 'tz_lang'

const translations: Record<Language, Record<string, string>> = {
  en: {
    'name.display': 'TianZhuang',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.discovery': 'Discovery:',
    'hero.typedItems': 'Computer science and technology, Web Designing, Golf Player ',
    'section.about': 'About',
    'section.facts': 'Facts',
    'section.skills': 'Skills',
    'section.resume': 'Resume',
    'section.portfolio': 'Portfolio',
    'section.contact': 'Contact',
    'portfolio.intro':
      'I always maintain a passion for technology and a pursuit of innovation, emphasizing the integration of theory and practice. I continuously improve my professional competence and overall capabilities, striving to become a versatile talent with strong technical skills, hands-on experience, and innovative thinking. The photo wall below is evidence of my experiences in projects, competitions, and work.',
    'portfolio.filterAll': 'All',
    'portfolio.filterProject': 'Projects',
    'portfolio.filterCompetition': 'Competitions',
    'portfolio.filterInternship': 'Internships',
    'services.title': 'Stage Capability',
    'services.intro':
      'Up to now, my abilities and skills have covered many aspects, not only IT but also sports photography, which proves that I am a healthy and balanced student.',
    'services.item1.title': 'Undergraduate graduate',
    'services.item1.desc':
      'Computer science and technology learners, recent graduates. Have internship experience and computer game experience, master some knowledge base about computer.',
    'services.item2.title': 'Computer Abilities',
    'services.item2.desc':
      'Can make web pages, including some jump functions and animations, as well as some graphical interface design. Using platform like Qt Anaconda AWS and so on.',
    'services.item3.title': 'Photography',
    'services.item3.desc':
      'To shoot movies and Photoshop, I will use camera equipment to shoot documentaries, and then use Apple-iMovie or Clip and other editing software for simple editing. For images, Snapseed will be used to edit and beautify the images.',
    'services.item4.title': 'VALORANT',
    'services.item4.desc':
      'Veteran VALORANT player with 392+ hours tracked in Zhangwa, and also a long-time Tencent Games player.',
    'testimonials.title': 'Testimonials',
    'testimonials.intro':
      'Thanks for the letters of recommendation from my teachers, classmates and friends. Thank you for your personal evaluation and recognition of my professional knowledge. Because of your recognition, I am encouraged, but also in the pursuit of their own continuous efforts!',
    'testimonials.item1.quote':
      "Terzo and I met in kindergarten, and we've been friends for 20 years. He has been an excellent student since childhood. He is versatile, loves sports and art, likes to study and explore new knowledge, and has strong learning ability. I hope he will get better and better in the future",
    'testimonials.item1.role': 'Central University of Finance and Economics',
    'testimonials.item2.quote':
      "I'm Terzo's girlfriend and the captain of the school model team. He likes photography and learning computer technology. And a model team like me. He is kind and responsible. He is the monitor of their class and takes his work seriously",
    'testimonials.item2.role': 'Captain of the school model team',
    'testimonials.item3.quote':
      "I'm from Macau and I met Terzo 10 years ago playing golf. Terzo is a tenacious person who is meticulous about everything and everyone. He has a high emotional intelligence and is a joy to spend time with. He is one of my best friends",
    'testimonials.item3.role1': 'Golf amateur',
    'testimonials.item3.role2': 'An undergraduate in finance',
    'testimonials.item4.quote':
      'In 2023, he enrolled as my student in the "Machine Learning" course. In view of his excellent academic ability and enthusiasm for computer science shown in my class, I would like to recommend him to you.',
    'testimonials.item4.role1': 'Teacher of Shaoguan University',
    'testimonials.item4.role2': 'Educator & Computer Engineer',
    'testimonials.item5.quote':
      'Terzo is the monitor of my class. He works hard and shares a lot of work for me. He loves to help classmates at ordinary times, works hard in school and gets excellent results',
    'testimonials.item5.role1': 'Professor of AI',
    'testimonials.item5.role2': 'Ph.D., South China University of Technology',
    'testimonials.item6.quote':
      'Terzo is my classmate in junior high school. We study and live together. He is a serious and kind person, who loves to study, bears hardships and stands hard work, and is sincere to his friends. We even traveled to Japan together, and we had a very happy time together',
    'testimonials.item6.role': 'Master Degree, University of Toronto, Canada',
    'about.intro':
      "I'm Terzo TianZhuang (田庄). I'm currently studying at Lingnan University, Hong Kong, pursuing an MSc in Artificial Intelligence and Business Analytics, and I'm committed to deeply integrating AI technologies with real-world business scenarios to deliver solutions that are both technically valuable and practically deployable. From first encountering computer science as an undergraduate to now focusing on AI and business analytics, every stage of learning, every project, and every hands-on practice has been a milestone on my path—connecting my passion for technology with my drive for innovation and helping me grow from a curious beginner into a versatile practitioner with full-stack development skills, hands-on project experience, and cross-scenario application thinking. Today, I'd like to share my growth story and the moments that have shaped my journey in technical exploration, project practice, and self-improvement.",
    'about.subtitle': 'Lingnan University',
    'about.birthday': 'Birthday:',
    'about.website': 'GPA:',
    'about.phone': 'Phone:',
    'about.city': 'City:',
    'about.degree': 'Degree:',
    'about.degreeValue': 'Master',
    'about.email': 'E-mail:',
    'about.hobby': 'Hobby:',
    'about.journey':
      "My technical journey began with systematic study during my undergraduate years. Up to now, I have been pursuing a master's degree in artificial intelligence. Years of study have laid a solid foundation in computer science for me. I have also independently learned many technologies and maintained my learning ability, which enabled me to create this website...",
    'skills.intro':
      'I have full-stack development capabilities, familiar with front-end and back-end development, various databases, and cloud service deployment; I have mastered core AI technologies and algorithms and can independently complete data analysis, data visualization, and model-related work; I am proficient with a wide range of development tools and have experience building agent-related systems. With a comprehensive tech stack, I can deliver the full workflow from project development to production deployment.',
    'skills.bar1': 'Full-Stack Development',
    'skills.bar2': 'Backend Architecture & API Development',
    'skills.bar3': 'Frontend UI & Interaction Implementation',
    'skills.bar4': 'Database Design & Optimization',
    'skills.bar5': 'Cloud Deployment & Operations',
    'skills.bar6': 'AI & LLM Applications',
    'skills.bar7': 'Data Analysis & Processing',
    'skills.bar8': 'Data Visualization & Reporting',
    'skills.bar9': 'Agent-based Development',
    'skills.bar10': 'Engineering & Team Collaboration',
    'facts.intro':
      "Next, I'd like to introduce myself in detail from aspects such as education background, work experience, competition experience, and more. I hope this can help you understand me better and more comprehensively. I'm someone who loves to explore, seeks truth from facts, and values practicality. I also hope you'll trust my abilities and give me a job opportunity!",
    'facts.skills': 'Skills',
    'facts.ielts': 'IELTS score...',
    'resume.experience': 'Experience',
    'resume.education': 'Educational Experience',
    'resume.intro':
      'My learning and campus experiences sparked a strong interest in computer technology, especially in the field of artificial intelligence, which truly fascinates me. To transform classroom theory into practical ability, I actively participated in various project practices and academic competitions, exploring the boundaries of technology in practice and accumulating hands-on experience.',
    'resume.summary.desc':
      'Throughout my four undergraduate years, I served as class monitor, assisting instructors with daily class affairs, coordinating among classmates, and organizing various class activities. This experience cultivated my responsibility and organizational skills, strengthened my communication and team coordination ability, and earned me the title of “Outstanding Class Monitor”. In addition, thanks to excellent academic performance and strong overall achievements, I received multiple honors, including the China National Scholarship, First-class Academic Scholarship of the School of Information Engineering, Merit Student of the School of Information Engineering, and Outstanding Individual in Research Innovation. These honors are recognition of my past efforts and motivation that drives me forward.',
    'resume.summary.item1': 'Project Manager',
    'resume.summary.item2': 'Education',
    'resume.summary.item3': 'Competition Experience',
    'resume.project1.title':
      'Multi-Agents LLM Financial Trading Decision Making Framework (Enhance TradingAgents)',
    'resume.project1.desc':
      'Built on large language models (LLMs) and multi-agent architecture, this end-to-end automated stock investment research and decision-making system realizes full-process automation from target analysis, multi-perspective debate, trading decision-making to risk control, ultimately generating structured trading signals (BUY/SELL/HOLD).',
    'resume.project1.b1':
      'Split multi-agent roles (Market Analyst, Fundamental Researcher, Trader, Risk Controller, Debate Referee) to enhance decision robustness and interpretability through cross-role collaboration.',
    'resume.project1.b2':
      'Implemented the investment research decision workflow orchestration based on LangGraph: Data Acquisition → Multi-dimensional Analysis → Bull-Bear Debate → Trading Proposal → Risk Validation → Signal Output.',
    'resume.project1.b3':
      'Established a unified LLM adaptation layer supporting switching between OpenAI / Google / Anthropic / Ollama.',
    'resume.project1.b4':
      'Integrated data sources (yfinance, Alpha Vantage) to retrieve and parse quotes, news, fundamentals, and sentiment.',
    'resume.project1.b5':
      'Implemented BM25-based historical scenario retrieval and a reflection mechanism to form an investment research memory loop.',
    'resume.project2.title': 'Kronos Multi‑Agent Forecasting & Trading (Kronos-based)',
    'resume.project2.desc':
      'A generative prediction system for financial time series (OHLCVA) built around tokenizer quantization and discretization, Transformer autoregressive generation, multi-pipeline fine-tuning, and web visualization, covering training, inference, visualization, and backtesting.',
    'resume.project2.b1':
      'Combined BSQuantizer and hierarchical Transformer to discretize continuous OHLCVA sequences into tokens and perform autoregressive generation; introduced RoPE self-attention, cross-attention conditioning, and time embedding.',
    'resume.project2.b2':
      'Supported dual pipelines (Qlib/CSV), multiple training modes, and lightweight fine-tuning (LoRA for attention/FFN layers) to adapt to different data sources and compute environments.',
    'resume.project2.b3':
      'Covered CPU/CUDA/MPS, provided Web UI visualization and regression testing, and connected end-to-end from model training to strategy backtesting.',
    'resume.project3.title': 'SRR-Case-Processing-System',
    'resume.project3.desc':
      'An AI-powered document processing system that automatically extracts and classifies case data from Slope Risk Reports (SRR) in multiple file formats, transforming unstructured documents into standardized case records.',
    'resume.project3.githubLabel': 'GitHub link:',
    'resume.project3.b1': 'Processed TXT files, TMO PDFs, and RCC PDFs; supported OCR for scanned documents.',
    'resume.project3.b2': 'Achieved 92% accuracy for case type classification and 98% for subject matter.',
    'resume.project3.b3': 'Matched cases against 5,298 historical cases for pattern search.',
    'resume.project3.b4':
      'Tracked 32,405 trees with location data; learned 403 location-slope mappings.',
    'resume.project3.b5':
      'Participated in the 2026 Lingnan Cup with business report analysis.',
    'resume.project4.title':
      'Lingnan University Policy System Using Agentic Retrieval-Augmented Generation (RAG) Framework',
    'resume.project4.desc':
      'Designed and developed a policy question answering system leveraging an Agentic RAG framework on Google Cloud Platform (GCP), enabling concise, accurate, and evidence-based responses grounded in Lingnan University policies.',
    'resume.project4.githubLabel': 'GitHub link:',
    'resume.project4.webLabel': 'Web URL:',
    'resume.project4.b1':
      'Implemented document processing, semantic search & retrieval, RAG integration, evaluation and performance optimization, and deployment on GCP.',
    'resume.project4.b2':
      'Built an AI-driven, cloud-native application with all components (storage, retrieval, inference, deployment) managed in the GCP ecosystem.',
    'resume.project4.b3':
      'Gained practical experience with NLP pipelines, vector search, document intelligence, and techniques to evaluate and mitigate hallucinations.',
    'resume.project5.title': 'Driver Fatigue Monitoring System Based on Computer Vision',
    'resume.project5.desc':
      'A three-layer modular architecture of Data–Model–Decision, forming a closed loop from data collection and feature extraction to fatigue prediction, decision-making, and feedback optimization.',
    'resume.project5.b1':
      'Extracted multi-dimensional features with MediaPipe and predicted fatigue level via random forest or CNN models.',
    'resume.project5.b2':
      'Generated personalized interventions using Q-Learning and fed back results for continuous optimization.',
    'resume.project6.title': 'A Front-End and Back-End Separated System Based on Seafood Price Prediction',
    'resume.project6.desc':
      'Undergraduate thesis project developed with Vue and Django. Crawled and cleaned aquatic product data with Jupyter notebook and stored it in Navicat database.',
    'resume.project6.b1':
      'Provided time-sorted product lists for registered users; administrators managed users and products.',
    'resume.project6.b2':
      'Supported interactive visualization of price changes, comparisons, origin, and provincial quantities; predicted price trends with machine learning.',
    'resume.project7.title': 'A Personal Resume Website',
    'resume.project7.b1': 'Determined the placement and styling of the website.',
    'resume.project7.b2':
      'Used VS Code for editing HTML, CSS, JavaScript and PHP to generate dynamic displays and adaptive layouts.',
    'resume.project7.b3':
      'Deployed to Hostinger with a domain name and email account for online access and contact.',
    'resume.project7.linkLabel': 'Link:',
    'resume.project8.title': 'A Decision Tree Model for Prediction',
    'resume.project8.b1':
      'Preprocessed the Titanic survival dataset with Jupyter notebook, deleting irrelevant data and converting non-numeric data to numeric.',
    'resume.project8.b2':
      'Created new features using feature engineering techniques and presented data with visual charts or tables.',
    'resume.project8.b3':
      'Trained the model with suitable algorithms and tuned hyperparameters to improve performance.',
    'resume.project9.title': 'Wildfire Smoke Detection Software Based on YOLOv8',
    'resume.project9.desc':
      'Part of “An Intelligent UVA Used for Early Forest Fire Detection” (Member, responsible for fire-smoke generation). The system enables all-round detection by connecting the Himawari-8 data server through the FTP connection pool, a fire lookout tower, and a drone with camera.',
    'resume.project9.b1':
      'Engaged in team discussions to determine algorithm goals, accuracy requirements, and application scenarios.',
    'resume.project9.b2':
      'Compared algorithms, selected YOLOv8, and examined its pros and cons for wildfire smoke detection.',
    'resume.project9.b3':
      'Collected and preprocessed datasets, trained and tuned the model, and evaluated performance in real scenarios.',
    'resume.project9.b4':
      'Submitted the application for software copyright to the China Copyright Protection Center.',
    'resume.edu.msc.school': 'Lingnan University',
    'resume.edu.msc.degree': 'Master of Science in Artificial Intelligence and Business Analysis',
    'resume.edu.msc.gpa': 'GPA: 3.6/4.0 (Semester1)',
    'resume.edu.msc.c1': 'Practical Application of Deep Learning',
    'resume.edu.msc.c2': 'Business Data Management',
    'resume.edu.msc.c3': 'Data Visualization',
    'resume.edu.msc.c4': 'Principle of Data Analytics and Programming',
    'resume.edu.msc.c5': 'Programming with Generative AI',
    'resume.edu.msc.c6': 'Big Data Analytics',
    'resume.edu.msc.c7': 'Computer Vision',
    'resume.edu.msc.c8': 'Machine Learning for Business',
    'resume.edu.msc.c9': 'Blockchain',
    'resume.edu.beng.school': 'Federation University Australia - Shaoguan University (3+1)',
    'resume.edu.beng.degree': 'Bachelor of Engineering in Computer Science and Technology',
    'resume.edu.beng.intro':
      'The undergraduate program is a “3+1” programme run by SGU in collaboration with Federation University Australia. Without going to Australia in the fourth year, I studied at SGU and received major courses provided by teachers from the Federation University Australia.',
    'resume.edu.beng.gpa': 'GPA: 3.49/5.0 (84.94/100)',
    'resume.edu.beng.cert': 'Certificate: Certificate of National Information Security Test Program (Level 1)',
    'resume.edu.beng.awards':
      'Honours & Awards: China National Scholarship (11/2024); First-class Academic Scholarship of the School of Information Engineering (10/2024); Merit Student of the School of Information Engineering (10/2024); Outstanding Individual in Research Innovation (10/2024); Academic Excellent Award (10/2024).',
    'resume.competitions': 'Competitions',
    'resume.work': 'Work Experience',
    'resume.comp1.title': 'University Computer Games Championship - Gomoku Competition (Leader)',
    'resume.comp1.supervisor': 'Supervisor: Dr. Jiang Changjin',
    'resume.comp1.intro':
      'The University Computer Games Championship includes traditional games such as chess, Go, and Gomoku. Gomoku competitors are required to develop an AI program for playing Gomoku to match against others.',
    'resume.comp1.b1':
      'Led discussions to determine required program functions and search algorithms, and planned the evaluation function and user interface design.',
    'resume.comp1.b2':
      'Mastered Gomoku rules and designed opening functions according to the Yamaguchi opening rule.',
    'resume.comp1.b3':
      'Applied Alpha-Beta pruning and heuristic search to improve the efficiency of finding optimal moves.',
    'resume.comp1.b4':
      'Tested and improved the C++ program in Qt Creator, refined the UI, and optimized openings for a professional gameplay experience.',
    'resume.comp1.b5':
      'Achievement: won the national first prize with the AI Gomoku software designed with a 15×15 Go board.',
    'resume.comp2.title': 'University Computer Games Championship - No Go Competition (Member)',
    'resume.comp2.supervisor': 'Supervisor: Dr. Jiang Changjin',
    'resume.comp2.intro':
      'The No Go competition is completely different from normal Gomoku: players place stones in turns, and the aim is not to capture the opponent’s stones; otherwise the player placing stones loses points. Suicide and pass are prohibited, and there is no draw.',
    'resume.comp2.b1': 'Tested and modified possible program failures.',
    'resume.comp2.b2':
      'Prepared the technical report, especially the UB-tree, UCB algorithm, and move generator used in the software.',
    'resume.comp2.b3':
      'Achievement: won the national first prize with the AI gaming software for No Go designed with a 9×9 Go board.',
    'resume.work1.title': 'Huawei Datacom Pre-sales Engineer',
    'resume.work1.company': 'Synnex Technology International Corporation (Shenzhen)',
    'resume.work1.b1':
      'Wi-Fi deployment advising: recommended AP types and deployment solutions; optimized frequency allocation using dual-band APs; configured SSID segregation; reserved 20% AP interfaces for future expansion; recommended PoE switches to simplify wiring.',
    'resume.work1.b2':
      'Technical writing & consultation: organized technical documents (configuration guides, user manuals); analyzed Huawei datacom products (routers, switches, APs); provided technical consultation and assisted customers in selecting products and solutions.',
    'resume.work2.title': 'Customer Service Manager Assistant',
    'resume.work2.company': 'Bank of Communications, Zhuhai',
    'resume.work2.b1':
      'Organized customers’ information and materials and inputted them into the bank’s computer system.',
    'resume.work3.title': 'Intern',
    'resume.work3.company': 'Zhuhai New Horizon Communication Development Co., Ltd.',
    'resume.work3.b1':
      'Reviewed and processed orders, tracked and updated order status, and recorded transactions.',
    'resume.work3.b2': 'Maintained good relationships with customers and provided after-sales services.',
    'contact.yourName': 'Your Name',
    'contact.yourEmail': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.loading': 'Loading',
    'contact.sent': 'Your message has been sent. Thank you!',
    'contact.send': 'Send Message',
    'breadcrumb.home': 'Home',
    'portfolioDetails.title': 'Portfoio Details',
    'portfolioDetails.projectInfo': 'Project information',
    'portfolioDetails.category': 'Category',
    'portfolioDetails.purpose': 'Purpose',
    'portfolioDetails.projectDate': 'Project date',
    'portfolioDetails.achievements': 'Achievements, Awards & Honors'
  },
  zh: {
    'name.display': '田庄',
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.resume': '简历',
    'nav.portfolio': '作品集',
    'nav.services': '服务',
    'nav.contact': '联系',
    'hero.discovery': '探索：',
    'hero.typedItems': '计算机科学与技术, 网页设计, 高尔夫',
    'section.about': '关于',
    'section.facts': '概况',
    'section.skills': '技能',
    'section.resume': '简历',
    'section.portfolio': '作品集',
    'section.contact': '联系',
    'portfolio.intro':
      '我始终保持着对技术的热爱和对创新的追求，注重理论与实践相结合，不断提升自己的专业能力和综合素养，努力成为一名兼具技术能力、实践经验和创新思维的复合型人才。下面的照片墙是我的项目，竞赛，工作等经历的证明。',
    'portfolio.filterAll': '全部',
    'portfolio.filterProject': '项目',
    'portfolio.filterCompetition': '竞赛',
    'portfolio.filterInternship': '实习',
    'services.title': '阶段能力',
    'services.intro':
      '截至目前，我的能力与技能覆盖多个方面，不仅包括 IT，也包括体育摄影，这证明我是一个健康且均衡发展的学生。',
    'services.item1.title': '本科毕业',
    'services.item1.desc':
      '计算机科学与技术学习者，近期毕业生。拥有实习经验和计算机博弈竞赛经验，掌握一定的计算机基础知识。',
    'services.item2.title': '计算机能力',
    'services.item2.desc':
      '能够制作网页，包括页面跳转功能与动画效果，并进行一定的图形界面设计。使用过 Qt、Anaconda、AWS 等平台。',
    'services.item3.title': '摄影',
    'services.item3.desc':
      '在影片拍摄与后期方面，我会使用相机设备拍摄纪录片，并使用 Apple iMovie 或剪映等软件进行简单剪辑。对于图片，我会使用 Snapseed 进行编辑与美化。',
    'services.item4.title': '无畏契约',
    'services.item4.desc':
      '无畏契约资深玩家，掌瓦累计392小时以上游戏时长，还是多年的腾讯游戏玩家',
    'testimonials.title': '推荐信',
    'testimonials.intro':
      '感谢来自我的老师、同学和朋友的推荐信。感谢你们对我专业知识的评价与认可。因为你们的认可，我深受鼓舞，也会继续努力，不断提升自己！',
    'testimonials.item1.quote':
      '我和 Terzo 在幼儿园认识，已经做了 20 年朋友。他从小就是一名优秀的学生。他多才多艺，热爱运动和艺术，喜欢学习并探索新知识，学习能力很强。希望他未来越来越好。',
    'testimonials.item1.role': '中央财经大学',
    'testimonials.item2.quote':
      '我是 Terzo 的女朋友，也是校模特队队长。他喜欢摄影和学习计算机技术，也喜欢像我这样的模特队。他善良且有责任心。他是他们班的班长，工作认真。',
    'testimonials.item2.role': '校模特队队长',
    'testimonials.item3.quote':
      '我来自澳门，10 年前在打高尔夫时认识 Terzo。Terzo 是一个坚韧的人，对每件事、每个人都很细致。他情商很高，相处起来很愉快。他是我最好的朋友之一。',
    'testimonials.item3.role1': '高尔夫业余爱好者',
    'testimonials.item3.role2': '金融专业本科生',
    'testimonials.item4.quote':
      '2023 年，他选修了我的“机器学习”课程。鉴于他在课堂上展现出的优秀学术能力以及对计算机科学的热情，我愿意向你推荐他。',
    'testimonials.item4.role1': '韶关学院教师',
    'testimonials.item4.role2': '教育工作者 & 计算机工程师',
    'testimonials.item5.quote':
      'Terzo 是我班的班长。他工作认真，分担了我大量工作。他平时乐于帮助同学，在校学习刻苦，成绩优异。',
    'testimonials.item5.role1': '人工智能教授',
    'testimonials.item5.role2': '华南理工大学博士',
    'testimonials.item6.quote':
      'Terzo 是我初中同学，我们一起学习生活。他认真善良，爱学习，能吃苦耐劳，对朋友真诚。我们甚至一起去日本旅行，度过了非常快乐的时光。',
    'testimonials.item6.role': '加拿大多伦多大学硕士',
    'about.intro':
      '我是Terzo田庄，目前就读于香港岭南大学，攻读人工智能与商业分析理学硕士学位，致力于将人工智能技术与商业现实场景深度融合，打造兼具技术价值与落地可行性的解决方案。从本科阶段接触计算机科学，到如今深耕人工智能与商业分析领域，每一段学习、每一个项目、每一次实践，都像是我成长路上的一个个坐标，串联起我对技术的热爱、对创新的追求，也让我从一个懵懂的学习者，逐渐成长为一名具备全栈开发能力、项目实操经验和跨场景应用思维的复合型从业者。今天，我想通过我的成长故事，和大家分享我在技术探索、项目实践与自我提升路上的点点滴滴。',
    'about.subtitle': '香港岭南大学',
    'about.birthday': '生日：',
    'about.website': '绩点：',
    'about.phone': '电话：',
    'about.city': '城市：',
    'about.degree': '学位：',
    'about.degreeValue': '硕士',
    'about.email': '邮箱：',
    'about.hobby': '爱好：',
    'about.journey':
      '我的技术旅程始于本科阶段的系统学习。到目前为止，我正在攻读人工智能方向的硕士学位。多年的学习为我打下了扎实的计算机科学基础。我也独立学习了许多技术，并持续保持学习能力，这让我能够独立完成并搭建这个网站……',
    'skills.intro':
      '我具备全栈开发能力，熟悉前后端开发、各类数据库与云服务部署；掌握人工智能核心技术与算法，能独立完成数据分析、数据可视化与模型相关工作；熟练使用各类开发工具，拥有智能体相关开发经验，技术栈全面，可胜任从项目开发到落地部署的全流程工作。',
    'skills.bar1': '全栈开发能力',
    'skills.bar2': '后端架构与接口开发',
    'skills.bar3': '前端界面与交互实现',
    'skills.bar4': '数据库设计与优化',
    'skills.bar5': '云服务部署与运维',
    'skills.bar6': '人工智能与大模型应用',
    'skills.bar7': '数据分析与处理',
    'skills.bar8': '数据可视化与报表开发',
    'skills.bar9': '智能体相关技术开发',
    'skills.bar10': '工程化开发与项目协作',
    'facts.intro':
      '接下来我想从教育经历，工作经历，竞赛经历等等方面，对我自己详细的介绍。希望这样可以帮助你更好更全面的了解到我，我是一个爱钻研，希望求真务实的人，也希望您能够相信我的能力，给我一次工作机会！',
    'facts.skills': 'Skills',
    'facts.ielts': '雅思成绩...',
    'resume.experience': '项目经历',
    'resume.education': '教育经历',
    'resume.intro':
      '学习和校园经历，让我对计算机技术产生了浓厚的兴趣，尤其是人工智能领域，更是让我着迷。为了将课堂上学到的理论知识转化为实际应用能力，我开始积极参与各类项目实践和学科竞赛，在实践中探索技术的边界，积累实战经验。',
    'resume.summary.desc':
      '本科四年，我一直担任班级班长，协助老师处理班级日常事务，协调同学之间的关系，组织各类班级活动，这份经历不仅培养了我的责任心和组织协调能力，更让我学会了如何高效沟通、凝聚团队力量，也因此荣获了“优秀班长”称号。除此之外，凭借着优异的学业成绩和突出的综合表现，我还先后获得了国家奖学金、信息工程学院一等奖学金、信息工程学院三好学生、科研创新优秀个人等多项荣誉，这些荣誉不仅是对我过往努力的肯定，更是激励我不断前行的动力。',
    'resume.summary.item1': '项目经理',
    'resume.summary.item2': '教育经历',
    'resume.summary.item3': '竞赛经历',
    'resume.project1.title': '多智能体大模型金融交易决策框架（Enhance TradingAgents）',
    'resume.project1.desc':
      '基于大语言模型（LLM）与多智能体架构构建的端到端自动化股票投研与决策系统，实现从标的分析、多视角辩论、交易决策到风控校验的全流程自动化，最终输出结构化交易信号（BUY/SELL/HOLD）。',
    'resume.project1.b1':
      '划分多智能体角色（市场分析、基本面研究、交易员、风险控制、辩论裁判），通过跨角色协作提升决策鲁棒性与可解释性。',
    'resume.project1.b2':
      '基于 LangGraph 编排投研决策工作流，构建完整执行图：数据获取 → 多维分析 → 多空辩论 → 交易提案 → 风险校验 → 信号输出。',
    'resume.project1.b3':
      '建立统一的 LLM 适配层，支持 OpenAI / Google / Anthropic / Ollama 等多厂商模型切换。',
    'resume.project1.b4':
      '封装金融数据工具链，集成 yfinance、Alpha Vantage 等数据源，自动获取并结构化解析行情、新闻、基本面与情绪数据。',
    'resume.project1.b5':
      '实现基于 BM25 的历史场景检索与反思机制，形成可迭代的投研记忆闭环。',
    'resume.project2.title': 'Kronos 多智能体预测与交易（Kronos-based）',
    'resume.project2.desc':
      '面向金融时间序列（OHLCVA）的生成式预测系统，以“Tokenizer 量化离散化 + Transformer 自回归生成 + 多流水线微调 + Web 可视化”为核心，覆盖训练、推理、可视化与回测全流程。',
    'resume.project2.b1':
      '结合 BSQuantizer 与分层 Transformer 将连续 OHLCVA 序列离散为 token 并进行自回归生成；引入 RoPE 自注意力、交叉注意力条件与时间嵌入等时序建模设计。',
    'resume.project2.b2':
      '支持双流水线（Qlib/CSV）、多训练模式与轻量微调（注意力/FFN 的 LoRA），适配不同数据源与算力环境。',
    'resume.project2.b3':
      '覆盖 CPU/CUDA/MPS，提供 Web UI 可视化与回归测试，并打通从模型训练到策略回测的端到端链路。',
    'resume.project3.title': 'SRR 案件处理系统（SRR-Case-Processing-System）',
    'resume.project3.desc':
      'AI 文档处理系统，自动从多种格式的 Slope Risk Reports（SRR）中抽取与分类案件数据，将非结构化文档转为标准化案件记录。',
    'resume.project3.githubLabel': 'GitHub 链接：',
    'resume.project3.b1': '支持 TXT、TMO PDF、RCC PDF 处理，并对扫描件提供 OCR 能力。',
    'resume.project3.b2': '案件类型分类准确率 92%，主题识别准确率 98%。',
    'resume.project3.b3': '在 5,298 条历史案件中进行匹配与模式检索。',
    'resume.project3.b4': '树木信息追踪 32,405 棵，并自动学习 403 组位置-边坡映射关系。',
    'resume.project3.b5': '参与 2026 Lingnan Cup，并结合商业报告分析等工作。',
    'resume.project4.title': '岭南大学政策问答系统（Agentic RAG 框架）',
    'resume.project4.desc':
      '基于 Google Cloud Platform（GCP）实现 Agentic RAG 框架的政策问答系统，面向岭南大学政策文档提供简洁、准确、可溯源的回答。',
    'resume.project4.githubLabel': 'GitHub 链接：',
    'resume.project4.webLabel': '网址：',
    'resume.project4.b1':
      '在 GCP 上完成文档处理、语义检索与查询召回、RAG 集成、评估与性能优化，以及部署与服务交付。',
    'resume.project4.b2':
      '构建 AI 驱动的云原生应用，数据存储、检索、推理与部署等组件均在 GCP 生态内设计与管理。',
    'resume.project4.b3':
      '积累 NLP 流水线、向量检索、文档智能的实践经验，并掌握评估与缓解大模型幻觉的相关方法。',
    'resume.project5.title': '基于计算机视觉的驾驶疲劳监测系统',
    'resume.project5.desc':
      '采用“数据-模型-决策”三层模块化架构，形成从数据采集与特征提取到疲劳预测、智能决策与反馈优化的闭环流程。',
    'resume.project5.b1':
      '利用 MediaPipe 提取多维特征，并使用随机森林或 CNN 模型判定疲劳等级。',
    'resume.project5.b2': '通过 Q-Learning 生成个性化干预策略，并将反馈用于持续优化。',
    'resume.project6.title': '基于海鲜价格预测的前后端分离系统',
    'resume.project6.desc':
      '本科毕业论文项目，基于 Vue 与 Django 开发；使用 Jupyter notebook 爬取与清洗水产数据，并存入 Navicat 数据库。',
    'resume.project6.b1': '为注册用户提供按时间排序的水产产品列表，管理员负责用户与产品管理。',
    'resume.project6.b2':
      '支持各省价格变化、产品对比、产地与省份数量等可视化，并借助机器学习预测价格趋势。',
    'resume.project7.title': '个人简历网站',
    'resume.project7.b1': '确定网站布局与样式风格。',
    'resume.project7.b2': '使用 VS Code 编辑 HTML、CSS、JavaScript 与 PHP，实现动态展示与自适应布局。',
    'resume.project7.b3': '部署至 Hostinger，配置域名与邮箱账号，实现在线访问与联系功能。',
    'resume.project7.linkLabel': '链接：',
    'resume.project8.title': '决策树预测模型',
    'resume.project8.b1':
      '使用 Jupyter notebook 对 Titanic 生存数据集进行预处理，包括删除无关数据并将非数值特征转换为数值。',
    'resume.project8.b2': '通过特征工程构造新特征，并用图表或表格进行可视化展示。',
    'resume.project8.b3': '选择合适算法训练模型，并调参提升模型表现。',
    'resume.project9.title': '基于 YOLOv8 的山火烟雾检测软件',
    'resume.project9.desc':
      '“用于森林早期火灾检测的智能 UVA”项目成员（负责火烟生成）。系统通过 FTP 连接池对接向日葵-8 数据服务器、瞭望塔与搭载相机的无人机，实现全方位森林火灾监测。',
    'resume.project9.b1': '参与团队讨论，明确算法目标、精度需求与应用场景。',
    'resume.project9.b2': '对比不同算法后选用 YOLOv8，并分析其优缺点。',
    'resume.project9.b3': '采集与预处理数据集，训练并调参优化模型，并在实际场景中评估表现。',
    'resume.project9.b4': '向中国版权保护中心提交软件著作权申请。',
    'resume.edu.msc.school': '香港岭南大学',
    'resume.edu.msc.degree': '人工智能与商业分析理学硕士',
    'resume.edu.msc.gpa': '绩点：3.6/4.0（第一学期）',
    'resume.edu.msc.c1': '深度学习实践应用',
    'resume.edu.msc.c2': '商业数据管理',
    'resume.edu.msc.c3': '数据可视化',
    'resume.edu.msc.c4': '数据分析与编程原理',
    'resume.edu.msc.c5': '生成式 AI 编程',
    'resume.edu.msc.c6': '大数据分析',
    'resume.edu.msc.c7': '计算机视觉',
    'resume.edu.msc.c8': '商业机器学习',
    'resume.edu.msc.c9': '区块链',
    'resume.edu.beng.school': '澳大利亚联邦大学 - 韶关学院（3+1）',
    'resume.edu.beng.degree': '计算机科学与技术工学学士',
    'resume.edu.beng.intro':
      '本科为 SGU 与澳大利亚联邦大学合作的“3+1”项目。第四年无需前往澳大利亚，在 SGU 学习并由澳大利亚联邦大学教师授课。',
    'resume.edu.beng.gpa': 'GPA：3.49/5.0（84.94/100）',
    'resume.edu.beng.cert': '证书：国家信息安全水平考试一级证书',
    'resume.edu.beng.awards':
      '奖项与荣誉：国家奖学金（11/2024）；信息工程学院一等奖学金（10/2024）；信息工程学院三好学生（10/2024）；科研创新突出个人（10/2024）；学业优秀奖（10/2024）。',
    'resume.competitions': '竞赛经历',
    'resume.work': '工作经历',
    'resume.comp1.title': '大学生计算机游戏锦标赛 - 五子棋赛（队长）',
    'resume.comp1.supervisor': '指导老师：姜长津博士',
    'resume.comp1.intro':
      '大学生计算机游戏锦标赛涵盖象棋、围棋、五子棋等传统游戏项目。五子棋赛要求参赛者开发用于对弈的 AI 程序并与其他队伍进行对抗。',
    'resume.comp1.b1': '牵头讨论并确定程序所需功能与搜索算法，规划评估函数与用户界面设计。',
    'resume.comp1.b2': '掌握五子棋规则，并根据山口开局规则设计开局函数。',
    'resume.comp1.b3': '应用 Alpha-Beta 剪枝与启发式搜索，提高最优落子搜索效率。',
    'resume.comp1.b4': '在 Qt Creator 中测试并完善 C++ 程序，优化界面与开局策略，提升对弈体验。',
    'resume.comp1.b5': '成果：基于 15×15 棋盘的 AI 五子棋软件获全国一等奖。',
    'resume.comp2.title': '大学生计算机游戏锦标赛 - No Go 赛（成员）',
    'resume.comp2.supervisor': '指导老师：姜长津博士',
    'resume.comp2.intro':
      'No Go 赛与普通五子棋规则差异较大：双方轮流落子，目标并非吃掉对方棋子；否则落子方将失分。禁止自杀与停着，且不存在平局。',
    'resume.comp2.b1': '测试并修复程序潜在问题。',
    'resume.comp2.b2': '撰写技术报告，重点梳理 UB-tree、UCB 算法与走子生成器等核心模块。',
    'resume.comp2.b3': '成果：基于 9×9 棋盘的 No Go AI 对弈软件获全国一等奖。',
    'resume.work1.title': '华为数通售前工程师',
    'resume.work1.company': 'Synnex Technology International Corporation（深圳）',
    'resume.work1.b1':
      'Wi‑Fi 部署建议：根据客户需求推荐 AP 类型与部署方案；采用双频（2.4GHz/5GHz）进行频段优化；配置 SSID 隔离以区分员工与访客权限；预留 20% AP 接口支持业务扩展；推荐 PoE 交换机简化布线。',
    'resume.work1.b2':
      '技术文档与咨询：整理配置指南、用户手册等技术文档；分析华为数通产品（路由器、交换机、AP）；提供技术咨询并协助客户选择合适产品与方案。',
    'resume.work2.title': '客户经理助理',
    'resume.work2.company': '交通银行（珠海）',
    'resume.work2.b1': '整理客户信息与材料，并录入银行系统。',
    'resume.work3.title': '实习生',
    'resume.work3.company': 'Zhuhai New Horizon Communication Development Co., Ltd.',
    'resume.work3.b1': '审核并处理订单，跟踪更新订单状态，记录交易信息。',
    'resume.work3.b2': '维护客户关系并提供售后服务。',
    'contact.yourName': '姓名',
    'contact.yourEmail': '邮箱',
    'contact.subject': '主题',
    'contact.message': '内容',
    'contact.loading': '发送中',
    'contact.sent': '消息已发送，谢谢！',
    'contact.send': '发送消息',
    'breadcrumb.home': '首页',
    'portfolioDetails.title': '作品详情',
    'portfolioDetails.projectInfo': '项目信息',
    'portfolioDetails.category': '分类',
    'portfolioDetails.purpose': '用途',
    'portfolioDetails.projectDate': '项目时间',
    'portfolioDetails.achievements': '成就、奖项与荣誉'
  }
}

export function getInitialLanguage(): Language {
  const stored = localStorage.getItem(storageKey)
  return stored === 'zh' ? 'zh' : 'en'
}

export function setLanguage(language: Language) {
  localStorage.setItem(storageKey, language)
}

export function applyLanguage(language: Language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'

  const map = translations[language]

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n
    if (!key) return
    const value = map[key]
    if (typeof value === 'string') {
      el.textContent = value
    }
  })

  document.querySelectorAll<HTMLElement>('[data-i18n-typed-items]').forEach((el) => {
    const key = el.dataset.i18nTypedItems
    if (!key) return
    const value = map[key]
    if (typeof value === 'string') {
      el.setAttribute('data-typed-items', value)
    }
  })
}
