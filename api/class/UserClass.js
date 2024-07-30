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
            const MC = new ManagerCard(user._id, currentAccount._id, "16digitos", "Debito", "de la fecha actual sumar 3 años", "generar codigo de 3 cifras", "active");
            await MC.createCard();
            return user;


        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`);
        }
    }
    async Login(email, password) {
        try {
            const user = await userModel.findOne({ email: email });
            if (!user) {
                throw new Error("Usuario no registrado!")
            }
            if (user.password !== password) {
                throw new Error("Contraseña incorrecta!")
            }
            return "Succeeded"
        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`);
        }


}
     async getUserInfo(){
            try {
                const user = await userModel.findById(id);

            } catch (error) {
                throw new Error(`Error al obtener cuentas: ${error}`);

            }
        }


    async updateEmail(id, email){
        try {
            if(!email){
                throw new Error("Correo Invalido");
            }
            await userModel.findByIdAndUpdate(id,{
                $set:{email:email}
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar el correo: ${error}`);

        }

    }
    async updatePhone(id, phone){
        try {
            if(!phone){
                throw new Error("Numerode telefono Invalido");
            }
            await userModel.findByIdAndUpdate(id,{
                $set:{phone:phone}
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar el numero de telefono: ${error}`);

        }

    }
    async updatePassword(id, password){
        try {
            if(!password){
                throw new Error("Contraseña Invalida");
            }
            await userModel.findByIdAndUpdate(id,{
                $set:{password:password}
            });
            return "ok"
        } catch (error) {
            throw new Error(`Error al actualizar la contraseña: ${error}`);

        }

    }
    //Pendiente eliminar usuario

    async deleteUser(){

    }
}

export default ManagerUser;



