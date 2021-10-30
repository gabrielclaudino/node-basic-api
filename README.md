<h1 align="center">Node Basic API</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/GHClaudino" target="_blank">
    <img alt="Twitter: GHClaudino" src="https://img.shields.io/twitter/follow/GHClaudino.svg?style=social" />
  </a>
</p>

>  A basic node REST API implementation using Koa and MongoDB 

## Installation


1. Clone the repo
   ```sh
   git clone https://github.com/gabrielclaudino/node-basic-api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file in the root folder and fill it with the `.env.example` content
4. Start the application
   ```sh
   npm run dev
   ```

Now, you can access in your browser: http://localhost:3002/


## Roadmap

- [x] Setup the basic structure;
- [x] Create the README file;
  - [ ] Write a portuguese version;
- [ ] Setup Jest;
- [ ] Setup Mongo;
  - [ ] Create a dockerfile;
  - [ ] Seed the database;
- [ ] Create a pre-commit hook with Husky;
- [ ] Create the CI/CD with Github Actions;
- [ ] Detail this roadmap;

## License
Distributed under the MIT License. See `LICENSE` file for more information.