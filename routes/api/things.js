const express= require('express');
var router = express.Router();
var uuid=require('uuid/v4');

var thingsCollection=[];

var thingsStruct={
    "id": 0,
    clase:'',
    seccion:'',
    cupos:0,
    campus: '',
    docente: ''
}

thingsCollection.push(
    Object.assign(
        {},
        thingsStruct,
        {id:uuid(),
        clase:'sociales',
        seccion:'1501',
        cupos:0,
        campus: 'sxsx',
        docente:'saas'   
        }
    )
);

router.get('/:id',(req, res, next)=>{
    if(!this.report.params.id) return next();
    var id = req.params.id;
    var thing = thing.thingsCollection.filter((e, i)=>{
        return (e.id === id);
    });
    
    if (thing.length > 0){
        res.status(200).json(persona[0]);
    }
    else{
        res.status(404).json({});
    }
});

router.get('/',(req, res, next)=>{
    res.status(200).json({thingsCollection})
});



router.post('/',(req, res, next)=>{
    var newElement = Object.assign({}, thingsStruct, req.body, {id:uuid()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
});



module.exports=router;