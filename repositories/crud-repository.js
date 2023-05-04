const Logger=require('../config')

class CrudRepository{

    constructor(model){
        this.model=model;
    }
    
    async create(data){
        try{
            const result=await this.model.create(data);
            return result;
        }
        catch(error){
            Logger.error('Something went wrong in the crud Repo : create');
            throw error;
        }
    }

    async destroy(data){
        try{
            const result=await this.model.destroy({
                where:{
                    id:data
                }
            });
            return result;
        }
        catch(error){
            Logger.error('Something went wrong in the crud Repo : destroy');
            throw error;
        }
    }

    async get(data){
        try{
            const result=await this.model.findByPk(data);
            return result;
        }
        catch(error){
            Logger.error('Something went wrong in the crud Repo : get');
            throw error;
        }
    }

    async getAll(){
        try{
            return await this.model.findAll()
        }
        catch(error){
            Logger.error('Something went wrong in the crud Repo : getAll');
            throw error;
        }
    }

    async update(id,data){
        try{
            return await this.model.update(data,{
                where:{
                    id:id
                }
            })
        }
        catch(error){
            Logger.error('Something went wrong in the crud Repo : getAll');
            throw error;
        }
    }
}

module.exports=CrudRepository