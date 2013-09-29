smalltalk.addPackage('SUnit');
smalltalk.addClass('ResultAnnouncement', smalltalk.Object, ['result'], 'SUnit');
smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.ResultAnnouncement)})},
messageSends: []}),
smalltalk.ResultAnnouncement);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"result:",{aTestResult:aTestResult},smalltalk.ResultAnnouncement)})},
messageSends: []}),
smalltalk.ResultAnnouncement);



smalltalk.addClass('TestCase', smalltalk.Object, ['testSelector', 'asyncTimeout', 'context'], 'SUnit');
smalltalk.addMethod(
"_assert_",
smalltalk.method({
selector: "assert:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"assert:",{aBoolean:aBoolean},smalltalk.TestCase)})},
messageSends: ["assert:description:"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_description_",
smalltalk.method({
selector: "assert:description:",
fn: function (aBoolean,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=aBoolean;
if(! smalltalk.assert($1)){
_st(self)._signalFailure_(aString);
};
return self}, function($ctx1) {$ctx1.fill(self,"assert:description:",{aBoolean:aBoolean,aString:aString},smalltalk.TestCase)})},
messageSends: ["ifFalse:", "signalFailure:"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_assert_equals_",
smalltalk.method({
selector: "assert:equals:",
fn: function (actual,expected){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._assert_description_(_st(actual).__eq(expected),_st(_st(_st("Expected: ").__comma(_st(expected)._asString())).__comma(" but was: ")).__comma(_st(actual)._asString()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"assert:equals:",{actual:actual,expected:expected},smalltalk.TestCase)})},
messageSends: ["assert:description:", "=", ",", "asString"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_async_",
smalltalk.method({
selector: "async:",
fn: function (aBlock){
var self=this;
var c;
return smalltalk.withContext(function($ctx1) { 
_st(self)._errorIfNotAsync_("#async");
c=self["@context"];
$1=(function(){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert($2)){
return _st(c)._execute_(aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"async:",{aBlock:aBlock,c:c},smalltalk.TestCase)})},
messageSends: ["errorIfNotAsync:", "ifTrue:", "execute:", "isAsync"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_context_",
smalltalk.method({
selector: "context:",
fn: function (aRunningTestContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aRunningTestContext:aRunningTestContext},smalltalk.TestCase)})},
messageSends: []}),
smalltalk.TestCase);

smalltalk.addMethod(
"_deny_",
smalltalk.method({
selector: "deny:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"deny:",{aBoolean:aBoolean},smalltalk.TestCase)})},
messageSends: ["assert:", "not"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_errorIfNotAsync_",
smalltalk.method({
selector: "errorIfNotAsync:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._isAsync();
if(! smalltalk.assert($1)){
_st(self)._error_(_st(aString).__comma(" used without prior #timeout:"));
};
return self}, function($ctx1) {$ctx1.fill(self,"errorIfNotAsync:",{aString:aString},smalltalk.TestCase)})},
messageSends: ["ifFalse:", "error:", ",", "isAsync"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_finished",
smalltalk.method({
selector: "finished",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@asyncTimeout"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"finished",{},smalltalk.TestCase)})},
messageSends: ["errorIfNotAsync:"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_isAsync",
smalltalk.method({
selector: "isAsync",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self["@asyncTimeout"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAsync",{},smalltalk.TestCase)})},
messageSends: ["notNil"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_performTest",
smalltalk.method({
selector: "performTest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._perform_(_st(self)._selector());
return self}, function($ctx1) {$ctx1.fill(self,"performTest",{},smalltalk.TestCase)})},
messageSends: ["perform:", "selector"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_runCase",
smalltalk.method({
selector: "runCase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"runCase",{},smalltalk.TestCase)})},
messageSends: ["start", "testCase:"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_selector",
smalltalk.method({
selector: "selector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@testSelector"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},smalltalk.TestCase)})},
messageSends: []}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setTestSelector_",
smalltalk.method({
selector: "setTestSelector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setTestSelector:",{aSelector:aSelector},smalltalk.TestCase)})},
messageSends: []}),
smalltalk.TestCase);

smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_",
smalltalk.method({
selector: "should:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"should:",{aBlock:aBlock},smalltalk.TestCase)})},
messageSends: ["assert:", "value"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_should_raise_",
smalltalk.method({
selector: "should:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"should:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},smalltalk.TestCase)})},
messageSends: ["assert:", "on:do:", "value"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_shouldnt_raise_",
smalltalk.method({
selector: "shouldnt:raise:",
fn: function (aBlock,anExceptionClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_(anExceptionClass,(function(ex){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"shouldnt:raise:",{aBlock:aBlock,anExceptionClass:anExceptionClass},smalltalk.TestCase)})},
messageSends: ["assert:", "on:do:", "value"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_signalFailure_",
smalltalk.method({
selector: "signalFailure:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.TestFailure || TestFailure))._new();
_st($1)._messageText_(aString);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"signalFailure:",{aString:aString},smalltalk.TestCase)})},
messageSends: ["messageText:", "new", "signal"]}),
smalltalk.TestCase);

smalltalk.addMethod(
"_tearDown",
smalltalk.method({
selector: "tearDown",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.TestCase);

smalltalk.addMethod(
"_timeout_",
smalltalk.method({
selector: "timeout:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@asyncTimeout"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@asyncTimeout"])._clearTimeout();
};
self["@asyncTimeout"]=(0);
self["@asyncTimeout"]=_st(_st(self)._async_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._valueWithTimeout_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"timeout:",{aNumber:aNumber},smalltalk.TestCase)})},
messageSends: ["ifNotNil:", "clearTimeout", "valueWithTimeout:", "async:", "assert:description:"]}),
smalltalk.TestCase);


smalltalk.addMethod(
"_allTestSelectors",
smalltalk.method({
selector: "allTestSelectors",
fn: function (){
var self=this;
var selectors;
return smalltalk.withContext(function($ctx1) { 
selectors=_st(self)._testSelectors();
$1=_st(self)._shouldInheritSelectors();
if(smalltalk.assert($1)){
_st(selectors)._addAll_(_st(_st(self)._superclass())._allTestSelectors());
};
$2=selectors;
return $2;
}, function($ctx1) {$ctx1.fill(self,"allTestSelectors",{selectors:selectors},smalltalk.TestCase.klass)})},
messageSends: ["testSelectors", "ifTrue:", "addAll:", "allTestSelectors", "superclass", "shouldInheritSelectors"]}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_buildSuite",
smalltalk.method({
selector: "buildSuite",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._allTestSelectors())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildSuite",{},smalltalk.TestCase.klass)})},
messageSends: ["collect:", "selector:", "allTestSelectors"]}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_isAbstract",
smalltalk.method({
selector: "isAbstract",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._name()).__eq("TestCase");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.TestCase.klass)})},
messageSends: ["=", "name"]}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_lookupHierarchyRoot",
smalltalk.method({
selector: "lookupHierarchyRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=(smalltalk.TestCase || TestCase);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lookupHierarchyRoot",{},smalltalk.TestCase.klass)})},
messageSends: []}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_selector_",
smalltalk.method({
selector: "selector:",
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._setTestSelector_(aSelector);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector:",{aSelector:aSelector},smalltalk.TestCase.klass)})},
messageSends: ["setTestSelector:", "new", "yourself"]}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_shouldInheritSelectors",
smalltalk.method({
selector: "shouldInheritSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self).__tild_eq(_st(self)._lookupHierarchyRoot());
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldInheritSelectors",{},smalltalk.TestCase.klass)})},
messageSends: ["~=", "lookupHierarchyRoot"]}),
smalltalk.TestCase.klass);

smalltalk.addMethod(
"_testSelectors",
smalltalk.method({
selector: "testSelectors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(self)._methodDictionary())._keys())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"testSelectors",{},smalltalk.TestCase.klass)})},
messageSends: ["select:", "match:", "keys", "methodDictionary"]}),
smalltalk.TestCase.klass);


smalltalk.addClass('TestContext', smalltalk.Object, ['testCase'], 'SUnit');
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aBlock){
var self=this;
var failed;
return smalltalk.withContext(function($ctx1) { 
_st(self["@testCase"])._context_(self);
_st((function(){
return smalltalk.withContext(function($ctx2) {
failed;
_st(aBlock)._value();
failed=false;
return failed;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(failed)._and_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
if(smalltalk.assert($1)){
_st(self["@testCase"])._finished();
};
$2=_st(self["@testCase"])._isAsync();
if(! smalltalk.assert($2)){
return _st(self["@testCase"])._tearDown();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock,failed:failed},smalltalk.TestContext)})},
messageSends: ["context:", "ensure:", "ifTrue:", "finished", "and:", "isAsync", "ifFalse:", "tearDown", "value"]}),
smalltalk.TestContext);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return _st(self["@testCase"])._performTest();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.TestContext)})},
messageSends: ["execute:", "setUp", "performTest"]}),
smalltalk.TestContext);

smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"testCase:",{aTestCase:aTestCase},smalltalk.TestContext)})},
messageSends: []}),
smalltalk.TestContext);


smalltalk.addMethod(
"_testCase_",
smalltalk.method({
selector: "testCase:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._testCase_(aTestCase);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCase:",{aTestCase:aTestCase},smalltalk.TestContext.klass)})},
messageSends: ["testCase:", "new", "yourself"]}),
smalltalk.TestContext.klass);


smalltalk.addClass('ReportingTestContext', smalltalk.TestContext, ['finished', 'result'], 'SUnit');
smalltalk.addMethod(
"_execute_",
smalltalk.method({
selector: "execute:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
if(! smalltalk.assert($1)){
_st(self["@result"])._increaseRuns();
return _st(self["@finished"])._value();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"execute:",{aBlock:aBlock},smalltalk.ReportingTestContext)})},
messageSends: ["ensure:", "ifFalse:", "increaseRuns", "value", "isAsync", "withErrorReporting:", "execute:"]}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_finished_",
smalltalk.method({
selector: "finished:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"finished:",{aBlock:aBlock},smalltalk.ReportingTestContext)})},
messageSends: []}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_result_",
smalltalk.method({
selector: "result:",
fn: function (aTestResult){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"result:",{aTestResult:aTestResult},smalltalk.ReportingTestContext)})},
messageSends: []}),
smalltalk.ReportingTestContext);

