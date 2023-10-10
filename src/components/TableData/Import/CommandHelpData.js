export const helpData = [
  {
    usageHeading: 'Import a SurrealQL script into an existing database',
    usage: 'surreal import [OPTIONS] <file>',
    args: '<file> Path to the sql file to import',
    options: [
      {
        option: '-c, --conn <conn>',
        description: 'Remote database server URL to connect to [default: https://cloud.surrealdb.com]'
      },
      {
        option: '--db <db>',
        description: 'The database to import the data into'
      },
      {
        option: '-h, --help',
        description: 'Print help information'
      },
      {
        option: '--ns <ns>',
        description: 'The namespace to import the data into'
      },
      {
        option: '-p, --pass <pass>',
        description: 'Database authentication password to use when connecting [default: root]'
      },
      {
        option: '-u, --user <user>',
        description: 'Database authentication username to use when connecting [default: root]'
      }
    ]
  }
]
