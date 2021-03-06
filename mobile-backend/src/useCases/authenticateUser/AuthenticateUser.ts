// import { compare } from "bcryptjs";
// import { sign } from "jsonwebtoken"
// import { prisma } from "../../infra/database/prisma"

// interface IAuthUser {
//   email: string;
//   password: string;
// }

// class AuthenticateUser {
//   async execute({ email, password }: IAuthUser) {
//     const user = await prisma.user.findUnique({
//       where: {
//         email
//       }
//     });

//     if (!user) {
//       throw new Error("User does not exists");
//     }

//     const passwordMatch = await compare(password, user.password);

//     if (!passwordMatch) {
//       throw new Error("Email/Password incorrect");
//     }

//     const token = sign(
//       { email: user.email },
//       process.env.SECRET,
//       {
//         subject: user.id,
//         expiresIn: "1d",
//       }
//     );

//     return token;
//   }
// }

// export { AuthenticateUser }

