export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  REFRESH_TOKEN: '/auth/refresh',
  LOGOUT: '/auth/logout',
  
  // Users
  GET_PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile',
  GET_WALLET: '/users/wallet',
  
  // Transactions
  CREATE_TRANSACTION: '/transactions',
  GET_TRANSACTIONS: '/transactions',
  GET_TRANSACTION: '/transactions/:id',
  
  // Batches
  CREATE_BATCH: '/batches',
  GET_BATCHES: '/batches',
  GET_BATCH: '/batches/:id',
  VERIFY_BATCH: '/batches/:id/verify',
  UPLOAD_PROOF: '/batches/:id/upload-proof',
  
  // Analytics
  GET_STATS: '/analytics/stats',
  GET_LEADERBOARD: '/analytics/leaderboard',
} as const;

export const USER_ROLES = {
  CITIZEN: 'citizen',
  COLLECTOR: 'collector',
  RECYCLER: 'recycler',
} as const;

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  FAILED: 'failed',
} as const;

export const VERIFICATION_STATUS = {
  PENDING: 'pending',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
} as const;

export const EIU_RATE = {
  GRAM_TO_EIU: 0.1, // 1 gram = 0.1 EIU
  COLLECTOR_FEE_RATE: 0.05, // 5% fee for collectors
} as const;

export const BLOCKCHAIN = {
  POLYGON_CHAIN_ID: 137,
  POLYGON_RPC_URL: 'https://polygon-rpc.com',
  GAS_LIMIT: 300000,
} as const;

export const IPFS = {
  GATEWAY_URL: 'https://earthx.infura-ipfs.io',
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'video/mp4'],
} as const;

export const APP_CONFIG = {
  NAME: 'EARTHX',
  VERSION: '1.0.0',
  DESCRIPTION: 'Plastic Recycling dApp on Polygon',
  SUPPORT_EMAIL: 'support@earthx.com',
  WEBSITE: 'https://earthx.com',
} as const;