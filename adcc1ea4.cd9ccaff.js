(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,u=p["".concat(r,".").concat(b)]||p[b]||h[b]||i;return n?o.a.createElement(u,s(s({ref:t},c),{},{components:n})):o.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(112)),r={id:"FarseerPhysics",title:"Farseer Physics/Collisions"},s={unversionedId:"features/Physics/FarseerPhysics",id:"features/Physics/FarseerPhysics",isDocsHomePage:!1,title:"Farseer Physics/Collisions",description:"For situations where you need a full-fledged physics simulation Nez provides the Farseer Physics Engine. Farseer physics is entirely optional and currently experimental/in development. The public API will change so beware. If you want to use Farseer you will need to add the Nez.FarseerPhysics project to your main solution and add a reference to it from your game project.",source:"@site/docs\\features\\Physics\\FarseerPhysics.md",slug:"/features/Physics/FarseerPhysics",permalink:"/Nez/docs/features/Physics/FarseerPhysics",editUrl:"https://github.com/prime31/Nez/edit/master/Nez.github.io/docs/features/Physics/FarseerPhysics.md",version:"current",sidebar:"someSidebar",previous:{title:"Verlet Physics",permalink:"/Nez/docs/features/Physics/Verlet"},next:{title:"Scene/Entity/Component System",permalink:"/Nez/docs/features/ECS/SceneEntityComponentSystem"}},l=[{value:"Background and Goals",id:"background-and-goals",children:[]},{value:"Using Farseer with Nez",id:"using-farseer-with-nez",children:[]},{value:"High Level API",id:"high-level-api",children:[]},{value:"Low Level API",id:"low-level-api",children:[{value:"Understanding Farseer Objects",id:"understanding-farseer-objects",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For situations where you need a full-fledged physics simulation Nez provides the Farseer Physics Engine. Farseer physics is entirely optional and currently experimental/in development. The public API will change so beware. If you want to use Farseer you will need to add the Nez.FarseerPhysics project to your main solution and add a reference to it from your game project."),Object(i.b)("h2",{id:"background-and-goals"},"Background and Goals"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://farseerphysics.codeplex.com/"},"Farseer Physics Engine")," is a C# port of the superb Box2D physics engine. The Farseer project was abandoned way back in 2013 but it still remains one of the most popular choices for MonoGame/FNA. Farseer covered almost all of the Box2D API and extended it providing a bunch of super useful tools, many not even physics specific (texture and polygon tools, for example)."),Object(i.b)("p",null,"Farseer (like most physics engines) operates in metric (kilo/meter/second) as opposed to pixel coordinates. This can make working directly with Farseer error prone. Every time you get or set data you have to convert to/from display/simulation units. The Nez high level API hides all of this and handles converting between display and simulation for you. When accessing the Farseer API directly it will not be converted for you. You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"FSConvert")," static class to handle conversions via its ",Object(i.b)("inlineCode",{parentName:"p"},"DisplayToSim")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SimToDisplay")," fields."),Object(i.b)("p",null,"The Nez Farseer implementation has a few important goals that it aims to achieve:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"wrap the most commonly used Farseer features in easy to use Components. The Farseer API is low level. The high level Components will hide all of that complexity and make basic physics simple to use."),Object(i.b)("li",{parentName:"ul"},"allow full access to the Farseer API for advanced users. It should be noted that the ",Object(i.b)("a",{parentName:"li",href:"https://farseerphysics.codeplex.com/documentation"},"Farseer docs")," are minimal and point users over to the ",Object(i.b)("a",{parentName:"li",href:"http://box2d.org/documentation/"},"Box2D documentation"),"."),Object(i.b)("li",{parentName:"ul"},"extend Farseer and add some new functionality to it (Kinematic collision detection!). All Farseer code will remain in the ",Object(i.b)("inlineCode",{parentName:"li"},"FarseerPhysics")," namespace and all Nez additions will be in the ",Object(i.b)("inlineCode",{parentName:"li"},"Nez.Farseer")," namespace."),Object(i.b)("li",{parentName:"ul"},"provide most of the features Nez physics have. Nez physics lets you take full control over the movement/collision of a Collider. Physics engines like to control collision and response automatically. The ",Object(i.b)("inlineCode",{parentName:"li"},"FarseerCollisions")," class is already in place and lets you take control of collision and collision response just like with Nez Colliders. The ",Object(i.b)("inlineCode",{parentName:"li"},"Mover")," class and similar can all be done entirely with Farseer at this point.")),Object(i.b)("p",null,"The Farseer code is all in progress and the API is definitely not in its final state. Usually this would be kept out of the main repo until the API is solidified but since Farseer is entirely optional all in-progress changes will be public. If you are itching to get going with Farseer for now you are mostly on your own. The high level API (and all Nez-specific additions) are available in the Nez.FarseerPhysics/Nez folder."),Object(i.b)("h2",{id:"using-farseer-with-nez"},"Using Farseer with Nez"),Object(i.b)("p",null,"First and foremost, you should always set your pixel-to-meter ratio before doing anything. By default, the value is set to 100. You can change this to whatever you want by calling ",Object(i.b)("inlineCode",{parentName:"p"},"FSConvert.SetDisplayUnitToSimUnitRatio"),". Behind the scenes, the high level API will be using this value to deal with converting to/from simulation units to pixels. If you choose to use the Farseer API directly be sure to remember to convert your units with the FSDebug ",Object(i.b)("inlineCode",{parentName:"p"},"DisplayToSim")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SimToDisplay")," fields."),Object(i.b)("p",null,"There are a couple options for using Farseer physics with Nez to provide some flexibility. Regardless of if you choose to use the Component-based high level API or use Farseer directly it is recommended to use the ",Object(i.b)("inlineCode",{parentName:"p"},"FSWorld")," ",Object(i.b)("inlineCode",{parentName:"p"},"SceneComponent")," to manage the Farseer ",Object(i.b)("inlineCode",{parentName:"p"},"World")," object. All of the the high level API will get the World object from the FSWorld SceneComponent. You can easily access it by just calling ",Object(i.b)("inlineCode",{parentName:"p"},"Scene.GetOrCreateSceneComponent<FSWorld>()"),". As the name implies, this will fetch the FSWorld SceneComponent or first create it then fetch it."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"FSDebugView")," Component can be added to your Scene to get a visual representation of the physics world. This is very handy for development and debugging of Farseer objects and it will work with the high or low level API."),Object(i.b)("h2",{id:"high-level-api"},"High Level API"),Object(i.b)("p",null,"The high level API wraps up the Farseer API in standard Nez Components. Farseer Components come in 3 different flavors explained below each of them with a fluent API for configuring the objects for easy method chaining and API exploration."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FSRigidBody"),": wraps the Farseer Body. Handles keeping the Entity's Transform in sync with the Farseer Body. FSRigidBody's can be any of the three body types: Dynamic, Static or Kinematic (see Understanding Farseer Objects for details on each). An FSRigidBody is required for any of the other Farseer Components to be of any use.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FSCollisionShape"),": wraps the Farseer Fixture and Shape objects. This is the physical shape of the collider. You can have 1 or more FSCollisionShapes on your Entity. Available FSCollisionShapes are circle, box, polygon, edge, ellipse and chain.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FSJoint"),": wraps the Farseer Joint. Joints can be used to connect two FSRigidBodys in various different ways. Included joint types are: angle, distance, friction, gear, motor, mouse, prismatic, pulley, revolute (hinge), rope, weld and wheel."))),Object(i.b)("p",null,"Lets take a look at some basic examples of using the API."),Object(i.b)("p",null,"Creates a Sprite and a dynamic Farseer rigid body with a circle collider"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'// create an Entity and set the position and scale\nCreateEntity( "circle-sprite" )\n    .SetPosition( pos )\n    .SetScale( scale )\n\n    // add an FSRigidBody and set the bodyType to dynamic\n    .AddComponent<FSRigidBody>()\n    .SetBodyType( BodyType.Dynamic )\n\n    // add a circle shape for our collisions and set the radius to halve the texture width\n    .AddComponent<FSCollisionCircle>()\n    .SetRadius( texture.Width / 2 )\n\n    // finally add a Sprite\n    .AddComponent( new Sprite( texture ) );\n')),Object(i.b)("p",null,"Creates a static Farseer rigid body and an edge collider that goes from vert1 to vert2"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'CreateEntity( "edge" )\n    .SetPosition( pos )\n\n    // add the FSRigidBody. By default it will be static\n    .AddComponent<FSRigidBody>()\n\n    // add our edge collision shape with two verts\n    .AddComponent<FSCollisionEdge>()\n    .SetVertices( vert1, vert2 );\n')),Object(i.b)("p",null,"Creates a static Farseer rigid body with a chain collider. Chains are essentially a free form sequence of line segments that can be collided with from either side."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'// define the verts. The Vertices class has the sme API as List<Vector2>.\nvar verts = new Vertices();\nverts.Add( new Vector2( 500, 10 ) );\nverts.Add( new Vector2( 550, 50 ) );\nverts.Add( new Vector2( 600, 70) );\nverts.Add( new Vector2( 700, 20 ) );\n\ncreateEntity( "chain" )\n    // add our static FSRigidBody\n    .AddComponent<FSRigidBody>()\n\n    // add the chain shape and set the verts\n    .AddComponent<FSCollisionChain>()\n    .SetVertices( verts );\n')),Object(i.b)("p",null,"This example shows how to use a joint to connect two FSRigidBodies. It is assumed that rigidBody1 and rigidBody2 exist and are FSRigidBodies."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},"// add the weld joint to the first rigid body. Weld joints essentially glues two bodies together.\nrigidBody1.AddComponent<FSWeldJoint>()\n         // configure the anchors for the two bodies. Anchors are relative to the position of each body.\n         .SetOtherBodyAnchor( new Vector2( 50, 0 ) )\n         .SetOwnerBodyAnchor( new Vector2( -50, 50 ) )\n\n         // configure the frequency and damping ratio\n         .SetFrequencyHz( 5 )\n         .SetDampingRatio( 0.1f )\n\n         // set the second FSRigidBody for the joint\n         .SetOtherBody( rigidBody2 );\n")),Object(i.b)("p",null,"Finally lets take a look at creating a slightly more complex collision shape."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-csharp"},'var vertList = new List<Vertices>();\n// fill vertList with some polygon vertices\n\n// create and configure our standard rigid body\nvar rb = CreateEntity( "compound-polygon" )\n    .SetPosition( pos )\n    .AddComponent<FSRigidBody>()\n    .SetBodyType( BodyType.Dynamic );\n\n// add an FSCollisionPolygon for each of the vert Lists\nforeach( var verts in vertList )\n{\n    rb.AddComponent<FSCollisionPolygon>()\n      .SetVertices( verts );\n}\n')),Object(i.b)("h2",{id:"low-level-api"},"Low Level API"),Object(i.b)("p",null,"The low level API provides a small number of Components that handle syncing the Nez Transform with the Farseer Body. These can be used to get up and running quickly but they are more here to be used as a template so that you can create your own custom subclasses."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FSGenericBody"),": manages the Farseer Body (and provides public access to it) and syncs it with the Nez Transform. That's about all you get with it. To make adding collision shapes and joints easier there are a pile of extension methods on the Body class. They all take care of converting from pixel space to simulation space as well.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"FSRenderableBody"),": manages the Farseer Body and syncs it with the Nez Transform. Where it differs from the ",Object(i.b)("inlineCode",{parentName:"p"},"FSGenericBody")," is that there are some subclasses that are instantly useable: ",Object(i.b)("inlineCode",{parentName:"p"},"FSBoxBody"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FSCircleBody"),", ",Object(i.b)("inlineCode",{parentName:"p"},"FSPolygonBody")," and ",Object(i.b)("inlineCode",{parentName:"p"},"FSCompoundPolygonBody"),". These Components all take in a Texture2D/Sprite and create the Farseer Body, Fixture and Shape for you. They also handle rendering as well. ",Object(i.b)("inlineCode",{parentName:"p"},"FSCompoundPolygonBody")," will generate the collision shape based on the texture which can be really handy."))),Object(i.b)("p",null,"There are a few helpers available to make working with Farseer's API more convenient. The ",Object(i.b)("inlineCode",{parentName:"p"},"Body")," class has a bunch of extension methods for adding Fixtures and Joints that all let you use standard Nez pixel coordinates (as opposed to having to convert everything to Farseer simulation units). If you want to skip out completely on the ",Object(i.b)("inlineCode",{parentName:"p"},"FSGenericBody")," and ",Object(i.b)("inlineCode",{parentName:"p"},"FSRenderableBody")," classes and use Farseer directly you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"Nez.Farseer.BodyFactory")," to create Farseer Bodies all in Nez pixel coordinates."),Object(i.b)("h3",{id:"understanding-farseer-objects"},"Understanding Farseer Objects"),Object(i.b)("p",null,"Farseer consists of a few key objects that are paramount to understanding the API and being able to effectively use it."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"World"),": the world object is the manager of it all. It iterates all the objects in the world each frame steps through and makes sure everything is consistent and stable.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Body"),": the body keeps track of world position. It is basically a point is space that is affected by forces such as impulses from collisions and gravity. Bodies come in 3 different flavors (Body.BodyTypes) that drastically effect how they work in the physics world."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Dynamic"),": objects which move around and are affected by forces and other dynamic, kinematic and static objects. Dynamic bodies are suitable for any object which needs to move and be affected by forces."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Static"),": objects which do not move and are not affected by forces. Dynamic bodies are affected by static bodies. Static bodies are perfect for ground, walls, and any object which does not need to move. Static bodies require less computing power."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Kinematic"),": objects that are somewhat in between static and dynamic bodies. Like static bodies, they do not react to forces, but like dynamic bodies, they do have the ability to move. Kinematic bodies are great for things where you want to be in full control of a body's motion. Nez extends Kinematic bodies with some added features that are not part of Farseer/Box2D. More on that later."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Shape"),": a shape is what extends the point in space to a 2D shape. The centroid and stuff like area, inertia and mass is calculated for the shape.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Fixture"),": a fixture attaches (fixes) the shape to the body so that the centroid of the shape becomes the body\u2019s position. Whenever you move the body, you also move the shape. Once a collision occurs to the shape, the force is calculated and applied to the body."))))}d.isMDXComponent=!0}}]);