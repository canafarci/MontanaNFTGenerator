var _window = new Window("palette", "My Script", undefined);
var _startButton = _window.add("button", undefined, "RUN!");

_window.show();

_startButton.onClick = function () {

        var aDoc = app.activeDocument;
        var comp = app.project.activeItem;
        var layers = comp.selectedLayers;
        var index = 1;

        const figure = "figure_00";
        const composition = "composition_00";
        const background = "background_00";

        for (var i = 0; i < 3; i++) {

                for (var x = 0; x < layers.length; x++) {

                        if (layers[x].name == background + i) {
                                layers[x].enabled = true;
                        }
                }

                for (var j = 0; j < 3; j++) {
                        for (var x = 0; x < layers.length; x++) {

                                if (layers[x].name == composition + j) {
                                        layers[x].enabled = true;
                                }
                        }

                        for (var k = 0; k < 3; k++) {
                                for (var x = 0; x < layers.length; x++) {
                                        if (layers[x].name == figure + k) {
                                                layers[x].enabled = true;
                                                //RENDER HERE

                                                var outputFolder = "C://render//";
                                                //alert(outputFolder);
                                                
                                                var resultFile = new File(outputFolder + "/TEST" + background + i + composition + j + figure + k)
                                                //alert(resultFile);
                                                //alert(Loginfo);
                                                //alert(resultFile);
                                                var renderQueue = app.project.renderQueue;
                                                //alert(renderQueue);
                                                var render = renderQueue.items.add(comp);
                                                //alert(render);
                                                render.outputModules[1].file = resultFile;
                                                //alert(render.outputModules[1].file = resultFile);

                                                app.project.renderQueue.queueInAME(true);

                                                while (renderQueue.numItems > 0) {

                                                        renderQueue.item(1).remove();
                                                }

                                                //alert("iter");
                                                if (k != 2) {
                                                        layers[x].enabled = false;
                                                }
                                                else if (k == 2 && j != 2) {
                                                        layers[x].enabled = false;

                                                        for (var y = 0; y < layers.length; y++) {
                                                                if (layers[y].name == composition + j) {
                                                                        layers[y].enabled = false;
                                                                }
                                                        }
                                                }
                                                else if (k == 2 && j == 2) {
                                                        for (var l = 0; l < layers.length; l++) {
                                                                layers[l].enabled = false;
                                                        }
                                                }

                                        }
                                }

                        }
                }
        }


        
}


/* alert(background + i + " " + composition + j + " " + figure + k);

                                                 var item = app.project.renderQueue.items.add(comp);
                                                var outputModule = item.outputModule(1);

                                                var outputFolder = "C:/render/";
                                                outputModule.applyTemplate("MOV");
                                                outputModule.file = File(outputFolder + " /TEST");

                                                app.project.renderQueue.render(); 

                                                // while (renderQueue.numItems > 0) {

                                                //         renderQueue.item(1).remove();

                                                // } */

/* for (var l = 0; l < layers.length; l++) {
        layers[l].enabled = false;
} */


/* // define variables
var thisRender, newPath, i, j;
var renderQ = app.project.renderQueue;
//alert("there are " + renderQ.numItems + " render queue items");

// loop through each renderQueue item, checking if any are queued
for (i = 1; i <= renderQ.numItems; ++i) {

        // check if the render item is queued
        if (renderQ.item(i).status == RQItemStatus.QUEUED) {

                // shortcut variable for render item	
                thisRender = renderQ.item(i);

                //alert(thisRender.comp.name + " is queued");	
                //alert("it has " + thisRender.outputModules.length + " output modules");

                // loop through any output modules
                for (j = 1; j <= thisRender.outputModules.length; ++j) {

                        //alert("current path is " + thisRender.outputModule(j).file.path);
                        newPath = thisRender.outputModule(j).file.path + "/" + thisRender.comp.name + ;
                        //alert("path for new folder is " + newPath);

                        // create a new folder
                        Folder(newPath).create();

                        newPath += "/" + thisRender.outputModule(j).file.name;
                        //alert("new path for this render is " + newPath);

                        // set the new file path
                        thisRender.outputModule(j).file = new File(newPath);

                }
        }
} */