for i in range(min(4, num + 1)):
    for a in possible_number(i):
        for b in possible_number(num - i, True):
            ans.add(str(a) + ":" + str(b).rjust(2, '0'))

class Solution:
    def readBinaryWatch(self, num: int) -> List[str]:
        def possible_number(count, minute=False):
            if count == 0: return [0]
            if minute:
                return filter(lambda a: a < 60, map(sum, combinations([1, 2, 4, 8, 16, 32], count)))
            return filter(lambda a: a < 12, map(sum, combinations([1, 2, 4, 8], count)))
        
        ans = set()

        for i in range(min(4, num + 1)):
            for a in possible_number(i):
                for b in possible_number(num - i, True):
                    ans.add(str(a) + ":" + str(b).rjust(2, '0'))
        return list(ans)