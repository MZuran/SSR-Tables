// default fe6 p56 0x860C978 movement rain?
// default fe6 p60 0x860C9AB movement snow?
// default fe6 p64 ???
// default fe6 unknown 0x00

// default fe7 unknown 0x00

export const FE6SRRHeader = "ClassTable,Name,Description,ID,Menu Class,Standing Map Anims,Movement Speed,Default Portrait,Sort Order,HP,Atk,Skl,Spd,Def,Res,Con,Mov,HP Cap,Atk Cap,Skl Cap,Spd Cap,Def Cap,Res Cap,Con Cap,Relative Power,HP Growth,Atk Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,??,??,Ability 1,Ability 2,Ability 3,Ability 4,Sword,Lance,Axe,Bow,Staff,Anima,Light,Dark,Battle Anim,Movement Cost,P56,P60,P64,fe6 unknown"
export const FE7SRRHeader = "ClassTable,Name,Description,ID,Menu Class,Standing Map Anims,Movement Speed,Default Portrait,Sort Order,HP,Atk,Skl,Spd,Def,Res,Con,Mov,HP Cap,Atk Cap,Skl Cap,Spd Cap,Def Cap,Res Cap,Con Cap,Relative Power,HP Growth,Atk Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,HP Promo,Atk Promo,Skl Promo,Spd Promo,Def Promo,Res Promo, Ability 1,Ability 2,Ability 3,Ability 4,Sword,Lance,Axe,Bow,Staff,Anima,Light,Dark,Battle Anim,Movement Cost,Movement Cost Rain,Movement Cost Snow,Def Bonus,Avo Bonus,Res Bonus,fe7 unknown"
export const FE8SRRHeader = "ClassTable,Name,Description,ID,Menu Class,Standing Map Anims,Movement Speed,Default Portrait,Sort Order,HP,Atk,Skl,Spd,Def,Res,Con,Mov,HP Cap,Atk Cap,Skl Cap,Spd Cap,Def Cap,Res Cap,Con Cap,Relative Power,HP Growth,Atk Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,HP Promo,Atk Promo,Skl Promo,Spd Promo,Def Promo,Res Promo, CharClassAbility,Sword,Lance,Axe,Bow,Staff,Anima,Light,Dark,Battle Anim,Movement Cost,Movement Cost Rain,Movement Cost Snow,Avo Bonus,Def Bonus,Res Bonus,Class Type"
export const FEBuilderHeader = "ClassTable,Name,Description,ID,Menu Class,Standing Map Anims,Movement Speed,Default Portrait,Sort Order,HP,Atk,Skl,Spd,Def,Res,Con,Mov,HP Cap,Atk Cap,Skl Cap,Spd Cap,Def Cap,Res Cap,Con Cap,Relative Power,HP Growth,Atk Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,HP Promo,Atk Promo,Skl Promo,Spd Promo,Def Promo,Res Promo, Ability 1,Ability 2,Ability 3,Ability 4,Sword,Lance,Axe,Bow,Staff,Anima,Light,Dark,Battle Anim,Movement Cost,Movement Cost Rain,Movement Cost Snow,Avo Bonus,Def Bonus,Res Bonus,Class Type"

export const unparsedFE6SRRHeader = "INLINE NewClassTable,Name,Details,ID,Menu Class,Standing Map Anims,Movement Speed,Generic Enemy Portrait,Sort Order,HP,Atk,Skl,Spd,Def,Res,Con,Mov,HP Cap,Atk Cap,Skl Cap,Spd Cap,Def Cap,Res Cap,Con Cap,Relative Power,HP Growth,Atk Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,??,??,Ability 1,Ability 2,Ability 3,Ability 4,Sword,Lance,Axe,Bow,Staff,Anima,Light,Dark,P48,P52,P56,P60,P64,???"
export const unparsedFE7SRRHeader = "INLINE NewClassTable,Class Name,Class Description,Class Number,This Class Promotes To,Map Sprite+ACM- (standing),Walking Speed,Default Portrait,Sort Order,Base HP,Base STR/MGC,Base SKL,Base SPD,Base DEF,Base MDF,Base CON,Base MOV,Max HP,Max STR/MGC,Max SKL,Max SPD,Max DEF,Max MDF,Max CON,Class Relative Power,HP Growth,Str Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,HP Promotion Bonus,Pow Promotion Bonus,SKL Promotion Bonus,SPD Promotion Bonus,DEF Promotion Bonus,RES Promotion Bonus,Class Ability 1,Class Ability 2,Class Ability 3,Class Ability 4,Base Sword Level,Base Lance Level,Base Axe Level,Base Bow Level,Base Staff Level,Base Anima Level,Base Light Level,Base Dark Level,Battle Animation Pointer,Movement Cost Pointer,Movement Cost(rain) Pointer,Movement Cost(snow) Pointer,Terrain Defense Bonus Pointer,Terrain Avoid Bonus Pointer,Terrain Resistance Bonus Pointer,+ACoAKgAq-UNKNOWN+ACoAKgAq- Pointer"
export const unparsedFE8SRRHeader = "0x807110,Name,Description,ID,Default Class Promoted From/To,Standing Map Anims,Move Speed,Generic Mug,N/A,HP,Atk,Skl,Spd,Def,Res,Con,Mov,HP Cap,Atk Cap,Skl Cap,Spd Cap,Def Cap,Res Cap,Con Cap,Class Relative Power,HP Growth,Atk Growth,Skl Growth,Spd Growth,Def Growth,Res Growth,Luck Growth,HP Promo Gain,Atk Promo Gain,Skl Promo Gain,Spd Promo Gain,Def Promo Gain,Res Promo Gain,CharClassAbility,Sword,Lance,Axe,Bow,Staff,Anima,Light,Dark,Battle Anims,Move Costs,Rain Move Costs,Snow Move Costs,Avo Bonus,Def Bonus,Res Bonus,Class Type"

export const headersObject = {
    parsed: {
        FE6: FE6SRRHeader,
        FE7: FE7SRRHeader,
        FE8: FE8SRRHeader
    },
    unparsed: {
        FE6: unparsedFE6SRRHeader,
        FE7: unparsedFE7SRRHeader,
        FE8: unparsedFE8SRRHeader
    }
}