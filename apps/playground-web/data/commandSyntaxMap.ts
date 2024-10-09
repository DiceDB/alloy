export type SyntaxPart = {
  syntax: string;
  doc: string;
};

export type CommandSyntax = {
  parts: SyntaxPart[];
};

export type SyntaxMap = {
  [command: string]: CommandSyntax;
};

export const syntaxMap: SyntaxMap = {
  SET: {
    parts: [
      {
        syntax: 'Key',
        doc: 'The key under which to store the value',
      },
      {
        syntax: 'Value',
        doc: 'The value to be stored',
      },
      {
        syntax: '[NX | XX]',
        doc: 'NX - Only set if key does not exist. XX - Only set if key exists',
      },
      {
        syntax:
          '[EX seconds | PX milliseconds | EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]',
        doc: 'Options to set the key expiration: EX (seconds), PX (milliseconds), EXAT/PXAT (unix timestamp), or KEEPTTL to retain existing TTL',
      },
    ],
  },
  GET: {
    parts: [
      {
        syntax: 'Key',
        doc: 'Key of the value you want to retrive',
      },
    ],
  },
  DEL: {
    parts: [
      {
        syntax: 'Key',
        doc: 'Key that you want to delete',
      },
      {
        syntax: '[Key ...]',
        doc: 'Multiple keys you want to delete',
      },
    ],
  },
};
