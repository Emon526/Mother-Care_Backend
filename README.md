# Mother Care Backend API

**Author:** Asraful Islam  
**License:** MIT

---

## Description

This repository contains the backend API for the Mother Care Flutter Application. It's built with Node.js, Express.js, and MongoDB (via Mongoose), providing essential endpoints to support the functionality of the Mother Care mobile application.

---

## Prerequisites

Before running this server locally or in a production environment, ensure you have the following installed:

- Node.js (version 20.x recommended)
- MongoDB (ensure it's running and accessible)

---

## Installation

1. **Clone the repository:**

    ```bash
   git clone https://github.com/Emon526/Mother-Care_Backend.git
    ```
    ```
   cd Mother-Care_Backend
    ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment setup:**

   Create a `.env` file in the root directory and add necessary environment variables. See `.env.example` for reference.

---

## Running the Server

- **Production:**

  ```bash
  npm start
  ```

- **Development (with nodemon for auto-reloading):**

  ```bash
  npm run dev
  ```

The server will start running at `http://HOST:PORT`, where `HOST` and `PORT` are specified in your `.env` file or default to `127.0.0.1` and `9000` respectively.
<!-- ---

## API Documentation

For detailed API documentation and endpoints, refer to [API Documentation](/docs/api.md).

--- -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

---