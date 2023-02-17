import Web3 from "web3";
import Login from "../UI/Page/Login";
import ABI from './ABI.json';


class Service {
    web3 = new Web3("http://localhost:8545")
    contract = new this.web3.eth.Contract(ABI as any, "0xb6cEfe464F72Fe61fc83E5A6e9eFf5fC7dE71171");
    async auth(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.authorisation(login, password).call({ from: address })
        } catch (error) {
            console.log(error);
        }
    }

    async reg(address: string, login: string, password: string) {
        try {
            return await this.contract.methods.registration(login, password).send({ from: address })
        } catch (error) {
            console.log(error);
        }
    }

    async reqWhiteList(login: string, address: string) {
        try {
            return await this.contract.methods.requestWhiteList(login).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }

    async viewReqWhiteList(address: string) {
        try {
            return await this.contract.methods.viewReqWhiteList().call({ from: address })
        } catch (error) {
            console.log(error);
        }
    }
    
    async applyWL(idRequest: number, answer: boolean, address: string) {
        try {
            return await this.contract.methods.applicationWL(idRequest, answer).send({from: address})
        } catch (error) {
            console.log(error);
        }
    }

    async userPrivateInfo(addUser: string, address: string) {
        try {
            return await this.contract.methods.userPrivateInfo(addUser).call({from: address})
        } catch (error) {
            console.log(error)
        }
    }

    async userPublicInfo(addUser: string, address: string) {
        try {
            return await this.contract.methods.userPublicInfo(addUser).call({from: address})
        } catch (error) {
            console.log(error)
        }
    }

    async privateSale(amount: number, tokenPrice: number, address: string){
        const _amount = BigInt(amount*tokenPrice).toString();
        try {
            return await this.contract.methods.privateSale(BigInt(amount*10**12)).send({from: address, value: _amount})
        } catch (error) {
            console.log(error)
        }
    }

    async viewTokenPrice(address: string){
        try {
            return await this.contract.methods.viewTokenPrice().call({from: address})
        } catch (error) {
            console.log(error)
        }
    }
}
export default new Service()