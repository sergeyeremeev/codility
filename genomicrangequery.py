def solution(S, P, Q):
    # write your code in Python 2.7
    m = len(P)
    a = list(S)

    letters = []
    for i in xrange(m):
        letters += a[P[i]:Q[i] + 1]

    queries = [0] * m
    for i in xrange(m):
        queries[i] = Q[i] + 1 - P[i]

    queries_suff = [0] * (m + 1)
    for i in xrange(1, m + 1):
        queries_suff[i] = queries_suff[i - 1] + queries[i - 1]

    counter = 1
    len_arr = len(letters)
    for i in xrange(len_arr):
        if i < queries_suff[counter]:
            letters[i] = str(counter) + letters[i]
        else:
            counter += 1
            letters[i] = str(counter) + letters[i]

    letters.sort()

    ans_let = [0] * m
    for i in xrange(m):
        ans_let[i] = letters[queries_suff[i]]

    for i in xrange(m):
        ans_let[i] = ans_let[i][1]

    ans_num = []
    current_num = 0
    for i in xrange(m):
        if ans_let[i] == 'A':
            current_num = 1
        elif ans_let[i] == 'C':
            current_num = 2
        elif ans_let[i] == 'G':
            current_num = 3
        elif ans_let[i] == 'T':
            current_num = 4
        ans_num.append(current_num)

    return ans_num

# result = 80 correctnes, 0 performance
