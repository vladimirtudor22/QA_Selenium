## Document Content

- [Runtime Environment Configuration](#runtime-environment-configuration)
- [Application Features](#application-features)
- [Automated Testing Plan for Amazon.com](#automated-testing-plan-for-amazoncom)

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

9. **Security and Privacy:**

   - Verifying security measures for user data.
   - Management of passwords and secure authentication.

10. **Personalized Recommendations:**

- A personalized recommendation system that suggests products to users based on their previous browsing and purchasing behavior.

11. **Wishlist:**

- Ability for users to save their favorite products in a wishlist for future purchases.

12. **Product Comparison:**

- Functionality that allows users to compare specifications and prices of multiple products.

13. **Real-time Pricing:**

- Continuous updates of product prices to reflect current offers and fluctuations.

14. **Prime Membership:**

- Subscription offering special advantages to users, such as fast and free delivery for eligible products.

15. **Affiliate Program:**

- Opportunity for users to become affiliates and earn commissions from sales generated through affiliate links.

16. **Special Sale Events:**

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
- [Social Interaction](#7-social-interaction)
- [Support and Assistance](#8-support-and-assistance)
- [Security and Privacy](#9-security-and-privacy)
- [Personalized Recommendations](#10-personalized-recommendations)
- [Wishlist](#11-wishlist)
- [Product Comparison](#12-product-comparison)
- [Real-time Pricing](#13-real-time-pricing)
- [Prime Membership](#14-prime-membership)
- [Affiliate Program](#15-affiliate-program)
- [Special Sale Events](#16-special-sale-events)

## Test Plans

### 1. Search and Navigation

- **Objective:**

  - Validate the functionality to search for products.
  - Verify the filtering and sorting of search results.
  - Confirm smooth navigation through pages and product categories.

- **Test Scenarios:**

  - **Test 1: Search Functionality:**

    - Perform a search for a sample product.
    - **Expected Outcome:**
      - Search results displayed correctly.

  - **Test 2: Filtering and Sorting:**

    - Apply filters and sorting options on search results.
    - **Expected Outcome:**
      - Results are appropriately filtered and sorted.

  - **Test 3: Navigation through Categories:**
    - Navigate through different product categories.
    - **Expected Outcome:**
      - Smooth navigation without errors.

### 2. Account Management

- **Objective:**

  - Validate the absence of account creation and authentication.

- **Test Scenarios:**

  - **Test 1: Account Creation:**

    - Attempt to create an account (which is not possible in this context).
    - **Expected Outcome:**
      - Account creation feature is not available.

  - **Test 2: Account Authentication:**
    - Attempt to authenticate to an existing account (which is not possible in this context).
    - **Expected Outcome:**
      - Account authentication feature is not available.

### 3. Shopping Cart

- **Objective:**

  - Validate adding and removing items from the shopping cart.
  - Verify the calculation of the total and taxes.
  - Confirm the order completion process.

- **Test Scenarios:**

  - **Test 1: Adding Items to Cart:**

    - Add a sample product to the shopping cart.
    - **Expected Outcome:**
      - Product is added to the cart correctly.

  - **Test 2: Removing Items from Cart:**

    - Remove a sample product from the cart.
    - **Expected Outcome:**
      - Product is removed from the cart correctly.

  - **Test 3: Cart Total Calculation:**
    - Add multiple products to the cart and verify total calculation.
    - **Expected Outcome:**
      - Total is calculated accurately.

### 4. Order Process

- **Objective:**
  - Validate the seamless order process from selection to placement.
- **Test Scenarios:**
  - **Test 1: Complete Order Process:**
    - **Steps:**
      - Proceed to checkout without logging in (assuming no login is required).
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
      - Attempt to add a review and rating.
    - **Expected Outcome:**
      - The review feature should not be available without an account.
  - **Test 2: View Product Reviews:**
    - **Steps:**
      - Navigate to a product.
      - Attempt to view existing reviews and ratings.
    - **Expected Outcome:**
      - The reviews and ratings should not be accessible without an account.

### 6. Order Management and Returns

- **Objective:**
  - Validate the basic functionality of order management and the returns process.
- **Test Scenarios:**
  - **Test 1: View Order History:**
    - **Steps:**
      - Attempt to log in to an account (assuming no login is required).
      - Navigate to the order history.
    - **Expected Outcome:**
      - The user should be able to view their order history if login is not required.
  - **Test 2: Initiate a Return:**
    - **Steps:**
      - Attempt to log in to an account (assuming no login is required).
      - Select a recent order to initiate a return.
    - **Expected Outcome:**
      - The user should be able to initiate a return for the selected order if login is not required.
  - **Test 3: Track Return Status:**
    - **Steps:**
      - Attempt to log in to an account (assuming no login is required).
      - Navigate to the returns section.
    - **Expected Outcome:**
      - The user should be able to track the status of their return if login is not required.

### 7. Social Interaction

- **Objective:**
  - Validate the basic functionality of social interaction options.
- **Test Scenarios:**
  - **Test 1: Share a Product:**
    - **Steps:**
      - Navigate to a product on Amazon.
      - Attempt to share the product on a social network.
    - **Expected Outcome:**
      - The sharing feature should not be available without an account.
  - **Test 2: Recommend a Product:**
    - **Steps:**
      - Navigate to a product on Amazon.
      - Attempt to recommend the product to a friend.
    - **Expected Outcome:**
      - The recommendation feature should not be available without an account.
  - **Test 3: Social Media Integration:**
    - **Steps:**
      - Attempt to log in to Amazon using social media credentials (assuming no login is required).
      - Perform an action that integrates with a social media platform.
    - **Expected Outcome:**
      - The action should not be possible without an account.
  - **Test 4: Like or Upvote a Product:**
    - **Steps:**
      - Navigate to a product on Amazon.
      - Attempt to like or upvote the product.
    - **Expected Outcome:**
      - Liking or upvoting the product should not be possible without an account.
  - **Test 5: Comment on a Product:**
    - **Steps:**
      - Navigate to a product on Amazon.
      - Attempt to comment on the product.
    - **Expected Outcome:**
      - Commenting on the product should not be possible without an account.

### 8. Support and Assistance

- **Objective:**
  - Validate basic support and assistance features.
- **Test Scenarios:**
  - **Test 1: Access Help Pages:**
    - **Steps:**
      - Attempt to access help and assistance pages.
    - **Expected Outcome:**
      - Help pages should be accessible without an account.
  - **Test 2: Search for Assistance:**
    - **Steps:**
      - Attempt to perform a search for assistance.
    - **Expected Outcome:**
      - Relevant assistance information should be retrieved without an account.
  - **Test 3: Access FAQ:**
    - **Steps:**
      - Attempt to access the Frequently Asked Questions (FAQ) section.
    - **Expected Outcome:**
      - The FAQ section should be accessible without an account.

### 9. Security and Privacy

- **Objective:**
  - Validate basic security and privacy features.
- **Test Scenarios:**
  - **Test 1: Privacy Settings:**
    - **Steps:**
      - Attempt to check user privacy settings and options.
    - **Expected Outcome:**
      - Privacy settings should not be accessible without an account.

### 10. Personalized Recommendations

- **Objective:**

  - Validate the personalized recommendation system.

- **Test Scenarios:**
  - Interact with the platform and observe product recommendations.
  - **Expected Outcome:**
    - Accurate product recommendations are provided.

### 11. Wishlist

- **Objective:**

  - Validate wishlist functionality.

- **Test Scenarios:**
  - Use the platform to add and remove products to/from the wishlist.
  - **Expected Outcome:**
    - Products can be added and removed from the wishlist.

### 12. Product Comparison

- **Objective:**

  - Validate product comparison functionality.

- **Test Scenarios:**
  - Simulate comparing specifications and prices of multiple products.
  - **Expected Outcome:**
    - Products can be effectively compared.

### 13. Real-time Pricing

- **Objective:**

  - Validate real-time pricing updates.

- **Test Scenarios:**
  - Monitor and verify continuous price updates for products.
  - **Expected Outcome:**
    - Prices are accurately and promptly updated in real-time.

### 14. Prime Membership

- **Objective:**

  - Validate Prime membership benefits.

- **Test Scenarios:**
  - Explore and access Prime membership features if available without an account.
  - **Expected Outcome:**
    - Understand the benefits available to Prime members.

### 15. Affiliate Program

- **Objective:**

  - Validate the affiliate program functionality.

- **Test Scenarios:**
  - Explore information related to the affiliate program.
  - **Expected Outcome:**
    - Understand the concept and process of the affiliate program.

### 16. Special Sale Events

- **Objective:**

  - Validate special sale events functionality.

- **Test Scenarios:**
  - Explore information about special sale events like Black Friday.
  - **Expected Outcome:**
    - Understand the concept and details of special sale events.
