import { Request, Response } from "express";
import { IPerson } from "../Interfaces/IPerson";
import PersonService from "../services/person.service";
import bcrypt from 'bcrypt'
import { AppDataSource } from "../databases/db";
import Person from "../entities/Person";

class PersonController{
    public async addPerson(req:Request,res:Response){
        try {

            const reqBody:IPerson=req.body;
            const service=new PersonService();
            const result=await service.addPerson(reqBody.username,reqBody);
           
        
            return res.json(result)

        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }

    
    }

    public async getPerson(req: Request, res: Response){
        try {
            const service = new PersonService();
            const result =  await service.getServicePerson();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOnePerson(req: Request, res: Response){
        try {
            let idperson: number = parseInt(req.params.idperson)
            const service =  new PersonService();
            const result =  await service.getServiceOnePerson(idperson);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
    public async UpdatePerson(req: Request, res: Response){
        try {
            const idperson: number =  parseInt(req.params.idperson);
            const resBody:IPerson = req.body;
            const service = new PersonService();
            const result = await service.UpdateServiceProvider(idperson,resBody);
            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
               }
        }
    }



    public async deletePerson(req: Request, res: Response){
        try {
            const idperson: number =  parseInt(req.params.idperson);
            const service =  new PersonService();
            const result =  await service.deleteServiceProvider(idperson);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}
export default PersonController