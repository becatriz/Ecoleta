import path from 'path';


module.exports = {
  client: 'sqlite3',
  connection: {
    filename:  './src/database/database.sqlite',
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  },
  useNullAsDefault: true
}

//path.resolve(__dirname,  './src', 'database', 'migrations')

// client: 'sqlite3',
// connection: {
//   filename: 'path.resolve(_dirname, 'src', 'database', 'database.sqlite')
// },
// migrations:{
//   directory:path.resolve(_dirname, 'src', 'database', 'migrations')
// },