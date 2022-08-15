import { userModel } from "./UserModel.js";
import { compare } from "bcrypt";
// import { verify } from "jsonwebtoken";
import { createAccessToken, createRefreshToken, sendRefreshToken } from "../controller/Auth/token.js";

export const authModel = {
    async login(email, password, context) {
        const user = await userModel.findUserEmail("email", email);

        if (!user) {
            throw new Error("Erro ao tentar encontrar usuario");
        }
        
        const isValid = await compare(password, user.password);
        
        if (!isValid) {
            throw new Error("Erro ao tentar encontrar usuario");
        }
        
        sendRefreshToken(context.res, createRefreshToken(user));
        
        return {
            accessToken: createAccessToken(user),
            user,
        };
    },

    logout(context) {
        console.log(context.res)
        sendRefreshToken(context.res, "");
        console.log(context.res)
        return true;
    },
};