const blacklistedCommands = [
    'FLUSHALL', 'FLUSHDB', 'DUMP', 'ABORT', 'AUTH', 'CONFIG', 'SAVE',
    'BGSAVE', 'BGREWRITEAOF', 'RESTORE', 'MULTI', 'EXEC', 'DISCARD',
    'QWATCH', 'QUNWATCH', 'LATENCY', 'CLIENT', 'SLEEP', 'PERSIST'
  ];
  
  export default blacklistedCommands;
  