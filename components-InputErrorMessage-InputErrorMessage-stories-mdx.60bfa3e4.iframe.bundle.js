"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[2548],{"./src/components/InputErrorMessage/InputErrorMessage.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,multipleMessages:()=>multipleMessages});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/InputErrorMessage/InputErrorMessage.tsx"),_utils_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/hooks/useErrorId.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>{const errorId=(0,_utils_hooks__WEBPACK_IMPORTED_MODULE_3__.P)();return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,_extends({},args,{id:errorId,mdxType:"InputErrorMessage"}))};Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Components/Forms/InputErrorMessage",component:_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,parameters:{controls:{sort:"requiredFirst"}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"inputerrormessage"},"InputErrorMessage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"InputErrorMessage is used to display one or more form validation error messages next to input fields."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"installation"},"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},"import { InputErrorMessage, useErrorId } from '@lokalise/louis';\n\nexport default () => {\n    const errorId = useErrorId();\n\n    return <InputErrorMessage id={errorId}>Error message for an input field</InputErrorMessage>;\n};\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"props"},"Props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.$4,{of:_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,sort:"requiredFirst",mdxType:"ArgsTable"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"default"},"Default"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Default",args:{children:"Single error message"},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"multiple-messages"},"Multiple Messages"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"There are duplicated messages in the example below, but they will be shown only once."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oG,{name:"Multiple Messages",args:{children:["This is an array of error messages\n","Which you can use to show multiple input errors\n","This is an array of error messages\n","By passing multiple children to InputErrorMessage"]},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={children:"Single error message"},defaultStory.parameters={storySource:{source:"args => {\n  const errorId = useErrorId();\n  return <InputErrorMessage {...args} id={errorId} />;\n}"}};const multipleMessages=Template.bind({});multipleMessages.storyName="Multiple Messages",multipleMessages.args={children:["This is an array of error messages\n","Which you can use to show multiple input errors\n","This is an array of error messages\n","By passing multiple children to InputErrorMessage"]},multipleMessages.parameters={storySource:{source:"args => {\n  const errorId = useErrorId();\n  return <InputErrorMessage {...args} id={errorId} />;\n}"}};const componentMeta={title:"Components/Forms/InputErrorMessage",parameters:{controls:{sort:"requiredFirst"}},component:_InputErrorMessage__WEBPACK_IMPORTED_MODULE_4__.f,includeStories:["defaultStory","multipleMessages"]},mdxStoryNameToKey={Default:"defaultStory","Multiple Messages":"multipleMessages"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","defaultStory","multipleMessages"]},"./src/components/InputErrorMessage/InputErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>InputErrorMessage});var react=__webpack_require__("./node_modules/react/index.js"),BoxImportant=__webpack_require__("./src/foundations/icons/BoxImportant.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fontFamily=__webpack_require__("./src/utils/theme/fontFamily.ts"),typography=__webpack_require__("./src/utils/theme/typography.ts"),color=__webpack_require__("./src/utils/theme/color.ts"),spacing=__webpack_require__("./src/utils/theme/spacing.ts");const Error=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__Error",componentId:"sc-1wn0241-0"})(["font-family:",";"," color:",";display:grid;gap:",";grid-template-columns:min-content auto;align-items:center;"],(0,fontFamily.I)("default"),(0,typography.c)("message"),(0,color.$)("red.600"),(0,spacing.W)(1)),IconContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__IconContainer",componentId:"sc-1wn0241-1"})(["align-self:flex-start;font-size:16px;display:flex;align-items:center;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const uniqueChildren=children=>Array.from(new Set(react.Children.toArray(children))),InputErrorMessage=_ref=>{let{children,id,className}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:uniqueChildren(children).map((child=>!!child&&(0,jsx_runtime.jsxs)(Error,{"aria-live":"assertive",id,className,children:[(0,jsx_runtime.jsx)(IconContainer,{children:(0,jsx_runtime.jsx)(BoxImportant.m,{color:"red.400"})}),child]},`${child}`)))})};try{InputErrorMessage.displayName="InputErrorMessage",InputErrorMessage.__docgenInfo={description:"",displayName:"InputErrorMessage",props:{children:{defaultValue:null,description:"Renders text content in the error message.",name:"children",required:!0,type:{name:"Messages"}},id:{defaultValue:null,description:"Sets a unique id for the error message.",name:"id",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"]={docgenInfo:InputErrorMessage.__docgenInfo,name:"InputErrorMessage",path:"src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/BoxImportant.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>BoxImportant});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BoxImportant=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.o3,{fillRule:"evenodd",clipRule:"evenodd",d:"M2 10c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8Zm7.20371 4.0062h1.59999v-1.6H9.20371v1.6Zm0-3.1999h1.59999V6.00627H9.20371v4.80003Z"})})};BoxImportant.displayName="BoxImportant";try{BoxImportant.displayName="BoxImportant",BoxImportant.__docgenInfo={description:"",displayName:"BoxImportant",props:{color:{defaultValue:null,description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"background.input"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.disabled"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"content.buttonText1"'},{value:'"content.buttonText2"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'},{value:'"inherit"'}]}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/BoxImportant.tsx#BoxImportant"]={docgenInfo:BoxImportant.__docgenInfo,name:"BoxImportant",path:"src/foundations/icons/BoxImportant.tsx#BoxImportant"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var _styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/styles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_2__.uJ,{color,size,...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children})};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any of the colors in the color palette,\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral1"'},{value:'"neutral2"'},{value:'"primary.900"'},{value:'"primary.800"'},{value:'"primary.700"'},{value:'"primary.600"'},{value:'"primary.500"'},{value:'"primary.400"'},{value:'"primary.300"'},{value:'"primary.200"'},{value:'"red.900"'},{value:'"red.800"'},{value:'"red.700"'},{value:'"red.600"'},{value:'"red.500"'},{value:'"red.400"'},{value:'"red.300"'},{value:'"red.200"'},{value:'"green.900"'},{value:'"green.800"'},{value:'"green.700"'},{value:'"green.600"'},{value:'"green.500"'},{value:'"green.400"'},{value:'"green.300"'},{value:'"green.200"'},{value:'"yellow.900"'},{value:'"yellow.800"'},{value:'"yellow.700"'},{value:'"yellow.600"'},{value:'"yellow.500"'},{value:'"yellow.400"'},{value:'"yellow.300"'},{value:'"yellow.200"'},{value:'"background.primary"'},{value:'"background.secondary"'},{value:'"background.input"'},{value:'"surface.primary"'},{value:'"surface.secondary"'},{value:'"surface.primary50"'},{value:'"surface.primary100"'},{value:'"surface.red50"'},{value:'"surface.red100"'},{value:'"surface.green50"'},{value:'"surface.green100"'},{value:'"surface.yellow50"'},{value:'"surface.yellow100"'},{value:'"content.primary"'},{value:'"content.secondary"'},{value:'"content.disabled"'},{value:'"content.white"'},{value:'"content.black"'},{value:'"content.buttonText1"'},{value:'"content.buttonText2"'},{value:'"border.primary"'},{value:'"border.secondary"'},{value:'"interactive.primary.disabled"'},{value:'"interactive.primary.idle"'},{value:'"interactive.primary.hover"'},{value:'"interactive.primary.pressed"'},{value:'"interactive.primary.pressedHover"'},{value:'"interactive.red.disabled"'},{value:'"interactive.red.idle"'},{value:'"interactive.red.hover"'},{value:'"interactive.red.pressed"'},{value:'"interactive.red.pressedHover"'},{value:'"interactive.green.disabled"'},{value:'"interactive.green.idle"'},{value:'"interactive.green.hover"'},{value:'"interactive.green.pressed"'},{value:'"interactive.green.pressedHover"'},{value:'"interactive.yellow.disabled"'},{value:'"interactive.yellow.idle"'},{value:'"interactive.yellow.hover"'},{value:'"interactive.yellow.pressed"'},{value:'"interactive.yellow.pressedHover"'},{value:'"interactive.content.disabled"'},{value:'"interactive.content.idle"'},{value:'"interactive.content.hover"'},{value:'"interactive.content.pressed"'},{value:'"interactive.content.pressedHover"'},{value:'"currentColor"'},{value:'"inherit"'}]}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>SvgIconG,Lq:()=>SvgIconRect,VA:()=>SvgIconClipPath,o3:()=>SvgIconPath,uJ:()=>SvgRoot,x:()=>SvgIconDefs});var _utils_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/color.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/theme/excludeProps.ts");const reservedKeywords=["currentColor","inherit"],colorTypesDefaults={color:"inherit",fill:"currentColor",stroke:void 0},colorHelper=(colorType,inputColor,props)=>inputColor&&!reservedKeywords.includes(inputColor)?(0,_utils_theme__WEBPACK_IMPORTED_MODULE_0__.$)(inputColor)(props):colorTypesDefaults[colorType],commonStyles=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: ${_ref=>{let{color:svgColor,...props}=_ref;return colorHelper("color",svgColor,props)}};
	fill: ${_ref2=>{let{fill,...props}=_ref2;return colorHelper("fill",fill,props)}};
	stroke: ${_ref3=>{let{stroke,...props}=_ref3;return colorHelper("stroke",stroke,props)}};
	font-size: ${props=>props.size};
