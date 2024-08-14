
# Blog Web Application

## Description
This is a simple blog web application built with Node.js, Express.js, and EJS. It allows users to create, view, edit, and delete blog posts. The application uses in-memory storage, so posts will not persist between server restarts.

## Features
- Create new blog posts
- View all posts on the home page
- View individual posts
- Edit existing posts
- Delete posts
- Responsive design for both desktop and mobile devices

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Body-parser
- Bootstrap (for styling)

## Installation
1. Clone the repository:
git clone https://github.com/yourusername/blog-web.git


Copy
2. Navigate to the project directory:
cd blog-web


Copy
3. Install dependencies:
npm install


Copy

## Usage
1. Start the server:
node app.js


Copy
2. Open a web browser and go to `http://localhost:3000`

## Project Structure
blog-web/
│
├── public/
│   └── css/
│       └── styles.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── compose.ejs
│   ├── post.ejs
│   └── edit.ejs
│
├── app.js
├── package.json
└── README.md

## Routes
- GET  /         - Home page (list of all posts)
- GET  /compose  - Page to create a new post
- POST /compose  - Submit a new post
- GET  /post/:id - View a specific post
- GET  /edit/:id - Page to edit a specific post
- POST /edit/:id - Submit an edited post
- POST /delete/:id - Delete a specific post

## Future Improvements
- Implement a database for persistent storage
- Add user authentication
- Implement comments on posts
- Add a rich text editor for post creation and editing

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
