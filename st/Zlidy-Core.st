Smalltalk current createPackage: 'Zlidy-Core'!
Object subclass: #Zlidy
	instanceVariableNames: 'toolbar slides initialized slideNumber slideNumberElement sizeIndex lastWidth lastHeight lastShown sizeAdjustment incrementalElements backgrounds eos colorPicker'
	package: 'Zlidy-Core'!

!Zlidy methodsFor: 'DOM accessing'!

findCopyright
	 | content |
	 content := '[name=''copyright'']' asJQuery attr: 'content'.
     ^ content ifNil:['']
!

findSizeAdjust
  	| name content offset meta |
	meta := document getElementsByTagName: 'meta'.
	0 to: (meta length - 1) do: [:i |
    	name := (meta at: i) getAttribute: 'name'.
        content :=  (meta at: i) getAttribute: 'content'.
        (name = 'font-size-adjustment') ifTrue: [^ (1 * content)]
    	].
	^1
!

nextIncrementalItem: aNode
	| br slide node |
    br := 'br'.
    slide := self slides at: slideNumber.
	node := aNode.
    [node := self nextNode: slide with: node.
	(node isNil or: [(node parentNode) isNil])] whileFalse: [
	    (node nodeType = 1)
			ifTrue: [	(node nodeName asLowercase = br) 
				ifFalse: [
					(self hasClass: node with: 'incremental') & ((self okayForIncremental: node nodeName ) notNil)
    					ifTrue: [^node].
            	 	(self  hasClass: node parentNode with: 'incremental') & ((self hasClass: node with: 'non-incremental') not)
    					ifTrue: [^node]]
					]
			ifFalse: [].
		].
 	^node
!

nextNode: root with: aNode
  	| node |
  	aNode ifNil: [^root firstChild].

    (aNode firstChild) ifNotNil: [^aNode firstChild].
	
    (aNode nextSibling) ifNotNil: [^aNode nextSibling].

	node := aNode.
	[node := node parentNode.
	(node notNil or:[ node == root])] whileFalse: [
		((node notNil) and: [node nextSibling notNil]) ifTrue: [
			^node nextSibling]] .
 	^nil
!

okayForIncremental: name
 
 	incrementalElements ifNil: [
		| list |
		list := #{}.
		list at: 'p' put: true.
		list at: 'pre' put: true.
		list at: 'li' put: true.
		list at: 'blockquote' put: true.
		list at: 'dt' put: true.
		list at: 'dd' put: true.
		list at: 'h2' put: true.
		list at: 'h3' put: true.
		list at: 'h4' put: true.
		list at: 'h5' put: true.
		list at: 'h6' put: true.
		list at: 'span' put: true.
		list at: 'address' put: true.
		list at: 'table' put: true.
		list at: 'tr' put: true.
		list at: 'th' put: true.
		list at: 'td' put: true.
		list at: 'img' put: true.
		list at: 'object' put: true.
		incrementalElements := list
		].
		^incrementalElements at: name asLowercase ifAbsent: [nil].
!

previousIncrementalItem: node
	| br slide previous |
    br := 'br'.
    slide := self slides at: slideNumber.
	previous := node.
    [previous := self previousNode: slide with: previous.
	(previous isNil or: [(previous at: 'parentNode') isNil]) ] whileFalse: [
  	  ((previous at: 'nodeType') = 1) 
    		ifTrue: [((previous at: 'nodeName') = br) 
  				ifFalse: [
            	  (self hasClass: previous with: 'incremental') & ((self okayForIncremental: (previous at: 'nodeName')) isNil not)
    				ifTrue: [^previous].
              	(self hasClass: (previous at: 'parentNode') with:  'incremental') & ((self hasClass: previous with: 'non-incremental') not)
    				ifTrue: [^previous]]]
		] .
 	^previous
!

previousNode: root with: node
  	| previous | 
    previous := node.
  	previous ifNil: [previous := root at: 'lastChild'.
		previous ifNotNil: [[(previous at: 'lastChld') isNil] whileFalse: [previous := previous at: 'lastChild']].
		^previous].
 
	(previous at: 'previousSigling') ifNotNil: [previous := previous at: 'previousSigling'.
    	[(previous at: 'lasChild') isNil] whileFalse: [previous := previous at: 'lastChild'].
        ^previous
		].
	((previous at: 'parentNode') ~= root) ifTrue: [^previous at: 'parentNode'].
 	^nil
!

revealNextItem: aNode
	| node |
	node := self nextIncrementalItem: aNode.
	(node notNil and: [(node nodeType == 1)]) 
		ifTrue: [node asJQuery removeClass: 'invisible'.].
	^node
! !

!Zlidy methodsFor: 'accessing'!

colorPicker

	colorPicker ifNil: [self createColorPicker].
	^colorPicker
!

