// CREAR UNA TARJETA
//OBTENER UNA TARJETA
//OBTENER TARJETAS
import CardModel from "../models/CardModel.js";

class ManagerCard{
    constructor( userId,accountId,cardNumber,cardType,expirationDate,securityCode,status){
        this.userId = userIdstatus;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;

    }
    async createCard(){
        try {
            await CardModel.create({
                userIdstatus:this.userId,
                accountId:this.accountId,
                cardNumber:this.cardNumber,
                cardType:this.cardType,
                expirationDate:this.expirationDate,
                securityCode:this.securityCode,
                status:this.status,
       
               });
       return "Ok";
        } catch (error) {
            throw new Error (`Error al crear tarjeta: ${error}`);
        }
    }
       async getCards(){
        try {
            const cards =  await CardModelModel.find();
            return cards;
            
        } catch (error) {
            throw new Error (`Error al obtener cuentas: ${error}`);
        }
        
    }
    
    async getCard (id){
        try {
            const card = await CardModel.findById();
            return card;
        } catch (error) {
            throw new Error (`Error al obtener cuentas: ${error}`);
            
        }
    }
}

export default ManagerCard;