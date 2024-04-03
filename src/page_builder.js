import pData from './projects.json' with { type: 'json'};
//https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server
//we cannot use require as that is specific to a node.js environment
/*async function fetchProjects() {
    const jData = await fetch('./projects.json');
    return await jData.json();
}*/

function buildProjectPage(projectData) {
    const projectDiv = document.getElementById("project_page");
    projectData.forEach( function (project)  {
        //create header for project
        const pDiv = document.createElement('div');
        pDiv.classList.add('project_header');
        const pTag = document.createElement('p');
        const titleNode = document.createTextNode(project.header);
        pTag.append(titleNode);
        pDiv.append(pTag);
        if (Object.hasOwn(project, 'repo_link')) {
            const aTag = document.createElement('a');
            aTag.href = project.repo_link;
            aTag.target = '_blank';
            const linkTextNode = document.createTextNode(project.repo_title);
            aTag.append(linkTextNode);
            pDiv.append(aTag);
        }
        projectDiv.append(pDiv);
        //create project body
        const pBodyDiv = document.createElement('div');
        pBodyDiv.classList.add('project');
        const pBodyTag = document.createElement('p');
        const textBodyNode = document.createTextNode(project.description);
        pBodyTag.append(textBodyNode);
        pBodyDiv.append(pBodyTag);
        //create link
        if (Object.hasOwn(project, 'source_type')) {
            if (project.source_type == 'img') {
                const imgTag = document.createElement('img');
                imgTag.src = project.source_link;
                imgTag.style.width = project.width;
                imgTag.style.height = project.height;
                pBodyDiv.append(imgTag);
            } else {
                const iframeTag = document.createElement('iframe');
                iframeTag.src = project.source_link;
                pBodyDiv.append(iframeTag);
            }
        }
        projectDiv.append(pBodyDiv);
        console.log(project.header);
    })
}

async function buildPage() {
    //const pData = await fetchProjects();
    //console.log(pData);
    buildProjectPage(pData.projects);
}

buildPage();