lastShown
	^lastShown
!

lastShown: aSlide
	lastShown := aSlide
!

slideNumber

	^slideNumber
!

slideNumberElement
	^slideNumberElement
!

slides

	^slides
! !

!Zlidy methodsFor: 'constants'!

fontSizes
	^#('10pt'  '12pt' '14pt' '16pt' '18pt' '20pt' '22pt' '24pt' '26pt' '28pt' '30pt' '32pt').
! !

!Zlidy methodsFor: 'dummy'!

setEosStatus: aBoolean
!

setLocation
! !

!Zlidy methodsFor: 'events'!

cancel: event
  	event ifNotNil: [
		event at: 'cancel' put: true.
		event at: 'returnValue' put: false.
		(event at: 'preventDefault') ifNotNil: [event preventDefault]
	].
	^false
!

keyDown: anEvent
	| event key target tag |
    anEvent
		ifNil: [event := window event]
		ifNotNil: [event := anEvent].
	
    (window at: 'event') 
    	ifNotNil: [
			key := window event keyCode.
			target := window event srcElement.]
      	ifNil: [(event at: 'which')
			ifNotNil: [key := event which.
  				target := event target]
			ifNil: [^true]].
			
	key ifNil: [^true].
	
    (event at: 'ctrlKey') | (event at: 'altKey') | (event at: 'metaKey')
		ifTrue: [^true].
		
    (key = 39) ifTrue: [self nextSlide: anEvent shiftKey not.
		^self cancel: event].
		
    (key = 37) ifTrue: [self previousSlide: anEvent shiftKey not.
		^self cancel: event].
		
 	^true
! !

!Zlidy methodsFor: 'initialization'!

addToolbar
	| right counter cpButton left button gap1 gap2 copyright ide |
	toolbar := document createElement: 'div'.
	toolbar asJQuery addClass: 'toolbar'.
	toolbar asJQuery css: 'display' with: 'block'.
    
	right := document createElement: 'div'.
	right asJQuery css: 'float' with: 'right'.
	right asJQuery css: 'text-align' with: 'right'.
	
	right appendChild: self colorPicker.
	
	eos := document createElement: 'span'.
	eos asJQuery html: '* '.
	right appendChild: eos.
	
	slideNumberElement := document createElement: 'span'.
	slideNumberElement asJQuery html: 'slide' , ' n/m'.
	right appendChild: slideNumberElement.
	
	toolbar appendChild: right.
       
	left := document createElement: 'div'.
	left asJQuery css: 'text-align' with: 'left'.
    
	button := document createElement: 'button'.
	button asJQuery html: 'browser'.
	button asJQuery click:[:e |  Browser open]. 
	left appendChild: button.
    
	copyright := document createElement: 'span'.
	copyright asJQuery addClass: 'copyright'.
	copyright asJQuery html: self findCopyright.
	left appendChild: copyright.
	
	toolbar asJQuery attr: 'tabindex' with: '0'.
	toolbar appendChild: left.
    
	document body appendChild: toolbar.
!

collectBackgrounds
	| divs |
	backgrounds := 'div.background' asJQuery toArray.
	backgrounds do: [:back | back asJQuery addClass: 'hidden'].
!

collectSlides
	| divs  |
	slides := 'div.slide' asJQuery toArray.
	slides do: [:slide | slide asJQuery addClass: 'hidden'.
			slide asJQuery append: 'br' asJQuery.
			slide asJQuery append: 'br' asJQuery.
			].
	'div.background' asJQuery toArray do: [:back | back css: 'display' with: 'block'].
!

init
    self addToolbar.
    self collectSlides.
    self collectBackgrounds.
    window offscreenBuffering: true.
    sizeAdjustment := self findSizeAdjust.
    self initSlides.
    self initializeEvents.
    self singleSlideView.
    self resized.
    initialized := true.
    document body style visibility: 'visible'
!

initSlides
	(slides size > 0)
    	ifTrue: [| slide |
			slide := self slides at: self slideNumber.
			self slideNumber > 1 
				ifTrue: [self setVisibilityAllIncremental: 'visible'.
					self lastShown: (self previousIncrementalItem: nil).
					self setEosStatus: true.]
				ifFalse: [self lastShown: nil.
					self setVisibilityAllIncremental: 'hidden'.
					self setEosStatus: (self nextIncrementalItem: self lastShown) isNil].
				
			self setLocation.
			self slides first asJQuery addClass: 'first-slide'.
			self showSlide: slide]
!

initialize
	super initialize.
	toolbar := nil.
	"viewAll := false."
	slides := #().
	backgrounds := #().
	slideNumber := 1.
	self lastShown: nil.
	initialized := false.
	incrementalElements := nil.
	sizeIndex := 0.
	sizeAdjustment := 0.
	"sizes := #('10pt'  '12pt' '14pt' '16pt' '18pt' '20pt' '22pt' '24pt' '26pt' '28pt' '30pt' '32pt')."
	lastWidth := lastHeight := 0.
	self init.