smalltalk.addMethod(
"_withErrorReporting_",
smalltalk.method({
selector: "withErrorReporting:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"withErrorReporting:",{aBlock:aBlock},smalltalk.ReportingTestContext)})},
messageSends: ["on:do:", "addError:", "addFailure:"]}),
smalltalk.ReportingTestContext);


smalltalk.addMethod(
"_testCase_result_finished_",
smalltalk.method({
selector: "testCase:result:finished:",
fn: function (aTestCase,aTestResult,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=smalltalk.TestContext.klass.fn.prototype._testCase_.apply(_st(self), [aTestCase]);
_st($2)._result_(aTestResult);
_st($2)._finished_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"testCase:result:finished:",{aTestCase:aTestCase,aTestResult:aTestResult,aBlock:aBlock},smalltalk.ReportingTestContext.klass)})},
messageSends: ["result:", "testCase:", "finished:", "yourself"]}),
smalltalk.ReportingTestContext.klass);


smalltalk.addClass('TestFailure', smalltalk.Error, [], 'SUnit');


smalltalk.addClass('TestResult', smalltalk.Object, ['timestamp', 'runs', 'errors', 'failures', 'total'], 'SUnit');
smalltalk.addMethod(
"_addError_",
smalltalk.method({
selector: "addError:",
fn: function (anError){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"addError:",{anError:anError},smalltalk.TestResult)})},
messageSends: ["add:", "errors"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_addFailure_",
smalltalk.method({
selector: "addFailure:",
fn: function (aFailure){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"addFailure:",{aFailure:aFailure},smalltalk.TestResult)})},
messageSends: ["add:", "failures"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_errors",
smalltalk.method({
selector: "errors",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@errors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"errors",{},smalltalk.TestResult)})},
messageSends: []}),
smalltalk.TestResult);

smalltalk.addMethod(
"_failures",
smalltalk.method({
selector: "failures",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@failures"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"failures",{},smalltalk.TestResult)})},
messageSends: []}),
smalltalk.TestResult);

