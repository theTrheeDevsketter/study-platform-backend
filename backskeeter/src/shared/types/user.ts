import { AuthProvider } from './auth'; 


export interface User {
    id: string;

    provider: AuthProvider;

    providerId: string;

    displayName: string;

    photos: {
        value: string;
    }[];
}