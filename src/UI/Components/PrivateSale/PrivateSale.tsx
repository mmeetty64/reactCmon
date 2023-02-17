import React, { FC } from 'react'
import { IProps } from '../../../Interfaces/Components.interfaces';
import Service from '../../../Services/Service';

export const PrivateSale: FC<IProps> = ({address}) => {
    
    const privateSaleHandler = async(e: any) =>{
        e.preventDefault();
        const {target} = e;
        const req = await Service.privateSale(target[0].value, tokenPrice, address)
    }

    return (
    <div>PrivateSale</div>
  )
}
