execute if score stage rushDB matches 1 if score item rushDB matches 1 run titleraw @a title {"rawtext":[{"text":"§lAPPLE"}]}
execute if score stage rushDB matches 1 if score item rushDB matches 2 run titleraw @a title {"rawtext":[{"text":"§lDANDILION"}]}
execute if score stage rushDB matches 1 if score item rushDB matches 3 run titleraw @a title {"rawtext":[{"text":"§lSHEARS"}]}
execute if score stage rushDB matches 1 if score item rushDB matches 4 run titleraw @a title {"rawtext":[{"text":"§lFLINT & STEEL"}]}
execute if score stage rushDB matches 1 if score item rushDB matches 5 run titleraw @a title {"rawtext":[{"text":"§lSTONE STAIR"}]}

execute if score stage rushDB matches 2 if score item rushDB matches 1 run titleraw @a[tag="runner"] actionbar {"rawtext":[{"text":"§lAPPLE"}]}
execute if score stage rushDB matches 2 if score item rushDB matches 2 run titleraw @a[tag="runner"] actionbar {"rawtext":[{"text":"§lDANDILIOM"}]}
execute if score stage rushDB matches 2 if score item rushDB matches 3 run titleraw @a[tag="runner"] actionbar {"rawtext":[{"text":"§lSHEARS"}]}
execute if score stage rushDB matches 2 if score item rushDB matches 4 run titleraw @a[tag="runner"] actionbar {"rawtext":[{"text":"§lFLINT & STEEL"}]}
execute if score stage rushDB matches 2 if score item rushDB matches 5 run titleraw @a[tag="runner"] actionbar {"rawtext":[{"text":"§lSTONE STAIR"}]}


execute if score item rushDB matches 6 run scoreboard players set item rushDB 0
