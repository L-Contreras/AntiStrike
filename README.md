# AntiStrike 🎯

AntiStrike is a React-based web application that provides map pick and ban information for teams competing in the Main, Advanced, and ECL divisions of competitive CS2.

The site helps teams, analysts, and fans search and explore team veto history across different seasons and divisions, using data pulled from multiple Faceit API endpoints and stored in a PostgreSQL database.

---

🚀 **Live Demo**  
Check out the live site here: [AntiStrike on GitHub Pages](https://l-contreras.github.io/AntiStrike/)

---

🛠 **Tech Stack**  
- Frontend: React.js, HTML5, CSS3  
- State Management: useState, Props  
- Backend: AWS RDS (PostgreSQL), Python for data ETL  
- API Integration: Faceit APIs, JSON parsing  
- Deployment: GitHub Pages

---

🔍 **Features**  
- 🔎 Search by team, division, and season  
- 📊 View full map veto data per match  
- ⚙️ Aggregates data from multiple API endpoints  
- ⚡ Fast lookup via locally cached PostgreSQL database  
- 💡 Designed for teams looking to optimize their preparation and practice

---

📡 **APIs & Data Flow**  
Due to limitations in the Faceit API, AntiStrike pulls data from multiple endpoints and compiles them into a complete data set. This data is automatically processed and stored in a PostgreSQL database hosted on AWS RDS. The frontend then queries this optimized data source to deliver a fast and complete user experience.

---

## 🧠 **Lessons Learned**  
- Working with multiple APIs and combining data to solve limitations in third-party services  
- Automating data collection and transformation using Python and PostgreSQL  
- Managing state effectively in React with `useState` and conditional rendering  
- Deploying a React app via GitHub Pages  
- Optimizing performance by serving from a centralized backend database

---

## 🤝 **Acknowledgments**  
- FACEIT API for providing match and team data  
- The CS2 and esports community for inspiration

---

## 📬 **Contact**  
Built by **Luis Contreras**  
- GitHub: [github.com/csxlouis](https://github.com/csxlouis)  
- LinkedIn: [linkedin.com/in/luis-frontend](https://www.linkedin.com/in/luis-frontend)

