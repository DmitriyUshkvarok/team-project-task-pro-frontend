
## TaskProApp Frontend

TaskProApp is a comprehensive task management web application developed with modern technologies. Our frontend is developed with React and a host of other libraries that work together to offer an exceptional user experience.

The application allows an authorized user to create and manage tasks. Users can organize tasks into boards and columns, update them as needed, and even delete them. Furthermore, it supports choosing a custom background for the board and filtering tasks according to user requirements.

Tasks are represented as cards and can be moved from one column to another to reflect their progress. If users encounter any difficulties, they can easily send a message to our support team through the provided form.

# Features
- Task Management: Create, update, and delete tasks.
- Boards and Columns: Organize tasks into boards and columns for better visual tracking of progress.
- Custom Board Background: Customize the look of your board with different background options.
- Task Filtering: Easily filter tasks to quickly find what you're looking for.
- Drag and Drop: Move tasks from one column to another to reflect the task's status.
- Support: In-app form to send messages to the support team for any inquiries or assistance.

# Technologies Used

- React
- Redux with Redux Toolkit for state management
- Axios for API calls
- Bootstrap for responsive design
- Formik for forms
- Yup for form validation
- Styled Components for component-level styling
- React Router for routing
- React-toastify for notifications
- And other libraries for additional functionality (date-fns, dayjs, react-datepicker, react-icons, etc)

# Installation
To set up and run the project locally:

Clone this repository. Navigate to the project directory in your terminal.

Run to install all the necessary dependencies listed in package.json.
```bash
npm install
``` 



After installation, run to start the local server. It will open the application in your default browser.
```bash
npm start
```

For development mode with hot-reloads, run 

```dev
npm run dev
```

# Deployment
To build the app for production, run 

```bash
npm run build
```

After building, you can deploy the application by running 
```bash
npm run deploy
```
This will deploy the app using gh-pages.

# Contribution

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

# License
This project is MIT licensed.