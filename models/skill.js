const skills = [
    { id: 122556, skill: 'HTML', level: 'intermediate' },
    { id: 126599, skill: 'CSS', level: 'beginner' },
    { id: 129114, skill: 'JavaScript', level: 'intermediate' },
    { id: 131664, skill: 'Node.JS', level: 'beginner' },
    { id: 133770, skill: 'Express', level: 'beginner' },
    { id: 135983, skill: 'MongoDB', level: 'ERROR 404 skill not found!'},
]
const getAll = () => skills
const getOne = (id) => skills.find((skill) => skill.id === parseInt(id))
module.exports = { getAll, getOne }
