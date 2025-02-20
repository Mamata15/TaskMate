# Project Overview

The Task Management System is a front-end application built using React.js and Material-UI. It allows users to manage their tasks efficiently with an intuitive and user-friendly interface. The application includes essential features such as user authentication (Login/Signup), a dashboard for task management, and task-related functionalities.

# How to Setup and Run the Project

Prerequisites

Before setting up the project, ensure you have the following installed on your system:

Node.js (Download from Node.js Official Website)

npm (Node Package Manager) (Comes with Node.js installation)

# Steps to Setup the Project

1. Create a New React App

To create a new React application, open the terminal or command prompt and run:

npx create-react-app task-management  
cd task-management  

This will create a new React project and navigate into the project directory.

2. Install Dependencies

After creating the project, install the required dependencies:

npm install @mui/material @emotion/react @emotion/styled react-router-dom  

These dependencies include Material-UI for UI components and React Router for navigation.

3. Project Structure

# The project is organized as follows:

task-management/
│── src/
│   │── components/
│   │   │── Dashboard/  # Contains Dashboard UI components
│   │   │── Login/      # Contains Login component
│   │   │── Signup/     # Contains Signup component
│   │── App.js         # Main entry point for React components and routing
│   │── index.js       # Main entry point for ReactDOM rendering
│── public/           # Contains static assets (HTML, images, etc.)
│── package.json      # Project configuration and dependencies
│── README.md         # Documentation file

4. Run the Project

To start the project, execute the following command:

npm start  

This will run the application on http://localhost:3000/ in your browser.

# Assumptions Made During Development

Users must log in or sign up before accessing the dashboard.

A task includes essential details such as title, description, status,Type,Actions.

Material-UI components are used to ensure a responsive and modern UI.

# List of Technologies/Libraries Used

The project uses the following technologies and libraries:

Technology / Library

React.js

Frontend framework for building the UI

Material-UI

Pre-built UI components for a modern interface

React Router

Navigation and routing between pages

CSS

Additional styling for better design

# Challenges Faced and How They Were Addressed

1. State Management Issues

Initially, useState was used for managing tasks. However, for larger applications, using Redux or Context API may be considered for better state management.

2. Material-UI Customization

Some Material-UI components required additional CSS styling to match the desired design.

3. Routing Issues

Faced issues while navigating between pages.

The issue was resolved by properly configuring React Router and ensuring correct path definitions in App.js.

