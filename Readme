# 🚀 AllFileQuickShare

**AllFileQuickShare** is a simple and fast web application for sharing files and text through the internet.

The project is built with **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend.

For large file uploads, the application uses **GoFile directly from the frontend** instead of sending the file through the backend server. This helps prevent the backend server from becoming overloaded or crashing when users upload large files.

---

## ✨ Features

- 📁 Share files easily
- 📄 Share PDF files
- 📝 Share text
- 🔗 Generate shareable links
- 🔍 Retrieve shared content using an ID
- 📜 View recent uploads
- ☁️ Direct file upload to GoFile
- ⚡ Fast React + Vite frontend
- 🗄️ MongoDB for storing file/text information
- 📱 Responsive interface
- 🔒 Environment variable support
- 🪶 Lightweight backend

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript / JSX
- CSS
- GoFile API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools

- ESLint
- Git
- GitHub

---

## 📂 Project Structure

```text
AllFileQuickShare/
│
├── front/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   │
│   ├── src/
│   │   ├── Componnts/
│   │   │   ├── CommonComponent/
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   └── RecentUploads.jsx
│   │   │   │
│   │   │   ├── HomeComponent/
│   │   │   │   └── HeroSection.jsx
│   │   │   │
│   │   │   ├── ShareFileComponent/
│   │   │   │   └── HeroSection.jsx
│   │   │   │
│   │   │   └── ShareFilePdf/
│   │   │       └── HeroSection.jsx
│   │   │
│   │   ├── HomePage.jsx
│   │   ├── ShareFile.jsx
│   │   ├── ShareText.jsx
│   │   ├── ShowById.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env.example
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── DB/
│   │   └── db.js
│   │
│   ├── model/
│   │   └── DataSchema.js
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── LICENSE
└── Readme
```

---

# 🏗️ Architecture

AllFileQuickShare uses the frontend and backend for different responsibilities.

### Frontend

The React frontend handles:

- User interface
- File selection
- File uploads
- GoFile communication
- Text sharing
- Shareable links
- Displaying uploaded content

### Backend

The Node.js/Express backend handles:

- API requests
- MongoDB communication
- Saving file metadata
- Saving shared text information
- Retrieving shared content

### Why upload files directly to GoFile?

Large files can consume a significant amount of server resources if they are first uploaded to the Node.js backend.

Instead, AllFileQuickShare sends the file **directly from the user's browser to GoFile**.

```text
User Browser
     │
     ├── File ──────────► GoFile
     │
     └── Metadata ──────► Backend ──────► MongoDB
```

This means the backend doesn't need to receive and process the entire file.

For large uploads, this approach helps reduce:

- Server bandwidth usage
- Server memory usage
- Upload processing
- Backend load
- Risk of the Node.js server becoming overloaded

The backend primarily works with the resulting file information and application data rather than acting as a proxy for the entire file.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB
- Git

You also need access to the GoFile API if your frontend configuration requires GoFile credentials.

---

# 📥 Installation

Clone the repository:

```bash
git clone https://github.com/iamhacker2k24/AllFileQuickShare.git
```

Enter the project:

```bash
cd AllFileQuickShare
```

---

## Frontend Setup

Go to the frontend directory:

```bash
cd front
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

On Windows PowerShell, you can also use:

```powershell
Copy-Item .env.example .env
```

Add the required frontend environment variables to `.env`.

Then start the development server:

```bash
npm run dev
```

The Vite development server will normally be available at:

```text
http://localhost:5173
```

---

# 🖥️ Backend Setup

Open another terminal.

From the project root:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Configure your MongoDB connection and other backend variables.

Start the server:

```bash
npm run dev
```

If your backend uses a different start command, use the command defined in `server/package.json`.

---

# 🔐 Environment Variables

Environment variables are used to keep configuration and sensitive information outside the source code.

## Frontend

Create:

```text
front/.env
```

Use:

```text
front/.env.example
```

as a reference.

Your frontend environment may contain values related to:

```env
VITE_API_URL=your_backend_api_url
```

and other GoFile-related configuration used by your implementation.

> Never commit your real `.env` file to GitHub.

---

## Backend

Create:

```text
server/.env
```

Use:

```text
server/.env.example
```

as a reference.

For example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Use the exact variable names required by your application.

---

# 📤 File Sharing Flow

When a user uploads a file:

1. The user selects a file in the React application.
2. The frontend uploads the file directly to GoFile.
3. GoFile returns the required file information/link.
4. The frontend sends the required metadata to the backend.
5. The backend stores the metadata in MongoDB.
6. A shareable URL/ID can then be used to access the shared file.

This keeps large file data away from the Node.js server.

---

# 📝 Text Sharing

AllFileQuickShare can also be used to share text.

The general flow is:

1. User enters text.
2. Frontend sends the text to the backend.
3. Backend stores the text information in MongoDB.
4. A unique ID is generated.
5. The user can share the generated link.
6. The recipient can retrieve the content using the ID.

---

# 🗄️ Database

MongoDB is used to store application data.

The main database schema is located at:

```text
server/model/DataSchema.js
```

Database connection configuration is located at:

```text
server/DB/db.js
```

Depending on the content being shared, stored information may include:

- File name
- File type
- File size
- GoFile URL
- Share ID
- Text content
- Creation time
- Other metadata

---

# 📦 Production Build

To create a production build of the frontend:

```bash
cd front
npm run build
```

The production files will be generated in:

```text
front/dist/
```

You can preview the production build with:

```bash
npm run preview
```

---

# 🔒 Security

Do not commit sensitive environment variables.

Make sure these files remain private:

```text
.env
```

The repository includes `.env.example` files so that other developers can understand which configuration values are required without exposing your actual credentials.

Also make sure that any API keys or private credentials used by GoFile are not exposed unnecessarily in the frontend.

---

# 🌐 Deployment

AllFileQuickShare can be deployed as separate frontend and backend applications.

### Frontend

The Vite application can be deployed to a static hosting platform.

Build it using:

```bash
npm run build
```

### Backend

The Node.js/Express backend can be deployed to a Node.js-compatible hosting platform.

### Database

MongoDB Atlas can be used for production MongoDB hosting.

### GoFile

File uploads continue to use the GoFile service directly from the frontend according to the application's implementation.

---

# 🗺️ Roadmap

Some possible future improvements:

- [ ] User authentication
- [ ] Password-protected file sharing
- [ ] File expiration
- [ ] Drag-and-drop uploads
- [ ] Upload progress
- [ ] Multiple file uploads
- [ ] QR code sharing
- [ ] File preview
- [ ] Download statistics
- [ ] Automatic expired-file cleanup
- [ ] Improved validation
- [ ] Rate limiting
- [ ] Better error handling

---

# 🤝 Contributing

Contributions are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/my-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git add .
git commit -m "Add my feature"
```

5. Push your branch.

```bash
git push origin feature/my-feature
```

6. Open a Pull Request.

---

# 🐛 Issues

If you find a bug or have a feature request, please open an issue in the GitHub repository.

---

# 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for more information.

---

# 👨‍💻 Author

**Debabrata Paul**

GitHub: [@iamhacker2k24](https://github.com/iamhacker2k24)

---

⭐ If you find **AllFileQuickShare** useful, consider giving the repository a star!