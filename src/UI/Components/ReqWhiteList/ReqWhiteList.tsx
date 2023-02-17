import React, { FC, useContext } from 'react'
import { Button } from 'react-bootstrap';
import { Context } from '../../../Context/ContextWrapper'
import Service from '../../../Services/Service';
import { IProps } from '../../../Interfaces/Components.interfaces';

interface WhiteProps extends IProps {
    login: string
}

export const ReqWhiteList: FC<WhiteProps> = ({login, address}) => {
    const whiteListHandler = async(e: any) => {
        e.preventDefault();
        const req = await Service.reqWhiteList(login, address);
    }
    return (
        <Button variant="dark" onClick={whiteListHandler} style={{fontSize: "25px", marginTop: "25px"}}>Запросить добавление в вайтлист</Button>
    )
}
