// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";


/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */


export const humans: HumanHero[] = [
    {id: 3, name: "Thor", sex: "male", age: 23, health: 79,  },
    {id: 4, name: "Bruce Wayne", sex: "male", age: 40, health: 100,  },
    {id: 5, name: "Scarlet Witch", sex: "female", age: 31, health: 85,  },

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */

/* const bumbleBee = new TransformerHero(2, "BumbleBee",4,4,"Transformers");
const optimusPrime = new TransformerHero(1, "Optimus Prime",2, 4, "Transformers");
const megatron = new TransformerHero(6,"Megatron", 0, 6, "Transformers");

export const transformers: TransformerHero[] = [ bumbleBee, optimusPrime, megatron]; */

 export const transformers: TransformerHero[] = [
    {id: 2, name: "BumbleBee", wings: 4, wheels: 4, clan: "Transformers"},
    {id: 1, name: "Optimus Prime", wings: 2, wheels: 4, clan: "Transformers"},
    {id: 6, name: "Megatron", wings: 0, wheels: 6, clan: "Gonoszak"},

];
