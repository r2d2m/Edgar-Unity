(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{190:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var o=r(1),a=r(6),n=(r(0),r(217)),l=r(220),i={title:"(PRO) Platformer 1"},c={id:"version-2.0.0-alpha.3/examples/platformer-1",title:"(PRO) Platformer 1",description:'import { Image, Gallery, GalleryImage } from "@theme/Gallery";\r',source:"@site/versioned_docs\\version-2.0.0-alpha.3\\examples\\platformer-1.md",permalink:"/ProceduralLevelGenerator-Unity/docs/examples/platformer-1",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.3/examples/platformer-1.md",version:"2.0.0-alpha.3",sidebar:"version-2.0.0-alpha.3/docs",previous:{title:"Example 2",permalink:"/ProceduralLevelGenerator-Unity/docs/examples/example-2"},next:{title:"(PRO) Isometric 1",permalink:"/ProceduralLevelGenerator-Unity/docs/examples/isometric-1"}},s=[{value:"Limitations",id:"limitations",children:[]},{value:"Room templates",id:"room-templates",children:[]},{value:"Doors and corridors",id:"doors-and-corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}],p={rightToc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this tutorial, we will use ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.kenney.nl/assets/abstract-platformer"}),"this tileset")," by ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/KenneyNL"}),"@KenneyNL")," to create basic platformer levels. Be sure to check their work out if you like the tileset. We will not care about room decorations very much - the goal of this tutorial is to demonstrate all the basic steps needed to create platformer levels."),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/platformer1/result1.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/result2.png",caption:"Example result",mdxType:"GalleryImage"})),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(n.b)("h2",{id:"limitations"},"Limitations"),Object(n.b)("p",null,"If this is your first time reading about procedural platformers, please see the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"../generators/platformer-generator#limitations"}),"Limitations section")," of the Platformer generator page."),Object(n.b)("h2",{id:"room-templates"},"Room templates"),Object(n.b)("p",null,"Below you can see a few of the room templates that were created for this example."),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/platformer1/start.png",caption:"Start",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/goal.png",caption:"Goal",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/room2.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/room3.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/room6.png",caption:"Basic room",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/room8.png",caption:"Basic room",mdxType:"GalleryImage"})),Object(n.b)("h2",{id:"doors-and-corridors"},"Doors and corridors"),Object(n.b)("p",null,"Even though there are no real corridors used in generated levels, we use the corridor feature to make sure that neighboring rooms do not share walls."),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/platformer1/corridor_horizontal.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/corridor_vertical.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),Object(n.b)("p",null,"Moreover, there is a small problem with doors because there are no background tiles inside room templates. And that means that when the corridor rooms are placed over non-corridor rooms, all the walls remain there and it is not possible to go from one room to another (as can be seen in the image below). We usually do not have this problem because when there are background tiles, they are placed over walls and everything is working."),Object(n.b)(l.c,{src:"img/v2/examples/platformer1/no_holes_between_rooms.png",caption:"There are no holes between individual rooms because we have no background tile in room templates.",mdxType:"Image"}),Object(n.b)("p",null,"The solution is quite simple. We have to create a simple post process task that goes through all door positions and deletes all the door tiles."),Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Dungeon generator/Examples/Platformer 1/Post process", fileName = "Platformer1PostProcess")]\npublic class Platformer1PostProcess : PlatformerGeneratorPostProcessBase\n{\n    public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    {\n        RemoveWallsFromDoors(level);\n    }\n\n    private void RemoveWallsFromDoors(GeneratedLevel level)\n    {\n        // Get the tilemap that we want to delete tiles from\n        var walls = level.GetSharedTilemaps().Single(x => x.name == "Walls");\n\n        // Go through individual rooms\n        foreach (var roomInstance in level.GetRoomInstances())\n        {\n            // Go through individual doors\n            foreach (var doorInstance in roomInstance.Doors)\n            {\n                // Remove all the wall tiles from door positions\n                foreach (var point in doorInstance.DoorLine.GetPoints())\n                {\n                    walls.SetTile(point, null);\n                }\n            }\n        }\n    }\n}\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," The term ",Object(n.b)("em",{parentName:"p"},"doors")," is used throughout the text but in this context it simply means a conection between two rooms.")),Object(n.b)("h2",{id:"level-graph"},"Level graph"),Object(n.b)(l.c,{src:"img/v2/examples/platformer1/level_graph.png",caption:"Level graph",mdxType:"Image"}),Object(n.b)("h2",{id:"results"},"Results"),Object(n.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(n.b)(l.b,{src:"img/v2/examples/platformer1/result3.png",caption:"Example result",mdxType:"GalleryImage"}),Object(n.b)(l.b,{src:"img/v2/examples/platformer1/result4.png",caption:"Example result",mdxType:"GalleryImage"})))}m.isMDXComponent=!0},217:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||n;return r?a.a.createElement(d,i({ref:t},s,{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},218:function(e,t,r){"use strict";var o=r(0),a=r(32);t.a=function(){return Object(o.useContext)(a.a)}},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(218);function a(e){const{siteConfig:t}=Object(o.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return u}));var o=r(1),a=r(6),n=r(0),l=r.n(n),i=r(219),c=function(e){return l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)",verticalAlign:"top"}},e.children)},s=function(e){return l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,(function(t){return l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})})))},p=function(e){return l.a.createElement(c,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(m,null,e.caption))},m=function(e){return l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children)},u=function(e){e.src,e.caption;var t=Object(a.a)(e,["src","caption"]);return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(o.a)({src:Object(i.a)(e.src)},t)),void 0!==e.caption&&l.a.createElement(m,null,e.caption))}}}]);