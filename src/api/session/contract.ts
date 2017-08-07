export type SessionResponse = {
    IsValid: boolean;
    IsAnonymous: boolean;
    Roles?: string[];
    UserName?: string;
};