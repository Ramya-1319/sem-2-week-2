// Load environment variables from .env file if available
require('dotenv').config();

const config = {
  // Environment settings
  env: process.env.NODE_ENV || 'development',

  // Server settings
  server: {
    port: process.env.PORT || 5000,
    hostname: process.env.HOSTNAME || 'localhost',
    protocol: process.env.PROTOCOL || 'http',
  },

  // Database configuration
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/my_database',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h', // Token expiration time
  },

  // API keys for external services (e.g., Google, AWS, etc.)
  apiKeys: {
    google: process.env.GOOGLE_API_KEY || '',
    aws: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    }
  },

  // Email service configurations
  email: {
    smtpHost: process.env.SMTP_HOST || 'smtp.mailtrap.io',
    smtpPort: process.env.SMTP_PORT || 587,
    smtpUser: process.env.SMTP_USER || '',
    smtpPassword: process.env.SMTP_PASSWORD || ''
  }
};

module.exports = config;
