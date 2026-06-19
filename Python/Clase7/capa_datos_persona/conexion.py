#import logging

import psycopg2 as bd
#import psycopg2 as bd otra manera de importar psycopg2
from logger_base import log
import sys

#from psycopg2._psycopg import connection

class Conexion:
    _DATABASE = "test_bd"
    _USERNAME = "POSTGRES"
    _PASSWORD = "admin"
    _HOST = "127.0.0.1"
    _DB_PORT = "5432"
    _conexion = None
    _cursor = None

    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(host=cls._HOST,
                                           user=cls._USERNAME,
                                           password=cls._PASSWORD,
                                           database=cls._DATABASE,
                                           port=cls._DB_PORT)
                log.debug(f"Conexión Exitosa: {cls._conexion}")
                return cls._conexion
            except Exception as e:
                log.error(f"Ocurrió un Error: {e}")
                sys.exit()
        else:
            return cls._conexion

    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtenerConexion().cursor()
                log.debug(f"Se abrió correctamente el cursor: {cls._cursor}")
                return cls._cursor
            except Exception as e:
                log.error(f"Ocurrió un error: {e}")
                sys.exit()
        else:
            return cls._cursor


if __name__ == "__main__":
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()
