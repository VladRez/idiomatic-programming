=begin
Determin if a number is a Palindrome without using any special methods. 
=end
rescue => exception
    
end
def numPal?(num)

rev_n = []
mods = []
reg = []
mod = 10
temp = num

    while temp > 0
        rev_n << temp%mod/(mod/10)
        mods  << mod/10
        temp -= temp%mod
        mod *=10
    end 
result = 0
i = 0
    while i < rev_n.length
        result += rev_n[i] * mods[(mods.length - 1) - i]
        i += 1
    end

i = 0
    while i < mods.length
        if rev_n[i] != rev_n[rev_n.length-1-i]
        return false    
        end
        i += 1
    end

    return true
end

p numPal?(234245) # false
p numPal?(5575555) #true
p numPal?(123454321)#true
p numPal?(987789)# true