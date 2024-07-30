//Registrarse el usuario
//Iniciar sesion
//Obtener informacion del usuario
//Crear transacciones 
//Pedir prestamos
//Borrar cuenta
//Actualizar
import userModel from "../models/UserModel.js";
import ManagerAccount from "./AccountClass.js";
import ManagerCard from "./cardClass.js";

class ManagerUser {
    constructor(email, phone, name, lastName, isInSession,
        password) {
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.password = password;
    }

    async register() {
        try {
            const user = await userModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                password: this.password,
            });
            const MA = new ManagerAccount(user._id, 12345, "Ahorro", 10000);
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id,currentAccount._id,"16digitos","Debito","de la fecha actual sumar 3 años","generar codigo de 3 cifras", "active");
            await MC.createCard();
            return user;


        } catch (error) {
            throw new Error (`Error al obtener cuentas: ${error}`);
            }

    }

}

