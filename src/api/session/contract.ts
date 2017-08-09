export type SessionResponse = {
    isValid: boolean;
    isAnonymous: boolean;
    roles?: string[];
    userName?: string;
};