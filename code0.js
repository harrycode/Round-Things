gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1= [];
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects2= [];
gdjs.Level_321Code.GDLava_32BlockObjects1= [];
gdjs.Level_321Code.GDLava_32BlockObjects2= [];
gdjs.Level_321Code.GDSlopeObjects1= [];
gdjs.Level_321Code.GDSlopeObjects2= [];
gdjs.Level_321Code.GDDialogueObjects1= [];
gdjs.Level_321Code.GDDialogueObjects2= [];
gdjs.Level_321Code.GDBlockObjects1= [];
gdjs.Level_321Code.GDBlockObjects2= [];
gdjs.Level_321Code.GDCheckpointObjects1= [];
gdjs.Level_321Code.GDCheckpointObjects2= [];
gdjs.Level_321Code.GDInstructionsObjects1= [];
gdjs.Level_321Code.GDInstructionsObjects2= [];
gdjs.Level_321Code.GDDialogue_32TextObjects1= [];
gdjs.Level_321Code.GDDialogue_32TextObjects2= [];
gdjs.Level_321Code.GDPiece_321Objects1= [];
gdjs.Level_321Code.GDPiece_321Objects2= [];
gdjs.Level_321Code.GDNewObjectObjects1= [];
gdjs.Level_321Code.GDNewObjectObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.condition3IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs.Level_321Code.GDDialogueObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects = Hashtable.newFrom({"Dialogue Text": gdjs.Level_321Code.GDDialogue_32TextObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects = Hashtable.newFrom({"Dialogue Text": gdjs.Level_321Code.GDDialogue_32TextObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs.Level_321Code.GDDialogueObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects = Hashtable.newFrom({"Dialogue Text": gdjs.Level_321Code.GDDialogue_32TextObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects = Hashtable.newFrom({"Dialogue Text": gdjs.Level_321Code.GDDialogue_32TextObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLava_9532BlockObjects1Objects = Hashtable.newFrom({"Lava Block": gdjs.Level_321Code.GDLava_32BlockObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Level_321Code.GDBlockObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBlockObjects1Objects = Hashtable.newFrom({"Block": gdjs.Level_321Code.GDBlockObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCheckpointObjects1Objects = Hashtable.newFrom({"Checkpoint": gdjs.Level_321Code.GDCheckpointObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPiece_95321Objects1Objects = Hashtable.newFrom({"Piece 1": gdjs.Level_321Code.GDPiece_321Objects1});gdjs.Level_321Code.eventsList0xac780 = function(runtimeScene, context) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.createFrom(runtimeScene.getObjects("Piece 1 (in inventory)"));
{gdjs.evtTools.sound.playMusic(runtimeScene, "round things.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.Level_321Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level_321Code.GDDialogue_32TextObjects1.createFrom(runtimeScene.getObjects("Dialogue Text"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogueObjects1Objects, false, runtimeScene);
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
gdjs.Level_321Code.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects) == 0;
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDialogueObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
/* Reuse gdjs.Level_321Code.GDDialogue_32TextObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) - 50, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")) - 50, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDDialogue_32TextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDialogue_32TextObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Level_321Code.GDDialogueObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDDialogueObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{

gdjs.Level_321Code.GDDialogueObjects1.createFrom(runtimeScene.getObjects("Dialogue"));
gdjs.Level_321Code.GDDialogue_32TextObjects1.createFrom(runtimeScene.getObjects("Dialogue Text"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
gdjs.Level_321Code.condition2IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
gdjs.Level_321Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogueObjects1Objects, false, runtimeScene);
}if ( gdjs.Level_321Code.condition1IsTrue_0.val ) {
{
gdjs.Level_321Code.condition2IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects) == 1
;
}}
}
if (gdjs.Level_321Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDDialogueObjects1 */
/* Reuse gdjs.Level_321Code.GDDialogue_32TextObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDDialogue_32TextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDialogue_32TextObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDDialogue_9532TextObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) - 50, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")) - 50, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDDialogue_32TextObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDialogue_32TextObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.Level_321Code.GDDialogueObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_321Code.GDDialogueObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{

gdjs.Level_321Code.GDLava_32BlockObjects1.createFrom(runtimeScene.getObjects("Lava Block"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDLava_9532BlockObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setPosition((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0).getChild("X"))) - 32
,(gdjs.RuntimeObject.getVariableNumber(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0).getChild("Y"))) - 32
);
}
}}

}


{

gdjs.Level_321Code.GDBlockObjects1.createFrom(runtimeScene.getObjects("Block"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBlockObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBlockObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBlockObjects1Objects);
}
}}

}


{

gdjs.Level_321Code.GDCheckpointObjects1.createFrom(runtimeScene.getObjects("Checkpoint"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDCheckpointObjects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDCheckpointObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0).getChild("X")).setNumber((( gdjs.Level_321Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCheckpointObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0).getChild("Y")).setNumber((( gdjs.Level_321Code.GDCheckpointObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCheckpointObjects1[0].getPointY("")));
}
}}

}


{

gdjs.Level_321Code.GDPiece_321Objects1.createFrom(runtimeScene.getObjects("Piece 1"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPiece_95321Objects1Objects, false, runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPiece_321Objects1 */
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.createFrom(runtimeScene.getObjects("Piece 1 (in inventory)"));
{for(var i = 0, len = gdjs.Level_321Code.GDPiece_321Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPiece_321Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.inventory.add(runtimeScene, "My Things", "Piece 1");
}{for(var i = 0, len = gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1[i].hide(false);
}
}}

}


{


{
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.createFrom(runtimeScene.getObjects("Piece 1 (in inventory)"));
gdjs.Level_321Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDPlayerObjects1.length !== 0 ? gdjs.Level_321Code.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1[i].putAround((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")), 100, 225);
}
}}

}


}; //End of gdjs.Level_321Code.eventsList0xac780


gdjs.Level_321Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects1.length = 0;
gdjs.Level_321Code.GDPiece_321_32_40in_32inventory_41Objects2.length = 0;
gdjs.Level_321Code.GDLava_32BlockObjects1.length = 0;
gdjs.Level_321Code.GDLava_32BlockObjects2.length = 0;
gdjs.Level_321Code.GDSlopeObjects1.length = 0;
gdjs.Level_321Code.GDSlopeObjects2.length = 0;
gdjs.Level_321Code.GDDialogueObjects1.length = 0;
gdjs.Level_321Code.GDDialogueObjects2.length = 0;
gdjs.Level_321Code.GDBlockObjects1.length = 0;
gdjs.Level_321Code.GDBlockObjects2.length = 0;
gdjs.Level_321Code.GDCheckpointObjects1.length = 0;
gdjs.Level_321Code.GDCheckpointObjects2.length = 0;
gdjs.Level_321Code.GDInstructionsObjects1.length = 0;
gdjs.Level_321Code.GDInstructionsObjects2.length = 0;
gdjs.Level_321Code.GDDialogue_32TextObjects1.length = 0;
gdjs.Level_321Code.GDDialogue_32TextObjects2.length = 0;
gdjs.Level_321Code.GDPiece_321Objects1.length = 0;
gdjs.Level_321Code.GDPiece_321Objects2.length = 0;
gdjs.Level_321Code.GDNewObjectObjects1.length = 0;
gdjs.Level_321Code.GDNewObjectObjects2.length = 0;

gdjs.Level_321Code.eventsList0xac780(runtimeScene, context);return;
}
gdjs['Level_321Code']= gdjs.Level_321Code;
