# The Synthetic Supper

## A Speculative Fiction Story Generator

The Synthetic Supper is a web application that generates poignant "memory transcripts" from a speculative future. It allows users to create short, emotional stories that contrast authentic past experiences with a technologically mediated present.

## How to Use

### Backend Setup

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up your environment variables:**
    *   Create a file named `.env` in the `backend` directory.
    *   Add your AI provider's API key to the `.env` file like this:
        ```
        AI_API_KEY=your_api_key_here
        ```
4.  **Start the backend server:**
    ```bash
    node server.js
    ```
    The server will start on port 3001.

### Frontend Usage

1.  **Open `frontend/index.html` in your web browser.**
2.  **Fill out the form with your desired story parameters.**
3.  **Click "Generate Memory".**
4.  The generated story will appear below the form.

## Technical Stack

*   **Frontend:** HTML, CSS, JavaScript
*   **Backend:** Node.js, Express, Axios

## Project Status

The core functionality is in place. The frontend is connected to the backend, which in turn calls a large language model to generate stories. Further improvements are planned (see `todo.md`).