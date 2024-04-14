"use strict";(self.webpackChunknaa_vre_website=self.webpackChunknaa_vre_website||[]).push([[167],{7326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(5893),a=t(1151);const o={sidebar_position:3},s="The NaaVRE Interface",l={id:"NaaVRE_Interface/index",title:"The NaaVRE Interface",description:"The Notebook as a Virtual Research Environment (NaaVRE) is a set of tools to allow users to containerize cells, compose",source:"@site/docs/NaaVRE_Interface/index.md",sourceDirName:"NaaVRE_Interface",slug:"/NaaVRE_Interface/",permalink:"/NaaVRE-website/docs/NaaVRE_Interface/",draft:!1,unlisted:!1,editUrl:"https://github.com/QCDIS/NaaVRE-website/blob/main/docs/NaaVRE_Interface/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started with NaaVRE tutorial",permalink:"/NaaVRE-website/docs/tutorials/"}},r={},c=[{value:"Component Containerizer",id:"component-containerizer",level:2},{value:"Special Variables",id:"special-variables",level:3},{value:"Overriding definition of cell inputs and outputs",id:"overriding-definition-of-cell-inputs-and-outputs",level:3},{value:"Experiment Manager",id:"experiment-manager",level:2},{value:"Special Components",id:"special-components",level:3},{value:"Cells Catalog",id:"cells-catalog",level:3},{value:"Re-containerizing cells used in a workflow",id:"re-containerizing-cells-used-in-a-workflow",level:3},{value:"Notebook Search",id:"notebook-search",level:2},{value:"Jupyterlab-git",id:"jupyterlab-git",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"the-naavre-interface",children:"The NaaVRE Interface"}),"\n",(0,i.jsx)(n.p,{children:"The Notebook as a Virtual Research Environment (NaaVRE) is a set of tools to allow users to containerize cells, compose\nworkflows and execute them on a workflow engine."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"NaaVRE_interface",src:t(4015).Z+"",width:"951",height:"668"})}),"\n",(0,i.jsx)(n.h2,{id:"component-containerizer",children:"Component Containerizer"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Component Containerizer",src:t(6352).Z+"",width:"648",height:"659"}),"\nThe 'Cell Preview' panel shows a preview of the cell that is currently selected including its name, inputs and outputs.\nUnder the 'Cell Preview' panel there a list of the inputs and outputs of the cell and their types. The types are needed\nto be filled in by the user when containerizing a cell. Currently, the supported types are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"String"}),"\n",(0,i.jsx)(n.li,{children:"Integer"}),"\n",(0,i.jsx)(n.li,{children:"Float"}),"\n",(0,i.jsx)(n.li,{children:"List"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Under the 'Inputs' and 'Outputs' there is the 'Base Image' selection. This is the base image that will be used to build\nthe container. The default base image is 'miniconda3'. The user can select a different base image from the drop down."}),"\n",(0,i.jsx)(n.h3,{id:"special-variables",children:"Special Variables"}),"\n",(0,i.jsx)(n.p,{children:"The user can use two special variables in the cell code:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"param_"}),": This variable is used to pass input parameters to the cell. These parameters are passed to the cell during\nexecution and are requested by the user every time a workflow is executed that contains the cell with the parameters.\n",(0,i.jsx)(n.a,{href:"https://github.com/QCDIS/vre_documetation/assets/9680609/fea3d96b-97d3-43cd-b009-b5bd4537de5a",children:"Param_example.webm"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"conf_"}),": This variable is used to pass configuration parameters to all cells. ",(0,i.jsx)(n.code,{children:"conf_"})," variables once deca-lied are visible\nby all cells of the workflow. They can be thought of as 'global' variables therefore, they do not require to set their type\nlike other variables.\n",(0,i.jsx)(n.a,{href:"https://github.com/QCDIS/vre_documetation/assets/9680609/f7020f7f-69d9-4916-bb56-83ed64cb98a8",children:"Conf_example.webm"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Component Containerizer",src:t(3944).Z+"",width:"859",height:"611"})}),"\n",(0,i.jsxs)(n.p,{children:["Notice in the image above that the ",(0,i.jsx)(n.code,{children:"conf_b"})," variable is declared in the first cell and used in the second and third cell.\nHowever, the ",(0,i.jsx)(n.code,{children:"conf_b"})," is not showing up as input in the second and third cell."]}),"\n",(0,i.jsx)(n.h3,{id:"overriding-definition-of-cell-inputs-and-outputs",children:"Overriding definition of cell inputs and outputs"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"This feature can result in broken containerized cells. Use it with caution."})}),"\n",(0,i.jsx)(n.p,{children:"In normal circumstances, the component containerizer automatically determines the cell variables (inputs, outputs,\nparams, confs) and dependencies by analyzing the source code."}),"\n",(0,i.jsxs)(n.p,{children:["This can be overridden by adding a special comment to the cell. The comment contains a YAML document, beginning with\n",(0,i.jsx)(n.code,{children:"---"})," and ending with ",(0,i.jsx)(n.code,{children:"..."}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# My cell name\n# ---\n# NaaVRE:\n#  cell:\n#   inputs:\n#    - my_input: String\n#    - my_other_input: Integer\n#   outputs:\n#    - my_output: List\n#    - my_other_output: List\n#   params:\n#    - param_something:\n#       type: String\n#       default_value: "my default value"\n#   confs:\n#    - conf_something_else:\n#       assignation: "conf_something_else = \'my other value\'"\n#   dependencies:\n#    - name: yaml\n#    - name: numpy\n#      asname: np\n#    - name: signal\n#      module: scipy\n# ...\n\n(my cell code)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If an entry (e.g. ",(0,i.jsx)(n.code,{children:"params:"}),") is omitted from the comment, the containerizer will try to determine the appropriate values from the source code.\nThis makes it possible to override some variable types, while using the code analysis for others.\nIn this example, the input and output are manually specified, while the dependencies, confs and params are determined from the source code (note how we specify that the cell has no outputs):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# My cell with partial override\n# ---\n# NaaVRE:\n#  cell:\n#   inputs:\n#    - my_input: String\n#   outputs: []\n# ...\n\nprint(my_input, param_my_param)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the full syntax, see the ",(0,i.jsx)(n.a,{href:"https://github.com/QCDIS/NaaVRE/blob/main/jupyterlab_vre/services/extractor/cell_header.schema.json",children:"YAML document schema"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"experiment-manager",children:"Experiment Manager"}),"\n",(0,i.jsx)(n.p,{children:"In the 'Experiment Manager' page you can compose and execute workflows. To compose a workflow click on the '+' button in\nthe bottom right corner of the page and select the 'Cells Catalog' option."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Experiment Manager",src:t(5703).Z+"",width:"770",height:"466"})}),"\n",(0,i.jsx)(n.p,{children:"After you have selected the cells you want to compose a workflow with, click on the 'Add to Workspace' button."}),"\n",(0,i.jsx)(n.h3,{id:"special-components",children:"Special Components"}),"\n",(0,i.jsx)(n.p,{children:"In the 'Experiment Manager' page you can compose workflows using special components. These components are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Splitter: This component is used to split an output array from a call into its elements and feed each element to the\nnext cell. That way the next cell will be executed in parallel as many times as the number of elements in the array."}),"\n",(0,i.jsx)(n.li,{children:"Merger: This component is used to merge the outputs of multiple cells into a single array."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cells-catalog",children:"Cells Catalog"}),"\n",(0,i.jsx)(n.p,{children:"The cells catalog contains all the cells that have been containerized."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Cells Catalog",src:t(7952).Z+"",width:"991",height:"508"})}),"\n",(0,i.jsx)(n.h3,{id:"re-containerizing-cells-used-in-a-workflow",children:"Re-containerizing cells used in a workflow"}),"\n",(0,i.jsx)(n.p,{children:"When re-containerizing a cell used in a workflow, you might need to update the\nworkflow itself:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you only updated the cell's source code or dependencies: the workflow automatically uses the new version of the\ncell."}),"\n",(0,i.jsx)(n.li,{children:"If you changed the cell\u2019s inputs, outputs or parameters: the workflow needs to be updated. Remove the cell from the\nworkflow, and add the new version from the catalogue."}),"\n",(0,i.jsx)(n.li,{children:"If you changed the cell\u2019s title: a new cell is created in the catalogue. Both the old and new cell can be used.\nWorkflows using the old cell don\u2019t need to be updated."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"notebook-search",children:"Notebook Search"}),"\n",(0,i.jsx)(n.p,{children:"In the 'Notebook Search' page you can search for notebooks relevant to your research. To search for notebooks click on\nthe icon in the middle left of the page. There you can search for notebooks."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Notebook Search",src:t(754).Z+"",width:"1081",height:"424"})}),"\n",(0,i.jsx)(n.p,{children:"The results will be displayed in the left panel. If you clik on a result you will be shown some relevant information\nsuch its title, link, summary etc. If you click on the 'More' button you will be redirected to the notebook where you\ncan download it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Notebook Search",src:t(2411).Z+"",width:"464",height:"860"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Notebook Search",src:t(184).Z+"",width:"1841",height:"971"})}),"\n",(0,i.jsx)(n.h2,{id:"jupyterlab-git",children:"Jupyterlab-git"}),"\n",(0,i.jsxs)(n.p,{children:["In all VLs there is a Git integration with jupyterlab-git.\nTo clone and push to a repository you can follow the instructions from here: ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/jupyterlab-git/",children:"jupyterlab-git"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7952:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cells_catalog_1-a51b936375c6df189c4274dd3bd1dc1e.png"},6352:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/component_containerizer_1-89c4b8403bcbe4f53cd7462fa2359bc8.png"},3944:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/component_containerizer_conf_1-9ce69c703a7b780adbfb968e37a56d77.png"},5703:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/experimenter_manager_7-763d9157a11a2992221f6d75ea44ceb6.png"},4015:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/n-a-a-vre_interface_1-441fe6fcba0c3cac6eb3a9294e33d740.png"},754:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/notebook_search_1-681830ef694b98c4459e6b81f371a063.png"},2411:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/notebook_search_2-b9fcd1a2f6ebc23b30bea2223be70f89.png"},184:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/notebook_search_3-287346427ffbd78c94acb5548293c412.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);