import {green, red, yellow} from "console-log-colors"

export function clearTerminalOnStart() {
    console.clear()
}

export function printBotInfoOnStart(bot) {
    console.log(green("----------------------------"))
    console.log(green(`Bot online as ${bot.user.tag}`))
    console.log(green(`Currently seeing ${bot.guilds.cache.size} Guild`))
    console.log(green("----------------------------\n"))
}

export function printGuildNameAndSize(bot) {
    console.log(red("Current Guilds ranked by size:"))
    bot.guilds.cache.forEach(element => {
        console.log(red("\'" + element.id + "\'") + " => " + "Name: " + green(element.name) + ", Size: " + yellow(element.memberCount))
    });
    
}