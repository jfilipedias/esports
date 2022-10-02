# eSports

An project to match duo to eSports.

## Technologies

- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [NodeJS](https://nodejs.org/)
- [Expo](https://expo.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://prisma.io/)
- [SQlite](https://sqlite.org/)

## Getting Started

Install de dependencies on `mobile`, `server` and `web` applications:

```sh
npm install
```

Create a `.env` file on `server` application root:

```
DATABASE_URL="file:../database/db.sqlite"
```

Load the .env variables on prisma:

```sh
npx prisma generate
```

LogIn on expo:

```sh
expo login
```

## Next Level

- [ ] Responsiveness
- [ ] Games carrousel (Keen-Slider)
- [ ] Feedback toast (Radix UI)
- [ ] Form validation (React Hook Form, Zod)
- [ ] SSO Auth
- [ ] Adds push notifications on back-end

## License

This project is licensed under the MIT. Consult the [LICENSE](LICENSE) for more information.
