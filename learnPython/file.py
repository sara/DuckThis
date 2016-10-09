from sys import argv

script, filename = argv

line1 = raw_input (">")

target = open(filename, 'w')

target.write(line1)

print ("written")
target=open(filename, 'r')
print target.read()
target.close()