import math
#get number input
#while it's negative report bad input and retry
#find the next prime number
#continue until nth prime is found
#report nth prime

whichPrime = raw_input("Can I get yo number")

if whichPrime <=0:
	print "negative"
	whichPrime = raw_input("Don't be so negative, asshole.")

if whichPrime == 1:
	print 1

else:
	current = 1
	while current < whichPrime:
		square_root = int(math.sqrt(float(whichPrime)))
		divisibleBy = 0
		for x in xrange (2, square_root+1):
			if whichPrime % i == 0:
				divisibleBy += 1
		if divisibleBy == 0:
			current += 1
		print current