export class Servant {
  constructor(
    public minAtk: number,
    public maxAtkBase: number,
    public maxAtkGrail: number,
    public minHp: number,
    public maxHpBase: number,
    public maxHpGrail: number,
    public attributes: [],
    public starAbsorption: number,
    public gender: string,
    public alignments: [],
    public npChargeOnDef: number,
    public npChargeOnAtk: number,
    public name: string,
    public imgUrls: [],
    public traits: [],
    public passiveSkills: [],
    public activeSkills: []
  ) { }
}
