const ProfessortModel = require('../../models/professor/ProfessorModel')

let professors = [
    {id:0, name:"Enyo", university: "UFC",degree:"Graduado"},
    {id:1, name:"Cristiano", university: "UFC",degree:"Graduado"},
    {id:2, name:"Criston", university: "UFC",degree:"Graduado"},
    {id:3, name:"PH", university: "UFC",degree:"Graduado"}
]
let id = 4

class ProfessorService {

    static create(data) {
        let professor = new ProfessortModel(
            id++,
            data.name,
            data.university,
            data.degree)
        professors.push(professor)
        return professor
    }
    static retrieve(id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i].id == id) {
                return professors[i]
            }
        }
        return {}
    }
    static update(id, data) {
        for (let p of professors) {
            if (p.id == id) {
                p.name = data.name
                p.university = data.university
                p.degree = data.degree
                return p
            }
        }
        return null
    }
    static delete(id) {
        for (let i = 0; i < professors.length; i++) {
            if (professors[i].id == id) {
                professors.splice(i, 1)
                return true
            }
        }
        return false
    }
    static list() {
        return professors
    }

}

module.exports = ProfessorService