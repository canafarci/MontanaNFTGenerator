file_address = "LogFiles\\log.txt"
file = open(file_address)
split_lines = file.read().splitlines()
rarity_list = []
i = 1
rarity_index = 0
index = 0

for line in split_lines:
    
    intermediate_string = str(i) + "- "
    
    split_array = line.split(",")
    split_array.pop(0)
    for word in split_array:
        if word == "AVAX":
            rarity_index += 1
        if word == "94":
            rarity_index += 1
    
    intermediate_string += str(rarity_index)
    rarity_list.append(intermediate_string)
    if rarity_index is not 0:
        index += 1
        print(str(index) + " INDEX: " + intermediate_string)
    rarity_index = 0
    i += 1
    

for line in rarity_list:
    print(line)
    
print(index)