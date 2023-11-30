## SuperPrice - Price Matching and Delivery Application

SuperPrice is a comprehensive application designed to revolutionize the shopping experience. By comparing prices, viewing product details, and exploring various offers, users can make informed decisions and save money. This repository contains both the frontend and backend components of the SuperPrice application.

## Members

* Abhijeet Kumar
* Vidyut Venkatesan
* Ibrahim Al-Ashhab
* Rashik Raj
* Udit Pradeep Malshe

## Records

* Github repository: [github.com | SuperPrice](https://github.com/Abhijeet1520/SuperPrice)
* Github Project Board : [github.com | SEPT Feature Project](https://github.com/orgs/cosc2299-sept-2023/projects/143/views/1)


## Code Documentation - Release 0.2.0 - 17 September 2023

### Features:

- **Price Comparison**: Allows users to compare prices of products across different stores.
- **Product Details**: Provides detailed information about products, including images, descriptions, and reviews.
- **Offer Exploration**: Showcases various offers and discounts available in different stores.
- **User Reviews**: Users can read reviews for products.
- **Search Functionality**: Enables users to search for specific products or categories.

## Run Instructions

### Backend:

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Package and run the backend application:
   ```bash
   ./mvnw package && java -jar target/superprice-0.0.1-SNAPSHOT.jar
   ```

### Frontend:

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

4. Access the application:
   Open your browser and navigate to `http://localhost:3000` to access the SuperPrice application. The frontend will communicate with the backend to fetch and display data from the database.

## Initial Setup

### Environment Setup:

Ensure you have the following tools and technologies installed on your system:

- **Java**: Version 17.0 or higher.
- **Node and npm**: For frontend development and dependency management.
- **Apache Maven**: For backend dependency management and building.
- **IDE or Editor**: Such as Visual Studio Code, IntelliJ IDEA, or Eclipse.
- **Other Tools**: As the project progresses, you might need additional tools like Docker for containerization.

### Backend Setup:

For detailed instructions on setting up and running the backend, refer to the backend README:

[Backend README](./backend/README.md)

### Frontend Setup:

For detailed instructions on setting up and running the frontend, refer to the frontend README:

[Frontend README](./frontend/README.md)

