import cv2
from os import listdir
from os.path import isfile, join

input_folder = "E:\\ARCHIVE\\FREELANCE\\NFT\\RenderOutputs\\Montana\\lvl1"






for file in listdir(input_folder):
    
    vidcap = cv2.VideoCapture(join(input_folder, file))
    success, image = vidcap.read()
    file = file[:-4]
    if success:
        cv2.imwrite(file + ".jpg", image)  # save frame as JPEG file


