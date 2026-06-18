import logging

import psycopg2 as bd
import sys

from psycopg2._psycopg import connection


class conection:
    _DATABASE = "test_bd"
    _USERNAME = "POSTGRES"
    _PASSWORD = "admin"
    _HOST = "127.0.0.1"
    _DB_PORT = "5432"
    _conexion = None
    _cursor = None

    @classmethod
    def obtenerConection(cls) -> connection | None:
        if cls._conexion is None:
            try:
                cls._conexion = bd.connect(host=cls._HOST,
                                           user=cls._USERNAME,
                                           password=cls._PASSWORD,
                                           database=cls._DATABASE
                                           port=cls._DB_PORT)
                logging.debug(f"conexion establecida: {cls._conexion}")
                return cls._conexion
            except Exception as e:
                logging.error(f"Error conectando conexion: {e}")
                sys.exit()
            else:
                return cls._conexion

    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                cls._cursor = cls.obtenerConexion().cursor()
                logging.debug(f"cursor establecida: {cls._cursor}")
            except Exception as e:
                logging.error(f"Error conectando conexion: {e}")
                sys.exit()
        else:
             return cls._cursor


if __name__ == "__main__":
    conection.obtenerConection()



