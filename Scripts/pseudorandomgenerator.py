import random

range = range(0, 167)
number_list = []
bool_list = []
final_string = ""
true_index = 0

for i in range:
    number_list.append(i)
    bool_list.append(False)

random_list =  random.sample(number_list, 34)

for i in random_list:
    index = number_list.index(i)
    bool_list[index] = True
    
for condition in bool_list:
    if condition:
        final_string = final_string + "true, "
        true_index = true_index + 1
    else:
        final_string = final_string + "false, "
    
print(random_list)
print(" ")
print(len(bool_list))
print(final_string)
print(true_index)