const say = require('say')
const superleap = [280100, 280101]
module.exports = function SuperleapCallOut(mod) {
    mod.hook('S_START_COOLTIME_SKILL', 3, event => {
        if(superleap.includes(event.skill.id)) {
            setTimeout(() => {
                say.speak('Beep')
            }, event.cooldown)
        }
    })
}