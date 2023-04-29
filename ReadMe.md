Contact Us Form using React and Axios

This project contains a Contact Us form that allows users to send a message to inquire about a product. The form has the following fields:

Name (required)
Email (required and should be validated)
Subject (optional)
Message (required)
To run the project, follow these steps:

Clone the repository to your local machine.

Navigate to the project directory and install the dependencies:

Copy code
npm install
Start the development server:

sql
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

The form is built using React and uses Axios to post the form data to an API endpoint. Form validation is done using React Hook Form.

The form has the following features:

The name, email, and message fields are required. If fields are empty, errors are displayed under each field.
The email field is validated as an email. If the email entered is invalid, an appropriate error is displayed under the email field.
On successful submission, a message is displayed at the top of the form indicating that the submission was successful.
On successful submission, the form fields are reset.
If there is an error during the submission, an error message is displayed at the top of the form informing the user that the submission wasn’t successful.
On clicking on submit, a loading indicator is displayed in the button to show that the form is submitting.