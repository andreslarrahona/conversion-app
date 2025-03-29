# Vue.js Unit Converter

A mobile-first web application developed in Vue.js for unit conversion (temperature, pressure and torque), with comprehensive Jest test coverage. This project demonstrates responsive design principles starting from mobile devices, complex conversion logic, and test-driven development practices.


## Key Highlights

- **Composable architecture**: Conversion logic abstracted into a custom composable (`useUnitConverter`) for clean separation of concerns.
- **Comprehensive testing**: 3 test suites covering rendering, interactions, and conversion accuracy with Jest.
- **Performance optimized**: Calculations happen in real-time without unnecessary re-renders.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development with custom gradients and animations.

## Technologies Used

- **Vue.js 3**: Composition API with `<script setup>` syntax
- **Tailwind CSS**: For styling with custom gradients and responsive design
- **Jest**: For comprehensive unit testing (100% coverage on critical logic)
- **Font Awesome**: For UI icons
- **HTML/CSS**: Additional custom styles where needed

## How It Works

1. **Select measurement type**: Choose between Temperature, Pressure, or Torque.
2. **Input value**: Enter a numerical value in the input field.
3. **Select units**: Choose source and target units from dropdowns.
4. **View result**: The converted value appears instantly in the output field.
5. **Swap units**: Click the rotate button to invert the conversion direction.

## Test Coverage

- **Rendering tests**: Verify all critical UI elements render correctly.
- **Interaction tests**: Confirm dropdowns, unit swapping, and input handling work as expected.
- **Conversion tests**: 15+ test cases validating accurate unit conversions across different measurement types.

## Screenshots

Main page
![Main page](./public/screenshots/conversion-app-screenshot-1.png)

Test suites results
![Tests](./public/screenshots/conversion-app-screenshot-2.png)


### Why This Project?

This project showcases:

- My ability to implement complex mathematical logic in a clean, maintainable way
- Proficiency in Vue 3's Composition API with composables
- Strong testing skills with Jest (including parameterized tests)
- UI/UX design skills with Tailwind CSS
- Attention to edge cases and precision in engineering calculations