import Person from '../model/personSchema.mjs';

async function createPerson(req,res){
    let newPerson = await Person.create(req.body);
    res.json(newPerson);
}

async function getAllPersons(req,res){
    let persons = await Person.find({});
    if(persons.length == 0) res.status(404).json({msg:'No data found'});
    res.json(persons);
}
async function getPerson(req,res){
    let person = await Person.findById(req.params.id);
    if(!person) res.status(404).json({msg:'No data found with given Id'});
    res.json(person);
}
async function updatePerson(req,res){
    let updatePerson = await Person.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!updatePerson) res.status(400).json('Please check the detais');
    res.json(updatePerson);
}
async function deletePerson(req,res){
    let deletePerson = await Person.findByIdAndDelete(req.params.id);
    if(!deletePerson) res.status(400).json('Given Id doesnot exist');
    res.json(deletePerson);
}

export default {createPerson,getAllPersons,updatePerson,deletePerson,getPerson};