import { Request, Response } from 'express';
import { Service } from '@models/Service';
import { Citi, Crud } from '../global'

export default class ImageController implements Crud{
    async create(request: Request, response: Response){
        const{icone, name_service} = request.body
        const isContentValid = Citi.areValuesUndefined(icone, name_service);    
        if(isContentValid == true){
            return response.status(400).send()
        }
        const newService = {icone, name_service}
        const {httpStatus, message} = await Citi.insertIntoDatabase(Service, newService);
        return response.status(httpStatus).send({ message });

    }
    async get(_request:Request, response: Response){
            const {httpStatus, values} = await Citi.getAll(Service);
            return response.status(httpStatus).send(values);
    }
    async delete(request:Request, response: Response){
        const {id} = request.params
        const {value: userFound, message } = await Citi.findByID(Service, id); 
        if(!userFound) return response.status(400).send({ message }); 
        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Service, userFound);
        return response.status(httpStatus).send({ messageFromDelete });

    }
    async update(request: Request, response: Response){
        const { id } = request.params;
        const {icone, name_service } = request.body;
        const isAnyUndefined = Citi.areValuesUndefined(icone, name_service, id);
        
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = {icone, name_service};
        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Service, id, userWithUpdatedValues);

        return response.status(httpStatus).send({ messageFromUpdate });
    }

}