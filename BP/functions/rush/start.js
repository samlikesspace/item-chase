summon armor_stand rush.spawn ~~
spreadplayers ~ ~ 50 100 @e[type=armor_stand,name=rush.spawn]
tp @a[tag=runner] @e[name=rush.spawn]
execute at @e[name=rush.spawn] run spreadplayers ~ ~ 2 5 @a[tag=hunter]
playsound

scoreboard
