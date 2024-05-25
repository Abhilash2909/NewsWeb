# NewsWeb

NewsWeb is a React-based web application that provides the latest news across various categories such as Trending, Technology, Business, Health, Science, Sports, and Entertainment. It utilizes the NewsAPI (https://newsapi.org/) to fetch real-time news data, allowing users to stay updated on current events.

In addition to news browsing, NewsWeb also features dark mode, bookmarking, sharing, and other functionalities to enhance the user experience.

## Features

- **Dark Mode**: Toggle between light and dark themes.
- **Category Navigation**: Easily switch between news categories using a dropdown menu.
- **Bookmarks**: Bookmark your favorite articles.
- **Share**: Share articles on social media.
- **Responsive Design**: Works on all devices with a responsive design.
- **Trending Section**: A separate section for trending news.
- **Performance Optimization**: Cached articles for faster load times.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Abhilash2909/newsweb.git
    ```
2. Navigate to the project directory:
    ```sh
    cd newsweb
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and add your NewsAPI key:

```plaintext
NEWS_API_KEY=your_newsapi_key_here
```

## Running the Application

To start the development server, run the following command:
    ```
    npm run dev
    ```
    
The application will be available at 
http://localhost:5173

## File Structure
```sh
    NewsWeb
    ├── public
    │   └── index.html
    ├── src
    │   ├── assets
    │   │   └── image.jpg
    │   ├── components
    │   │   ├── Navbar.jsx
    │   │   ├── NewsBoard.jsx
    │   │   ├── NewsItem.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── App.css
    ├── .gitignore
    ├── package.json
    ├── vite.config.js
    └── README.md
```

## Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
