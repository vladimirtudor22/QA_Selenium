## Document Content

[Runtime Environment Configuration](#runtime-environment-configuration)

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

# Automated Testing Demo using Selenium WebDriver

In this automated testing demo utilizing Selenium WebDriver, I have chosen the Amazon.com platform due to its abundance of elements tagged with IDs/names.

## Test Scenarios

### Shopping Cart Functionality

- Verify that a product can be added to the cart.
- Confirm that the quantity of a product can be modified.
- Ensure that a product can be removed from the cart.

### Category-based Search

- Verify the ability to open the category menu.
- Select a category and a subcategory.
- Confirm the existence of a product within the chosen category.
  > [!NOTE]
  > Highlights information that users should take into account, even when skimming.

### Product Variant Selection

- Choose a phone case for its various options, particularly different colors.
- Verify the selection of all available color options.

### Search Bar Functionality

- Input "Forza Horizon 5" into the search field.
- Confirm the appearance of a relevant result, specifically the game "Forza Horizon 5".

### Placing an Order

- Select a product and click on the "Buy Now" button.
- Upon clicking, redirect to the login page.
- Press "Create an Account" and complete the form.
- Refrain from pressing the button to avoid creating an account on the platform.

These functionalities were chosen to comprehensively cover various aspects of the Amazon.com platform while ensuring non-intrusive testing.

> [!NOTE]
>
> ## Comprehensive Test Scenario
>
> To effectively test this functionality, we have devised the following comprehensive scenario:
>
> 1.  **Product Selection and Initiation of Purchase**
>
> - Select a product and click on the "Buy Now" button.
>
> 2.  **Login Screen Activation and Account Creation**
>
> - The login screen is triggered, click on "Create an Account".
>
> 3.  **Form Completion and Registration**
>
> - Complete the required form and click on the register button.
>
> 4.  **Account Creation and Provision of Details**
>
> - An account is successfully created, enabling the addition of shipping and billing information.
>
> 5.  **Order Placement**
>
> - Proceed to place the order.
>
> > However, it's important to note that this scenario can not be executed seamlessly. After clicking the create button, there is an additional step requiring the resolution of a captcha code.

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
