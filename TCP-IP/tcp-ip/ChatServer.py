import socket
from threading import Thread


def novo_usuario(users, clientSocket, endereco):

    while True:
        msg = clientSocket.recv(1024).decode('utf-8')
        if msg.rstrip() == "BYE":
            users.remove(clientSocket)
            for client in users:
                clientsFeedback = "%s %d deconectou \n\n" % (endereco[0], endereco[1])
                client.send(clientsFeedback.encode('utf-8'))
            break

        clientsFeedback = ("(%s || %d)>  %s" % (endereco[0], endereco[1], msg))
        for client in users:
            if client != clientSocket:
                client.send(clientsFeedback.encode('utf-8'))

    clientSocket.close()






s = socket.socket()
s.bind(('', 9090))
s.listen()
users = []
print('Esperando conexões ao chat na porta 9090')
while True:
    clientSocket, endereco = s.accept()
    print('Host: %s  Porta: %d  Conectado' % (endereco[0], endereco[1]))
    users.append(clientSocket)
    Thread(target=novo_usuario, args=(users, clientSocket, endereco)).start()
