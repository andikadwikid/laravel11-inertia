export type AuthData = {
    user: UserData;
};
export type FlashMessageData = {
    title: string;
    message: string;
    icon: string;
};
export type PageData = {
    location: string;
    flashMessage: FlashMessageData;
    auth: AuthData;
};
export type UserData = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string | null;
    created_at: string;
    gravatar: string;
};
