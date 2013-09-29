smalltalk.addPackage('Zlidy-Core');
smalltalk.addClass('Zlidy', smalltalk.Object, ['toolbar', 'slides', 'initialized', 'slideNumber', 'slideNumberElement', 'sizeIndex', 'lastWidth', 'lastHeight', 'lastShown', 'sizeAdjustment', 'incrementalElements', 'backgrounds', 'eos', 'colorPicker'], 'Zlidy-Core');
smalltalk.addMethod(
"_addColorPicker",
smalltalk.method({
selector: "addColorPicker",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@toolbar"])._appendChild_(_st(self)._createColorPicker());
return self}, function($ctx1) {$ctx1.fill(self,"addColorPicker",{},smalltalk.Zlidy)});},
messageSends: ["appendChild:", "createColorPicker"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_addToolbar",
smalltalk.method({
selector: "addToolbar",
fn: function () {
var self=this;
var right,counter,cpButton,left,button,gap1,gap2,copyright,ide;
return smalltalk.withContext(function($ctx1) { self["@toolbar"]=_st(document)._createElement_("div");
_st(_st(self["@toolbar"])._asJQuery())._addClass_("toolbar");
_st(_st(self["@toolbar"])._asJQuery())._css_with_("display","block");
right=_st(document)._createElement_("div");
_st(_st(right)._asJQuery())._css_with_("float","right");
_st(_st(right)._asJQuery())._css_with_("text-align","right");
_st(right)._appendChild_(_st(self)._colorPicker());
self["@eos"]=_st(document)._createElement_("span");
_st(_st(self["@eos"])._asJQuery())._html_("* ");
_st(right)._appendChild_(self["@eos"]);
self["@slideNumberElement"]=_st(document)._createElement_("span");
_st(_st(self["@slideNumberElement"])._asJQuery())._html_(_st("slide").__comma(" n/m"));
_st(right)._appendChild_(self["@slideNumberElement"]);
_st(self["@toolbar"])._appendChild_(right);
left=_st(document)._createElement_("div");
_st(_st(left)._asJQuery())._css_with_("text-align","left");
button=_st(document)._createElement_("button");
_st(_st(button)._asJQuery())._html_("browser");
_st(_st(button)._asJQuery())._click_((function(e){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Browser || Browser))._open();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(left)._appendChild_(button);
copyright=_st(document)._createElement_("span");
_st(_st(copyright)._asJQuery())._addClass_("copyright");
_st(_st(copyright)._asJQuery())._html_(_st(self)._findCopyright());
_st(left)._appendChild_(copyright);
_st(_st(self["@toolbar"])._asJQuery())._attr_with_("tabindex","0");
_st(self["@toolbar"])._appendChild_(left);
_st(_st(document)._body())._appendChild_(self["@toolbar"]);
return self}, function($ctx1) {$ctx1.fill(self,"addToolbar",{right:right,counter:counter,cpButton:cpButton,left:left,button:button,gap1:gap1,gap2:gap2,copyright:copyright,ide:ide},smalltalk.Zlidy)});},
messageSends: ["createElement:", "addClass:", "asJQuery", "css:with:", "appendChild:", "colorPicker", "html:", ",", "click:", "open", "findCopyright", "attr:with:", "body"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_cancel_",
smalltalk.method({
selector: "cancel:",
fn: function (event) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=event;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(event)._at_put_("cancel",true);
_st(event)._at_put_("returnValue",false);
$2=_st(event)._at_("preventDefault");
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(event)._preventDefault();
};
};
return false;
}, function($ctx1) {$ctx1.fill(self,"cancel:",{event:event},smalltalk.Zlidy)});},
messageSends: ["ifNotNil:", "at:put:", "preventDefault", "at:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_collectBackgrounds",
smalltalk.method({
selector: "collectBackgrounds",
fn: function () {
var self=this;
var divs;
return smalltalk.withContext(function($ctx1) { self["@backgrounds"]=_st(_st("div.background")._asJQuery())._toArray();
_st(self["@backgrounds"])._do_((function(back){
return smalltalk.withContext(function($ctx2) {return _st(_st(back)._asJQuery())._addClass_("hidden");
}, function($ctx2) {$ctx2.fillBlock({back:back},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"collectBackgrounds",{divs:divs},smalltalk.Zlidy)});},
messageSends: ["toArray", "asJQuery", "do:", "addClass:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_collectSlides",
smalltalk.method({
selector: "collectSlides",
fn: function () {
var self=this;
var divs;
return smalltalk.withContext(function($ctx1) { self["@slides"]=_st(_st("div.slide")._asJQuery())._toArray();
_st(self["@slides"])._do_((function(slide){
return smalltalk.withContext(function($ctx2) {_st(_st(slide)._asJQuery())._addClass_("hidden");
_st(_st(slide)._asJQuery())._append_(_st("br")._asJQuery());
return _st(_st(slide)._asJQuery())._append_(_st("br")._asJQuery());
}, function($ctx2) {$ctx2.fillBlock({slide:slide},$ctx1)})}));
_st(_st(_st("div.background")._asJQuery())._toArray())._do_((function(back){
return smalltalk.withContext(function($ctx2) {return _st(back)._css_with_("display","block");
}, function($ctx2) {$ctx2.fillBlock({back:back},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"collectSlides",{divs:divs},smalltalk.Zlidy)});},
messageSends: ["toArray", "asJQuery", "do:", "addClass:", "append:", "css:with:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_colorPicker",
smalltalk.method({
selector: "colorPicker",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@colorPicker"];
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._createColorPicker();
} else {
$1;
};
$2=self["@colorPicker"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"colorPicker",{},smalltalk.Zlidy)});},
messageSends: ["ifNil:", "createColorPicker"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_createColorPicker",
smalltalk.method({
selector: "createColorPicker",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
self["@colorPicker"]=_st(document)._createElement_("input");
_st(_st(self["@colorPicker"])._asJQuery())._addClass_("color");
$1=self["@colorPicker"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"createColorPicker",{},smalltalk.Zlidy)});},
messageSends: ["createElement:", "addClass:", "asJQuery"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_findCopyright",
smalltalk.method({
selector: "findCopyright",
fn: function () {
var self=this;
var content;
return smalltalk.withContext(function($ctx1) { var $2,$1;
content=_st(_st("[name='copyright']")._asJQuery())._attr_("content");
$2=content;
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"findCopyright",{content:content},smalltalk.Zlidy)});},
messageSends: ["attr:", "asJQuery", "ifNil:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_findSizeAdjust",
smalltalk.method({
selector: "findSizeAdjust",
fn: function () {
var self=this;
var name,content,offset,meta;
return smalltalk.withContext(function($ctx1) { var $1,$2;
var $early={};
try {
meta=_st(document)._getElementsByTagName_("meta");
_st((0))._to_do_(_st(_st(meta)._length()).__minus((1)),(function(i){
return smalltalk.withContext(function($ctx2) {name=_st(_st(meta)._at_(i))._getAttribute_("name");
name;
content=_st(_st(meta)._at_(i))._getAttribute_("content");
content;
$1=_st(name).__eq("font-size-adjustment");
if(smalltalk.assert($1)){
$2=_st((1)).__star(content);
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return (1);
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"findSizeAdjust",{name:name,content:content,offset:offset,meta:meta},smalltalk.Zlidy)});},
messageSends: ["getElementsByTagName:", "to:do:", "-", "length", "getAttribute:", "at:", "ifTrue:", "*", "="]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_fontSizes",
smalltalk.method({
selector: "fontSizes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return ["10pt", "12pt", "14pt", "16pt", "18pt", "20pt", "22pt", "24pt", "26pt", "28pt", "30pt", "32pt"];
}, function($ctx1) {$ctx1.fill(self,"fontSizes",{},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_hasClass_with_",
smalltalk.method({
selector: "hasClass:with:",
fn: function (aJSObject, aString) {
var self=this;
var regexp;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=_st(_st(aJSObject)._nodeType()).__tild_eq((1));
if(smalltalk.assert($1)){
return false;
};
regexp=_st((smalltalk.RegularExpression || RegularExpression))._fromString_(_st(_st("(^| )").__comma(aString)).__comma("\x5cW*"));
$2=_st(_st(aJSObject)._className()).__tild_eq("undefined");
if(smalltalk.assert($2)){
$3=_st(regexp)._test_(_st(aJSObject)._className());
return $3;
};
$4=_st(regexp)._test_(_st(aJSObject)._getAttribute_("class"));
return $4;
}, function($ctx1) {$ctx1.fill(self,"hasClass:with:",{aJSObject:aJSObject,aString:aString,regexp:regexp},smalltalk.Zlidy)});},
messageSends: ["ifTrue:", "~=", "nodeType", "fromString:", ",", "test:", "className", "getAttribute:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_hideSlide_",
smalltalk.method({
selector: "hideSlide:",
fn: function (aJSObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(aJSObject)._asJQuery())._addClass_("hidden");
return self}, function($ctx1) {$ctx1.fill(self,"hideSlide:",{aJSObject:aJSObject},smalltalk.Zlidy)});},
messageSends: ["addClass:", "asJQuery"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_hideSlides",
smalltalk.method({
selector: "hideSlides",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(_st(document)._body())._isNil())._not()).__and(_st(self["@initialized"])._not());
if(smalltalk.assert($1)){
_st(_st(_st(document)._body())._style())._visibility_("hidden");
} else {
_st(self)._setTimeout_with_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._hideSlides();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(50));
};
return self}, function($ctx1) {$ctx1.fill(self,"hideSlides",{},smalltalk.Zlidy)});},
messageSends: ["ifTrue:ifFalse:", "visibility:", "style", "body", "setTimeout:with:", "hideSlides", "&", "not", "isNil"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._addToolbar();
_st(self)._collectSlides();
_st(self)._collectBackgrounds();
_st(window)._offscreenBuffering_(true);
self["@sizeAdjustment"]=_st(self)._findSizeAdjust();
_st(self)._initSlides();
_st(self)._initializeEvents();
_st(self)._singleSlideView();
_st(self)._resized();
self["@initialized"]=true;
_st(_st(_st(document)._body())._style())._visibility_("visible");
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.Zlidy)});},
messageSends: ["addToolbar", "collectSlides", "collectBackgrounds", "offscreenBuffering:", "findSizeAdjust", "initSlides", "initializeEvents", "singleSlideView", "resized", "visibility:", "style", "body"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_initSlides",
smalltalk.method({
selector: "initSlides",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(_st(self["@slides"])._size()).__gt((0));
if(smalltalk.assert($1)){
slide=_st(_st(self)._slides())._at_(_st(self)._slideNumber());
slide;
$2=_st(_st(self)._slideNumber()).__gt((1));
if(smalltalk.assert($2)){
_st(self)._setVisibilityAllIncremental_("visible");
_st(self)._lastShown_(_st(self)._previousIncrementalItem_(nil));
_st(self)._setEosStatus_(true);
} else {
_st(self)._lastShown_(nil);
_st(self)._setVisibilityAllIncremental_("hidden");
_st(self)._setEosStatus_(_st(_st(self)._nextIncrementalItem_(_st(self)._lastShown()))._isNil());
};
_st(self)._setLocation();
_st(_st(_st(_st(self)._slides())._first())._asJQuery())._addClass_("first-slide");
_st(self)._showSlide_(slide);
};
return self}, function($ctx1) {$ctx1.fill(self,"initSlides",{},smalltalk.Zlidy)});},
messageSends: ["ifTrue:", "at:", "slideNumber", "slides", "ifTrue:ifFalse:", "setVisibilityAllIncremental:", "lastShown:", "previousIncrementalItem:", "setEosStatus:", "isNil", "nextIncrementalItem:", "lastShown", ">", "setLocation", "addClass:", "asJQuery", "first", "showSlide:", "size"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@toolbar"]=nil;
self["@slides"]=[];
self["@backgrounds"]=[];
self["@slideNumber"]=(1);
_st(self)._lastShown_(nil);
self["@initialized"]=false;
self["@incrementalElements"]=nil;
self["@sizeIndex"]=(0);
self["@sizeAdjustment"]=(0);
self["@lastHeight"]=(0);
self["@lastWidth"]=self["@lastHeight"];
_st(self)._init();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Zlidy)});},
messageSends: ["initialize", "lastShown:", "init"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_initializeEvents",
smalltalk.method({
selector: "initializeEvents",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx2) {return _st(self)._keyDown_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self["@slides"])._do_((function(slide){
return smalltalk.withContext(function($ctx2) {return _st(_st(slide)._asJQuery())._keydown_((function(e){
return smalltalk.withContext(function($ctx3) {return _st(self)._keyDown_(e);
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({slide:slide},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEvents",{},smalltalk.Zlidy)});},
messageSends: ["keydown:", "keyDown:", "asJQuery", "do:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_keyDown_",
smalltalk.method({
selector: "keyDown:",
fn: function (anEvent) {
var self=this;
var event,key,target,tag;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
var $early={};
try {
$1=anEvent;
if(($receiver = $1) == nil || $receiver == undefined){
event=_st(window)._event();
event;
} else {
event=anEvent;
event;
};
_st(_st(window)._at_("event"))._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx2) {key=_st(_st(window)._event())._keyCode();
key;
target=_st(_st(window)._event())._srcElement();
return target;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(event)._at_("which"))._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx3) {key=_st(event)._which();
key;
target=_st(event)._target();
return target;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {throw $early=[true];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=key;
if(($receiver = $2) == nil || $receiver == undefined){
return true;
} else {
$2;
};
$3=_st(_st(_st(event)._at_("ctrlKey")).__or(_st(event)._at_("altKey"))).__or(_st(event)._at_("metaKey"));
if(smalltalk.assert($3)){
return true;
};
$4=_st(key).__eq((39));
if(smalltalk.assert($4)){
_st(self)._nextSlide_(_st(_st(anEvent)._shiftKey())._not());
$5=_st(self)._cancel_(event);
return $5;
};
$6=_st(key).__eq((37));
if(smalltalk.assert($6)){
_st(self)._previousSlide_(_st(_st(anEvent)._shiftKey())._not());
$7=_st(self)._cancel_(event);
return $7;
};
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"keyDown:",{anEvent:anEvent,event:event,key:key,target:target,tag:tag},smalltalk.Zlidy)});},
messageSends: ["ifNil:ifNotNil:", "event", "ifNotNil:ifNil:", "keyCode", "srcElement", "which", "target", "at:", "ifNil:", "ifTrue:", "|", "nextSlide:", "not", "shiftKey", "cancel:", "=", "previousSlide:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_lastShown",
smalltalk.method({
selector: "lastShown",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@lastShown"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastShown",{},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_lastShown_",
smalltalk.method({
selector: "lastShown:",
fn: function (aSlide) {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@lastShown"]=aSlide;
return self}, function($ctx1) {$ctx1.fill(self,"lastShown:",{aSlide:aSlide},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_nextIncrementalItem_",
smalltalk.method({
selector: "nextIncrementalItem:",
fn: function (aNode) {
var self=this;
var br,slide,node;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
var $early={};
try {
br="br";
slide=_st(_st(self)._slides())._at_(self["@slideNumber"]);
node=aNode;
_st((function(){
return smalltalk.withContext(function($ctx2) {node=_st(self)._nextNode_with_(slide,node);
node;
return _st(_st(node)._isNil())._or_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(node)._parentNode())._isNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(node)._nodeType()).__eq((1));
if(smalltalk.assert($1)){
$2=_st(_st(_st(node)._nodeName())._asLowercase()).__eq(br);
if(! smalltalk.assert($2)){
$3=_st(_st(self)._hasClass_with_(node,"incremental")).__and(_st(_st(self)._okayForIncremental_(_st(node)._nodeName()))._notNil());
if(smalltalk.assert($3)){
$4=node;
throw $early=[$4];
};
$5=_st(_st(self)._hasClass_with_(_st(node)._parentNode(),"incremental")).__and(_st(_st(self)._hasClass_with_(node,"non-incremental"))._not());
if(smalltalk.assert($5)){
$6=node;
throw $early=[$6];
};
};
} else {
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=node;
return $7;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextIncrementalItem:",{aNode:aNode,br:br,slide:slide,node:node},smalltalk.Zlidy)});},
messageSends: ["at:", "slides", "whileFalse:", "ifTrue:ifFalse:", "ifFalse:", "ifTrue:", "&", "notNil", "okayForIncremental:", "nodeName", "hasClass:with:", "not", "parentNode", "=", "asLowercase", "nodeType", "nextNode:with:", "or:", "isNil"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_nextNode_with_",
smalltalk.method({
selector: "nextNode:with:",
fn: function (root, aNode) {
var self=this;
var node;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
var $early={};
try {
$1=aNode;
if(($receiver = $1) == nil || $receiver == undefined){
$2=_st(root)._firstChild();
return $2;
} else {
$1;
};
$3=_st(aNode)._firstChild();
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
$4=_st(aNode)._firstChild();
return $4;
};
$5=_st(aNode)._nextSibling();
if(($receiver = $5) == nil || $receiver == undefined){
$5;
} else {
$6=_st(aNode)._nextSibling();
return $6;
};
node=aNode;
_st((function(){
return smalltalk.withContext(function($ctx2) {node=_st(node)._parentNode();
node;
return _st(_st(node)._notNil())._or_((function(){
return smalltalk.withContext(function($ctx3) {return _st(node).__eq_eq(root);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {$7=_st(_st(node)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(node)._nextSibling())._notNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($7)){
$8=_st(node)._nextSibling();
throw $early=[$8];
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return nil;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"nextNode:with:",{root:root,aNode:aNode,node:node},smalltalk.Zlidy)});},
messageSends: ["ifNil:", "firstChild", "ifNotNil:", "nextSibling", "whileFalse:", "ifTrue:", "and:", "notNil", "parentNode", "or:", "=="]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_nextSlide_",
smalltalk.method({
selector: "nextSlide:",
fn: function (incremental) {
var self=this;
var slide,last;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
last=_st(self)._lastShown();
slide=last;
$1=_st(incremental)._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._slideNumber()).__eq_eq(_st(_st(self)._slides())._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self)._lastShown_(_st(self)._revealNextItem_(_st(self)._lastShown()));
};
$2=_st(_st(_st(incremental)._not())._or_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._lastShown())._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._slideNumber()).__lt(_st(_st(self)._slides())._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
slide=_st(_st(self)._slides())._at_(_st(self)._slideNumber());
slide;
_st(self)._hideSlide_(slide);
self["@slideNumber"]=_st(self["@slideNumber"]).__plus((1));
self["@slideNumber"];
slide=_st(self["@slides"])._at_(self["@slideNumber"]);
slide;
_st(self)._lastShown_(nil);
_st(self)._setVisibilityAllIncremental_("hidden");
_st(self)._showSlide_(slide);
} else {
$3=_st(_st(self)._lastShown())._isNil();
if(smalltalk.assert($3)){
$4=_st(_st(last)._notNil()).__and(incremental);
if(smalltalk.assert($4)){
_st(self)._lastShown_(last);
};
};
};
return self}, function($ctx1) {$ctx1.fill(self,"nextSlide:",{incremental:incremental,slide:slide,last:last},smalltalk.Zlidy)});},
messageSends: ["lastShown", "ifTrue:", "lastShown:", "revealNextItem:", "or:", "==", "size", "slides", "slideNumber", "ifTrue:ifFalse:", "at:", "hideSlide:", "+", "setVisibilityAllIncremental:", "showSlide:", "&", "notNil", "isNil", "and:", "<", "not"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_okayForIncremental_",
smalltalk.method({
selector: "okayForIncremental:",
fn: function (name) {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@incrementalElements"];
if(($receiver = $1) == nil || $receiver == undefined){
list=smalltalk.HashedCollection._fromPairs_([]);
list;
_st(list)._at_put_("p",true);
_st(list)._at_put_("pre",true);
_st(list)._at_put_("li",true);
_st(list)._at_put_("blockquote",true);
_st(list)._at_put_("dt",true);
_st(list)._at_put_("dd",true);
_st(list)._at_put_("h2",true);
_st(list)._at_put_("h3",true);
_st(list)._at_put_("h4",true);
_st(list)._at_put_("h5",true);
_st(list)._at_put_("h6",true);
_st(list)._at_put_("span",true);
_st(list)._at_put_("address",true);
_st(list)._at_put_("table",true);
_st(list)._at_put_("tr",true);
_st(list)._at_put_("th",true);
_st(list)._at_put_("td",true);
_st(list)._at_put_("img",true);
_st(list)._at_put_("object",true);
self["@incrementalElements"]=list;
self["@incrementalElements"];
} else {
$1;
};
$2=_st(self["@incrementalElements"])._at_ifAbsent_(_st(name)._asLowercase(),(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"okayForIncremental:",{name:name},smalltalk.Zlidy)});},
messageSends: ["ifNil:", "at:put:", "at:ifAbsent:", "asLowercase"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_previousIncrementalItem_",
smalltalk.method({
selector: "previousIncrementalItem:",
fn: function (node) {
var self=this;
var br,slide,previous;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
var $early={};
try {
br="br";
slide=_st(_st(self)._slides())._at_(self["@slideNumber"]);
previous=node;
_st((function(){
return smalltalk.withContext(function($ctx2) {previous=_st(self)._previousNode_with_(slide,previous);
previous;
return _st(_st(previous)._isNil())._or_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(previous)._at_("parentNode"))._isNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(_st(previous)._at_("nodeType")).__eq((1));
if(smalltalk.assert($1)){
$2=_st(_st(previous)._at_("nodeName")).__eq(br);
if(! smalltalk.assert($2)){
$3=_st(_st(self)._hasClass_with_(previous,"incremental")).__and(_st(_st(_st(self)._okayForIncremental_(_st(previous)._at_("nodeName")))._isNil())._not());
if(smalltalk.assert($3)){
$4=previous;
throw $early=[$4];
};
$5=_st(_st(self)._hasClass_with_(_st(previous)._at_("parentNode"),"incremental")).__and(_st(_st(self)._hasClass_with_(previous,"non-incremental"))._not());
if(smalltalk.assert($5)){
$6=previous;
throw $early=[$6];
};
};
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=previous;
return $7;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"previousIncrementalItem:",{node:node,br:br,slide:slide,previous:previous},smalltalk.Zlidy)});},
messageSends: ["at:", "slides", "whileFalse:", "ifTrue:", "ifFalse:", "&", "not", "isNil", "okayForIncremental:", "hasClass:with:", "=", "previousNode:with:", "or:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_previousNode_with_",
smalltalk.method({
selector: "previousNode:with:",
fn: function (root, node) {
var self=this;
var previous;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7;
previous=node;
$1=previous;
if(($receiver = $1) == nil || $receiver == undefined){
previous=_st(root)._at_("lastChild");
previous;
$2=previous;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(previous)._at_("lastChld"))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {previous=_st(previous)._at_("lastChild");
return previous;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
};
$3=previous;
return $3;
} else {
$1;
};
$4=_st(previous)._at_("previousSigling");
if(($receiver = $4) == nil || $receiver == undefined){
$4;
} else {
previous=_st(previous)._at_("previousSigling");
previous;
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(previous)._at_("lasChild"))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {previous=_st(previous)._at_("lastChild");
return previous;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=previous;
return $5;
};
$6=_st(_st(previous)._at_("parentNode")).__tild_eq(root);
if(smalltalk.assert($6)){
$7=_st(previous)._at_("parentNode");
return $7;
};
return nil;
}, function($ctx1) {$ctx1.fill(self,"previousNode:with:",{root:root,node:node,previous:previous},smalltalk.Zlidy)});},
messageSends: ["ifNil:", "at:", "ifNotNil:", "whileFalse:", "isNil", "ifTrue:", "~="]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_previousSlide_",
smalltalk.method({
selector: "previousSlide:",
fn: function (incremental) {
var self=this;
var slide;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@slideNumber"]).__gt((1));
if(smalltalk.assert($1)){
slide=_st(self["@slides"])._at_(self["@slideNumber"]);
slide;
_st(self)._hideSlide_(slide);
self["@slideNumber"]=_st(self["@slideNumber"]).__minus((1));
self["@slideNumber"];
slide=_st(self["@slides"])._at_(self["@slideNumber"]);
slide;
_st(self)._setVisibilityAllIncremental_("hidden");
_st(self)._showSlide_(slide);
};
return self}, function($ctx1) {$ctx1.fill(self,"previousSlide:",{incremental:incremental,slide:slide},smalltalk.Zlidy)});},
messageSends: ["ifTrue:", "at:", "hideSlide:", "-", "setVisibilityAllIncremental:", "showSlide:", ">"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_resized",
smalltalk.method({
selector: "resized",
fn: function () {
var self=this;
var width,height;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$8;
width=_st(window)._innerWidth();
height=_st(window)._innerHeight();
$1=_st(_st(height).__tild_eq((0))).__and(_st(_st(width).__slash(height)).__gt(_st(_st((1.05)).__star((1024))).__slash((768))));
if(smalltalk.assert($1)){
width=_st(_st(height).__star((1024))).__slash((768));
width;
};
$2=_st(_st(width).__tild_eq(self["@lastWidth"])).__or(_st(height).__tild_eq(self["@lastHeight"]));
if(smalltalk.assert($2)){
self["@sizeIndex"]=(0);
self["@sizeIndex"];
$3=_st(width).__gt_eq((600));
if(smalltalk.assert($3)){
self["@sizeIndex"]=(2);
self["@sizeIndex"];
};
$4=_st(width).__gt_eq((800));
if(smalltalk.assert($4)){
self["@sizeIndex"]=(3);
self["@sizeIndex"];
};
$5=_st(width).__gt_eq((1000));
if(smalltalk.assert($5)){
self["@sizeIndex"]=(4);
self["@sizeIndex"];
};
$6=_st(width).__gt_eq((1100));
if(smalltalk.assert($6)){
self["@sizeIndex"]=(5);
self["@sizeIndex"];
};
};
$7=_st(_st((0)).__lt_eq(_st(self["@sizeIndex"]).__plus(self["@sizeAdjustment"]))).__and(_st(_st(self["@sizeIndex"]).__plus(self["@sizeAdjustment"])).__lt(_st(_st(self)._fontSizes())._size()));
if(smalltalk.assert($7)){
self["@sizeIndex"]=_st(self["@sizeIndex"]).__plus(self["@sizeAdjustment"]);
self["@sizeIndex"];
};
$8=_st(_st(_st(_st(document)._body())._style())._fontSize()).__tild_eq(_st(_st(self)._fontSizes())._at_(self["@sizeIndex"]));
if(smalltalk.assert($8)){
_st(_st(_st(document)._body())._style())._fontSize_(_st(_st(self)._fontSizes())._at_(self["@sizeIndex"]));
};
_st(self["@lastWidth"]).__eq(width);
_st(self["@lastHeight"]).__eq(height);
return self}, function($ctx1) {$ctx1.fill(self,"resized",{width:width,height:height},smalltalk.Zlidy)});},
messageSends: ["innerWidth", "innerHeight", "ifTrue:", "/", "*", "&", ">", "~=", ">=", "|", "+", "<", "size", "fontSizes", "<=", "fontSize:", "at:", "style", "body", "fontSize", "="]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_revealNextItem_",
smalltalk.method({
selector: "revealNextItem:",
fn: function (aNode) {
var self=this;
var node;
return smalltalk.withContext(function($ctx1) { var $1,$2;
node=_st(self)._nextIncrementalItem_(aNode);
$1=_st(_st(node)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(node)._nodeType()).__eq_eq((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(_st(node)._asJQuery())._removeClass_("invisible");
};
$2=node;
return $2;
}, function($ctx1) {$ctx1.fill(self,"revealNextItem:",{aNode:aNode,node:node},smalltalk.Zlidy)});},
messageSends: ["nextIncrementalItem:", "ifTrue:", "removeClass:", "asJQuery", "and:", "==", "nodeType", "notNil"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_setEosStatus_",
smalltalk.method({
selector: "setEosStatus:",
fn: function (aBoolean) {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setEosStatus:",{aBoolean:aBoolean},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_setLocation",
smalltalk.method({
selector: "setLocation",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"setLocation",{},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_setTimeout_with_",
smalltalk.method({
selector: "setTimeout:with:",
fn: function (aBlock, milliSec) {
var self=this;
return smalltalk.withContext(function($ctx1) { setTimeout(aBlock, milliSec);
return self}, function($ctx1) {$ctx1.fill(self,"setTimeout:with:",{aBlock:aBlock,milliSec:milliSec},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_setVisibilityAllIncremental_",
smalltalk.method({
selector: "setVisibilityAllIncremental:",
fn: function (value) {
var self=this;
var node;
return smalltalk.withContext(function($ctx1) { var $1;
node=_st(self)._nextIncrementalItem_(nil);
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(node)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {$1=_st(value).__eq_eq("hidden");
if(smalltalk.assert($1)){
_st(_st(node)._asJQuery())._addClass_("invisible");
} else {
_st(_st(node)._asJQuery())._removeClass_("invisible");
};
node=_st(self)._nextIncrementalItem_(node);
return node;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setVisibilityAllIncremental:",{value:value,node:node},smalltalk.Zlidy)});},
messageSends: ["nextIncrementalItem:", "whileTrue:", "ifTrue:ifFalse:", "addClass:", "asJQuery", "removeClass:", "==", "notNil"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_showSlide_",
smalltalk.method({
selector: "showSlide:",
fn: function (aJSObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(window)._scrollTo_with_((0),(0));
_st(_st(aJSObject)._asJQuery())._removeClass_("hidden");
_st(self)._showSlideNumber();
return self}, function($ctx1) {$ctx1.fill(self,"showSlide:",{aJSObject:aJSObject},smalltalk.Zlidy)});},
messageSends: ["scrollTo:with:", "removeClass:", "asJQuery", "showSlideNumber"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_showSlideNumber",
smalltalk.method({
selector: "showSlideNumber",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@slideNumberElement"])._innerHTML_(_st(_st(_st("slide ").__comma(_st(self["@slideNumber"])._printString())).__comma("/")).__comma(_st(_st(self["@slides"])._size())._printString()));
return self}, function($ctx1) {$ctx1.fill(self,"showSlideNumber",{},smalltalk.Zlidy)});},
messageSends: ["innerHTML:", ",", "printString", "size"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_singleSlideView",
smalltalk.method({
selector: "singleSlideView",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st(document)._body())._asJQuery())._addClass_("single_slide");
_st(self)._setVisibilityAllIncremental_("visible");
_st(_st(_st(self["@slides"])._first())._asJQuery())._addClass_("first-slide");
_st(self)._lastShown_(_st(self)._previousIncrementalItem_(nil));
return self}, function($ctx1) {$ctx1.fill(self,"singleSlideView",{},smalltalk.Zlidy)});},
messageSends: ["addClass:", "asJQuery", "body", "setVisibilityAllIncremental:", "first", "lastShown:", "previousIncrementalItem:"]}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_slideNumber",
smalltalk.method({
selector: "slideNumber",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@slideNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideNumber",{},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_slideNumberElement",
smalltalk.method({
selector: "slideNumberElement",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@slideNumberElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"slideNumberElement",{},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);

smalltalk.addMethod(
"_slides",
smalltalk.method({
selector: "slides",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@slides"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"slides",{},smalltalk.Zlidy)});},
messageSends: []}),
smalltalk.Zlidy);


smalltalk.Zlidy.klass.iVarNames = ['default'];
smalltalk.addMethod(
"_default",
smalltalk.method({
selector: "default",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@default"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@default"]=_st(self)._new();
self["@default"];
} else {
$1;
};
$2=self["@default"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.Zlidy.klass)});},
messageSends: ["ifNil:", "new"]}),
smalltalk.Zlidy.klass);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { self["@default"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Zlidy.klass)});},
messageSends: []}),
smalltalk.Zlidy.klass);


