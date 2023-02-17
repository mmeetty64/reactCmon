import { FC } from "react";
import { Header } from "../HEADER/Header";


interface ILayout{
    children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
        <Header/>
        <div style={{width: "80%", margin: "0 auto", marginTop: "3rem"}}>{children}</div>
        </>
    )
}
