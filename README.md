# Oh the Places You'll Go
A simple app to help you plan trips by aggregating things you might want to see from various sources.

## Project Structure
The project is split into `src` and `iac` folders.

### src
The main project in `src` is the React front-end. Code is organized in line with [feature sliced design](https://feature-sliced.design/)

### iac
The `iac` directory contains all infrastructure as code required for building, testing, and releasing Places You'll Go.

### content
The `content` directory contains static assests that are not essential to delivering the application, and thus don't need to be bundled with a frontend or backend