(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{121:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return m}));var r=o(1),n=o(6),a=(o(0),o(217)),i=o(220),l={title:"Room templates"},s={id:"version-1.0.3/basics/room-templates",title:"Room templates",description:'import { Image, Gallery, GalleryImage } from "@theme/Gallery";\r',source:"@site/versioned_docs\\version-1.0.3\\basics\\room-templates.md",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/basics/room-templates",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/versioned_docs/version-1.0.3/basics/room-templates.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Basics",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/basics/introduction"},next:{title:"Level graphs",permalink:"/ProceduralLevelGenerator-Unity/docs/1.0.3/basics/level-graphs"}},c=[{value:"Terminology",id:"terminology",children:[]},{value:"Room layout",id:"room-layout",children:[{value:"Tilemaps",id:"tilemaps",children:[]},{value:"Room shape",id:"room-shape",children:[]}]},{value:"Doors",id:"doors",children:[{value:"Door modes",id:"door-modes",children:[]}]},{value:"Corridors",id:"corridors",children:[]},{value:"Final steps",id:"final-steps",children:[]}],p={rightToc:c};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Room templates are one of the main concepts of the algorithm. They describe how individual rooms in the dungeon look and how they can be connected to one another. "),Object(a.b)("h2",{id:"terminology"},"Terminology"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Room layout - how a room looks, tiles with sprites, walls, floors, furniture, etc."),Object(a.b)("li",{parentName:"ul"},"Room shape - floor plan of a room layout"),Object(a.b)("li",{parentName:"ul"},"Doors - all possible positions of doors of a room layout"),Object(a.b)("li",{parentName:"ul"},"Room template - room layout together with doors")),Object(a.b)("h2",{id:"room-layout"},"Room layout"),Object(a.b)("p",null,"We will use Unity ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.unity3d.com/Manual/class-Tilemap.html"}),"Tilemaps")," to design our room layouts so you should be familiar with that. The whole room template consists of a ",Object(a.b)("em",{parentName:"p"},"Grid")," ",Object(a.b)("em",{parentName:"p"},"GameObject")," that has one or more child ",Object(a.b)("em",{parentName:"p"},"Tilemap")," ",Object(a.b)("em",{parentName:"p"},"GameObjects")," and a ",Object(a.b)("em",{parentName:"p"},"Doors")," script attached. You can use all available tools (brushes, rule tiles, etc.) to paint tilemaps. "),Object(a.b)(i.c,{src:"img/original/room_layout.png",caption:"Example room layout",mdxType:"Image"}),Object(a.b)("h3",{id:"tilemaps"},"Tilemaps"),Object(a.b)("p",null,"The plugin is also prepared to handle layouts consisting of multiple tilemaps if you want to have multiple layers of tiles. In fact, the default configuration of the plugin uses several tilemaps because you cannot really do that much with a single layer of tiles. The default structure of tilemaps is as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Walls")," - order 0, with collider"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Floor")," - order 1 "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Collideable")," - order 2, with collider"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Other")," 1 - order 3"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Other 2")," - order 4"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Other 3")," - order 5")),Object(a.b)("p",null,"It is ",Object(a.b)("strong",{parentName:"p"},"VERY IMPORTANT")," that all room layouts are structured exactly like this because tiles from tile layouts will be copied to correspoding tilemaps of generated dungeon layouts. The names of individual tilemaps are not really important - I just thought that it may be better than simply numbering them and the algorithm currently does not care whether there are walls in the first tilemap or not."),Object(a.b)("p",null,"To make it easier to create room templates, there is a ",Object(a.b)("em",{parentName:"p"},"DefaultRoomTeplateInitializer")," script that can be added to an empty ",Object(a.b)("em",{parentName:"p"},"GameObject")," and then used to create the correct structure of tilemaps. See the video below."),Object(a.b)(i.c,{src:"img/original/creating_tilemaps.gif",caption:"Initializing tilemaps using the DefaultRoomTeplateInitializer script",mdxType:"Image"}),Object(a.b)("p",null,"If you need a different structure of tilemaps, you can override the default behaviour. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"tilemapLayers.md"}),"Tilemap layers"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Feedback needed:")," The default structure of tilemaps aims to provide a reasonable structure for game designers to start creating room layouts. However, I have got no experience with working with tilemaps in real projects so I would like to hear any feedback on whether this structure is a good default or not.")),Object(a.b)("h3",{id:"room-shape"},"Room shape"),Object(a.b)("p",null,"The underlying algorithm works with polygons, not tilemaps, tiles and sprites. We call these polygons room shapes and they are simply outlines/floor plans of corresponding room layouts. However, not all room shapes are valid in the context of the algorithm. The goal of this section is to describe how can room shapes look like."),Object(a.b)(i.c,{src:"img/original/room_shape.png",caption:"The green outline shows the room shape of a corresponding room layout",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Because we are only interested in the outline of a room layout, the internal structure (number, order) of tilemaps is irrelevant. For the purpose of the computation we can imagine that all tiles are in a single tilemap.")),Object(a.b)("h4",{id:"one-connected-component"},"One connected component"),Object(a.b)("p",null,"I will not go into formal definitions. The image below should be self-explanatory."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/one_connected_component_nok.png",caption:"Wrong",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/one_connected_component_ok.png",caption:"Correct",mdxType:"GalleryImage"})),Object(a.b)("h4",{id:"each-tile-atleast-two-neighbours"},"Each tile atleast two neighbours"),Object(a.b)("p",null,"Each tile must be connected to at least two neigbouring tiles. In the image below, both tiles in the upper row are connected to only a single neighbour so the room shape is not valid. If we need these two tiles, we can simly fill the upper row with ",Object(a.b)("em",{parentName:"p"},"empty")," or transparent tiles."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/at_least_two_neighbours_nok.png",caption:"Wrong",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/at_least_two_neighbours_ok.png",caption:"Correct",mdxType:"GalleryImage"})),Object(a.b)("h4",{id:"without-holes"},"Without holes"),Object(a.b)("p",null,"There must be no holes in room layouts (a null tile surrounded by non-null tiles). Again, we can fill such holes with ",Object(a.b)("em",{parentName:"p"},"empty")," or transparent tiles if we need them there."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/no_holes_nok.png",caption:"Wrong",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/no_holes_ok.png",caption:"Correct",mdxType:"GalleryImage"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"NOTE:")," This is only a limitation of the current algorithm for computing room shapes from room layouts and the constraint will be probably dropped in the future.")),Object(a.b)("h2",{id:"doors"},"Doors"),Object(a.b)("p",null,"When we have our room layout ready, we can add doors. By specifying door positions, we tell the algorithm how can individual room templates be connected together."),Object(a.b)("p",null,"The algorithm may connect two room templates if:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"there exist door positions with the same length"),Object(a.b)("li",{parentName:"ul"},"the two room templates do not overlap after we connect them",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"they may share tiles on outlines of corresponding room shapes")))),Object(a.b)("h3",{id:"door-modes"},"Door modes"),Object(a.b)("p",null,"There are currently two ways of defining door positions. Both ways are currently controlled by the ",Object(a.b)("em",{parentName:"p"},"Doors")," component that is automatically added to the parent GameObject after using the ",Object(a.b)("em",{parentName:"p"},"DefaultRoomTeplateInitializer"),"."),Object(a.b)("p",null,"In both modes, all door positions must be on the outline of the corresponding room shape."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," There are situations where we might want to relax this requirement and allow door positions that are not on the outline. So maybe that will be possible in the future versions of the plugin.")),Object(a.b)("h4",{id:"simple-mode"},"Simple mode"),Object(a.b)("p",null,"In the simple mode, you specify how long should all doors be and at least how far from corners of the room layout they should be positioned. Below you can see how this mode looks."),Object(a.b)(i.c,{src:"img/original/doors_simple1.png",caption:"Simple door mode - length 1, distance from corners 2",mdxType:"Image"}),Object(a.b)("p",null,"Each red rectangle shows available door positions. You can see that there are no door positions in the bottom-right part of the layout - that is because no tile is placed at least 2 tiles from all corners. If we change the door length to 2, we will loose the door positon on the right side of the room layout because there is space only for a single tile."),Object(a.b)(i.c,{src:"img/original/doors_simple2.png",caption:"Simple door mode - length 2, distance from corners 2",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," There is currently an inconsistency in how are door positions displayed. In the ",Object(a.b)("em",{parentName:"p"},"simple mode"),", each red rectangle represents a set of door positions, while in the ",Object(a.b)("em",{parentName:"p"},"specific positions mode"),", each rectangle represents exactly one door position. The reason for this is that it is exactly how the procedural dungeon generator library handles that, but it might be counter-intuitive for users of the plugin and may change in the future.")),Object(a.b)("h4",{id:"specific-positions-mode"},"Specific positions mode"),Object(a.b)("p",null,"In the ",Object(a.b)("em",{parentName:"p"},"Specific positions mode"),", you have to manually specify all door positions of a room layout. This mode gives you a complete control over available door positions."),Object(a.b)("p",null,"To start adding doors, click the ",Object(a.b)("em",{parentName:"p"},"Specific positions")," button in the ",Object(a.b)("em",{parentName:"p"},"Doors")," script and then click the ",Object(a.b)("em",{parentName:"p"},"Add door positions")," button to toggle edit mode. Then you can simply draw door positions as seen in the video below."),Object(a.b)(i.c,{src:"img/original/doors_specific1.gif",caption:"Specific positions mode",mdxType:"Image"}),Object(a.b)("p",null,"You can see that I am creating doors of various lengths. And at the end of the video, you can also see that individual door positions may overlap."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," If you accidentally add a door position that you did not want to add, you have to ",Object(a.b)("em",{parentName:"p"},"Delete all door positions")," and start over. This is far from ideal and should be improved in the future.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," With multiple doors overlapping, the GUI gets quite messy. In order to make it more clear, I show diagonals of individual rectangles. And it gets even more messy when you have doors of various sizes overlapping. I thought about adding a switch that would show only doors with a specified length.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The inspector script currently lets you add door positions that are not on the outline of the room shape. It will, hovewer, result in an error when trying to generate a dungeon. It should be improved in the future.")),Object(a.b)("h2",{id:"corridors"},"Corridors"),Object(a.b)("p",null,"The algorithm distinguishes two types of room tamples - basic room templates and room templates for corridor rooms. There are currently 2 limitations regarding doors in corridor room templates:\n1. There must be exactly two door positions.\n2. The two door positions must be on the opposite sides of the room layout."),Object(a.b)("p",null,"The images below demonstrate what is a correct corridor room template and what is not."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/corridor_ok1.png",caption:"Correct",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/corridor_ok2.png",caption:"Correct",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/corridor_nok1.png",caption:"Wrong - Doors not on opposite sides",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/corridor_nok2.png",caption:"Wrong - More than 2 door positions",mdxType:"GalleryImage"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," This is a limitation of the dungeon generator library and not the plugin itself. I plan to completely rework corridors in the future.")),Object(a.b)("h2",{id:"final-steps"},"Final steps"),Object(a.b)("p",null,"After creating a room template GameObject, you can simply save it as an asset and it is ready to be used in a level graph."))}m.isMDXComponent=!0},217:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return d}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},m=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),u=r,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||a;return o?n.a.createElement(d,l({ref:t},c,{components:o})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},218:function(e,t,o){"use strict";var r=o(0),n=o(32);t.a=function(){return Object(r.useContext)(n.a)}},219:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(218);function n(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:o="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?o+e.slice(1):o+e}},220:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return p})),o.d(t,"c",(function(){return b}));var r=o(1),n=o(6),a=o(0),i=o.n(a),l=o(219),s=function(e){return i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:"calc("+100/e.cols+"% - 4px)",verticalAlign:"top"}},e.children)},c=function(e){return i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,(function(t){return i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})})))},p=function(e){return i.a.createElement(s,{cols:e.cols},i.a.createElement("a",{href:Object(l.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(l.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(m,null,e.caption))},m=function(e){return i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children)},b=function(e){e.src,e.caption;var t=Object(n.a)(e,["src","caption"]);return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(r.a)({src:Object(l.a)(e.src)},t)),void 0!==e.caption&&i.a.createElement(m,null,e.caption))}}}]);