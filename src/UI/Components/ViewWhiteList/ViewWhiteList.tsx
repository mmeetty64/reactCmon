import { FC, useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { IProps } from "../../../Interfaces/Components.interfaces";
import Service from "../../../Services/Service";

interface IWhiteList {
    name: string;
    wallet: string;
}

export const ViewWhiteList: FC<IProps> = ({ address }) => {

    const [whiteList, setWhiteList] = useState<IWhiteList[]>([]);

    useEffect(() => {
        (async () => {
            const viewWhite: IWhiteList[] = await Service.viewReqWhiteList(address);
            setWhiteList(viewWhite)
        })()
    }, [whiteList])

    const applyListHandler = async (index: number, answer: boolean, address: string) => {
        const apply = await Service.applyWL(index, answer, address)
    }
    return (
        <ListGroup as="ol" numbered>
            {whiteList.map((el: IWhiteList, idx: number) => {
                if (el.wallet.includes("000000")) return;
                return <ListGroup.Item key={idx} as="li">
                    Имя: {el.name} | Адрес: {el.wallet}
                    <Button variant="success" style={{ marginLeft: "10px" }} onClick={() => applyListHandler(idx, true, address)}>Принять</Button>
                    <Button variant="danger" style={{ marginLeft: "10px" }} onClick={() => applyListHandler(idx, false, address)}>Отклонить</Button>
                </ListGroup.Item>
            })}
        </ListGroup>
    )
}