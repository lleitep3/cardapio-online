
export const config = {
  appName: process.env.APP_NAME || 'no name',
  port: +(process.env.PORT || 5000),
  env: process.env.NODE_ENV || 'development',
}

