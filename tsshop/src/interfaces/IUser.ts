interface IUser {
    name?: string;
    email: string;
    age: string | number;
    gender: string;
    password: string;
    confirmPass?: string;
    isVerified?: boolean;
}

export default IUser;