!

initializeEvents
	document asJQuery keydown: [:e | self keyDown: e].
	slides do: [:slide |
		slide asJQuery keydown: [:e | self keyDown: e].
	].
! !

!Zlidy methodsFor: 'moving'!

nextSlide: incremental

	| slide last |
	slide := last := self lastShown.
	
	(incremental or: [self slideNumber == self slides size])
		ifTrue: [self lastShown: (self revealNextItem: self lastShown)].
		
	((incremental not or: [self lastShown isNil]) and: [self slideNumber < self slides size])
		ifTrue: [
			slide := self slides at: self slideNumber.
     	   self hideSlide: slide.
        	slideNumber := slideNumber + 1.
    	    slide := slides at: slideNumber.
			self lastShown: nil.
			self setVisibilityAllIncremental: 'hidden'.
			self showSlide: slide.]
  		ifFalse: [self lastShown isNil
				ifTrue: [last notNil & incremental
					ifTrue: [
					self lastShown: last]]].
!

previousSlide: incremental

| slide |
	(slideNumber > 1) ifTrue: [
      	slide := slides at: slideNumber.
        self hideSlide: slide.
        slideNumber := slideNumber - 1.
        slide := slides at: slideNumber.
		self setVisibilityAllIncremental: 'hidden'.
		self showSlide: slide.
      ].
! !

!Zlidy methodsFor: 'resizing'!

resized
	| width height |
	width := window innerWidth.
	height := window innerHeight.
	((height ~= 0) & (width / height > (1.05 * 1024 / 768)))
		ifTrue: [width := height * 1024.0 / 768].
	((width ~= lastWidth) | (height ~= lastHeight))
		ifTrue: [sizeIndex := 0.
			(width >= 600) ifTrue: [sizeIndex := 2].
			(width >= 800) ifTrue: [sizeIndex := 3].
			(width >= 1000) ifTrue: [sizeIndex := 4].
			(width >= 1100) ifTrue: [sizeIndex := 5].
	].
	((0 <= (sizeIndex + sizeAdjustment)) & ((sizeIndex + sizeAdjustment) < self fontSizes size))
		ifTrue: [sizeIndex := sizeIndex + sizeAdjustment].

	(document body style fontSize ~= (self fontSizes at: sizeIndex))
		ifTrue: [document body style fontSize: (self fontSizes at: sizeIndex)].
	lastWidth = width.
  	lastHeight = height.
! !

!Zlidy methodsFor: 'show/hide'!

hideSlide: aJSObject

	aJSObject asJQuery addClass: 'hidden'
!

hideSlides
	(document body isNil not & initialized not)
    	ifTrue: [ document body style visibility: 'hidden']
      	ifFalse: [self setTimeout: [self hideSlides] with: 50]
!

setVisibilityAllIncremental: value
	| node |
    node :=  self nextIncrementalItem: nil.
	[node notNil] whileTrue: [
		(value == 'hidden')
			ifTrue: [node asJQuery addClass: 'invisible']
			ifFalse: [node asJQuery removeClass: 'invisible'.].
		node := self nextIncrementalItem: node].
!

showSlide: aJSObject
	window scrollTo: 0 with: 0.
	aJSObject asJQuery removeClass: 'hidden'.
	self showSlideNumber
!

singleSlideView
	
	document body asJQuery addClass: 'single_slide'.
	self setVisibilityAllIncremental: 'visible'.
	slides first asJQuery addClass: 'first-slide'.
	self lastShown: (self previousIncrementalItem: nil).
! !

!Zlidy methodsFor: 'slide number'!

showSlideNumber
	slideNumberElement innerHTML: 'slide ' , slideNumber printString, '/' ,  slides size printString
! !

!Zlidy methodsFor: 'utilities'!

addColorPicker

	toolbar appendChild: self createColorPicker
!

createColorPicker

	colorPicker := document createElement: 'input'.
	colorPicker asJQuery addClass: 'color'.
	^colorPicker
!

hasClass: aJSObject with: aString
	| regexp |
	(aJSObject nodeType ~= 1) ifTrue: [^false].
	regexp := RegularExpression fromString: ('(^| )' , aString, '\W*').
    (aJSObject className ~= 'undefined') ifTrue: [^regexp test: aJSObject className].
    ^ regexp test: (aJSObject getAttribute: 'class')
!

setTimeout: aBlock with: milliSec
	<setTimeout(aBlock, milliSec)>
! !

Zlidy class instanceVariableNames: 'default'!

!Zlidy class methodsFor: 'not yet classified'!

default
	default ifNil: [default := self new].
	^default
!

initialize
	default := nil
! !

