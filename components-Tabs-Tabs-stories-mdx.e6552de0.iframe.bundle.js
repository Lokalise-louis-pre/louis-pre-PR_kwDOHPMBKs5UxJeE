"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9021],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>defaultComponents,r:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,E$:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.E$,UG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/Tabs/Tabs.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,TemplateDisabled:()=>TemplateDisabled,default:()=>Tabs_stories,defaultStory:()=>defaultStory,disabledTab:()=>disabledTab});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),hooks=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js");const isServer="undefined"==typeof window||"undefined"==typeof document;const TabsContext=(0,react.createContext)(void 0);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const insertAt=(array,item,index)=>null!=index&&index in array?[...array.slice(0,index),item,...array.slice(index)]:[...array,item],DescendantProvider=_ref=>{let{context:Ctx,children,items,set}=_ref;const registerDescendant=(0,react.useCallback)((_ref2=>{let{element,index:explicitIndex,...rest}=_ref2;return element?(set((registeredItems=>{if(null!=explicitIndex&&-1!==explicitIndex)return insertAt(registeredItems,{element,index:explicitIndex,...rest},explicitIndex);if(0===registeredItems.length)return[{...rest,element,index:0}];if(registeredItems.find((item=>item.element===element)))return registeredItems;const index=((items,element)=>{if(!element)return-1;if(!items.length)return-1;let{length}=items;for(;length;){length-=1;const currentElement=items[length].element;if(currentElement&&(a=currentElement,Boolean(element.compareDocumentPosition(a)&&Node.DOCUMENT_POSITION_PRECEDING)))return length+1}var a;return-1})(registeredItems,element);let newItems;return newItems=-1===index?[...registeredItems,{...rest,element,index:registeredItems.length}]:insertAt(registeredItems,{...rest,element,index},index),newItems})),()=>{element&&set((registeredItems=>registeredItems.filter((item=>element!==item.element))))}):()=>{}}),[]);return(0,jsx_runtime.jsx)(Ctx.Provider,{value:(0,react.useMemo)((()=>({descendants:items,registerDescendant})),[items,registerDescendant]),children})};DescendantProvider.displayName="DescendantProvider";try{DescendantProvider.displayName="DescendantProvider",DescendantProvider.__docgenInfo={description:"",displayName:"DescendantProvider",props:{context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"Context<DescendantContextValue<DescendantType>>"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"DescendantType[]"}},set:{defaultValue:null,description:"",name:"set",required:!0,type:{name:"Dispatch<SetStateAction<DescendantType[]>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/descendants/DescendantProvider.tsx#DescendantProvider"]={docgenInfo:DescendantProvider.__docgenInfo,name:"DescendantProvider",path:"src/components/Tabs/descendants/DescendantProvider.tsx#DescendantProvider"})}catch(__react_docgen_typescript_loader_error){}const createDescendantContext=function(name){let initialValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const ctx=(0,react.createContext)({descendants:[],registerDescendant:()=>()=>{},...initialValue});return ctx.displayName=name,ctx},TabsDescendantsContext=createDescendantContext("TabsDescendantsContext"),Tabs=(0,react.forwardRef)(((_ref,ref)=>{let{children,index,defaultIndex,onChange,...props}=_ref;const{current:isControlled}=(0,react.useRef)(void 0!==index),[tabs,setTabs]=(0,react.useState)([]),[selectedIndex,setSelectedIndex]=function useControlledState(_ref){let{controlledValue,defaultValue}=_ref;const wasControlled=void 0!==controlledValue,isControlledRef=(0,react.useRef)(wasControlled),[valueState,setValue]=(0,react.useState)(defaultValue),set=(0,react.useCallback)((n=>{isControlledRef.current||setValue(n)}),[]);return[isControlledRef.current&&wasControlled?controlledValue:valueState,set]}({controlledValue:index,defaultValue:defaultIndex??0}),id=`${props.id||"tabs"}--${(0,hooks.D)()}`,onSelectTab=(0,react.useCallback)((selectIndex=>{onChange&&onChange(selectIndex),setSelectedIndex(selectIndex)}),[onChange,setSelectedIndex]),onSelectTabWithKeyboard=(0,react.useCallback)((selectIndex=>{onChange&&onChange(selectIndex),setSelectedIndex(selectIndex);const tabElement=tabs[selectIndex]?.element,doc=(element=tabElement,isServer?null:element instanceof Node?element.ownerDocument:element?.current instanceof Node?element.current.ownerDocument:document);var element;doc&&tabElement&&tabElement!==doc.activeElement&&"function"==typeof tabElement.focus&&tabElement.focus()}),[onChange,setSelectedIndex,tabs]),value=(0,react.useMemo)((()=>({id,isControlled,selectedIndex,setSelectedIndex,onSelectTab,onSelectTabWithKeyboard})),[id,isControlled,selectedIndex,setSelectedIndex,onSelectTab,onSelectTabWithKeyboard]);return(0,jsx_runtime.jsx)(DescendantProvider,{context:TabsDescendantsContext,items:tabs,set:setTabs,children:(0,jsx_runtime.jsx)(TabsContext.Provider,{value,children:(0,jsx_runtime.jsx)("div",{ref,...props,children})})})}));Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{index:{defaultValue:null,description:"Controls visible tab from outside.\nMust be used together with `onChange` to make tabs interactive.",name:"index",required:!1,type:{name:"number"}},defaultIndex:{defaultValue:null,description:"Specifies a tab that should be opened by default.",name:"defaultIndex",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Function executed when a tab is changed.",name:"onChange",required:!1,type:{name:"((index: number) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}const useTabsContext=()=>{const context=(0,react.useContext)(TabsContext);if(void 0===context)throw new Error("useTabsContext must be used within Tabs");return context},useDescendantKeyDown=(context,options)=>{const{descendants}=(0,react.useContext)(context),{callback,currentIndex,filter}=options;function getFirstOption(selectableDescendants){return selectableDescendants[0]}function getLastOption(selectableDescendants){return selectableDescendants[selectableDescendants.length-1]}return function handleKeyDown(event){if(!["ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(event.key))return;const index=currentIndex??-1,selectableDescendants=filter?descendants.filter(filter):descendants;if(!selectableDescendants.length)return;const selectableIndex=selectableDescendants.findIndex((descendant=>descendant.index===currentIndex));"ArrowLeft"===event.key&&(event.preventDefault(),callback(function getPreviousOption(selectableDescendants,selectableIndex,index){return index===getFirstOption(selectableDescendants).index?getLastOption(selectableDescendants):selectableDescendants[(selectableIndex-1+selectableDescendants.length)%selectableDescendants.length]}(selectableDescendants,selectableIndex,index).index)),"ArrowRight"===event.key&&(event.preventDefault(),callback(function getNextOption(selectableDescendants,selectableIndex,index){return index===getLastOption(selectableDescendants).index?getFirstOption(selectableDescendants):selectableDescendants[(selectableIndex+1)%selectableDescendants.length]}(selectableDescendants,selectableIndex,index).index)),"PageUp"===event.key&&(event.preventDefault(),callback(getFirstOption(selectableDescendants).index)),"Home"===event.key&&(event.preventDefault(),callback(getFirstOption(selectableDescendants).index)),"PageDown"===event.key&&(event.preventDefault(),callback(getLastOption(selectableDescendants).index)),"End"===event.key&&(event.preventDefault(),callback(getLastOption(selectableDescendants).index))}};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const StyledTabList=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tabs__StyledTabList",componentId:"sc-1c586ik-0"})(["display:flex;background:none;border-bottom:2px solid ",";"],(0,theme.S3)("color.border.light")),StyledTab=styled_components_browser_esm.ZP.button.withConfig({displayName:"Tabs__StyledTab",componentId:"sc-1c586ik-1"})(["display:inline-block;border:none;border-bottom:2px solid transparent;margin:0;margin-bottom:-2px;background:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;"," padding:",";color:",";transition:color ",";&:hover:enabled{color:",";border-bottom-color:",";}& + &{margin-left:",";}&[aria-selected='true']{"," border-bottom-color:",";color:",";}&:active{background:none;}&:disabled{color:",";cursor:not-allowed;}"],(0,theme.cp)("body.small.default"),(0,theme.W0)(2,0),(0,theme.S3)("color.text.default"),(0,theme.S3)("transition.default"),(0,theme.S3)("color.text.link.hover"),(0,theme.S3)("color.text.link.hover"),(0,theme.W0)(6),(0,theme.cp)("body.small.strong"),(0,theme.S3)("color.text.active"),(0,theme.S3)("color.text.active"),(0,theme.S3)("color.text.disabled")),StyledTabPanel=styled_components_browser_esm.ZP.div.withConfig({displayName:"Tabs__StyledTabPanel",componentId:"sc-1c586ik-2"})(["font-family:",";"],(0,theme.S3)("font.family.default")),TabList=(0,react.forwardRef)(((_ref,ref)=>{let{ariaLabelledBy,ariaLabel,children,...props}=_ref;const{isControlled,onSelectTabWithKeyboard,selectedIndex,setSelectedIndex}=useTabsContext(),tabs=(0,react.useContext)(TabsDescendantsContext).descendants,handleKeyDown=useDescendantKeyDown(TabsDescendantsContext,{currentIndex:selectedIndex,callback:onSelectTabWithKeyboard,filter:tab=>!tab.disabled});return(0,react.useLayoutEffect)((()=>{if(!isControlled&&tabs[selectedIndex]?.disabled){const next=tabs.find((tab=>!tab.disabled));next&&setSelectedIndex(next.index)}}),[tabs,isControlled,selectedIndex,setSelectedIndex]),(0,jsx_runtime.jsx)(StyledTabList,{role:"tablist","aria-labelledby":ariaLabelledBy,"aria-label":ariaLabelledBy?void 0:ariaLabel,onKeyDown:handleKeyDown,ref,...props,children})}));TabList.displayName="TabList";try{TabList.displayName="TabList",TabList.__docgenInfo={description:"",displayName:"TabList",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside. Expects multiple `Tab` components as children.",name:"children",required:!1,type:{name:"ReactNode"}},ariaLabelledBy:{defaultValue:null,description:"",name:"ariaLabelledBy",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabList.tsx#TabList"]={docgenInfo:TabList.__docgenInfo,name:"TabList",path:"src/components/Tabs/TabList.tsx#TabList"})}catch(__react_docgen_typescript_loader_error){}var useMergeRefs=__webpack_require__("./src/utils/hooks/useMergeRefs.ts");const useDescendantsContext=(descendant,context,indexProp)=>{const{registerDescendant,descendants}=(0,react.useContext)(context),index=indexProp??descendants.findIndex((item=>item.element===descendant.element));return(0,react.useLayoutEffect)((()=>{if(descendant.element)return registerDescendant({...descendant,index})}),[descendant,index,registerDescendant]),index},Tab=(0,react.forwardRef)(((_ref,forwardedRef)=>{let{children,disabled,...props}=_ref;const{id:tabsId,selectedIndex,onSelectTab}=useTabsContext(),[tabRef,setTabRef]=(0,react.useState)(null),descendant=(0,react.useMemo)((()=>({element:tabRef,disabled:!!disabled})),[disabled,tabRef]),index=useDescendantsContext(descendant,TabsDescendantsContext),isSelected=index===selectedIndex,ref=(0,useMergeRefs.q)(forwardedRef,setTabRef);return(0,jsx_runtime.jsx)(StyledTab,{id:`${tabsId}--tab--${index}`,disabled,"aria-disabled":disabled,"aria-selected":isSelected,role:"tab","aria-controls":`${tabsId}--panel--${index}`,ref,tabIndex:isSelected?0:-1,onClick:()=>onSelectTab(index),type:"button",...props,children})}));Tab.displayName="Tab";try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"Toggles disabled state of the `Tab`.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}const TabPanelsDescendantsContext=createDescendantContext("TabPanelsDescendantsContext"),TabPanels=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;const[tabPanels,setTabPanels]=(0,react.useState)([]);return(0,jsx_runtime.jsx)(DescendantProvider,{context:TabPanelsDescendantsContext,items:tabPanels,set:setTabPanels,children:(0,jsx_runtime.jsx)("div",{ref,...props,children})})}));TabPanels.displayName="TabPanels";try{TabPanels.displayName="TabPanels",TabPanels.__docgenInfo={description:"",displayName:"TabPanels",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabPanels.tsx#TabPanels"]={docgenInfo:TabPanels.__docgenInfo,name:"TabPanels",path:"src/components/Tabs/TabPanels.tsx#TabPanels"})}catch(__react_docgen_typescript_loader_error){}const TabPanel=(0,react.forwardRef)(((_ref,forwardedRef)=>{let{children,...props}=_ref;const{id:tabsId,selectedIndex}=useTabsContext(),[tabPanelRef,setTabPanelRef]=(0,react.useState)(null),descendant=(0,react.useMemo)((()=>({element:tabPanelRef})),[tabPanelRef]),index=useDescendantsContext(descendant,TabPanelsDescendantsContext),isSelected=index===selectedIndex,readyToHide=(0,react.useRef)(!1),hidden=!!readyToHide.current&&!isSelected;(0,react.useEffect)((()=>{readyToHide.current=!0}),[]);const ref=(0,useMergeRefs.q)(forwardedRef,setTabPanelRef);return(0,jsx_runtime.jsx)(StyledTabPanel,{id:`${tabsId}--panel--${index}`,role:"tabpanel","aria-labelledby":`${tabsId}--tab--${index}`,tabIndex:isSelected?0:-1,hidden,ref,...props,children})}));TabPanel.displayName="TabPanel";try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{children:{defaultValue:null,description:"Renders text content and / or any HTML node inside.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/TabPanel.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"src/components/Tabs/TabPanel.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api");const Template=args=>{const _components=Object.assign({div:"div"},(0,lib.ah)()),[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),{ariaLabelledBy,ariaLabel,...restArgs}=args;return(0,jsx_runtime.jsxs)(Tabs,{...restArgs,onChange:index=>updateArgs({index}),children:[(0,jsx_runtime.jsxs)(TabList,{ariaLabelledBy,ariaLabel,children:[(0,jsx_runtime.jsx)(Tab,{children:"First tab"}),(0,jsx_runtime.jsx)(Tab,{children:"Second tab"}),(0,jsx_runtime.jsx)(Tab,{children:"Third tab"})]}),(0,jsx_runtime.jsxs)(TabPanels,{children:[(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(_components.div,{style:{paddingTop:16},children:"First"})}),(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(_components.div,{style:{paddingTop:16},children:"Second"})}),(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(_components.div,{style:{paddingTop:16},children:"Third"})})]})]})},TemplateDisabled=args=>{const _components=Object.assign({div:"div"},(0,lib.ah)()),[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),{ariaLabelledBy,ariaLabel,...restArgs}=args;return(0,jsx_runtime.jsxs)(Tabs,{...args,onChange:index=>updateArgs({index}),children:[(0,jsx_runtime.jsxs)(TabList,{ariaLabelledBy,ariaLabel,children:[(0,jsx_runtime.jsx)(Tab,{children:"First tab"}),(0,jsx_runtime.jsx)(Tab,{disabled:!0,children:"Second tab"}),(0,jsx_runtime.jsx)(Tab,{children:"Third tab"})]}),(0,jsx_runtime.jsxs)(TabPanels,{children:[(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(_components.div,{style:{paddingTop:16},children:"First"})}),(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(_components.div,{style:{paddingTop:16},children:"Second"})}),(0,jsx_runtime.jsx)(TabPanel,{children:(0,jsx_runtime.jsx)(_components.div,{style:{paddingTop:16},children:"Third"})})]})]})};const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={index:0,ariaLabel:"Example tabs"},defaultStory.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const {\n    ariaLabelledBy,\n    ariaLabel,\n    ...restArgs\n  } = args;\n  return <Tabs {...restArgs} onChange={index => updateArgs({\n    index\n  })}>\n\t\t\t<TabList ariaLabelledBy={ariaLabelledBy} ariaLabel={ariaLabel}>\n\t\t\t\t<Tab>First tab</Tab>\n\t\t\t\t<Tab>Second tab</Tab>\n\t\t\t\t<Tab>Third tab</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>First</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Second</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Third</div>\n\t\t\t\t</TabPanel>\n\t\t\t</TabPanels>\n\t\t</Tabs>;\n}"}};const disabledTab=TemplateDisabled.bind({});disabledTab.storyName="Disabled Tab",disabledTab.args={index:0,ariaLabel:"Example tabs"},disabledTab.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  const {\n    ariaLabelledBy,\n    ariaLabel,\n    ...restArgs\n  } = args;\n  return <Tabs {...args} onChange={index => updateArgs({\n    index\n  })}>\n\t\t\t<TabList ariaLabelledBy={ariaLabelledBy} ariaLabel={ariaLabel}>\n\t\t\t\t<Tab>First tab</Tab>\n\t\t\t\t<Tab disabled>Second tab</Tab>\n\t\t\t\t<Tab>Third tab</Tab>\n\t\t\t</TabList>\n\t\t\t<TabPanels>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>First</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Second</div>\n\t\t\t\t</TabPanel>\n\t\t\t\t<TabPanel>\n\t\t\t\t\t<div style={{\n          paddingTop: 16\n        }}>Third</div>\n\t\t\t\t</TabPanel>\n\t\t\t</TabPanels>\n\t\t</Tabs>;\n}"}};const componentMeta={title:"Components/Tabs",parameters:{controls:{sort:"requiredFirst",exclude:["children"]}},component:Tabs,subcomponents:{TabList,Tab,TabPanels,TabPanel},argTypes:{ariaLabelledBy:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},id:{control:{type:"text"}}},tags:["stories-mdx"],includeStories:["defaultStory","disabledTab"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Tabs",component:Tabs,subcomponents:{TabList,Tab,TabPanels,TabPanel},parameters:{controls:{sort:"requiredFirst",exclude:["children"]}},argTypes:{ariaLabelledBy:{control:{type:"text"}},ariaLabel:{control:{type:"text"}},id:{control:{type:"text"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tabs",children:"Tabs"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#edge-cases",children:"Edge Cases"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#accessibility",children:"Accessibility"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Tabs are used to show the content that is conveniently placed in the same part of the interface."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Tabs exports 5 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Tabs"}),": Main component. Wrapper of ",(0,jsx_runtime.jsx)(_components.code,{children:"TabList"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TabList"}),": Wrapper of ",(0,jsx_runtime.jsx)(_components.code,{children:"Tab"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Tab"}),": Element that shows ",(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TabPanels"}),": Wrapper of ",(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"}),": Container of the content of the tab which is displayed when the corresponding ",(0,jsx_runtime.jsx)(_components.code,{children:"Tab"})," is active."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@lokalise/louis';\n\nexport default () => (\n\t<Tabs>\n\t\t<TabList>\n\t\t\t<Tab>First tab</Tab>\n\t\t\t<Tab>Second tab</Tab>\n\t\t\t<Tab>Third tab</Tab>\n\t\t</TabList>\n\t\t<TabPanels>\n\t\t\t<TabPanel>First</TabPanel>\n\t\t\t<TabPanel>Second</TabPanel>\n\t\t\t<TabPanel>Third</TabPanel>\n\t\t</TabPanels>\n\t</Tabs>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29304",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Tabs"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Tabs,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Default",args:{index:0,ariaLabel:"Example tabs"},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"disabled-tab",children:"Disabled Tab"}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.oG,{name:"Disabled Tab",args:{index:0,ariaLabel:"Example tabs"},children:TemplateDisabled.bind({})})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"edge-cases",children:"Edge Cases"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"dynamic-tabs",children:"Dynamic tabs"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Although ",(0,jsx_runtime.jsx)(_components.code,{children:"Tabs"})," supports a dynamic set of tabs, there are some issues with it. Namely, removing a tab might not\ncorrectly select a different tab or preserve the correct selected index. It is a known bug, and currently it is\ndifficult to fix, but the workaround is to reset the ",(0,jsx_runtime.jsx)(_components.code,{children:"Tabs"})," state when the number of tabs changes using ",(0,jsx_runtime.jsx)(_components.code,{children:"key"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"const [tabs, setTabs] = useState<number[]>([1, 2, 3]);\n\n<Tabs key={tabs.length}>\n\t<TabList>\n\t\t{tabs.map((tab) => (\n\t\t\t<Tab key={tab}>{tab}</Tab>\n\t\t))}\n\t</TabList>\n</Tabs>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"keyboard-interaction",children:"Keyboard Interaction"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ArrowRight"})," - navigates to the next active tab on the right or if the last tab is active then it navigates to the first tab."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"ArrowLeft"})," - navigates to the next active tab on the left or if the first tab is active then it navigates to the last tab."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Home"})," / ",(0,jsx_runtime.jsx)(_components.code,{children:"PageUp"})," - navigates to the last tab."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"End"})," / ",(0,jsx_runtime.jsx)(_components.code,{children:"PageDown"})," - navigates to the first tab."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"accessibility",children:"Accessibility"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"Tabs"})," follows the accessibility guidelines for tabs: ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Accessibility attributes you should set when using ",(0,jsx_runtime.jsx)(_components.code,{children:"Tabs"}),":"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["If the ",(0,jsx_runtime.jsx)(_components.code,{children:"TabList"})," has a visible label, you can provide a value that refers to the labelling element via the ",(0,jsx_runtime.jsx)(_components.code,{children:"ariaLabelledBy"})," prop on ",(0,jsx_runtime.jsx)(_components.code,{children:"TabList"})," which will set the ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-labelledby"})," attribute. Otherwise, the ",(0,jsx_runtime.jsx)(_components.code,{children:"TabList"})," should get an accessibility label using the ",(0,jsx_runtime.jsx)(_components.code,{children:"ariaLabel"})," prop."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Accessibility attributes automatically determined by ",(0,jsx_runtime.jsx)(_components.code,{children:"Tabs"}),":"]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TabList"})," serves as the container for the set of tabs and automatically has the role ",(0,jsx_runtime.jsx)(_components.code,{children:"tablist"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Each ",(0,jsx_runtime.jsx)(_components.code,{children:"Tab"})," component automatically has the role ",(0,jsx_runtime.jsx)(_components.code,{children:"tab"})," and is contained within ",(0,jsx_runtime.jsx)(_components.code,{children:"TabList"})," (with role ",(0,jsx_runtime.jsx)(_components.code,{children:"tablist"}),")."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Each ",(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"})," contains the content panel for a tab and automatically has the role ",(0,jsx_runtime.jsx)(_components.code,{children:"tabpanel"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Each ",(0,jsx_runtime.jsx)(_components.code,{children:"Tab"})," automatically has the property ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-controls"})," referring to its associated ",(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["The active ",(0,jsx_runtime.jsx)(_components.code,{children:"Tab"})," automatically has the state ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-selected"})," set to ",(0,jsx_runtime.jsx)(_components.code,{children:"true"})," and all other ",(0,jsx_runtime.jsx)(_components.code,{children:"Tab"}),"s have it set to ",(0,jsx_runtime.jsx)(_components.code,{children:"false"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["Each ",(0,jsx_runtime.jsx)(_components.code,{children:"TabPanel"})," automatically has the property ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-labelledby"})," referring to its associated tab element."]}),"\n"]})]})}}};const Tabs_stories=componentMeta},"./src/utils/function/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>isFunction,v:()=>callAllHandlers});const isFunction=input=>"function"==typeof input,callAllHandlers=function(){for(var _len=arguments.length,fns=new Array(_len),_key=0;_key<_len;_key++)fns[_key]=arguments[_key];return function func(event){fns.some((fn=>(fn?.(event),event?.defaultPrevented)))}}},"./src/utils/hooks/useMergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_function__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/function/index.ts");function useMergeRefs(){for(var _len=arguments.length,refs=new Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if((0,_function__WEBPACK_IMPORTED_MODULE_1__.m)(ref))ref(value);else try{ref.current=value}catch(error){throw new Error(`Cannot assign value "${JSON.stringify(value)}" to ref "${ref.toString()}"`)}}(ref,node)}))}),refs)}},"./node_modules/react-uid/dist/es2015/hooks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useUID,H:()=>useUIDSeed});var react=__webpack_require__("./node_modules/react/index.js"),generateUID=function(){var counter=1,map=new WeakMap,uid=function(item,index){return"number"==typeof item||"string"==typeof item?index?"idx-".concat(index):"val-".concat(item):map.has(item)?"uid"+map.get(item):(map.set(item,counter++),uid(item))};return uid},createSource=(generateUID(),function(prefix){return void 0===prefix&&(prefix=""),{value:1,prefix,uid:generateUID()}}),counter=createSource(),source=react.createContext(createSource()),useUIDState=function(){var context=(0,react.useContext)(source),uid=(0,react.useState)((function(){return function(context){var quartz=context||counter,prefix=function(source){return source?source.prefix:""}(quartz),id=function(source){return source.value++}(quartz),uid=prefix+id;return{uid,gen:function(item){return uid+quartz.uid(item)}}}(context)}))[0];return uid},useUID=function(){return useUIDState().uid},useUIDSeed=function(){return useUIDState().gen}}}]);