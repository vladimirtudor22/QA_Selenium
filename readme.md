## Document Content

[Runtime Environment Configuration](#runtime-environment-configuration)

[Application Features](#application-features)

[Automated Testing Plan for Amazon.com](#automated-testing-plan-for-amazoncom)

# Automated Testing Demo using Selenium WebDriver

In this automated testing demo utilizing Selenium WebDriver, I have chosen the Amazon.com platform due to its abundance of elements tagged with IDs/names.

## Runtime Environment Configuration

To ensure smooth setup and functionality, follow these steps:

1. **Install Google Chrome**: Ensure you have Google Chrome browser installed.

2. **Run the following command to install necessary dependencies:**

   ```bash
   npm install --save-dev
   ```

3. **Run the following command to execute the tests:**

   ```bash
   npm test
   ```

**Note**: This project was created and tested on macOS.

Feel free to reach out if you have any questions or need further assistance! 🚀 Happy coding and best of luck with your project! ✨

## Application Features

1. **Search and Navigation:**

   - Functionality to search for products.
   - Filtering and sorting of search results.
   - Navigating through pages and product categories.

2. **Account Management:**

   - Authentication and registration.
   - Account management process (address, payment details, delivery options).

3. **Shopping Cart:**

   - Adding and removing items from the shopping cart.
   - Calculation of the total and taxes.
   - Order completion process.

4. **Order Process:**

   - Completing payment details and delivery address.
   - Choosing delivery options.
   - Confirming and placing the order.

5. **Reviews and Ratings:**

   - Adding and viewing product reviews.
   - Product and supplier rating system.

6. **Order Management and Returns:**

   - Managing previous orders.
   - Product return process.

7. **Social Interaction:**

   - Options for sharing and recommending products on social networks.

8. **Support and Assistance:**

   - Accessing help and support pages for users.
   - Contacting and communicating with the support team.

9. **Performance and Loading:**

   - Page and functionality loading time.

10. **Security and Privacy:**

    - Verifying security measures for user data.
    - Management of passwords and secure authentication.

11. **Personalized Recommendations:**

- A personalized recommendation system that suggests products to users based on their previous browsing and purchasing behavior.

12. **Wishlist:**

- Ability for users to save their favorite products in a wishlist for future purchases.

13. **Product Comparison:**

- Functionality that allows users to compare specifications and prices of multiple products.

14. **Real-time Pricing:**

- Continuous updates of product prices to reflect current offers and fluctuations.

15. **Prime Membership:**

- Subscription offering special advantages to users, such as fast and free delivery for eligible products.

16. **Affiliate Program:**

- Opportunity for users to become affiliates and earn commissions from sales generated through affiliate links.

17. **Special Sale Events:**

- Special campaigns and sale events like Black Friday, Cyber Monday, and other seasonal promotions.

# Automated Testing Plan for Amazon.com

## Objective

The testing plan aims to ensure the quality of key functionalities on the Amazon.com platform by identifying and executing relevant test scenarios.

## Testing Goals

- Validate the accuracy and functionality of identified features.
- Ensure efficient navigation and a pleasant user experience.
- Validate the security and privacy of user data.

## Content

- [Search and Navigation](#1-search-and-navigation)
- [Account Management](#2-account-management)
- [Shopping Cart](#3-shopping-cart)
- [Order Process](#4-order-process)
- [Reviews and Ratings](#5-reviews-and-ratings)
- [Order Management and Returns](#6-order-management-and-returns)
- [Reviews and Ratings](#7-reviews-and-ratings)

## Test Plans

### 1. Search and Navigation

- **Objective:**

  - Validate the functionality to search for products.
  - Verify the filtering and sorting of search results.
  - Confirm smooth navigation through pages and product categories.

- **Test Scenarios:**
  - Test the search functionality.
  - Test filtering and sorting options.
  - Test navigation through different categories.

### 2. Account Management

- **Objective:**
  - Validate authentication and registration processes.
  - Verify the account management process including address, payment details, and delivery options.
- **Test Scenarios:**
  - Test account authentication.
  - Test account registration.
  - Test updating account information.

### 3. Shopping Cart

- **Objective:**
  - Validate adding and removing items from the shopping cart.
  - Verify the calculation of the total and taxes.
  - Confirm the order completion process.
- **Test Scenarios:**
  - Test adding items to the shopping cart.
  - Test removing items from the shopping cart.
  - Test cart total calculation.

### 4. Order Process

- **Objective:**
  - Validate the seamless order process from selection to placement.
- **Test Scenarios:**
  - **Test 1: Complete Order Process:**
    - **Steps:**
    - Login, add items, and proceed to checkout.
    - Provide payment and delivery details.
    - Confirm and place the order.
    - **Expected Outcome:**
      - The order should be placed without errors.
- **Test 2: Verify Order in History:**
  - **Steps:**
    - View recent orders in order history.
    - **Expected Outcome:**
      - The recent order should be accurately listed.
- **Test 3: Modify or Cancel Order:**
  - **Steps:**
    - Select a recent order for modification or cancellation.
    - **Expected Outcome:**
      - The user should be able to modify or cancel the order.

### 5. Reviews and Ratings

- **Objective:**
  - Validate the basic functionality of the Reviews and Ratings system.
- **Test Scenarios:**
  - **Test 1: Add a Review:**
    - **Steps:**
      - Navigate to a product.
      - Add a review and rating.
      - **Expected Outcome:**
        - The review should be successfully added.
  - **Test 2: View Product Reviews:**
    - **Steps:**
      - Navigate to a product.
      - View existing reviews and ratings.
      - **Expected Outcome:**
        - Reviews and ratings should be displayed.

### 6. Order Management and Returns

- **Objective:**
  - Validate the basic functionality of order management and the returns process.
- **Test Scenarios:**
  - **Test 1: View Order History:**
  - **Steps:**
  - Log in to the Amazon account.
  - Navigate to the order history.
  - **Expected Outcome:**
    - The user should be able to view their order history.
    - **Test 2: Initiate a Return:**
      - **Steps:**
        - Log in to the Amazon account.
        - Select a recent order to initiate a return.
      - **Expected Outcome:**
        - The user should be able to initiate a return for the selected order.
  - **Test 3: Track Return Status:**
    - **Steps:**
      - Log in to the Amazon account.
      - Navigate to the returns section.
    - **Expected Outcome:**
      - The user should be able to track the status of their return.

### 7. Reviews and Ratings

- **Objective:**
  - Validate the functionality of adding a review and viewing existing reviews.
- **Test Scenarios:**
  - **Test 1: Add a Review:**
    - **Steps:**
      - Navigate to a product.
      - Add a review and rating.
    - **Expected Outcome:**
      - The review should be successfully added.
  - **Test 2: View Product Reviews:**
    - **Steps:**
      - Navigate to a product.
      - View existing reviews and ratings.
    - **Expected Outcome:**
      - Reviews and ratings should be displayed.
