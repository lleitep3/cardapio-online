
export const config = {
  appName: process.env.APP_NAME || 'NO NAME',
  port: +(process.env.PORT || 5000),
  env: process.env.NODE_ENV || 'development',
}

