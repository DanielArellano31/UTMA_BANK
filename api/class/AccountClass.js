import AccountModel from "../models/AccountModel.js"

class ManagerAccounts{
    constructor(userId, accountNumber, accountType, balance){
        this.userId= userId;
        this.accountNumber= accountNumber;
        this.accountType= accountType;
        this.balance= balance;
        
    }
    //obtener cuentas
    async getAccounts(){
        try {
            const accounts =  await AccountModel.find();
            return accounts;
            
        } catch (error) {
            throw new Error (`Error al obtener cuentas: ${error}`);
        }
        
    }
    
    //obtener cuenta
    async getAccount (id){
        try {
            const account = await AccountModel.findById();
            return account;
        } catch (error) {
            throw new Error (`Error al obtener cuentas: ${error}`);
            
        }
    }
    //agregar BALANCE
    async addBalance(id, ammount){
        try {
            this.balance += ammount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance: this.balance
                }
            });
            return "Ok";
        } catch (error) {
            throw new Error (`Error al agregar monto: ${error}`);            
        }
        
    }
    //restar  BALANCE
    async restBalance(id, ammount){
        try {
            this.balance -= ammount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance: this.balance
                }
            });
            return "Ok";
        } catch (error) {
            throw new Error (`Error al restar monto: ${error}`);            
        }
        
    }
    
    //CREAR UNA CUENTA
    async createAccount(){
        try {
            const account = await AccountModel.create({
                userId:this.userId,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance
            });
            return account;
        } catch (error) {
            throw new Error (`Error al crear cuenta: ${error}`);            

        }
    }

}
export default ManagerAccounts;