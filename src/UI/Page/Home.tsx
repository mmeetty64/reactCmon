import React, { useContext } from 'react'
import { Context } from '../../Context/ContextWrapper';
import { ReqWhiteList } from '../Components/ReqWhiteList/ReqWhiteList';
import { UserPrivateInfo } from '../Components/UserPrivateInfo/UserPrivateInfo';
import { UserPublicInfo } from '../Components/UserPublicInfo/UserPublicInfo';
import { ViewWhiteList } from '../Components/ViewWhiteList/ViewWhiteList';

const Home = () => {

  const { user } = useContext(Context)

  if (!user.address) {
    return <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Войдите в аккаунт</p>
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Ваш логин: {user.login}</p>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Ваш адрес: {user.address}</p>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Баланс токенов: {user.balance/ 10**12},{user.balance % 10**12}</p>
      <p className={'text-center mt-5'} style={{ fontSize: "40px" }}>Распределение токенов по группам:</p>
      {user.role == 1 ? <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Seed токены: {user.seedToken/ 10*12},{user.seedToken% 10*12}</p> : undefined}
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Private токены: {user.privToken/10**12},{user.privToken%10**12}</p>
      <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Public токенов: {user.publToken/10*12},{user.publToken%10*12}</p>
      {user.whiteList ? <p className={'text-center mt-5'} style={{ fontSize: "35px" }}>Вы в вайтлисте</p> : <ReqWhiteList login={user.login} address={user.address}/>}
      {user.role == 2 ? <ViewWhiteList address={user.address}/> : undefined}
      {user.role == 2 ? <UserPrivateInfo address={user.address}/> : undefined}
      {user.role == 3 ? <UserPublicInfo address={user.address}/> : undefined}
      
    </div>

  )
}
export default Home;