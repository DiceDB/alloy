// this file will contain the command definitions

export interface DiceCmdMeta {
  title: string;
  syntax: string;
  body: string;
  url?: string;
}

export const DiceCmds: { [key: string]: DiceCmdMeta } = {
  SET: {
    title: 'SET',
    syntax:
      'SET key value [NX | XX] [EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL ]',
    body: 'The SET command in DiceDB is used to set the value of a key. If the key already holds a value, it is overwritten, regardless of its type. This is one of the most fundamental operations in DiceDB as it allows for both creating and updating key-value pairs.',
    url: 'https://dicedb.io/commands/set/',
  },
  GET: {
    title: 'GET',
    syntax: 'GET key',
    body: 'The GET command retrieves the value of a key. If the key does not exist, nil is returned.',
    url: 'https://dicedb.io/commands/get/',
  },
};
