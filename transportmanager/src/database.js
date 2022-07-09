const mysql = require('mysql');
const { promisify }= require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('LA CONEXION A LA BASE DE DATOS FUE CERRADA');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('LA BASE DE DATOS TIENE A MUCHAS CONEXIONES.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('SE HA PERDIDO LA CONEXION A LA BASE DE DATOS');
    }
  }

  if (connection) connection.release();
  console.log('BASE DE DATOS CONECTADA!');

  return;
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;