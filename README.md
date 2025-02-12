# Virtual Gaming Platform

A simple cloud-based gaming platform with a graphical user interface (GUI) game.

---

## Features
- Frontend: HTML5 game where users click on a target.
- Backend: Node.js server to serve the frontend.
- Dockerized: Easy deployment using Docker.

---

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Containerization: Docker, Docker Compose

---

## How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SURYAl3152/minimum_gui_game.git
   cd minimum_gui_game

   Run with Docker:

bash
Copy
docker-compose up --build
Access the Game:
Open your browser and go to:

Copy
http://localhost:3000
Push to Docker Hub
Log in to Docker Hub:

bash
Copy
docker login
Tag the Image:

bash
Copy
docker tag <image-id> <your-dockerhub-username>/minimum_gui_game:latest
Push the Image:

bash
Copy
docker push <your-dockerhub-username>/minimum_gui_game:latest
License
This project is licensed under the MIT License.

Contact
GitHub: SURYAl3152
