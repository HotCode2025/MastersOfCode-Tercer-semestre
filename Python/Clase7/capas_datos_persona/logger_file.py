import logging as log

# llamamos una configuracion basica
log.basicConfig(level=log.DEBUG,
                format='%(asctime)s - %(levelname)s [%(filename)s:%(lineno)s]  %(message)s'
                datefmt='%I :%M:%S:%p'
                handlers=[
                    log.filehandler("capa-datos.log"),
                    log.StreamHandler()
                ])

if __name__ == '__main__':
    log.debug("mensaje a nivel debug")
    log.info("mensaje a nivel info")
    log.warning("mensaje a nivel warning")
    log.error("mensaje a nivel error")
    log.critical("mensaje a nivel critical")

