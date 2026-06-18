class PersonaDAO:
    '''
    dao significa : data acces

    '''

    _SELECCIONADA = "SELECT * FROM persona"
    _INSERTAR = "INSTERT TO persona(nombre: apellido: email)"
    _ACTUALIZAR = "UPDATE persona SET nombre=%s WHERE id_persona=%s"
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"
    