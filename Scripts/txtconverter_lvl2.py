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
            
    def get_recursive_index_for_single(self, ref_list, value):
        rand_index = random.randint(0, (len(ref_list[0]) - 1))
        if (ref_list[0][rand_index] == value):
            return self.get_recursive_index_for_single(ref_list, value)
        else:
            return rand_index
        
    def get_recursive_index_for_double(self, ref_list, value_1, value_2):
        rand_index = random.randint(0, (len(ref_list[0]) - 1))
        if (ref_list[0][rand_index] == value_1 or ref_list[0][rand_index] == value_2):
            return self.get_recursive_index_for_double(ref_list, value_1, value_2)
        else:
            return rand_index
            
        
    def get_all_pseudorandom_lists(self, file_madmax_name, file_madmax_hexes, file_pocket_name, file_pocket_hexes, file_address_bg_name, file_address_bg_hexes):
        madmax_name_list = self.name_extract_by_line(file_madmax_name)
        madmax_rgb_list, fore_hex_list = self.hex_to_rgb(file_madmax_hexes)
        madmax_ref_list = [madmax_name_list, fore_hex_list, madmax_rgb_list]
        
        pocket_name_list = self.name_extract_by_line(file_pocket_name)
        pocket_rgb_list, bg_hex_list = self.hex_to_rgb(file_pocket_hexes)
        pocket_ref_list = [pocket_name_list, bg_hex_list, pocket_rgb_list]
        
        bg_name_list = self.name_extract_by_line(file_address_bg_name)
        bg_rgb_list, bg_hex_list = self.hex_to_rgb(file_address_bg_hexes)
        bg_ref_list = [bg_name_list, bg_hex_list, bg_rgb_list]
        
        total_range = range(0, 68)
        
        madmax_pocket_random_list =[]
        madmax_pocket_index_list = []
        
        # 0 = madmax, 1 = pocket
        for i in total_range:
            madmax_pocket_random_list.append(i)
            madmax_pocket_index_list.append(0)
            
        for i in range(0, 34):
            rand_int = random.randint(0, len(madmax_pocket_random_list) - 1)
            rand_index = madmax_pocket_random_list[rand_int]
            madmax_pocket_index_list[rand_index] = 1
            madmax_pocket_random_list.remove(rand_index)

        final_bird_list_1 = []
        final_bird_list_2 = []
        final_bird_list_3 = []
        final_comp_list_1 = []
        final_comp_list_2 = []
        final_comp_list_3 = []
        final_bg_list = []
        
        #bird list 1
        for _ in madmax_pocket_index_list:
            if ( _ == 0): #madmax         
                rand_index = random.randint(0, 7)
                final_bird_list_1.append([madmax_ref_list[0][rand_index], madmax_ref_list[1][rand_index], madmax_ref_list[2][rand_index]])
            else: #pocket 
                rand_index = random.randint(0, 5)
                final_bird_list_1.append([pocket_ref_list[0][rand_index], pocket_ref_list[1][rand_index], pocket_ref_list[2][rand_index]])
        
        #bird list 2
        for _ in total_range:
            if (madmax_pocket_index_list[_] == 0): #madmax
                rand_index = self.get_recursive_index_for_single(madmax_ref_list, final_bird_list_1[_][0])
                final_bird_list_2.append([madmax_ref_list[0][rand_index], madmax_ref_list[1][rand_index], madmax_ref_list[2][rand_index]])

            else: #pocket
                rand_index = self.get_recursive_index_for_single(pocket_ref_list, final_bird_list_1[_][0])
                final_bird_list_2.append([pocket_ref_list[0][rand_index], pocket_ref_list[1][rand_index], pocket_ref_list[2][rand_index]])
                            
        #bird list 3                    
        for _ in total_range:
            if (madmax_pocket_index_list[_] == 0): #madmax
                rand_index = self.get_recursive_index_for_double(madmax_ref_list, final_bird_list_1[_][0], final_bird_list_2[_][0])
                final_bird_list_3.append([madmax_ref_list[0][rand_index], madmax_ref_list[1][rand_index], madmax_ref_list[2][rand_index]])
                
            else: #pocket
                rand_index = self.get_recursive_index_for_double(pocket_ref_list, final_bird_list_1[_][0], final_bird_list_2[_][0])
                final_bird_list_3.append([pocket_ref_list[0][rand_index], pocket_ref_list[1][rand_index], pocket_ref_list[2][rand_index]])
                    
                    
                    
        
        #comp list 1
        for _ in madmax_pocket_index_list:
            if ( _ == 0): #madmax         
                rand_index = random.randint(0, 7)
                final_comp_list_1.append([madmax_ref_list[0][rand_index], madmax_ref_list[1][rand_index], madmax_ref_list[2][rand_index]])
            else:         #pocket 
                rand_index = random.randint(0, 5)
                final_comp_list_1.append([pocket_ref_list[0][rand_index], pocket_ref_list[1][rand_index], pocket_ref_list[2][rand_index]])
        
        #comp list 2
        for _ in total_range:
            if (madmax_pocket_index_list[_] == 0): #madmax
                rand_index = self.get_recursive_index_for_single(madmax_ref_list, final_comp_list_1[_][0])
                final_comp_list_2.append([madmax_ref_list[0][rand_index], madmax_ref_list[1][rand_index], madmax_ref_list[2][rand_index]])

            else:                                  #pocket
                rand_index = self.get_recursive_index_for_single(pocket_ref_list, final_comp_list_1[_][0])
                final_comp_list_2.append([pocket_ref_list[0][rand_index], pocket_ref_list[1][rand_index], pocket_ref_list[2][rand_index]])
                            
        #comp list 3                    
        for _ in total_range:
            if (madmax_pocket_index_list[_] == 0): #madmax
                rand_index = self.get_recursive_index_for_double(madmax_ref_list, final_comp_list_1[_][0], final_comp_list_2[_][0])
                final_comp_list_3.append([madmax_ref_list[0][rand_index], madmax_ref_list[1][rand_index], madmax_ref_list[2][rand_index]])
                
            else:                                  #pocket
                rand_index = self.get_recursive_index_for_double(pocket_ref_list, final_comp_list_1[_][0], final_comp_list_2[_][0])
                final_comp_list_3.append([pocket_ref_list[0][rand_index], pocket_ref_list[1][rand_index], pocket_ref_list[2][rand_index]])
                
        for i in total_range:
            rand_index = random.randint(0, 10)
            final_bg_list.append([bg_ref_list[0][rand_index], bg_ref_list[1][rand_index], bg_ref_list[2][rand_index]])
        
        ref_list = bg_hex_list.copy()
        match_color_index_list = []
        final_bird_list_reverse = final_bird_list_1.copy()
        
        for i in range(2):
            ref_str = ref_list[i]
            index = 999999
            rand_int = random.randint(0, 1)
            if rand_int == 0:
                counter = 0
                for y, x in list(enumerate(final_bird_list_reverse)):
                    if ref_str == x[1] and counter is 1:
                        index = y
                        match_color_index_list.append(index)
                        break
                    elif ref_str == x[1] and counter is 0:
                        counter = 1
                        continue
                    else:
                        continue
            else:
                counter = 0
                for y, x in reversed(list(enumerate(final_bird_list_reverse))):
                    if ref_str == x[1] and counter == 1:
                        index = y
                        match_color_index_list.append(index)
                        break
                    elif ref_str == x[1] and counter == 0:
                        counter = 1
                        continue
                    else:
                        continue
            
            print(index)
            final_bird_list_2[index] = final_bird_list_1[index]
            final_bird_list_3[index] = final_bird_list_1[index]
            final_comp_list_1[index] = final_bird_list_1[index]
            final_comp_list_2[index] = final_bird_list_1[index]
            final_comp_list_3[index] = final_bird_list_1[index]
            final_bg_list[index] = final_bird_list_1[index]
            
        for i in range(2, 11):
            ref_str = ref_list[i]
            index = 999999
            rand_int = random.randint(0, 1)
            if rand_int == 0:
                counter = 0
                for y, x in list(enumerate(final_bird_list_reverse)):
                    if ref_str == x[1] and counter == 1:
                        index = y
                        match_color_index_list.append(index)
                        break
                    elif ref_str == x[1] and counter == 0:
                        counter = 1
                        continue
                    else:
                        continue
            else:
                counter = 0
                for y, x in reversed(list(enumerate(final_bird_list_reverse))):
                    if ref_str == x[1] and counter is 1:
                        index = y
                        match_color_index_list.append(index)
                        break
                    elif ref_str == x[1] and counter == 0:
                        counter = 1
                        continue
                    else:
                        continue
            
            final_comp_list_1[index] = final_bird_list_1[index]
            final_comp_list_2[index] = final_bird_list_2[index]
            final_comp_list_3[index] = final_bird_list_3[index]
            final_bg_list[index]     = final_bird_list_1[index]
            
        super_duper_list = []
        mask_index_list = []
        mask_random_list = []

        for i in range(68):
            mask_random_list.append(i)
  
        for i in total_range:
            mask_index_list.append(99999)
            
        for _ in match_color_index_list:
            mask_index_list[_] = 0
            mask_random_list.remove(_)
            
        for i, x in enumerate(match_color_index_list[2:]):
            mask_index_list[x] = i + 1
            
        for i in range(1, 7):
            for j in range(6):
                rand_int = random.randint(0, len(mask_random_list) - 1)
                rand_index = mask_random_list[rand_int]
                mask_index_list[rand_index] = i
                mask_random_list.remove(rand_index)
                
        for i in range(7, 10):
            for j in range(7):
                if (len(mask_random_list) <= 1):
                    mask_index_list[mask_random_list[0]] = i
                else:
                    rand_int = random.randint(0, len(mask_random_list) - 1)
                    rand_index = mask_random_list[rand_int]
                    mask_index_list[rand_index] = i
                    mask_random_list.remove(rand_index)
            
        for i in total_range:
            super_duper_list.append([final_bird_list_1[i], final_bird_list_2[i],  final_bird_list_3[i], final_comp_list_1[i], final_comp_list_2[i], final_comp_list_3[i], final_bg_list[i], mask_index_list[i], madmax_pocket_index_list[i]])
     
        print(super_duper_list)
        
        lines = ""
        text_index = 1
        
        for i in super_duper_list:
            intermediate_line = str(text_index) + ",BIRD1," + i[0][0] + ",#" + i[0][1] + ",BIRD2," + i[1][0] + ",#" + i[1][1] + ",BIRD3," + i[2][0] + ",#" + i[2][1] \
            + ",COMP1," + i[3][0] + ",#" + i[3][1] +  ",COMP2," + i[4][0] + ",#" + i[4][1] +  ",COMP3," + i[5][0] + ",#" + i[5][1] \
            +",BACKGROUND," + i[6][0] + ",#" + i[6][1] + ",MASK_INDEX=" + str(i[7])

            if (i[8] == 0):
                intermediate_line += ",MADMAX"
            else:
                intermediate_line += ",POCKET"

            
            
            lines += (intermediate_line + "\n")
            text_index += 1
        
        match_color_index_list = [x+1 for x in match_color_index_list]
        
        lines += "COLOUR MATCH - " + str(match_color_index_list) + "\n"
        
        #for i in index_list:
        #    print(super_duper_list[i])

        
        print("  ----   ")
        #print(super_duper_list)
        
        with open("E:\\ARCHIVE\\FREELANCE\\NFT\\LogFiles\\python_lvl2_log.txt", 'w') as f:
            for line in lines:
                f.write(line)
            
    
        
        


madmax_hex_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\Pigeon\\LV_4\\Hex\\Hex_Codes_MadMaxxx.txt"
madmax_name_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\Pigeon\\LV_4\\Hex\\Names_MadMaxxx.txt"
pocket_hex_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\Pigeon\\LV_4\\Hex\\Hex_Codes_Pocket.txt"
pocket_name_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\Pigeon\\LV_4\\Hex\\Names_Pocket.txt"
bg_hex_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\Pigeon\\LV_4\\Hex\\Hex_Codes_BG.txt"
bg_name_file = "E:\\ARCHIVE\\FREELANCE\\NFT\\Projects\\Pigeon\\LV_4\\Hex\\Names_BG.txt"

text_converter = TextConverter()

print(" ")
#print(text_converter.hex_to_rgb(selected_hex_file))
#print(text_converter.name_extract_by_line(selected_name_file))
text_converter.get_all_pseudorandom_lists(madmax_name_file, madmax_hex_file, pocket_name_file, pocket_hex_file, bg_name_file, bg_hex_file)