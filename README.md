## Placement Management System

A full stack web-based Placement Management CRUD Application developed using Spring Boot, PostgreSQL and React.js.  
This project was built as part of an academic entity-based implementation to manage placement drive records efficiently.

---

## Project Overview

The Placement Management System is designed to maintain and manage campus recruitment drive information digitally.  
It allows users to perform complete CRUD operations on placement records such as adding new placement drives, viewing existing records, updating details and deleting cancelled drives.

This system reduces the complexity of maintaining placement information manually and provides a centralized platform for handling placement details.

---

##  Technologies Used

### Backend
- Java
- Spring Boot
- Spring Data JPA
- RESTful APIs

### Database
- PostgreSQL

### Frontend
- React.js
- CSS3
- Fetch API

### Testing Tool
- Postman

---

## ✨ Features Implemented

- Add New Placement Drive
- View All Placement Records
- Update Existing Placement Details
- Delete Placement Record
- Search and Filter Placement Drives
- React Frontend with Dynamic Dashboard UI
- PostgreSQL Database Integration

---

## 📂 Project Structure

placement-management-system/
│
├── backend/
│ └── Spring Boot Backend Source Code
│
├── frontend/
│ └── React Frontend Source Code
│
└── README.md

---

## 🧩 Placement Entity Attributes

- Placement ID
- Company Name
- College Name
- Job Role
- Qualification
- Passing Year
- Package Offered

---

## 🔁 CRUD Operations

| Operation | HTTP Method | Endpoint |
|-----------|-------------|----------|
| Add Placement | POST | /api/placements/addpl |
| Get Placements | GET | /api/placements/getpl |
| Update Placement | PUT | /api/placements/updatepl |
| Delete Placement | DELETE | /api/placements/deletepl/{id} |

---

## ⚙️ How to Run the Project

### Backend
1. Open backend folder in Spring Tool Suite
2. Configure PostgreSQL database in `application.properties`
3. Run Spring Boot application

### Frontend
1. Open frontend folder in VS Code
2. Run `npm install`
3. Run `npm start`

---

## 🎯 Outcome

The selected Placement entity was successfully implemented with complete frontend-backend-database integration using CRUD operations.

---

## 👩‍💻 Developed By
Tejash K
