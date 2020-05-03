
import socket
from threading import Thread

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(("", 9090))


def read():
    while True:
        data = s.recv(1024).decode('utf-8')
        if data:
            print(data)
        else:
            break


def write():
    while True:
        to_send = input()
        s.send(to_send.encode('utf-8'))
        if to_send == 'BYE':
            break


Thread(target=read).start()
write()
