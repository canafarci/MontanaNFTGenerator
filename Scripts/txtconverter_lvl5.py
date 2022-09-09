from cgi import print_directory
from operator import le
from turtle import right
import matplotlib.colors
import random
import numpy as np
import pandas as pd


class TextConverter:
    def hex_to_rgb(self, file_address):
        file = open(file_address)
        string_array = file.read().split()
        final_array = []

        for hex in string_array:
            hex = hex.upper()
            hex = "#" + hex
            color_tuple = matplotlib.colors.to_rgb(hex)
            color_list = list(color_tuple)
            final_array.append(color_list)
        return final_array, string_array
    
    def name_extract_by_line(self, file_address):
        file = open(file_address)
        split_lines = file.read().splitlines()
        return split_lines
    
    def get_random_colors(self, number, file_address_name, file_address_hexes):
        name_list = self.name_extract_by_line(file_address_name)
        rgb_list, hex_list = self.hex_to_rgb(file_address_hexes)
        name_rgb_dict = {}
        name_hex_dict = {}
        random_rgb_list = []
        random_name_list = []
        random_hex_list = []
         
        for i in range(0, len(rgb_list)):
            name_rgb_dict[name_list[i]] = rgb_list[i]
            name_hex_dict[name_list[i]] = hex_list[i]
        
        random.shuffle(name_list)
        
        for i in range(0, number):
            random_name_list.append(name_list[i])
            random_rgb_list.append(name_rgb_dict.get(name_list[i]))
            random_hex_list.append(name_hex_dict.get(name_list[i]))
            
    def get_all_pseudorandom_lists(self, file_address_bird_name, file_address_bird_hexes, file_address_bg_name, file_address_bg_hexes):
        fore_name_list = self.name_extract_by_line(file_address_bird_name)
        fore_rgb_list, fore_hex_list = self.hex_to_rgb(file_address_bird_hexes)
        fore_ref_list = [fore_name_list, fore_hex_list, fore_rgb_list]
        
        bg_name_list = self.name_extract_by_line(file_address_bg_name)
        bg_rgb_list, bg_hex_list = self.hex_to_rgb(file_address_bg_hexes)
        bg_ref_list = [bg_name_list, bg_hex_list, bg_rgb_list]
        
        

        final_bird_list = []
        intermediate_bird_name_list = []
        shuffled_fore_name_list = fore_name_list.copy()
        
        random.shuffle(shuffled_fore_name_list)
        intermediate_bird_name_list += shuffled_fore_name_list
        random.shuffle(shuffled_fore_name_list)
        intermediate_bird_name_list += shuffled_fore_name_list
        
        for _ in intermediate_bird_name_list:
            index = fore_ref_list[0].index(_)
            final_bird_list.append([fore_ref_list[0][index], fore_ref_list[1][index], fore_ref_list[2][index]])
        
        final_comp_list = []
        intermediate_comp_name_list = []
        
        random.shuffle(shuffled_fore_name_list)
        intermediate_comp_name_list += shuffled_fore_name_list
        random.shuffle(shuffled_fore_name_list)
        intermediate_comp_name_list += shuffled_fore_name_list
        
        for _ in intermediate_comp_name_list:
            index = fore_ref_list[0].index(_)
            final_comp_list.append([fore_ref_list[0][index], fore_ref_list[1][index], fore_ref_list[2][index]])
        
        total_range = range(0, 434)
        final_bg_list = []
        
        for i in total_range:
            rand_index = random.randint(0, 39)
            final_bg_list.append([bg_ref_list[0][rand_index], bg_ref_list[1][rand_index], bg_ref_list[2][rand_index]])
            
        list_012 = []
        number_list = []
            
        for i in total_range:
            number_list.append(i)
            list_012.append(0)

        random_list =  random.sample(number_list, 24)
        rare_avax_list = random_list.copy()
        for i in random_list:
            list_012[i] = 1 #AVAX
            
        for i in random_list:
            number_list.remove(i)
            
        random_list =  random.sample(number_list, 24)
        rare_94_list = random_list.copy()
        for i in random_list:
            list_012[i] = 2 #94
            
        for i in random_list:
            number_list.remove(i)
            
        random_list =  random.sample(number_list, 10)
        rare_94_avax_list = random_list.copy()
        for i in random_list:
            list_012[i] = 3 #94 and AVAX
        
        ref_list = bg_name_list.copy()
        index_list = []
        
        for ref_str in ref_list:
            index = 999999
            rand_int = random.randint(0, 1)
            if rand_int is 0:
                for x in final_bird_list:
                    if ref_str == x[0]:
                        index = final_bird_list.index(x)
                        index_list.append(index)
                        break
                    else:
                        continue
            else:
                counter = 0
                for x in final_bird_list:
                    if ref_str == x[0] and counter is 1:
                        index = final_bird_list.index(x)
                        index_list.append(index)
                        break
                    elif ref_str == x[0] and counter is 0:
                        counter = 1
                        continue
                    else:
                        continue
            
            final_comp_list[index] = final_bird_list[index]
            final_bg_list[index] = final_bird_list[index]
            
        super_duper_list = []
        
        for i in total_range:
            super_duper_list.append([final_bird_list[i], final_comp_list[i], final_bg_list[i], list_012[i]])
        
        print(super_duper_list[0][0][0])
     
        #print(super_duper_list)
        
        lines = ""
        text_index = 1
        
        for i in super_duper_list:
            intermediate_line = str(text_index) + ",BIRD," + i[0][0] + ",#" + i[0][1] + ",COMP," + i[1][0] + ",#" + i[1][1] + ",BACKGROUND," + i[2][0] + ",#" + i[2][1] + ".RARITYINDEX," + str(i[3])
            lines += (intermediate_line + "\n")
            text_index += 1
        
        index_list = [x+1 for x in index_list]
        rare_avax_list = [x+1 for x in rare_avax_list]
        rare_94_list = [x+1 for x in rare_94_list]
        rare_94_avax_list = [x+1 for x in rare_94_avax_list]
        
        lines += "COLOUR MATCH - " + str(index_list) + "\n"
        lines += "AVAX - " + str(rare_avax_list) + "\n"
        lines += "94 - " + str(rare_94_list) + "\n"
        lines += "94 and AVAX - " + str(rare_94_avax_list) + "\n"
        
        for i in index_list:
            print(super_duper_list[i])
        
        print(len(rare_94_avax_list))
        print(len(rare_94_list))
        print(len(rare_avax_list))
        print(len(index_list))
        
        print("  ----   ")
        print(super_duper_list)
        
        with open("E:\\ARCHIVE\\FREELANCE\\NFT\\LogFiles\\python_log.txt", 'w') as f:
            for line in lines:
                f.write(line)
            
    
        
        


hex_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\LV_1_production\\HEX_CODES\\Hex_Codes_217.txt"
name_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\LV_1_production\\HEX_CODES\\Names_217.txt"
bg_hex_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\LV_1_production\\HEX_CODES_BG\\Hex_Codes_Selected.txt"
bg_name_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\LV_1_production\\HEX_CODES_BG\\Names_Selected.txt"

text_converter = TextConverter()

print(" ")
#print(text_converter.hex_to_rgb(selected_hex_file))
#print(text_converter.name_extract_by_line(selected_name_file))
text_converter.get_all_pseudorandom_lists(name_file, hex_file, bg_name_file, bg_hex_file)