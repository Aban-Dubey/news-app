# React News App

This is a simple React.js news website that fetches headlines from the News API. It provides a clean user interface to display the latest news along with additional features such as fetching news related to specific keywords.

## Features

1. **Homepage:**
   - Displays the latest headlines.
   - Each headline includes the title, source, publication date, and a "Full News" button to view the complete article.

2. **Fashion, Politics, Cricket, etc. News:**
   - Clicking the respective buttons in the navigation bar fetches and displays news related to the selected category.
   - Each category fetches up to 5 headlines at a time.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-news-app.git

2. Navigate to the project directory:

bash
Copy code
cd react-news-app

3. Install dependencies:
bash
Copy code
npm install

4. Start the development server:
bash
Copy code
npm start
The app should now be running at http://localhost:3000.

Usage:
Open the website in your web browser and explore the latest headlines.
Click on the category buttons in the navigation bar to fetch and display news related to the selected category.

Flow:

1. Application Load:
When the application loads, it makes an API request to fetch the latest headlines using the top-headlines endpoint.

The fetched headlines are displayed on the homepage, showing the title, source, publication date, and a "Full News" button for each article.

2. Category Click:
When the user clicks on a category button (e.g., Fashion, Politics, Cricket) in the navigation bar, the application makes an API request to fetch news related to that category.

The fetched news for the selected category replaces the current headlines on the homepage.

Up to 5 headlines related to the selected category are displayed, each showing the title, source, publication date, and a "Full News" button.

**Built With:
React.js - Frontend library for building user interfaces.
News API - https://newsapi.org/login

**Acknowledgments:
This project is part of the React.js learning process and utilizes the News API for fetching news data.
Feel free to customize this README according to your project structure and additional features. If you have specific details you want to highlight or additional sections to include, feel free to modify accordingly.
