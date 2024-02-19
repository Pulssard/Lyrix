# Lyrix

This project uses Express.js to create a server that allows users to search for song lyrics using the Genius API.

## Installation

1. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Obtain an API access token from the Genius API:
   - Sign up for an account on the [Genius API website](https://genius.com/developers).
   - Once you have your access token, create a `.env` file in the root directory of the project.
   - Add your Genius API access token to the `.env` file:

     ```plaintext
     GENIUS_API_TOKEN=your-access-token
     ```

2. Start the server:

    ```bash
    nodemon index.js
    ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

4. Enter the lyrics you want to search for and submit the form.

5. View the search results displayed on the webpage.

### Dependencies

1. Express.js
2. Axios
3. Body-parser
4. dotenv


