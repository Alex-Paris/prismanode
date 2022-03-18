import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { id, name, email } = request.body;

    const newUser = { id, name, email };

    const user = await prisma.user.create({
      data: newUser
    })

    return response.json(user);
  }
}
