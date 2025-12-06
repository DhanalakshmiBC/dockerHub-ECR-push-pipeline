Simple Node.js Application with GitHub Actions CI/CD

This is a lightweight Node.js + Express application that demonstrates a complete CI/CD pipeline using GitHub Actions, including build, test, and Docker image generation.

  Features
	•	Simple Express server serving a static HTML/CSS UI
	•	Fully automated CI/CD pipeline using GitHub Actions
	•	Pipeline includes:
	•	Checkout code from GitHub
	•	Set up Node.js environment
	•	Install dependencies
	•	Run lint
	•	Run unit tests
	•	SonarQube code quality scan
	•	Snyk dependency vulnerability scan
	•	Build application
	•	Build Docker image
	•	Push Docker image to Docker Hub or AWS ECR
	•	Slack notifications on success or failure

##  Project Structure
.
├── src/                     # UI files (HTML, CSS, JS)
├── Dockerfile              # Container build instructions
├── package.json           # Node.js dependencies & scripts
├── .github/
│   └── workflows/
│       └── ci.yml         # GitHub Actions pipeline
└── README.md              # Project documentation

 Technologies Used
	•	Node.js
	•	Express.js
	•	GitHub Actions
	•	Docker
	•	npm (dependency & script management)
	•	SonarQube (code quality)
	•	Snyk (security scanning)
	•	Slack notifications


To run this Project Locally
git clone https://github.com/DhanalakshmiBC/dockerHub-ECR-push-pipeline.git
cd <your-project>
npm install
npm start

Visit the application at:
http://localhost:3000

CI/CD Pipeline (GitHub Actions)
The workflow (.github/workflows/ci.yml) performs:
	1.	Checkout repository
	2.	Setup Node.js
	3.	Run lint
	4.	SonarQube scanning
	5.	Snyk vulnerability scanning
	6.	Run tests
	7.	Build application
	8.	Build Docker image
	9.	Push Docker image to Docker Hub / AWS ECR
	10.	Slack notifications for success/failure


To build and run manually
docker build -t my-node-app
docker run -p 3000:3000 my-node-app

Contributing
Feel free to submit issues or pull requests!