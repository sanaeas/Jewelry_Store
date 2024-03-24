# Sparkle Jewelry - A MERN Stack E-Commerce Website

## Detailed Installation:

1. **Clone the Repository:**

```
git clone https://github.com/sanaeas/Jewelry_Store.git
```

2. **Navigate to the Project Directory:**

```
cd Jewelry_Store
```

3. **Install Dependencies for the Front-end:**

```
npm install
```

4. **Start Development:**

```
npm run dev
```

5. **In Another Terminal, Navigate to the Back-end Directory:**

```
cd functions
```

6. **Install Dependencies for the Back-end:**

```
npm install
```

7. **Set Up Environment Variables:**

- Create a `.env` file in the root directory.
- Add the following variables:
  ```
  PORT=3000
  MONGODB_URL=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  STRIPE_PRIVATE_KEY=your_stripe_private_key
  CLIENT_URL=http://localhost:5173 (use the port you are running your front-end on)
  ```

8. **Start the Server:**

```
npm run server
```

9. **Access the Application:**

Visit `http://localhost:5173` in your browser.

## Server Routes:

- **GET /api/products:** Fetches all products available in the store.
- **GET /api/orders:** Retrieves the orders placed by the client.
- **POST /login:** Endpoint for user login.
- **POST /signup:** Endpoint for user registration.
- **POST /:** Endpoint for user verification using a JWT token.

## Usage Guide:

- **User Authentication:**
- Register as a new user or log in if you already have an account.
- Explore various products listed on the homepage.

- **Product Navigation:**
- Browse through different categories.
- Click on a product to view detailed information.

- **Shopping Cart:**
- Add products to your cart and proceed to checkout.
- Modify quantities or remove items as needed.

- **Checkout Process:**
- Enter payment information (When testing, use a card number, such as 4242 4242 4242 4242).
- Place your order securely.

- **User Profile:**
- View order history on your profile.

## Contribution Guidelines:

We welcome contributions from everyone. To maintain a collaborative and inclusive community, please adhere to the following guidelines:

- Fork the repository and create your branch from `main`.
- Ensure your code follows the established coding standards and practices.
- Write clear and concise commit messages.
- Test your changes thoroughly and ensure they don't introduce any regressions.
- Submit a pull request detailing the changes made and the problem solved.

## Authors

- [Sanae Assim](https://github.com/sanaeas)
- [Hassan Assim](https://github.com/Assimv3)
