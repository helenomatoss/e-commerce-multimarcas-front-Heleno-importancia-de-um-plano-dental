// src/mocks/handlers.js
import { rest } from 'msw'

export default [
  rest.post('https://api.odontoprev.com.br:8243/auth/login', (_, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),

  rest.get('https://api.odontoprev.com.br:8243/auth/user', (_, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    )
  }),
]