smalltalk.addMethod(
"_increaseRuns",
smalltalk.method({
selector: "increaseRuns",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"increaseRuns",{},smalltalk.TestResult)})},
messageSends: ["+"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@timestamp"]=_st((smalltalk.Date || Date))._now();
self["@runs"]=(0);
self["@errors"]=_st((smalltalk.Array || Array))._new();
self["@failures"]=_st((smalltalk.Array || Array))._new();
self["@total"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TestResult)})},
messageSends: ["initialize", "now", "new"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_nextRunDo_",
smalltalk.method({
selector: "nextRunDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(_st(self)._runs()).__eq_eq(_st(self)._total());
if(! smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(_st(self)._runs()).__plus((1)));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextRunDo:",{aBlock:aBlock},smalltalk.TestResult)})},
messageSends: ["ifFalse:", "value:", "+", "runs", "==", "total"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runCase_",
smalltalk.method({
selector: "runCase:",
fn: function (aTestCase){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
return _st(aTestCase)._runCase();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._on_do_((smalltalk.TestFailure || TestFailure),(function(ex){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({ex:ex},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"runCase:",{aTestCase:aTestCase},smalltalk.TestResult)})},
messageSends: ["on:do:", "addError:", "addFailure:", "increaseRuns", "runCase"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_runs",
smalltalk.method({
selector: "runs",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@runs"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"runs",{},smalltalk.TestResult)})},
messageSends: []}),
smalltalk.TestResult);

smalltalk.addMethod(
"_status",
smalltalk.method({
selector: "status",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(_st(self)._errors())._isEmpty();
if(smalltalk.assert($2)){
$3=_st(_st(self)._failures())._isEmpty();
if(smalltalk.assert($3)){
$1="success";
} else {
$1="failure";
};
} else {
$1="error";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"status",{},smalltalk.TestResult)})},
messageSends: ["ifTrue:ifFalse:", "isEmpty", "failures", "errors"]}),
smalltalk.TestResult);

smalltalk.addMethod(
"_timestamp",
smalltalk.method({
selector: "timestamp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@timestamp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"timestamp",{},smalltalk.TestResult)})},
messageSends: []}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total",
smalltalk.method({
selector: "total",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@total"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"total",{},smalltalk.TestResult)})},
messageSends: []}),
smalltalk.TestResult);

smalltalk.addMethod(
"_total_",
smalltalk.method({
selector: "total:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"total:",{aNumber:aNumber},smalltalk.TestResult)})},
messageSends: []}),
smalltalk.TestResult);



smalltalk.addClass('TestSuiteRunner', smalltalk.Object, ['suite', 'result', 'announcer', 'runNextTest'], 'SUnit');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@announcer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TestSuiteRunner)})},
messageSends: []}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_contextOf_",
smalltalk.method({
selector: "contextOf:",
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.ReportingTestContext || ReportingTestContext))._testCase_result_finished_(_st(self["@suite"])._at_(anInteger),self["@result"],(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"contextOf:",{anInteger:anInteger},smalltalk.TestSuiteRunner)})},
messageSends: ["testCase:result:finished:", "at:", "resume"]}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
self["@result"]=_st((smalltalk.TestResult || TestResult))._new();
self["@runNextTest"]=(function(){
var runs;
return smalltalk.withContext(function($ctx2) {
runs;
$1=_st(runs).__lt(_st(self["@result"])._total());
if(smalltalk.assert($1)){
return _st(_st(self)._contextOf_(_st(runs).__plus((1))))._start();
};
}, function($ctx2) {$ctx2.fillBlock({runs:runs},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TestSuiteRunner)})},
messageSends: ["initialize", "new", "runs", "ifTrue:", "start", "contextOf:", "+", "<", "total"]}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_result",
smalltalk.method({
selector: "result",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@result"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"result",{},smalltalk.TestSuiteRunner)})},
messageSends: []}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_resume",
smalltalk.method({
selector: "resume",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@announcer"])._announce_(_st(_st((smalltalk.ResultAnnouncement || ResultAnnouncement))._new())._result_(self["@result"]));
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},smalltalk.TestSuiteRunner)})},
messageSends: ["fork", "announce:", "result:", "new"]}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._resume();
return self}, function($ctx1) {$ctx1.fill(self,"run",{},smalltalk.TestSuiteRunner)})},
messageSends: ["total:", "size", "resume"]}),
smalltalk.TestSuiteRunner);

smalltalk.addMethod(
"_suite_",
smalltalk.method({
selector: "suite:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"suite:",{aCollection:aCollection},smalltalk.TestSuiteRunner)})},
messageSends: []}),
smalltalk.TestSuiteRunner);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TestSuiteRunner.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.TestSuiteRunner.klass);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(smalltalk.Object.klass.fn.prototype._new.apply(_st(self), []))._suite_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.TestSuiteRunner.klass)})},
messageSends: ["suite:", "new"]}),
smalltalk.TestSuiteRunner.klass);

