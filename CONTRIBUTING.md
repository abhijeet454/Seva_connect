# Contributing to Seva Connect

First off, thanks for taking the time to contribute! 🎉

## Development Setup

1. Fork the repository and clone it locally.
2. Run `npm install` in both the `client` and `server` directories.
3. Copy `.env.example` to `.env` in both directories and add your environment-specific credentials.
4. Run `npm start` in the `server` directory to boot up the backend.
5. Run `npm start` in the `client` directory to run the frontend app.

## Branching Strategy
- `main`: Contains production-ready code.
- `dev` (if available): Contains feature branches merged for testing.
- Feature branches should be named `feature/your-feature-name`.

## Commit Guidelines
Write clear, concise commit messages. 
- Prefix commits with `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, or `chore:`.

## Pull Requests
1. Ensure your code lints correctly.
2. Test your changes manually to ensure no existing feature breaks.
3. Describe the change thoroughly in your PR.
