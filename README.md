# Proactive Cattle Detection System for Road Safety

## Introduction

Traffic congestion and road safety are significant concerns in many areas, often exacerbated by wandering cattle. This project addresses this issue by developing a Proactive Cattle Detection System that leverages computer vision and machine learning technologies to detect cattle on roads in real-time, alerting relevant authorities and reducing the risk of accidents and traffic jams.

## Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Methodologies](#methodologies)
7. [Future Enhancements](#future-enhancements)
8. [Contributors](#contributors)
9. [License](#license)

## Project Overview

### Description
The Proactive Cattle Detection System is designed to detect cattle on roads using CCTV cameras and a machine learning model. It consists of several components:
- **CCTV Camera Integration**: Captures live video feed of the road.
- **Image Upload Website**: Allows users to upload images for detection.
- **Cattle Detection Model**: Identifies cattle in the captured images.
- **Notification System**: Alerts authorities if cattle are detected on the road.
- **User Registration**: Registers users and stores their contact information for alerting purposes.

### Key Features
- Real-time cattle detection using CCTV cameras.
- Image upload functionality for detection.
- User registration and RFID-based identification.
- Alerts sent to users and authorities upon detection.

## System Architecture



The system architecture consists of:
1. **CCTV Camera**: Captures video feed.
2. **Image Processing**: Preprocesses images for detection.
3. **Cattle Detection Model**: Uses YOLOv8 and OpenCV for detecting cattle.
4. **Notification System**: Alerts users and authorities.
5. **Database**: Stores user information and RFID tags.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Machine Learning**: TensorFlow, Keras, OpenCV, YOLOv8
- **Notifications**: Twilio API for SMS alerts

## Installation

### Prerequisites
- Node.js
- MySQL
- Python
- Virtual environment tools (venv, pipenv)

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your_username/cattle-detection-system.git
    cd cattle-detection-system
    ```

2. **Set up the backend**:
    ```bash
    cd backend
    npm install
    ```

3. **Set up the frontend**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Configure MySQL database**:
    - Create a database named `cattles`.
    - Run the following SQL script to create the necessary tables:
    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        rfid VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(255) NOT NULL,
        rfid VARCHAR(255) NOT NULL,
        upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```

5. **Start the backend server**:
    ```bash
    cd backend
    node app.js
    ```

6. **Start the frontend server**:
    ```bash
    cd frontend
    npm start
    ```

## Usage

### Image Capture and Upload
1. **Open the CCTV Camera**: Click on the "Open CCTV Camera" button on the homepage to capture an image.
2. **Upload Image**: The captured image is automatically uploaded to the server for processing.
3. **Detection**: The backend processes the image and checks for cattle using the detection model.
4. **Notification**: If cattle are detected, an alert message is sent to the registered users.

### User Registration
1. **Register User**: Go to the registration page and enter the user details including username, phone number, and RFID tag.
2. **Save Registration**: The user details are saved in the MySQL database.

### Alerts
1. **RFID Matching**: If a captured image's RFID matches a registered RFID, an alert message is sent to the user's phone number.
2. **Alert Message**: The alert message includes the username and phone number of the registered user.

## Methodologies

- **Object Detection**: Using YOLOv8 for accurate and real-time cattle detection.
- **Image Processing**: Preprocessing images with OpenCV to enhance detection accuracy.
- **Notification System**: Integrating Twilio API for sending SMS alerts to users.

## Future Enhancements

- **Enhanced Detection**: Improving the detection model for better accuracy and speed.
- **Scalability**: Enhancing the system to support more users and cameras.
- **Mobile App**: Developing a mobile application for real-time notifications and user management.
- **Integration**: Integrating additional technologies like GPS for precise location tracking.


