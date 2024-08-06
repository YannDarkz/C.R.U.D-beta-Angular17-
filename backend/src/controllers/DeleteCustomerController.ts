import {FastifyRequest, FastifyReply} from 'fastify'
import { DeleteCustomerService } from '../services/DeleteCustomerService'

class DeleteCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {id} = request.query as {id: string}

        const customerService = new DeleteCustomerService();

        try {
            const customer = await customerService.execute({id})
            reply.status(200).send(customer)
            console.log("Result:", customer);

        } catch (error) {
            if (error instanceof Error) {
                reply.status(400).send({ error: error.message });
              } else {
                reply.status(400).send({ error: 'Unknown error occurred' });
              }
        }
    }
}

export {DeleteCustomerController}