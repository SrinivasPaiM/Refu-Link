# Refu-Link

Refu-Link is a web-based platform designed to connect refugees with essential services, support networks, and resources. It aims to streamline access to critical information, fostering community integration and empowerment.

## 🌐 Project Overview

- **Frontend**: Built with React.js for a responsive and intuitive user interface.
- **Backend**: Powered by Flask, integrating machine learning models using Transformers and PyTorch to provide personalized recommendations and insights.
- **APIs**: RESTful APIs facilitate seamless communication between the frontend and backend.

## Screanshots

![Screenshot (52)](https://github.com/user-attachments/assets/b5ea0540-986a-4c19-bbc6-9c0373fbdfef)![Screenshot (53)](https://github.com/user-attachments/assets/faa35701-5a47-4549-b448-6441178475eb)

## 📂 Directory Structure

```
Refu-Link/
├── backend/           # Flask backend with ML integrations
│   ├── app.py         # Main application script
│   └── ...            # Additional backend modules
├── frontend/          # React frontend application
│   ├── public/        # Public assets
│   ├── src/           # Source code
│   └── ...            # Additional frontend modules
├── package.json       # Node.js dependencies and scripts
├── package-lock.json  # Exact versions of Node.js dependencies
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or above)
- **npm** (v6 or above)
- **Python** (v3.7 or above)
- **pip** (Python package installer)
- **virtualenv** (for creating isolated Python environments)

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Sinchanakolur/Refu-Link.git
cd Refu-Link
```

#### 2. Setup and Run the Frontend

```bash
cd frontend
npm install
npm start
```

This will launch the React application on `http://localhost:3000/`.

#### 3. Setup and Run the Backend

```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows, use 'venv\Scripts\activate'
pip install -r requirements.txt
python app.py
```

The Flask server will start on `http://localhost:5000/`.

## 🧪 Technologies Used

- **Frontend**:
  - React.js
  - HTML5 & CSS3
  - JavaScript (ES6+)
- **Backend**:
  - Flask
  - Transformers (Hugging Face)
  - PyTorch
  - scikit-learn
  - NumPy
  - flask-cors

## 📌 Features

- **User Authentication**: Secure login and registration system.
- **Service Listings**: Browse and search for available services tailored for refugees.
- **Personalized Recommendations**: Machine learning models suggest services based on user profiles and needs.
- **Multilingual Support**: Interface available in multiple languages to cater to diverse users.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.

## 🛠️ Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request detailing your changes.

Please ensure your code adheres to the project's coding standards and is well-documented.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

For questions, suggestions, or feedback:

- **GitHub Issues**: [Submit an issue](https://github.com/Sinchanakolur/Refu-Link/issues)
- **Email**: [sinchanakolur@example.com](mailto:sinchanakolur@example.com)

---

*Empowering refugees through technology and community support.*
