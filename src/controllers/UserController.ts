import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  // public async create(request: Request, response: Response): Promise<Response> {
  //   const user_id = request.user.id;
  //   const { provider_id, date } = request.body;

  //   const appointment = await createAppointment.execute({ provider_id, user_id, date })

  //   return response.json(appointment);
  // }
}
