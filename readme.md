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
