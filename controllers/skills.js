const Skill = require('../models/skill')

module.exports.index = (req, res) => res.render('skills/index', { skills: Skill.getAll() })
module.exports.show = (req, res) => res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    skillNum: req.params.id
})
module.exports.newSkill = (rew, res) => res.render('skills/new')
module.exports.create = (req, res) => {
    Skill.create(req.body)
    res.redirect('/skills')
}
module.exports.deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}