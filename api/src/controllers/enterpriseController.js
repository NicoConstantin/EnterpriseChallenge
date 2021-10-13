const Enterprise = require('../db/models/enterpriseModel.js');

function createEnterprise (req,res,next){ 

    let { name, address, NIT, phone} = req.body;

    const enterpriseInstance = new Enterprise ({
        name,
        address,
        NIT,
        phone
    });

    enterpriseInstance.save()
    .then(()=>res.send('Enterprise created'))
    .catch(e=>next(e))
};

function readEnterprise (req,res,next){ 
    Enterprise.find()
    .then(rta=>res.send(rta))
    .catch(e=>next(e))
};

function updateEnterprise (req,res,next){ 
    let { id, name, address, NIT, phone } = req.body;

    Enterprise.findById( id )
    .then(enterpriseFound=>{
        if(name){
            enterpriseFound.name = name
        }
        if(address){
            enterpriseFound.address = address
        }
        if(NIT){
            enterpriseFound.NIT = NIT
        }
        if(phone){
            enterpriseFound.phone = phone
        }
        return enterpriseFound.save()
    })
    .then(enterpriseUpdated=>res.send(enterpriseUpdated))
    .catch(e=>next(e))
};

function deleteEnterprise (req,res,next){ 
    let { id } = req.body;

    Enterprise.deleteOne({ _id : id })
    .then((rta)=>res.send(rta))
    .catch(e=>next(e))
};


module.exports={
    createEnterprise,
    readEnterprise,
    updateEnterprise,
    deleteEnterprise
}