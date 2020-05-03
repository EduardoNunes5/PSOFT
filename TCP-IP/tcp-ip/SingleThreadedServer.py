import sys
import socket



def novoCliente(clienteSocket, endereco):
    while True:
        msg = clienteSocket.recv(1024).decode('utf-8')
        if(msg.rstrip() == "Fim"):
            break

        clientfeedback = ("(%s || %d)>  %s" % (endereco[0], endereco[1], msg))
        clienteSocket.send(clientfeedback.encode('utf-8'))

    clienteSocket.close()



host = ''
port = int(sys.args[1] if len(sys.argv) > 1 else 9090)
s = socket.socket()

s.bind((host, port))
s.listen()
while(True):
    print("Esperando conexão na porta:  %s" % port)
    conexao, endereco = s.accept()
    novoCliente(conexao, endereco)

s.close()
