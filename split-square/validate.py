"""Validate that a given square is valid.

Checks that this is either a simple square (``0`` or ``1``), or
a split square (a list of 4 items, each being a simple square or
a split square).

A simple square is valid::

    >>> validate(0)
    True (CHECK)

A split square of four simple filled squares is valid::

    >>> validate([1, 1, 1, 1])
    True (CHECK)

We can nest split and simple squares::

    >>> validate([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])
    True (CHECK)

    >>> validate([1, [1, 0, 1, [0, [0, 0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    True (CHECK)

Simple squares must be either 0 (empty) or 1 (filled)::

    >>> validate(2)
    False (CHECK)

Split squares must contain exactly four parts::

    >>> validate([1, 1, 1, 1, 1])
    False (CHECK)

    >>> validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1])
    False

    >>> validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1])
    False

"""
#All arrays will need to be checked if len is 4 if not return false
#All arrays will need to be checked 0s and 1s

# My method! Got fairly close but, failed two test. I am not able to properly find lengths of nested arrays.
"""
def validate(s):
    # Validate that a given square is valid..
    if isinstance(s, list):
        if 4 != len(s) :
            return False
    elif s != 0:
        return False
    else:
        for square in s:
            print(square)
            if isinstance(square, list):
                validate(square)
            if square != 0 and square != 1:
                return False
            else:
                print(square)
    return True
"""

# Here is the solution for validate. How does line 92 if statement work? My assumption is q that is passed into validate will go through the if statements. If any of them return False then it's not valid and will return False. If it's not False then the recursive function will continue until all indecies of split squares have been checked.

def validate(s):
    """Validate that a given square is valid.."""

    # START SOLUTION

    # Base case: it's a simple square, so as long as it's either 0 or 1
    # it's valid.

    if type(s) == int:
        return s == 0 or s == 1

    # Base case: if not a list of 4, it's invalid

    if type(s) != list or len(s) != 4:
        return False

    # It's a split square:
    # Recurse intro quadrants and check each, "failing fast".
    #
    # Note: alternately, we could write the rest of this function in
    # one pretty line by using the awesome `all(iterable)` function:
    #
    #   return all(validate(q) for q in s)

    for q in s:
        if not validate(q):
            return False

    return True

    


