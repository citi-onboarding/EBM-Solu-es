import { Request, Response } from 'express';
import { Image } from '@models/Image';
import { Citi, Crud } from '../global'

export default class UserController implements Crud {

    async create(request: Request, response: Response){
        const {image, name} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, name);
        if(isAnyUndefined) return response.status(400).send();

        const newImage = { image, name };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Image, newImage);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Image);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: imageFound, message } = await Citi.findByID(Image, id); 
           
        if(!imageFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Image, imageFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { image, name } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, id);
        if(isAnyUndefined) return response.status(400).send();

        const imageWithUpdatedValues = { image, name };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Image, id, imageWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}