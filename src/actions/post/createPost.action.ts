// "use server";

// import DatabaseManager from "../../orm/database";
// import { User } from "../../constants/entities/user.entity";
// import { UpdateUserRequest } from "../../constants/requests/user.requests";
// import { WikResponse } from "../../constants/responses/response";
// import { UserHelper } from "../../helpers/user.helper";
// import { WikMapper } from "../../util/mapper.util";

// export async function CreatePostAction(data: UpdateUserRequest): Promise<WikResponse<User>> {
//     const existingUser = await Prisma.user.findFirst({ where: { userId: data.userId } });
//     if (!existingUser) return WikResponse.Failure({ error: "User not found." });

//     let updates = WikMapper.map(data, UpdateUserRequest);

//     const result = await Prisma.user.update({ where: { userId: data.userId }, data: updates as any });

//     return WikResponse.Update({ data: WikMapper.map(result, User, true), message: "User updated successfully." });
// }