
---

# User Address Registration Backend

This is a simple Node.js backend application using MongoDB for storing users and their associated addresses. The backend allows users to register with their name and address. Each user can have multiple addresses, demonstrating a one-to-many relationship between users and addresses.

## Features

- **User Registration**: Register a new user by submitting their name.
- **Address Association**: Store multiple addresses for a single user.
- **MongoDB**: Uses MongoDB for storing users and addresses.
- **Node.js & Express**: Backend powered by Node.js and Express.
- **ES6+ Syntax**: Written using modern JavaScript (ES6+) with `import/export`.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v12+)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4+)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/user-address-backend.git
   cd user-address-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up MongoDB connection:**

   By default, this project assumes MongoDB is running locally on port 27017. If it's running on a different port or you have custom authentication settings, update the connection string in `Db/Db.js`:

   ```js
   await mongoose.connect('mongodb://localhost:27017/user_address_db', { ... });
   ```

4. **Run the application:**

   Start the server with the following command:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Register User with Address

- **URL**: `/api/users/register`
- **Method**: `POST`
- **Description**: Register a new user and store their associated address.
- **Request Body** (JSON):
  ```json
  {
    "name": "Nandu",
    "street": "FilmNagar",
    "city": "Hyderabad, Telangana.",
    "country": "USA"
  }
  ```
- **Response** (JSON):
  ```json
  {
    "message": "User and Address created successfully"
  }
  ```


---
