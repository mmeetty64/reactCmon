import React, { FC, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { IProps } from '../../../Interfaces/Components.interfaces';
import Service from '../../../Services/Service';

export const UserPublicInfo: FC<IProps> = ({ address }) => {

    const [infoPublToken, setInfoPublToken] = useState<number>(-1)

    const privateInfoHandler = async (e: any) => {
        e.preventDefault();
        const { target } = e;
        const data = await Service.userPublicInfo(target[0].value, address)
        if (data) {
            setInfoPublToken(data);
        }
    }
    return (
        <div>
            <Form onSubmit={privateInfoHandler} style={{ margin: "0 auto" }}>
                <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Информация о приватных токенах</p>

                <Form.Group className="text-center mb-3">
                    <Form.Label className={'text-center'} style={{ fontSize: "25px" }}>Введите адрес пользователя: </Form.Label>
                    <Form.Control type="text" placeholder="Адрес пользователя" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Подтвердить
                </Button>
            </Form>
            {
                infoPublToken >= 0 ? <p className={'text-center mt-4'} style={{ fontSize: "25px" }}>У пользователя {infoPublToken / 10**12},{infoPublToken % 10**12} публичных токенов</p> : undefined
            }
        </div>
    )
}
