export interface User {
  id: number;
  uuid: string;
  wallet_address?: string;
  email: string;
  username: string;
  full_name?: string;
  phone?: string;
  role: UserRole;
  eiu_balance: number;
  is_active: boolean;
  email_verified: boolean;
  profile_image_url?: string;
  location_lat?: number;
  location_lng?: number;
  address?: string;
  created_at: Date;
  updated_at: Date;
}

export enum UserRole {
  CITIZEN = 'citizen',
  COLLECTOR = 'collector',
  RECYCLER = 'recycler'
}

export interface Transaction {
  id: number;
  uuid: string;
  transaction_hash?: string;
  citizen_id: number;
  collector_id: number;
  weight_grams: number;
  eiu_earned: number;
  eiu_fee: number;
  transaction_type: string;
  status: TransactionStatus;
  polygon_block_number?: number;
  polygon_transaction_index?: number;
  gas_used?: number;
  gas_price?: number;
  notes?: string;
  created_at: Date;
  updated_at: Date;
}

export enum TransactionStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed'
}

export interface Batch {
  id: number;
  uuid: string;
  collector_id: number;
  recycler_id?: number;
  batch_name: string;
  total_weight_grams: number;
  verification_status: VerificationStatus;
  ipfs_proof_hash?: string;
  ipfs_proof_url?: string;
  proof_type?: string;
  verification_notes?: string;
  verified_at?: Date;
  verified_by?: number;
  rejection_reason?: string;
  blockchain_batch_id?: string;
  polygon_block_number?: number;
  created_at: Date;
  updated_at: Date;
}

export enum VerificationStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected'
}

export interface UserSession {
  id: number;
  user_id: number;
  token_hash: string;
  device_info?: string;
  ip_address?: string;
  expires_at: Date;
  is_active: boolean;
  created_at: Date;
}

export interface AuditLog {
  id: number;
  user_id?: number;
  action: string;
  table_name?: string;
  record_id?: number;
  old_values?: any;
  new_values?: any;
  ip_address?: string;
  user_agent?: string;
  created_at: Date;
}

// API Request/Response Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
  full_name?: string;
  phone?: string;
  role: UserRole;
}

export interface CreateTransactionRequest {
  citizen_id: number;
  weight_grams: number;
  notes?: string;
}

export interface CreateBatchRequest {
  batch_name: string;
  total_weight_grams: number;
  transaction_ids: number[];
}

export interface VerifyBatchRequest {
  batch_id: number;
  verification_status: VerificationStatus;
  verification_notes?: string;
  rejection_reason?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  expires_at: Date;
}

// Mobile App Specific Types
export interface Location {
  latitude: number;
  longitude: number;
}

export interface MediaUpload {
  uri: string;
  type: 'image' | 'video';
  name?: string;
}

export interface QRData {
  type: 'transaction' | 'batch' | 'user';
  id: string;
  timestamp: number;
}

// Blockchain Types
export interface PolygonTransaction {
  hash: string;
  blockNumber: number;
  transactionIndex: number;
  gasUsed: string;
  gasPrice: string;
  from: string;
  to: string;
  value: string;
}

export interface IPFSUploadResult {
  hash: string;
  url: string;
  size: number;
}