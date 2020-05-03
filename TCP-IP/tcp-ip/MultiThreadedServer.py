import sys
import socket
from threading import Thread

def newClient(conn, address):
    while(True):
        msg = conn.recv(1024).decode('utf-8')
        if(msg.rstrip() == 'Fim'):
            break

        clientFeedback = ("(%s || %d)>  %s" % (address[0], address[1], msg))
        conn.send(clientFeedback.encode('utf-8'))
    conn.close()



host = ''
port = 9090
serverSocket = socket.socket()
serverSocket.bind((host, port))
serverSocket.listen()
while True:
    print('Esperando conexões na porta %s' % port)
    conn, address = serverSocket.accept()
    Thread(target=newClient, args= (conn,address)).start()


serverSocket.close()