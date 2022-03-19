import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { id, name, email, groups } = request.body;

    const user = await prisma.user.upsert({
      where: {
        id
      },
      update: {
        name,
        email,
        groups: {
          upsert: {
            where: {
              id: groups.id
            },
            update: {
              title: groups.title
            },
            create: groups
          }
        }
      },
      create: {
        id,
        name,
        email,
        groups: {
          connectOrCreate: {
            create: groups,
            where: {
              id: groups.id
            }
          }
        }
      },
      include: {
        groups: {
          select: {
            title: true
          }
        }
      }
    })



    return response.json(user);
  }
}
