import { ReactNode } from "react";

interface IValues {
    getUser(data: IUser): void;
    user: IUser;
}

interface IUser {
    address: string,
    login: string;
    balance: number;
    role: number;
    whiteList: boolean;
    investor: boolean;
    seedToken: number;
    privToken: number;
    publToken: number;
}
interface IProps {
    children: ReactNode;
}

export type {
    IValues,
    IUser,
    IProps
}