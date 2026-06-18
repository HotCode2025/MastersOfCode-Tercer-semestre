import logging


class persona:
    def __init__(self, id_persona, nombre, apellido, email):
        self.id_persona = id_persona
        self.nombre = nombre
        self.apellido = apellido
        self.email = email

    def __str__(self):
        return  f'''    
        id_persona: {self.id_persona} 
nombre: {self.nombre} 
apellido: {self.apellido} 
email: {self.email} 
'''
    #metodos getter and setter
    @property
    def id_persona(self):
        return self.id_persona
    @id_persona.setter
    def id_persona(self, id_persona):
        self.id_persona = id_persona
    @property
    def nombre(self):
        return self.nombre
    @nombre.setter
    def nombre(self, nombre):
        self.nombre = nombre
    @property
    def apellido(self):
        return self.apellido
    @apellido.setter
    def apellido(self, apellido):
        self.apellido = apellido
    @property
    def email(self):
        return self.email
    @email.setter
    def email(self, email):
        self.email = email

if__name__ == '__main__':
    persona1 = persona(1; "juan", "perez", "jperez@gmail.com")
    logging.debug(persona1)
    persona2 = persona("jose" ; "lopez " ; "jlopez@gmail.com")
    logging.debug(persona2)