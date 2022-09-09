var _window = new Window("palette", "My Script", undefined);
var _startButton = _window.add("button", undefined, "RUN!");

_window.show();

_startButton.onClick = function () {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var LogFolder = new Folder("E://ARCHIVE//FREELANCE//NFT//" + "LogFiles");
    var index = 333;
    var renderQueue = app.project.renderQueue;

    //#region  _setvars
    var outputFolder = "E://ARCHIVE//FREELANCE//NFT//RenderOutputs//Montana";

    var bird_hex_list = ['41302a', '262227', '32234e', 'd2a785', '6386c3', '550026', '00FFFF', 'd9b365', '5e5003', '41A248', '25BD59', '503915', '616cb1', '2d6a75', 'DC4588', '4a7518', '302b66', '140632', 'd52f25', 'efd9d0', '3d3408', '99C221', '48484b', '009e8f', 'E6A65D', 'FFA300', 'fff058', 'e1f0e8', 'ca95a4', '5bb5b5', 'b8bb86', 'e64715', '0074b0', 'c5add0', 'ea640d', '898b8e', '000000', 'ef8407', 'e8d6c8', 'a0682b', '86c8b4', '83577D', 'b3061e', '5b5b5e', '9a004b', 'fce6eb', '684445', 'E87722', 'f2edbe', 'a76225', '00B4BC', '3b54a1', '8FCB24', 'e85b99', 'cdd0d1', '9f3d44', 'FAEB37', '81a512', 'a29400', 'dbdddf', '2b491e', 'd8cdc3', 'b5b8ba', '36001c', '6ea4be', 'c4e7f8', 'f1c700', '467289', '321129', '7bc6c0', 'C29BCB', 'D5E739', '6f5229', '950825', '6b0037', '864a54', 'eef0f1', '7a3d24', '2f1109', '483366', '2e4a5b', '005891', 'fddca3', '5a1521', 'f5faf7', 'fedf00', 'f8ede7', '007788', 'a06c7e', 'dcd872', '582b3a', '6C5D80', '402009', 'afab00', 'f5efd6', 'd90075', '99743f', '29CB7E', 'a2d3ea', '241c46', '3D5588', 'e9cde4', 'ef3a38', 'be3819', '85a0d3', 'f3efd6', 'ffef8c', 'a1d5cf', '8CC947', 'f7c7d7', 'ec7faa', '8e966e', 'e8d0b7', 'ffebc2', '1e2705', 'c7b300', '8270a3', '002628', 'bcb2ad', 'FFFFFF', 'ea949d', '94679C', '283307', 'b7c1cd', 'abb5c1', '0f2405', '1e000e', '003447', 'B9BE56', '8ecae5', 'f5a54a', 'cc955e', 'e3bfc3', 'bd9b61', 'c9d2d7', 'f6c3d3', 'd4e19e', '3a0807', 'b59892', '9db1dc', 'BD51A2', '610819', 'dacbe5', '263284', '179DAB', '003640', 'f7b060', 'eaf0f5', 'dc534d', '363538', '47492b', '6b7c91', '131c04', 'aebee3', '412c13', 'a29690', 'bdd268', 'a65f2f', 'bc90c1', 'a86059', 'eadfa8', 'E44c9A', '4f1f30', '117774', '766a10', 'b194c0', 'e5cce1'];
    var bird_name_list = ['Chocolate Brown', 'Metropolis Grey', 'Electra Violet', 'Tana Brown', 'Marseille Blue', 'Anger Red', 'Cyan', 'Inca Brown', 'Dragon Green', 'Hulk Green', 'Mystic Green', 'Mole Brown', 'Porto Blue', 'Glory Blue', 'Rosario Pink', 'Valley Green', 'Mantra Blue', 'Vampire Violet', 'Blood Red', 'Sensible Brown', 'Maya Green', 'Laser Green', 'Icarus Grey', 'Emerald Green', 'Peach', 'Medium Yellow', 'Canarias Yellow', 'Gemini Green', 'Stereo Pink', 'Erasmus Green', 'Bonsai Green', 'Mars Orange', 'Europe Blue', 'Persia Violet', 'Orange', 'London Grey', 'Black', 'Lava Orange', 'Plancton', 'Chiapas Brown', 'Java Green', 'Sultan Violet', 'Vivid Red', 'Wolf Grey', 'AÃ§ai Red', 'Supernova Pink', 'Mosquito Brown', 'Mango', 'Shining Green', 'Mustard', 'Formentera Blue', 'Ween Blue', 'Laos Green', 'Erika', 'Rita Grey', 'Interrail Brown', 'Sulfur Yellow', 'Guacamole Green', 'Babel Green', 'Siberian Grey', 'Toscana Green', 
    'Koala Grey', 'Pearl Grey', 'Taurus Red', 'Odyssey Blue', 'Rain Blue', 'Eldorado', 'Eureka Blue', 'Gaudi Red', 'Bali Green', 'Bishop Violet', 'Psycho Green', 'Sequoia Brown', 'Clandestine Red', 'Rioja Red', 'Compact Red', 'Stardust Grey', 'Glace Brown', 'Ebony Brown', 'Venus Violet', 'Jase Blue', 'Electric Blue', 'Dalai Orange', 'Warrior Brown', 'Virgin Green', 'Light Yellow', 'Penelope Brown', 'Tramontana Blue', 'Single Pink', 'Lemon Yellow', 'Bitacora', 'Reverend Violet', 'Coffee Brown', 'Oregano Green', 'Placebo Grey', 'Magenta', 'Marrakech', 'Mint Green', 'Thalassa Blue', 'Cosmos Violet', 'Babylon Blue', 'April Violet', 'Light Red', 'Phoenix Orange', 'Dancer Blue', 'Bone White', 'Party Yellow', 'Luminous Green', 'Iguana Green', 'Tokyo Pink', 'Orchid Pink', 'Thai Green', 'Dingo Brown', 'Sundance', 'Dharma Green', 'Yosemite Yellow', 'Destiny Violet', 'Hercules Blue', 'Native Grey', 'White', 'Tutti Frutti', 'Raval Violet', 'Borneo Green', 'Winter Grey', 'Jaws Grey', 'Amazon Green', 'Stendhal Red', 'Deep Blue', 'Sonar Green', 'Hydra Blue', 'Tangerine', 'Montserrat', 'Boreal Pink', 'Kraft Brown', 'Cloud Grey', 'Chewing Gum', 'Frisco Green', 'Cherokee Red', 'Respect Pink', 'Rosemary Blue', 'Disco Pink', 'Bordeaux Red', 'Republic Violet', 'Tuareg Blue', 'Genesis Blue', 'Pegasus Blue', 'Solar Orange', 'Angel Blue', 'Fever Red', 'Anthracite Grey', 'Labyrinth Green', 'Whale Grey', 'Infinite Green', 'Martinez Blue', 'Gondola Brown', 'Balboa Grey', 'Pistachio Green', 'Bean Brown', 'Mandala Violet', 'Oak Brown', 'Safari Brown', 'Joker Pink', 'Pandora Red', 'Beryl Green', 'Mission Green', 'Community Violet', 'Shiva Violet'];
    var bird_color_list = [[0.2549019607843137, 0.18823529411764706, 0.16470588235294117], [0.14901960784313725, 0.13333333333333333, 0.15294117647058825], [0.19607843137254902, 0.13725490196078433, 0.3058823529411765], [0.8235294117647058, 0.6549019607843137, 0.5215686274509804], [0.38823529411764707, 0.5254901960784314, 0.7647058823529411], [0.3333333333333333, 0.0, 0.14901960784313725], [0.0, 1.0, 1.0], [0.8509803921568627, 0.7019607843137254, 0.396078431372549], [0.3686274509803922, 0.3137254901960784, 0.011764705882352941], [0.2549019607843137, 0.6352941176470588, 0.2823529411764706], [0.1450980392156863, 0.7411764705882353, 
        0.34901960784313724], [0.3137254901960784, 0.2235294117647059, 0.08235294117647059], [0.3803921568627451, 0.4235294117647059, 0.6941176470588235], [0.17647058823529413, 0.41568627450980394, 0.4588235294117647], [0.8627450980392157, 0.27058823529411763, 0.5333333333333333], [0.2901960784313726, 0.4588235294117647, 0.09411764705882353], [0.18823529411764706, 0.16862745098039217, 0.4], [0.0784313725490196, 0.023529411764705882, 0.19607843137254902], [0.8352941176470589, 0.1843137254901961, 0.1450980392156863], [0.9372549019607843, 0.8509803921568627, 0.8156862745098039], [0.23921568627450981, 0.20392156862745098, 0.03137254901960784], [0.6, 0.7607843137254902, 0.12941176470588237], [0.2823529411764706, 0.2823529411764706, 0.29411764705882354], [0.0, 0.6196078431372549, 0.5607843137254902], [0.9019607843137255, 0.6509803921568628, 0.36470588235294116], [1.0, 0.6392156862745098, 0.0], [1.0, 0.9411764705882353, 0.34509803921568627], [0.8823529411764706, 0.9411764705882353, 0.9098039215686274], [0.792156862745098, 0.5843137254901961, 0.6431372549019608], [0.3568627450980392, 0.7098039215686275, 0.7098039215686275], [0.7215686274509804, 0.7333333333333333, 0.5254901960784314], [0.9019607843137255, 0.2784313725490196, 0.08235294117647059], [0.0, 0.4549019607843137, 0.6901960784313725], [0.7725490196078432, 0.6784313725490196, 0.8156862745098039], [0.9176470588235294, 0.39215686274509803, 0.050980392156862744], [0.5372549019607843, 0.5450980392156862, 0.5568627450980392], [0.0, 0.0, 0.0], [0.9372549019607843, 0.5176470588235295, 0.027450980392156862], [0.9098039215686274, 0.8392156862745098, 0.7843137254901961], [0.6274509803921569, 0.40784313725490196, 0.16862745098039217], [0.5254901960784314, 0.7843137254901961, 0.7058823529411765], [0.5137254901960784, 0.3411764705882353, 0.49019607843137253], [0.7019607843137254, 0.023529411764705882, 0.11764705882352941], [0.3568627450980392, 0.3568627450980392, 0.3686274509803922], [0.6039215686274509, 0.0, 0.29411764705882354], [0.9882352941176471, 0.9019607843137255, 0.9215686274509803], [0.40784313725490196, 0.26666666666666666, 0.27058823529411763], [0.9098039215686274, 
        0.4666666666666667, 0.13333333333333333], [0.9490196078431372, 0.9294117647058824, 0.7450980392156863], [0.6549019607843137, 0.3843137254901961, 0.1450980392156863], [0.0, 0.7058823529411765, 0.7372549019607844], [0.23137254901960785, 0.32941176470588235, 0.6313725490196078], [0.5607843137254902, 0.796078431372549, 0.1411764705882353], [0.9098039215686274, 0.3568627450980392, 0.6], [0.803921568627451, 0.8156862745098039, 0.8196078431372549], [0.6235294117647059, 0.23921568627450981, 0.26666666666666666], [0.9803921568627451, 0.9215686274509803, 0.21568627450980393], [0.5058823529411764, 0.6470588235294118, 0.07058823529411765], [0.6352941176470588, 0.5803921568627451, 0.0], [0.8588235294117647, 0.8666666666666667, 0.8745098039215686], [0.16862745098039217, 0.28627450980392155, 0.11764705882352941], [0.8470588235294118, 0.803921568627451, 0.7647058823529411], [0.7098039215686275, 0.7215686274509804, 0.7294117647058823], [0.21176470588235294, 0.0, 0.10980392156862745], [0.43137254901960786, 0.6431372549019608, 0.7450980392156863], [0.7686274509803922, 0.9058823529411765, 0.9725490196078431], [0.9450980392156862, 0.7803921568627451, 0.0], [0.27450980392156865, 0.4470588235294118, 0.5372549019607843], [0.19607843137254902, 0.06666666666666667, 0.1607843137254902], [0.4823529411764706, 0.7764705882352941, 0.7529411764705882], [0.7607843137254902, 0.6078431372549019, 0.796078431372549], [0.8352941176470589, 0.9058823529411765, 0.2235294117647059], [0.43529411764705883, 0.3215686274509804, 0.1607843137254902], [0.5843137254901961, 0.03137254901960784, 0.1450980392156863], [0.4196078431372549, 0.0, 0.21568627450980393], [0.5254901960784314, 0.2901960784313726, 0.32941176470588235], [0.9333333333333333, 0.9411764705882353, 0.9450980392156862], [0.47843137254901963, 0.23921568627450981, 0.1411764705882353], [0.1843137254901961, 0.06666666666666667, 0.03529411764705882], [0.2823529411764706, 0.2, 0.4], [0.1803921568627451, 0.2901960784313726, 0.3568627450980392], [0.0, 0.34509803921568627, 0.5686274509803921], [0.9921568627450981, 0.8627450980392157, 0.6392156862745098], [0.35294117647058826, 0.08235294117647059, 0.12941176470588237], [0.9607843137254902, 0.9803921568627451, 0.9686274509803922], [0.996078431372549, 0.8745098039215686, 0.0], [0.9725490196078431, 0.9294117647058824, 0.9058823529411765], [0.0, 0.4666666666666667, 0.5333333333333333], [0.6274509803921569, 0.4235294117647059, 0.49411764705882355], [0.8627450980392157, 0.8470588235294118, 0.4470588235294118], [0.34509803921568627, 0.16862745098039217, 0.22745098039215686], [0.4235294117647059, 0.36470588235294116, 0.5019607843137255], [0.25098039215686274, 0.12549019607843137, 0.03529411764705882], [0.6862745098039216, 0.6705882352941176, 0.0], [0.9607843137254902, 0.9372549019607843, 0.8392156862745098], [0.8509803921568627, 0.0, 0.4588235294117647], [0.6, 0.4549019607843137, 0.24705882352941178], [0.1607843137254902, 0.796078431372549, 0.49411764705882355], [0.6352941176470588, 0.8274509803921568, 0.9176470588235294], [0.1411764705882353, 0.10980392156862745, 0.27450980392156865], [0.23921568627450981, 0.3333333333333333, 0.5333333333333333], [0.9137254901960784, 0.803921568627451, 0.8941176470588236], [0.9372549019607843, 0.22745098039215686, 0.2196078431372549], [0.7450980392156863, 0.2196078431372549, 0.09803921568627451], [0.5215686274509804, 0.6274509803921569, 0.8274509803921568], [0.9529411764705882, 0.9372549019607843, 0.8392156862745098], [1.0, 0.9372549019607843, 0.5490196078431373], [0.6313725490196078, 0.8352941176470589, 0.8117647058823529], [0.5490196078431373, 0.788235294117647, 0.2784313725490196], [0.9686274509803922, 0.7803921568627451, 0.8431372549019608], [0.9254901960784314, 0.4980392156862745, 0.6666666666666666], [0.5568627450980392, 0.5882352941176471, 0.43137254901960786], [0.9098039215686274, 0.8156862745098039, 0.7176470588235294], [1.0, 0.9215686274509803, 0.7607843137254902], [0.11764705882352941, 0.15294117647058825, 0.0196078431372549], [0.7803921568627451, 0.7019607843137254, 0.0], [0.5098039215686274, 0.4392156862745098, 0.6392156862745098], [0.0, 0.14901960784313725, 0.1568627450980392], [0.7372549019607844, 0.6980392156862745, 0.6784313725490196], [1.0, 1.0, 1.0], [0.9176470588235294, 0.5803921568627451, 0.615686274509804], [0.5803921568627451, 0.403921568627451, 0.611764705882353], [0.1568627450980392, 0.2, 0.027450980392156862], [0.7176470588235294, 0.7568627450980392, 0.803921568627451], [0.6705882352941176, 0.7098039215686275, 0.7568627450980392], [0.058823529411764705, 0.1411764705882353, 0.0196078431372549], [0.11764705882352941, 0.0, 0.054901960784313725], [0.0, 0.20392156862745098, 0.2784313725490196], [0.7254901960784313, 0.7450980392156863, 0.33725490196078434], [0.5568627450980392, 0.792156862745098, 0.8980392156862745], [0.9607843137254902, 0.6470588235294118, 0.2901960784313726], [0.8, 0.5843137254901961, 
        0.3686274509803922], [0.8901960784313725, 0.7490196078431373, 0.7647058823529411], [0.7411764705882353, 0.6078431372549019, 0.3803921568627451], [0.788235294117647, 0.8235294117647058, 0.8431372549019608], [0.9647058823529412, 0.7647058823529411, 0.8274509803921568], [0.8313725490196079, 0.8823529411764706, 0.6196078431372549], [0.22745098039215686, 0.03137254901960784, 0.027450980392156862], [0.7098039215686275, 0.596078431372549, 0.5725490196078431], [0.615686274509804, 0.6941176470588235, 0.8627450980392157], [0.7411764705882353, 0.3176470588235294, 0.6352941176470588], [0.3803921568627451, 0.03137254901960784, 0.09803921568627451], [0.8549019607843137, 0.796078431372549, 0.8980392156862745], [0.14901960784313725, 0.19607843137254902, 0.5176470588235295], [0.09019607843137255, 0.615686274509804, 0.6705882352941176], [0.0, 0.21176470588235294, 0.25098039215686274], [0.9686274509803922, 0.6901960784313725, 0.3764705882352941], [0.9176470588235294, 0.9411764705882353, 0.9607843137254902], [0.8627450980392157, 0.3254901960784314, 0.30196078431372547], [0.21176470588235294, 0.20784313725490197, 0.2196078431372549], [0.2784313725490196, 0.28627450980392155, 0.16862745098039217], [0.4196078431372549, 0.48627450980392156, 0.5686274509803921], [0.07450980392156863, 0.10980392156862745, 0.01568627450980392], [0.6823529411764706, 0.7450980392156863, 0.8901960784313725], [0.2549019607843137, 0.17254901960784313, 0.07450980392156863], [0.6352941176470588, 0.5882352941176471, 0.5647058823529412], [0.7411764705882353, 0.8235294117647058, 0.40784313725490196], [0.6509803921568628, 0.37254901960784315, 0.1843137254901961], [0.7372549019607844, 0.5647058823529412, 0.7568627450980392], [0.6588235294117647, 0.3764705882352941, 0.34901960784313724], [0.9176470588235294, 0.8745098039215686, 0.6588235294117647], [0.8941176470588236, 0.2980392156862745, 0.6039215686274509], [0.30980392156862746, 0.12156862745098039, 0.18823529411764706], [0.06666666666666667, 0.4666666666666667, 0.4549019607843137], [0.4627450980392157, 0.41568627450980394, 0.06274509803921569], [0.6941176470588235, 0.5803921568627451, 0.7529411764705882], [0.8980392156862745, 0.8, 0.8823529411764706]];

    var comp_hex_list = ['fce6eb', '85a0d3', '9db1dc', 'f3efd6', 'd8cdc3', 'DC4588', '0f2405', 'eadfa8', 'E44c9A', '00202c', '6f5229', 'fff9c3', '007788', '00FFFF', 'e8d0b7', '4a7518', '44b3df', '47492b', '6386c3', 'a65f2f', '7a3d24', 'd90075', 'f1e8de', 'a1d5cf', 'E87722', '41302a', 'c9d2d7', 'a2d3ea', 'fac67e', '2d6a75', '2d0604', '6C5D80', 'FAEB37', 'bc90c1', '99C221', 'a29400', '8CC947', '00B4BC', '29CB7E', '6ea4be', '8FCB24', '0074b0', '550026', 'cdd0d1', '0098d2', 'e8d6c8', 'ffebc2', '83577D', '41A248', '9f3d44', 'ca95a4', '503915', 'd58b26', 'b8bb86', 'd0add2', '467289', 'dbdddf', '864a54', 'b5b8ba', '283307', 'c7b300', '262227', '1e2705', 'ef8407', '81a512', 'cae4f0', '321129', '003447', 'f8ede7', 'a76225', '48484b', '5bb5b5', '5e7386', 'eef0f1', '000000', 'ec7faa', 'abb5c1', 'c5add0', '142f0f', '99743f', 'b59892', '616cb1', '483366', 'e64715', 'f2dddd', '263284', '950825', 'd4e19e', 'd9b365', 'c4e7f8', 'ea640d', 'bcb2ad', 'f7c7d7', 'afab00', 'a86059', 'ea949d', '36001c', 'bdd268', 'f9f6e9', '50590d', 'C29BCB', '8ecae5', 'cdc3e1', '003875', 'FFFFFF', 'E6A65D', '2f1109', 'a5b700', '5b5b5e', '610819', '042151', 'ffef8c', '002628', 'fedf00', '5a1521', 'fff058', '684445', '94679C', 'a06c7e', '402009', 'e85b99', '6b4d8d', '3d3408', 'D5E739', 'b7c1cd', 'f6c3d3', '003640', 'f1f5df', '131c04', 'bd9b61', '5e5003', 'fef9e3', '117774', 'efd9d0', '412c13', 'dcd872', '32234e', 'BD51A2', 'a29690', '3b54a1', '333b08', 'ef3a38', 'd52f25', 'f5faf7', 'f1c700', '8e6061', '010e30', 'fddca3', 'FFA300', 'c1cae8', '7bc6c0', 'B9BE56', '86c8b4', '2e4a5b', 'b3061e', '179DAB', '898b8e', '008691', '25BD59', '6b0037', '6b7c91', '8270a3', 'e3bfc3', 'f2edbe', '2b491e', 'f5a54a', '009e8f'];
    var comp_name_list = ['Supernova Pink', 'Dancer Blue', 'Rosemary Blue', 'Bone White', 'Koala Grey', 'Rosario Pink', 'Amazon Green', 'Safari Brown', 'Joker Pink', 'Poseydon Blue', 'Sequoia Brown', 'Ipanema Yellow', 'Tramontana Blue', 'Cyan', 'Dingo Brown', 'Valley Green', 'Argo Blue', 'Labyrinth Green', 'Marseille Blue', 'Bean Brown', 'Glace Brown', 'Magenta', 'Jaima Brown', 'Luminous Green', 'Mango', 'Chocolate Brown', 'Cloud Grey', 'Thalassa Blue', 'Plural Orange', 'Glory Blue', 'Night Red', 'Reverend Violet', 'Sulfur Yellow', 'Mandala Violet', 'Laser Green', 'Babel Green', 'Iguana Green', 'Formentera Blue', 'Mint Green', 'Odyssey Blue', 'Laos Green', 'Europe Blue', 'Anger Red', 'Rita Grey', 'Freedom Blue', 'Plancton', 'Sundance', 'Sultan Violet', 'Hulk Green', 'Interrail Brown', 'Stereo Pink', 'Mole Brown', 'Tibet', 'Bonsai Green', 'Arlet Violet', 'Eureka Blue', 'Siberian Grey', 'Compact Red', 'Pearl Grey', 'Borneo Green', 
    'Yosemite Yellow', 'Metropolis Grey', 'Dharma Green', 'Lava Orange', 'Guacamole Green', 'Barceloneta Blue', 'Gaudi Red', 'Deep Blue', 'Penelope Brown', 'Mustard', 'Icarus Grey', 'Erasmus Green', 'Chernobyl Grey', 'Stardust Grey', 'Black', 'Orchid Pink', 'Jaws Grey', 'Persia Violet', 'Era Green', 'Marrakech', 'Respect Pink', 'Porto Blue', 'Venus Violet', 'Mars Orange', 'Saudade Pink', 'Tuareg Blue', 'Clandestine Red', 'Frisco Green', 'Inca Brown', 'Rain Blue', 'Orange', 'Native Grey', 'Tokyo Pink', 'Oregano Green', 'Oak Brown', 'Tutti Frutti', 'Taurus Red', 'Pistachio Green', 'Malta White', 'Euskadi Green', 'Bishop Violet', 'Hydra Blue', 'Woodstock Violet', 'Dark Blue', 'White', 'Peach', 'Ebony Brown', 'Neon Green', 'Wolf Grey', 'Bordeaux Red', 'Twister Blue', 'Party Yellow', 'Hercules Blue', 'Light Yellow', 'Warrior Brown', 'Canarias Yellow', 'Mosquito Brown', 'Raval Violet', 'Single Pink', 'Coffee Brown', 'Erika', 'Ultraviolet', 'Maya Green', 'Psycho Green', 'Winter Grey', 'Chewing Gum', 'Pegasus Blue', 'Vespa Green', 'Infinite Green', 'Kraft Brown', 'Dragon Green', 'Tofu Grey', 'Beryl Green', 'Sensible Brown', 'Gondola Brown', 'Lemon Yellow', 'Electra Violet', 'Disco Pink', 'Balboa Grey', 'Ween Blue', 'Comarca Green', 'Light Red', 'Blood Red', 'Virgin Green', 'Eldorado', 'Scarlet Brown', 'Navy Blue', 'Dalai Orange', 'Medium Yellow', 'Sagan Blue', 'Bali Green', 'Sonar Green', 'Java Green', 'Jase Blue', 'Vivid Red', 'Genesis Blue', 'London Grey', 'Turquoise', 'Mystic Green', 'Rioja Red', 'Whale Grey', 'Destiny Violet', 'Boreal Pink', 'Shining Green', 'Toscana Green', 'Tangerine', 'Emerald Green'];
    var comp_color_list = [[0.9882352941176471, 0.9019607843137255, 0.9215686274509803], [0.5215686274509804, 0.6274509803921569, 0.8274509803921568], [0.615686274509804, 0.6941176470588235, 0.8627450980392157], [0.9529411764705882, 0.9372549019607843, 0.8392156862745098], [0.8470588235294118, 0.803921568627451, 0.7647058823529411], [0.8627450980392157, 0.27058823529411763, 0.5333333333333333], [0.058823529411764705, 0.1411764705882353, 0.0196078431372549], [0.9176470588235294, 0.8745098039215686, 0.6588235294117647], [0.8941176470588236, 0.2980392156862745, 0.6039215686274509], [0.0, 0.12549019607843137, 0.17254901960784313], [0.43529411764705883, 0.3215686274509804, 0.1607843137254902], [1.0, 0.9764705882352941, 0.7647058823529411], [0.0, 0.4666666666666667, 0.5333333333333333], [0.0, 1.0, 1.0], [0.9098039215686274, 0.8156862745098039, 0.7176470588235294], [0.2901960784313726, 0.4588235294117647, 0.09411764705882353], [0.26666666666666666, 0.7019607843137254, 0.8745098039215686], [0.2784313725490196, 0.28627450980392155, 0.16862745098039217], [0.38823529411764707, 0.5254901960784314, 0.7647058823529411], [0.6509803921568628, 0.37254901960784315, 0.1843137254901961], [0.47843137254901963, 0.23921568627450981, 0.1411764705882353], [0.8509803921568627, 0.0, 0.4588235294117647], [0.9450980392156862, 0.9098039215686274, 0.8705882352941177], [0.6313725490196078, 0.8352941176470589, 0.8117647058823529], [0.9098039215686274, 0.4666666666666667, 0.13333333333333333], [0.2549019607843137, 0.18823529411764706, 0.16470588235294117], [0.788235294117647, 0.8235294117647058, 0.8431372549019608], [0.6352941176470588, 0.8274509803921568, 0.9176470588235294], [0.9803921568627451, 0.7764705882352941, 0.49411764705882355], [0.17647058823529413, 0.41568627450980394, 0.4588235294117647], [0.17647058823529413, 0.023529411764705882, 0.01568627450980392], [0.4235294117647059, 0.36470588235294116, 0.5019607843137255], [0.9803921568627451, 0.9215686274509803, 0.21568627450980393], [0.7372549019607844, 0.5647058823529412, 0.7568627450980392], [0.6, 0.7607843137254902, 0.12941176470588237], [0.6352941176470588, 0.5803921568627451, 0.0], [0.5490196078431373, 0.788235294117647, 0.2784313725490196], [0.0, 0.7058823529411765, 0.7372549019607844], [0.1607843137254902, 0.796078431372549, 0.49411764705882355], [0.43137254901960786, 0.6431372549019608, 0.7450980392156863], [0.5607843137254902, 0.796078431372549, 0.1411764705882353], [0.0, 0.4549019607843137, 0.6901960784313725], [0.3333333333333333, 0.0, 0.14901960784313725], [0.803921568627451, 0.8156862745098039, 0.8196078431372549], [0.0, 0.596078431372549, 0.8235294117647058], [0.9098039215686274, 0.8392156862745098, 0.7843137254901961], [1.0, 0.9215686274509803, 0.7607843137254902], [0.5137254901960784, 0.3411764705882353, 0.49019607843137253], [0.2549019607843137, 0.6352941176470588, 0.2823529411764706], [0.6235294117647059, 0.23921568627450981, 0.26666666666666666], [0.792156862745098, 0.5843137254901961, 0.6431372549019608], [0.3137254901960784, 0.2235294117647059, 0.08235294117647059], [0.8352941176470589, 0.5450980392156862, 0.14901960784313725], [0.7215686274509804, 0.7333333333333333, 0.5254901960784314], [0.8156862745098039, 0.6784313725490196, 0.8235294117647058], [0.27450980392156865, 0.4470588235294118, 0.5372549019607843], [0.8588235294117647, 0.8666666666666667, 0.8745098039215686], [0.5254901960784314, 0.2901960784313726, 0.32941176470588235], [0.7098039215686275, 0.7215686274509804, 0.7294117647058823], [0.1568627450980392, 0.2, 0.027450980392156862], [0.7803921568627451, 0.7019607843137254, 0.0], [0.14901960784313725, 0.13333333333333333, 0.15294117647058825], [0.11764705882352941, 0.15294117647058825, 0.0196078431372549], [0.9372549019607843, 0.5176470588235295, 0.027450980392156862], [0.5058823529411764, 0.6470588235294118, 0.07058823529411765], [0.792156862745098, 0.8941176470588236, 0.9411764705882353], [0.19607843137254902, 0.06666666666666667, 0.1607843137254902], [0.0, 0.20392156862745098, 0.2784313725490196], [0.9725490196078431, 0.9294117647058824, 0.9058823529411765], [0.6549019607843137, 0.3843137254901961, 0.1450980392156863], [0.2823529411764706, 0.2823529411764706, 0.29411764705882354], [0.3568627450980392, 0.7098039215686275, 0.7098039215686275], [0.3686274509803922, 0.45098039215686275, 0.5254901960784314], [0.9333333333333333, 0.9411764705882353, 0.9450980392156862], [0.0, 0.0, 0.0], [0.9254901960784314, 0.4980392156862745, 0.6666666666666666], [0.6705882352941176, 0.7098039215686275, 0.7568627450980392], [0.7725490196078432, 0.6784313725490196, 0.8156862745098039], [0.0784313725490196, 0.1843137254901961, 0.058823529411764705], [0.6, 0.4549019607843137, 0.24705882352941178], [0.7098039215686275, 0.596078431372549, 0.5725490196078431], [0.3803921568627451, 0.4235294117647059, 0.6941176470588235], [0.2823529411764706, 0.2, 0.4], [0.9019607843137255, 0.2784313725490196, 0.08235294117647059], [0.9490196078431372, 0.8666666666666667, 0.8666666666666667], [0.14901960784313725, 0.19607843137254902, 0.5176470588235295], [0.5843137254901961, 0.03137254901960784, 0.1450980392156863], [0.8313725490196079, 0.8823529411764706, 0.6196078431372549], [0.8509803921568627, 0.7019607843137254, 0.396078431372549], [0.7686274509803922, 0.9058823529411765, 0.9725490196078431], [0.9176470588235294, 0.39215686274509803, 0.050980392156862744], [0.7372549019607844, 0.6980392156862745, 0.6784313725490196], [0.9686274509803922, 0.7803921568627451, 0.8431372549019608], [0.6862745098039216, 0.6705882352941176, 0.0], [0.6588235294117647, 0.3764705882352941, 0.34901960784313724], [0.9176470588235294, 0.5803921568627451, 0.615686274509804], [0.21176470588235294, 0.0, 0.10980392156862745], [0.7411764705882353, 0.8235294117647058, 0.40784313725490196], [0.9764705882352941, 0.9647058823529412, 0.9137254901960784], [0.3137254901960784, 0.34901960784313724, 0.050980392156862744], [0.7607843137254902, 0.6078431372549019, 0.796078431372549], [0.5568627450980392, 0.792156862745098, 0.8980392156862745], [0.803921568627451, 0.7647058823529411, 0.8823529411764706], [0.0, 0.2196078431372549, 0.4588235294117647], [1.0, 1.0, 1.0], [0.9019607843137255, 0.6509803921568628, 0.36470588235294116], [0.1843137254901961, 0.06666666666666667, 0.03529411764705882], [0.6470588235294118, 0.7176470588235294, 0.0], [0.3568627450980392, 0.3568627450980392, 0.3686274509803922], [0.3803921568627451, 0.03137254901960784, 0.09803921568627451], [0.01568627450980392, 0.12941176470588237, 0.3176470588235294], [1.0, 0.9372549019607843, 0.5490196078431373], [0.0, 0.14901960784313725, 0.1568627450980392], [0.996078431372549, 0.8745098039215686, 0.0], [0.35294117647058826, 0.08235294117647059, 0.12941176470588237], [1.0, 0.9411764705882353, 0.34509803921568627], [0.40784313725490196, 0.26666666666666666, 0.27058823529411763], [0.5803921568627451, 0.403921568627451, 0.611764705882353], [0.6274509803921569, 0.4235294117647059, 0.49411764705882355], [0.25098039215686274, 0.12549019607843137, 0.03529411764705882], [0.9098039215686274, 0.3568627450980392, 0.6], [0.4196078431372549, 0.30196078431372547, 0.5529411764705883], [0.23921568627450981, 0.20392156862745098, 0.03137254901960784], [0.8352941176470589, 0.9058823529411765, 0.2235294117647059], [0.7176470588235294, 0.7568627450980392, 0.803921568627451], [0.9647058823529412, 0.7647058823529411, 0.8274509803921568], [0.0, 0.21176470588235294, 0.25098039215686274], [0.9450980392156862, 0.9607843137254902, 0.8745098039215686], [0.07450980392156863, 0.10980392156862745, 0.01568627450980392], [0.7411764705882353, 0.6078431372549019, 0.3803921568627451], [0.3686274509803922, 0.3137254901960784, 0.011764705882352941], [0.996078431372549, 0.9764705882352941, 0.8901960784313725], [0.06666666666666667, 0.4666666666666667, 0.4549019607843137], [0.9372549019607843, 0.8509803921568627, 0.8156862745098039], [0.2549019607843137, 0.17254901960784313, 0.07450980392156863], [0.8627450980392157, 0.8470588235294118, 0.4470588235294118], [0.19607843137254902, 0.13725490196078433, 0.3058823529411765], [0.7411764705882353, 0.3176470588235294, 0.6352941176470588], [0.6352941176470588, 0.5882352941176471, 0.5647058823529412], [0.23137254901960785, 0.32941176470588235, 0.6313725490196078], [0.2, 0.23137254901960785, 0.03137254901960784], [0.9372549019607843, 0.22745098039215686, 0.2196078431372549], [0.8352941176470589, 0.1843137254901961, 0.1450980392156863], [0.9607843137254902, 0.9803921568627451, 0.9686274509803922], [0.9450980392156862, 0.7803921568627451, 0.0], [0.5568627450980392, 0.3764705882352941, 0.3803921568627451], [0.00392156862745098, 0.054901960784313725, 0.18823529411764706], [0.9921568627450981, 0.8627450980392157, 0.6392156862745098], [1.0, 0.6392156862745098, 0.0], [0.7568627450980392, 0.792156862745098, 0.9098039215686274], [0.4823529411764706, 0.7764705882352941, 0.7529411764705882], [0.7254901960784313, 0.7450980392156863, 0.33725490196078434], [0.5254901960784314, 0.7843137254901961, 0.7058823529411765], [0.1803921568627451, 0.2901960784313726, 0.3568627450980392], [0.7019607843137254, 0.023529411764705882, 0.11764705882352941], [0.09019607843137255, 0.615686274509804, 0.6705882352941176], [0.5372549019607843, 0.5450980392156862, 0.5568627450980392], [0.0, 0.5254901960784314, 0.5686274509803921], [0.1450980392156863, 0.7411764705882353, 0.34901960784313724], [0.4196078431372549, 0.0, 0.21568627450980393], [0.4196078431372549, 0.48627450980392156, 0.5686274509803921], [0.5098039215686274, 0.4392156862745098, 0.6392156862745098], [0.8901960784313725, 0.7490196078431373, 0.7647058823529411], [0.9490196078431372, 0.9294117647058824, 0.7450980392156863], [0.16862745098039217, 0.28627450980392155, 0.11764705882352941], [0.9607843137254902, 0.6470588235294118, 0.2901960784313726], [0.0, 0.6196078431372549, 0.5607843137254902]];
    
    var background_name_list = ['Light Yellow', 'Solar Orange', 'Inca Brown', 'Montserrat', 'Blood Red', 'Erika', 'Single Pink', 'Interrail Brown', 'Persia Violet', 'Destiny Violet', 'Dancer Blue', 'Freedom Blue', 'Perseus Blue', 'Bali Green', 'Neon Green', 'Krypton Green', 'Java Green', 'Laser Green', 'Eldorado', 'Cyan'];
    var background_hex_list = ['fedf00', 'f7b060', 'd9b365', 'cc955e', 'd52f25', 'e85b99', 'a06c7e', '9f3d44', 'c5add0', '8270a3', '85a0d3', '0098d2', '7fb8d5', '7bc6c0', 'a5b700', '83890e', '86c8b4', '99C221', 'f1c700', '00FFFF'];
    var background_color_list = [[0.996078431372549, 0.8745098039215686, 0.0], [0.9686274509803922, 0.6901960784313725, 0.3764705882352941], [0.8509803921568627, 0.7019607843137254, 0.396078431372549], [0.8, 0.5843137254901961, 0.3686274509803922], [0.8352941176470589, 0.1843137254901961, 0.1450980392156863], [0.9098039215686274, 0.3568627450980392, 0.6], [0.6274509803921569, 0.4235294117647059, 0.49411764705882355], [0.6235294117647059, 0.23921568627450981, 0.26666666666666666], [0.7725490196078432, 0.6784313725490196, 0.8156862745098039], [0.5098039215686274, 0.4392156862745098, 0.6392156862745098], [0.5215686274509804, 0.6274509803921569, 0.8274509803921568], [0.0, 0.596078431372549, 0.8235294117647058], [0.4980392156862745, 0.7215686274509804, 0.8352941176470589], [0.4823529411764706, 0.7764705882352941, 0.7529411764705882], [0.6470588235294118, 0.7176470588235294, 0.0], [0.5137254901960784, 0.5372549019607843, 0.054901960784313725], [0.5254901960784314, 0.7843137254901961, 0.7058823529411765], [0.6, 0.7607843137254902, 0.12941176470588237], [0.9450980392156862, 0.7803921568627451, 0.0], [0.0, 1.0, 1.0]];

    var bool_list = [false, true, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true, true, false, false, false, true, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, true, true, false, false, true, false, false, false, true, false, false, false, false, false, true, true, false, false, false, false, false, true, false, false, false, false, false, false, false, true, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, true, false, false, false, false, false, false, false, false, true, false, true, false, false, true, true, false, false, false, false, false, false, true, false, true, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false];
    alert(bool_list.length);      

    var layer_94;
    var layer_avax;
    var layer_blobs;
    var layer_spraycan;
    var layer_bird;
    var layer_background;

    for (var y = 0; y < layers.length; y++) {
        if (layers[y].name == "94_logo") {
            layer_94 = layers[y]
        }
        else if (layers[y].name == "avax_logo") {
            layer_avax = layers[y]
        }
        else if (layers[y].name == "blobs_color") {
            layer_blobs = layers[y]
        }
        else if (layers[y].name == "spraycan_color") {
            layer_spraycan = layers[y]
        }
        else if (layers[y].name == "pigeon_color") {
            layer_bird = layers[y]
        }
        else if (layers[y].name == "background_color") {
            layer_background = layers[y]
        }
    }

    var comp_layers = [layer_blobs, layer_spraycan];

    //#endregion

    if (!LogFolder.exists) {
        LogFolder.create();
    }

    //Create LOGFILe
    var Loginfo = new File("E://ARCHIVE//FREELANCE//NFT//" + "LogFiles/" + "log3.txt");
    Loginfo.open("w", " TEXT");
    Loginfo.close();


    for (var i = 0; i < bird_color_list.length; i++) {
        for (var j = 0; j < comp_layers.length; j++) {
            comp_layers[j].effect(1).property(3).setValue(comp_color_list[i]);
        }
        layer_bird.effect(1).property(3).setValue(bird_color_list[i]);
        var rand_background_int = generateRandom(20);
        layer_background.effect(1).property(3).setValue(background_color_list[rand_background_int]);


        var file_name = index + ",BIRD,#" + bird_hex_list[i] + "," + bird_name_list[i];
        file_name = file_name + ",COMPOSITION,#" + comp_hex_list[i] + "," + comp_name_list[i]
        file_name = file_name + ",BACKGROUND,#" + background_hex_list[rand_background_int] + "," + background_name_list[rand_background_int] + "," + rand_background_int;



        //check if avax && jsv
        if (bool_list[i]) {
            var randint = generateRandom(3);
            if (randint == 0) {
                layer_94.enabled = true;
                file_name = file_name + ",94"
            }
            else if (randint == 1) {
                layer_avax.enabled = true;
                file_name = file_name + ",AVAX"
            }
            else if (randint == 2) {
                layer_94.enabled = true;
                layer_avax.enabled = true;
                file_name = file_name + ",AVAX,94"
            }
        }

        var resultFile = new File(outputFolder + "//" + file_name);

        var render = renderQueue.items.add(comp);
        render.outputModules[1].file = resultFile;
        app.project.renderQueue.queueInAME(false);
        app.project.renderQueue.item(1).remove();

        layer_94.enabled = false;
        layer_avax.enabled = false;

        Loginfo.open("a");
        Loginfo.write(file_name + "\n");
        Loginfo.close();
        index++;
    }
}

function generateRandom(range) {
    return Math.floor(Math.random() * range);
}
