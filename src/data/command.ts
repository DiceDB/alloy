// This file contains the command definitions

export interface DiceCmdMeta {
  title: string;
  syntax: string;
  body: string;
  url?: string;
}

export const DiceCmds: { [key: string]: DiceCmdMeta } = {
  BITCOUNT: {
    title: "BITCOUNT",
    syntax: "BITCOUNT key [start end]",
    body: "Counts the number of set bits (population counting) in a string. The optional start and end arguments specify a range of bytes to count.",
    url: "https://dicedb.io/commands/bitcount/",
  },
  BITOP: {
    title: "BITOP",
    syntax: "BITOP operation destkey key [key ...]",
    body: "The BITOP command performs bitwise operations between strings (AND, OR, XOR, NOT) and stores the result in the destination key.",
    url: "https://dicedb.io/commands/bitop/",
  },
  BITPOS: {
    title: "BITPOS",
    syntax: "BITPOS key bit [start] [end]",
    body: "The BITPOS command returns the position of the first bit set to 1 or 0 in a string, optionally looking within a specific range.",
    url: "https://dicedb.io/commands/bitpos/",
  },
  SET: {
    title: "SET",
    syntax:
      "SET key value [NX | XX] [EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]",
    body: "The SET command in DiceDB is used to set the value of a key. If the key already holds a value, it is overwritten, regardless of its type. This is one of the most fundamental operations in DiceDB as it allows for both creating and updating key-value pairs.",
    url: "https://dicedb.io/commands/set/",
  },
  GET: {
    title: "GET",
    syntax: "GET key",
    body: "The GET command retrieves the value of a key. If the key does not exist, nil is returned.",
    url: "https://dicedb.io/commands/get/",
  },
  DEL: {
    title: "DEL",
    syntax: "DEL key [key ...]",
    body: "The DEL command removes the specified keys. A key is ignored if it does not exist.",
    url: "https://dicedb.io/commands/del/",
  },
  EXISTS: {
    title: "EXISTS",
    syntax: "EXISTS key [key ...]",
    body: "The EXISTS command checks if one or more keys exist. It returns the number of keys that exist.",
    url: "https://dicedb.io/commands/exists/",
  },
  INCR: {
    title: "INCR",
    syntax: "INCR key",
    body: "The INCR command increments the number stored at the key by one. If the key does not exist, it is set to 0 before performing the operation.",
    url: "https://dicedb.io/commands/incr/",
  },
  DECR: {
    title: "DECR",
    syntax: "DECR key",
    body: "The DECR command decrements the number stored at the key by one. If the key does not exist, it is set to 0 before performing the operation.",
    url: "https://dicedb.io/commands/decr/",
  },
  DECRBY: {
    title: "DECRBY",
    syntax: "DECRBY key decrement",
    body: "The DECRBY command decrements the number stored at key by the given decrement.",
    url: "https://dicedb.io/commands/decrby/",
  },
  ECHO: {
    title: "ECHO",
    syntax: "ECHO message",
    body: "The ECHO command returns the given message as a bulk string.",
    url: "https://dicedb.io/commands/echo/",
  },
  EXPIRE: {
    title: "EXPIRE",
    syntax: "EXPIRE key seconds",
    body: "The EXPIRE command sets a timeout on key. After the timeout has expired, the key will be automatically deleted.",
    url: "https://dicedb.io/commands/expire/",
  },
  EXPIREAT: {
    title: "EXPIREAT",
    syntax: "EXPIREAT key timestamp",
    body: "The EXPIREAT command works exactly like EXPIRE but instead of specifying the number of seconds for the key to live, it takes an absolute Unix timestamp.",
    url: "https://dicedb.io/commands/expireat/",
  },
  MGET: {
    title: "MGET",
    syntax: "MGET key [key ...]",
    body: "The MGET command retrieves the values of multiple keys. If a key does not exist, nil is returned for that key.",
    url: "https://dicedb.io/commands/mget/",
  },
  MSET: {
    title: "MSET",
    syntax: "MSET key value [key value ...]",
    body: "The MSET command sets the given keys to their respective values. This is a faster alternative to issuing multiple SET commands.",
    url: "https://dicedb.io/commands/mset/",
  },
  HSET: {
    title: "HSET",
    syntax: "HSET key field value [field value ...]",
    body: "The HSET command sets the specified fields to their respective values in a hash stored at key. If the key does not exist, a new key holding a hash is created.",
    url: "https://dicedb.io/commands/hset/",
  },
  HGET: {
    title: "HGET",
    syntax: "HGET key field",
    body: "The HGET command retrieves the value of a specific field from a hash stored at the key.",
    url: "https://dicedb.io/commands/hget/",
  },
  HDEL: {
    title: "HDEL",
    syntax: "HDEL key field [field ...]",
    body: "The HDEL command removes the specified fields from a hash stored at key.",
    url: "https://dicedb.io/commands/hdel/",
  },
  HGETALL: {
    title: "HGETALL",
    syntax: "HGETALL key",
    body: "The HGETALL command retrieves all fields and values of a hash stored at key.",
    url: "https://dicedb.io/commands/hgetall/",
  },
  HEXISTS: {
    title: "HEXISTS",
    syntax: "HEXISTS key field",
    body: "The HEXISTS command returns if the field exists in the hash stored at key.",
    url: "https://dicedb.io/commands/hexists/",
  },
  HLEN: {
    title: "HLEN",
    syntax: "HLEN key",
    body: "The HLEN command returns the number of fields contained in the hash stored at key.",
    url: "https://dicedb.io/commands/hlen/",
  },
  INCRBYFLOAT: {
    title: "INCRBYFLOAT",
    syntax: "INCRBYFLOAT key increment",
    body: "The INCRBYFLOAT command increments the float value stored at key by the specified increment.",
    url: "https://dicedb.io/commands/incrbyfloat/",
  },
  LPUSH: {
    title: "LPUSH",
    syntax: "LPUSH key value [value ...]",
    body: "The LPUSH command inserts the specified values at the head (left) of the list stored at key.",
    url: "https://dicedb.io/commands/lpush/",
  },
  RPUSH: {
    title: "RPUSH",
    syntax: "RPUSH key value [value ...]",
    body: "The RPUSH command inserts the specified values at the tail (right) of the list stored at key.",
    url: "https://dicedb.io/commands/rpush/",
  },
  LPOP: {
    title: "LPOP",
    syntax: "LPOP key",
    body: "The LPOP command removes and returns the first element of the list stored at key.",
    url: "https://dicedb.io/commands/lpop/",
  },
  RPOP: {
    title: "RPOP",
    syntax: "RPOP key",
    body: "The RPOP command removes and returns the last element of the list stored at key.",
    url: "https://dicedb.io/commands/rpop/",
  },
  SADD: {
    title: "SADD",
    syntax: "SADD key member [member ...]",
    body: "The SADD command adds the specified members to the set stored at key. If a member already exists, it is ignored.",
    url: "https://dicedb.io/commands/sadd/",
  },
  SMEMBERS: {
    title: "SMEMBERS",
    syntax: "SMEMBERS key",
    body: "The SMEMBERS command retrieves all the members of the set stored at key.",
    url: "https://dicedb.io/commands/smembers/",
  },
  PING: {
    title: "PING",
    syntax: "PING",
    body: "The PING command checks if the server is running and returns a PONG response.",
    url: "https://dicedb.io/commands/ping/",
  },
  PFADD: {
    title: "PFADD",
    syntax: "PFADD key element [element ...]",
    body: "The PFADD command adds elements to a HyperLogLog data structure stored at the specified key. If the key does not exist, a new HyperLogLog is created.",
    url: "https://dicedb.io/commands/pfadd/",
  },
  PFCOUNT: {
    title: "PFCOUNT",
    syntax: "PFCOUNT key",
    body: "The PFCOUNT command returns the approximated cardinality (number of unique elements) of the HyperLogLog data structure stored at the specified key.",
    url: "https://dicedb.io/commands/pfcount/",
  },
  PFMERGE: {
    title: "PFMERGE",
    syntax: "PFMERGE destkey sourcekey [sourcekey ...]",
    body: "The PFMERGE command merges multiple HyperLogLog data structures into a single one, stored at destkey.",
    url: "https://dicedb.io/commands/pfmerge/",
  },
  TTL: {
    title: "TTL",
    syntax: "TTL key",
    body: "The TTL command returns the remaining time to live of a key that has an expiration set. If the key does not exist, -2 is returned.",
    url: "https://dicedb.io/commands/ttl/",
  },
  HELLO: {
    title: "HELLO",
    syntax: "HELLO [version]",
    body: "The HELLO command is used to connect to the server and switch to the desired protocol. It can be used to specify a version of the protocol.",
    url: "https://dicedb.io/commands/hello/",
  },
  GETSET: {
    title: "GETSET",
    syntax: "GETSET key value",
    body: "The GETSET command sets the value of a key and returns its old value. This operation is atomic.",
    url: "https://dicedb.io/commands/getset/",
  },
  GETEX: {
    title: "GETEX",
    syntax:
      "GETEX key [EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds]",
    body: "The GETEX command retrieves the value of a key and can set an expiration time for it in the same command.",
    url: "https://dicedb.io/commands/getex/",
  },
  GETDEL: {
    title: "GETDEL",
    syntax: "GETDEL key",
    body: "The GETDEL command retrieves the value of a key and deletes it in the same atomic operation.",
    url: "https://dicedb.io/commands/getdel/",
  },
  COMMAND: {
    title: "COMMAND",
    syntax: "COMMAND [GET | INFO | LIST | RESTORE]",
    body: "The COMMAND command provides information about the commands supported by the server, including details like the command name and the number of calls.",
    url: "https://dicedb.io/commands/command/",
  },
  // JSON related commands
  "JSON.INGEST": {
    title: "JSON.INGEST",
    syntax: "JSON.INGEST key json",
    body: "The JSON.INGEST command allows you to insert a JSON document into a specified key. If the key already holds a value, it will be overwritten.",
    url: "https://dicedb.io/commands/jsoningest/",
  },
  "JSON.GET": {
    title: "JSON.GET",
    syntax: "JSON.GET key [path]",
    body: "The JSON.GET command retrieves a JSON value from the specified key. You can specify a path to get a nested value.",
    url: "https://dicedb.io/commands/jsonget/",
  },
  "JSON.SET": {
    title: "JSON.SET",
    syntax: "JSON.SET key path json",
    body: "The JSON.SET command sets a JSON value at a specified path in the key. If the key does not exist, a new JSON document is created.",
    url: "https://dicedb.io/commands/jsonset/",
  },
  "JSON.DEL": {
    title: "JSON.DEL",
    syntax: "JSON.DEL key [path]",
    body: "The JSON.DEL command removes a JSON value at a specified path in the key. If the path does not exist, no action is taken.",
    url: "https://dicedb.io/commands/jsondel/",
  },
  "JSON.TYPE": {
    title: "JSON.TYPE",
    syntax: "JSON.TYPE key [path]",
    body: "The JSON.TYPE command returns the type of a JSON value at the specified path. If the path does not exist, it returns null.",
    url: "https://dicedb.io/commands/jsontype/",
  },
  "JSON.NUMINCRBY": {
    title: "JSON.NUMINCRBY",
    syntax: "JSON.NUMINCRBY key path increment",
    body: "The JSON.NUMINCRBY command increments a numeric value at a specified path in the key by the given increment.",
    url: "https://dicedb.io/commands/jsonnumincrby/",
  },
  "JSON.MERGE": {
    title: "JSON.MERGE",
    syntax: "JSON.MERGE dest key1 [key2 ...]",
    body: "The JSON.MERGE command merges multiple JSON documents into a single destination key.",
    url: "https://dicedb.io/commands/jsonmerge/",
  },
  "JSON.KEYS": {
    title: "JSON.KEYS",
    syntax: "JSON.KEYS key [path]",
    body: "The JSON.KEYS command retrieves all keys from a JSON document at a specified path.",
    url: "https://dicedb.io/commands/jsonkeys/",
  },
  "JSON.FILTER": {
    title: "JSON.FILTER",
    syntax: "JSON.FILTER key path filter",
    body: "The JSON.FILTER command filters JSON data based on a specified filter condition.",
    url: "https://dicedb.io/commands/jsonfilter/",
  },
};