`,commonExcludedProps=["fill","color","stroke"],SvgRoot=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.svg.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles),SvgIconPath=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.path.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconPath",componentId:"sc-4ot8tf-1"})(["",";"],commonStyles),SvgIconRect=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.rect.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconRect",componentId:"sc-4ot8tf-2"})(["",";"],commonStyles),SvgIconG=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.g.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconG",componentId:"sc-4ot8tf-3"})(["",";"],commonStyles),SvgIconDefs=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.defs.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconDefs",componentId:"sc-4ot8tf-6"})(["",";"],commonStyles),SvgIconClipPath=_utils_styled__WEBPACK_IMPORTED_MODULE_1__.ZP.clipPath.withConfig({shouldForwardProp:(0,_utils_theme__WEBPACK_IMPORTED_MODULE_2__.L)(commonExcludedProps)}).withConfig({displayName:"icons__SvgIconClipPath",componentId:"sc-4ot8tf-8"})(["",";"],commonStyles)},"./src/utils/hooks/useErrorId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>useErrorId});var react_uid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js");const useErrorId=()=>(0,react_uid__WEBPACK_IMPORTED_MODULE_0__.H)()("error-id")},"./src/utils/theme/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>color});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const color=colorPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(colorPath,theme.colors)))},"./src/utils/theme/excludeProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>excludeProps});const excludeProps=props=>(prop,defaultValidatorFn)=>!props.includes(prop)&&defaultValidatorFn(prop)},"./src/utils/theme/fontFamily.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>fontFamily});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const fontFamily=family=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(family,theme.fonts)))},"./src/utils/theme/fromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>fromTheme});const fromTheme=callback=>_ref=>{let{theme,...props}=_ref;return callback(theme,props)}},"./src/utils/theme/spacing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>spacing});var _fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const spacing=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>args.map((level=>theme.space[level])).join(" ")))}},"./src/utils/theme/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography});var _object_get__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/fp/get.js"),_object_get__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_object_get__WEBPACK_IMPORTED_MODULE_1__),_fromTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/theme/fromTheme.ts");const typography=typographyPath=>(0,_fromTheme__WEBPACK_IMPORTED_MODULE_0__.H)((theme=>_object_get__WEBPACK_IMPORTED_MODULE_1___default()(typographyPath,theme.typography)))},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-"+index:"val-"+item:map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){return react.useState(function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(react.useContext(source)))},useUID=function(){return useUIDState()[0].uid},useUIDSeed=function(){return useUIDState()[0].gen}}}]);
//# sourceMappingURL=components-InputErrorMessage-InputErrorMessage-stories-mdx.60bfa3e4.iframe.bundle.js.map