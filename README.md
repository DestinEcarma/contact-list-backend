# Contact List Backend

A simple REST API application for managing a contact list, developed as part of a Web Development assignment. The application uses the `Express.js` framework for the backend and `MySQL` as the database.

## Endpoints

- **POST** `http://localhost:{PORT}/add`

  **Required Payload:**

  ```json
  {
    "first_name": "string",
    "last_name": "string",
    "email_address": "string",
    "contact_number": "string"
  }
  ```

- **POST** `http://localhost:{PORT}/update?id={id}`

  **Required Payload:**

  ```json
  {
    "first_name": "string",
    "last_name": "string",
    "email_address": "string",
    "contact_number": "string"
  }
  ```

- **GET** `http://localhost:{PORT}/display`

  **Returned Data:**

  ```ts
  type ContactList = {
    id: number,
    first_name: string,
    last_name: string,
    email_address: string,
    contact_number: string,
    is_deleted: number
  }[]
  ```

- **POST** `http://localhost:{PORT}/delete?id={id}`

## Usage

To set up and run the application, follow these steps:

- **Environment Configuration:**

  Create a `.env` file in the root directory with the following variables:

  - `PORT` - The port the server will run on.
  - `DB_HOST` - Your MySQL database host (e.g., localhost).
  - `DB_USER` - Your MySQL database username.
  - `DB_PASS` - Your MySQL database password.
  - `DB_NAME` - The name of your database.

  You can also copy the provided [`.env-dev`](.env-dev) file as a template:

- **Database Setup:**

  Create a MySQL database and table using the following SQL commands:

  ```sql
  CREATE DATABASE db_name;
  USE db_name;

  CREATE TABLE contact_list (
    id int PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    email_address varchar(255) NOT NULL,
    contact_number varchar(50) DEFAULT NULL,
    is_deleted int DEFAULT 0
  );
  ```

- **Running the Application:**

  - **Clone the repository:**

    ```sh
    git clone https://github.com/DestinEcarma/contact-list-backend
    ```

  - **Navigate to the project directory:**

    ```sh
    cd contact-list-backend
    ```

  - **Install the dependencies:**

    ```sh
    npm install
    ```

  - **Start the development server:**

    ```sh
    npm run dev
    ```
