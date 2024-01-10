
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import * as userService from "./service";

export async function POST(req, ctx){
  try {
    const params = ctx.params;
    const body = await req.json();
    const data = body.formData;

    // 1. Check validate fields
    const isValid = await userService.validate(data);
    if( !isValid ){
      return NextResponse.json(
        { message: "Invalid all fields." },
        { status: 400 },
      );
    }

    // 2. Check for duplicate users
    const exists = await userService.checkDuplicate(data.userId);
    if( exists ){
      return NextResponse.json(
        { message: "failure" },
        { status: 409 },
      );
    }

    // 3. Make hash password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashed = bcrypt.hashSync(data.userPwd, salt);
    data.userPwd = hashed;

    // 4. Create new user
    const result = await userService.addUser(data);
    console.log("result: ", result);

    return NextResponse.json(
      { message: "User added." },
      { status: 201 }
    );
  } catch( error ) {
    return NextResponse.json(
      { message: "failure" },
      { status: 500 },
    );
  }
}

// export default async function handler(req, ctx){
//   try {
//     const body = await req.json();
//     const data = body.formData;

//     if( req.method === "POST" ){
//       // 1. Check validate fields
//       const isValid = await userService.validate(data);
//       if( !isValid ){
//         return NextResponse.json(
//           { message: "Invalid all fields." },
//           { status: 400 },
//         );
//       }

//       // 2. Check for duplicate users
//       const exists = await userService.checkDuplicate(data.userId);
//       if( exists ){
//         return NextResponse.json(
//           { message: "failure" },
//           { status: 409 },
//         );
//       }

//       // 3. Make hash password
//       const saltRounds = 10;
//       const salt = bcrypt.genSaltSync(saltRounds);
//       const hashed = bcrypt.hashSync(data.userPwd, salt);
//       data.userPwd = hashed;

//       // 4. Create new user
//       const result = await userService.addUser(data);
//       console.log("result: ", result);

//       return NextResponse.json(
//         { message: "User added." },
//         { status: 201 }
//       );
//     } else {
//       return NextResponse.json(
//         { message: "failure" },
//         { status: 403 },
//       );
//     }
//   } catch( error ) {
//     return NextResponse.json(
//       { message: "failure" },
//       { status: 500 },
//     );
//   }
// }
