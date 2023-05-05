const { readFileSync } = require("fs")


const skills = readFileSync("./templates/template1/skillblock.html").toString()
const projectblock = readFileSync("./templates/template1/projectblock.html").toString()
const experience = readFileSync("./templates/template1/experienceblock.html").toString()
const education = readFileSync("./templates/template1/schoolblock.html").toString()
let template1 = readFileSync("./templates/template1/template1.html").toString()
let template2 = readFileSync("./templates/template2/template2.html").toString()
let template3 = readFileSync("./templates/template3/template3.html").toString()
let template4 = readFileSync("./templates/template4/template4.html").toString()


exports.replace_1 = (data, template) => {
    let replacededucation = "";
    data["education"].forEach(element => {
        let string = education
        string = string.replace("{%school%}", element["school"])
        string = string.replace("{%degree%}", element["degree"])
        string = string.replace("{%startDate%}", element["startDate"])
        string = string.replace("{%endDate%}", element["endDate"])
        string = string.replace("{%marks%}", element["marks"])
        string = string.replace("{%discipline%}", element["discipline"])
        replacededucation = replacededucation + string;
    });
    let replaceprojects = "";
    data["projects"].forEach(element => {
        let string = projectblock
        string = string.replace("{%title%}", element["title"])
        string = string.replace("{%link%}", element["link"])
        if (element["description"]) {
            string = string.replace("{%description%}", element["description"])
        }
        replaceprojects = replaceprojects + string;
    });
    let replacehobbies = "";
    if (data["hobbies"]) {
        data["hobbies"].forEach(element => {
            let string = skills
            string = string.replace("{%skill%}", element)
            replacehobbies = replacehobbies + string;
        });
    }
    let replacedeexperience = "";
    data["experience"].forEach(element => {
        let string = experience
        string = string.replace("{%organization%}", element["organization"])
        string = string.replace("{%startDate%}", element["startDate"])
        string = string.replace("{%endDate%}", element["endDate"])
        string = string.replace("{%position%}", element["position"])
        if (element["description"]) {
            string = string.replace("{%description%}", element["description"])
        }
        replacedeexperience = replacedeexperience + string;
    });
    let replaceskills = "";
    if (data["personal"]["skills"]) {
        const skill = data["personal"]["skills"].split(",")
        skill.forEach(element => {
            let string = skills
            string = string.replace("{%skill%}", element)
            replaceskills = replaceskills + string;
        });
    }
    // console.log(replaceskills)
    let html2;
    if (template === 1) {
        html2 = template1
    }
    if (template === 2) {
        html2 = template2
    }
    if (template === 3) {
        html2 = template3
    }
    if (template === 4) {
        html2 = template4
    }

    const personal = data["personal"]

    if (personal.github) {
        html2 = html2.replace("{%github%}", personal.github)
    }
    else {
        html2 = html2.replace("{%github%}", "")
    }
    if (personal.linkedin) {
        html2 = html2.replace("{%linkedin%}", personal.linkedin)
    }
    else {
        html2 = html2.replace("{%linkedin%}", "")
    }
    html2 = html2.replace("{%name%}", personal.name)
    html2 = html2.replace("{%mobile%}", personal.mobile)
    html2 = html2.replace("{%mobile%}", personal.mobile)
    html2 = html2.replace("{%email%}", personal.email)
    html2 = html2.replace("{%email%}", personal.email)
    html2 = html2.replace("{%schoolinfo%}", replacededucation)
    html2 = html2.replace("{%experienceinfo%}", replacedeexperience)
    html2 = html2.replace("{%hobbies%}", replacehobbies)
    html2 = html2.replace("{%skills%}", replaceskills)
    html2 = html2.replace("{%projects%}", replaceprojects)
    html2 = html2.replace("{%summary%}", data.summary)
    return html2;
}