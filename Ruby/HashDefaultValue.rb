=begin

By default newly constructed Hashes with empty curly braces or .new method
will return nil when invoked by brackets.

There's a more likely chance nil will cause an error if
not initialized properly.

It's better practice to initialize a hash that returns a default value for
non-existent keys.

=end


def lazily_initialized_hash(str)
hash = {}
#This works because by default the key will return nil
#The double pipe will put 0 in the key, then we will increase value by one.
  str.split(" ").each do |key|
  hash[key] ||= 0
  hash[key]  += 1
  end
  return hash
end


def default_value_initialized_hash(str)
  hash = Hash.new(0)
  str.split(" ").each do |key|
    hash[key] += 1
  end
  return hash
end

def array_initialized_hash(str)
  #Instead of copying an empty array into each hash key the block
  #will get invoked for each key access, if and only if the key is missing
  hash = Hash.new{|sub_hash, key| sub_hash[key] = []}
  str.split(" ").each_with_index do |key, value|
      hash[key] << value
  end
  return hash
end


str_value = "the quick brown fox jumped over the lazy dog"

#Lazily initialize the key if a default value doesn't exist,
#however syntax doesn't communicate what the purpose of the hash.
p lazily_initialized_hash(str_value)

#Initialize default key with zero, without worrying about the default value.
p default_value_initialized_hash(str_value)

#Instead of counting the individual words we're going to store the index where it occurs.
p array_initialized_hash(str_value)
