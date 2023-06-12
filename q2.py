class Solution(object):
  def isStrobogrammatic(self, num):
    """
    :type num: str
    :rtype: bool
    """
    start, end, legal = 0, len(num) - 1, "01689"
    while start <= end:
      if "".join(sorted(num[start] + num[end])) not in ["00", "11", "88", "69"]:
        return False
      start += 1
      end -= 1
    return True

############

class Solution:
    def isStrobogrammatic(self, num: str) -> bool:
        d = [0, 1, -1, -1, -1, -1, 9, -1, 8, 6] # index ==> value, eg. last one, index=9 val=6
        i, j = 0, len(num) - 1
        while i <= j:
            a, b = int(num[i]), int(num[j])
            if d[a] != b:
                return False
            i, j = i + 1, j - 1
        return True