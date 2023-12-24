// https://bobbyhadz.com/blog/typescript-make-types-global
// To declare global types in TypeScript:

// Create a global.d.ts file and declare types in the global namespace.
// Add types or interfaces that need to be globally accessible.
// Make the file a module by using export {}.
export {};
declare global {
  interface Coordinate {
    x: number;
    y: number;
  }

  interface Shape {
    name: string;
    coordinates: Coordinate[];
    width: number;
    height: number;
  }

  interface Tile {
    shapeName: string;
    color: string;
    position: Coordinate;
  }

  interface Board {
    width: number;
    height: number;
    tiles: Tile[];
  }
  interface UserCore {
    email: string;
    full_name: string;
    picture: string;
  }
  interface UserFull extends UserCore {
    clientId: string;
    access_token: string;
  }
  interface ReturnCount {
    totalCount: number;
  }
  interface Unit {
    unit_index: string;
    unit_name: string;
    unit_id: string;
    price: string;
    hp: string;
    speed: string;
    atk_count: string;
    atk_pow: string;
    atk_divide: string;
    splash_range: string;
    attack_interval: string;
    range: string;
    projectile_speed: string;
    projectile_type: string;
    target: string;
    units: string;
    width: string;
    height: string;
    size: string;
  }

  interface Replay {
    BattleRecord: {
      playerRecords: PlayerRecords;
    };
  }
  interface PlayerRecords {
    PlayerRecord: PlayerRecord[];
  }
  interface PlayerRecord {
    id: string;
    name: string;
    seed: number;
    ad: number;
    playerRoundRecords: PlayerRoundRecords;
  }

  interface PlayerRoundRecords {
    PlayerRoundRecord: PlayerRoundRecord[];
  }

  interface PlayerRoundRecord {
    round: number;
    playerData: PlayerData;
  }
  interface PlayerData {
    reactCore: number;
    supply: number;
    preRounFightResult: string;
    units: Units;
    unitIndex: number;
  }
  interface Units {
    NewUnitData: NewUnitData;
  }
  type NewUnitData = NewUnitDatum[];
  interface NewUnitDatum {
    id: number;
    Index: number;
    RoundCount: number;
    Durability: number;
    Exp: number;
    Level: number;
    Position: Position;
    EquipmentID: number;
    IsRotate: boolean;
    SellSupply: number;
  }
  interface Position {
    x: number;
    y: number;
  }
}
