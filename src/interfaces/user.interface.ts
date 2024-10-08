export interface IUser {
  id: number;
  email: string;
  password: string;
  role: 'user' | 'admin';
  name: string;
  lName: string;
  phone: string;
  image_url?: string;
}
