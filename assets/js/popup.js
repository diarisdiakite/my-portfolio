import { projects, projectButtons, projectsDivHTML } from './projectCards.js';

for (let i = 0; i < projectButtons.length; i += 1) {
  const projectButton = projectButtons[i];
  const project = projects[i];

  projectButton.addEventListener('click', () => {
    // Create projectCardJs element
    const projectCardJs = document.createElement('div');
    projectCardJs.classList = ('project-card-js');

    // Append close button
    const popupCloseButton = document.createElement('button');
    popupCloseButton.setAttribute('name', 'close');
    popupCloseButton.setAttribute('id', 'js-button-close');
    popupCloseButton.setAttribute('background-color', 'transparent');
    popupCloseButton.setAttribute('class', 'js-button-close');
    projectCardJs.appendChild(popupCloseButton);

    // Create a type with all the tect element and the image
    const textDiv = document.createElement('div');
    textDiv.classList.add('js-text-container');

    // appending image
    const popupImage = document.createElement('div');
    popupImage.classList.add('js-project-popup-img');
    const image = document.createElement('img');

    if (window.innerWidth < 768) {
      image.src = `${project.mobileImageUrl}`;
      image.classList.add('project-popup-mobile-img');
      popupImage.classList.remove('js-project-popup-img');
    } else {
      image.src = `${project.desktopImageUrl}`;
      image.classList.add('project-popup-desktop-img');
      popupImage.classList.remove('js-project-popup-img');
    }
    textDiv.appendChild(image);

    // create div with Title and 2 links in display flex
    const titleLinksDiv = document.createElement('div');
    titleLinksDiv.classList.add('js-title-div');

    // Project Title
    const title = document.createElement('h3');
    title.textContent = `${project.title}`;
    title.classList.add('section-title');
    titleLinksDiv.appendChild(title);

    const linksContainer = document.createElement('div');
    linksContainer.classList.add('js-link-list');

    // Project links
    // live link
    const liveLink = document.createElement('button');
    liveLink.textContent = '';// `${project.liveVersionLink}`;
    liveLink.className = 'js-liveLink-button';
    liveLink.setAttribute('alt', 'link to the project live Demo');
    linksContainer.appendChild(liveLink);
    // Source link
    const sourceLink = document.createElement('button');
    sourceLink.textContent = ''; // `${project.sourceLink}`;
    sourceLink.className = 'js-sourceLink-button';
    sourceLink.setAttribute('alt', 'Link to the project souce');
    linksContainer.appendChild(sourceLink);
    // Append the 3 elements to project card
    titleLinksDiv.appendChild(linksContainer);
    textDiv.appendChild(titleLinksDiv);

    // I - CREATE THE TECHNOLOGIES LINKS
    const technologiesUl = document.createElement('ul');
    technologiesUl.classList.add('project-built-with');

    const technologyList = project.technologies;
    const technologyFragment = document.createDocumentFragment();

    const renderTechnologyList = (value) => {
      const technologyLi = document.createElement('li');
      technologyLi.classList.add('poupup-items');
      const technologyLink = document.createElement('a');
      technologyLink.textContent = value;
      // technologyLink.classList.add('poupup-items');
      technologyLi.appendChild(technologyLink);
      technologyFragment.appendChild(technologyLi);
    };

    technologyList.forEach(renderTechnologyList);

    technologiesUl.appendChild(technologyFragment);
    textDiv.appendChild(technologiesUl);

    // Project description
    const description = document.createElement('p');
    description.textContent = `${project.description}`;
    description.setAttribute('class', 'js-p-style');
    description.setAttribute('text-align', 'left');
    textDiv.appendChild(description);

    if (window.innerWidth >= 768) {
      titleLinksDiv.appendChild(linksContainer);
    }
    if (window.innerWidth < 768) {
      textDiv.appendChild(linksContainer);
    }
    projectCardJs.appendChild(textDiv);

    // appending modal elements
    const projectPopup = document.createElement('div');
    projectPopup.appendChild(projectCardJs);

    const modal = document.createElement('div');
    modal.classList.add('popup-modal');
    modal.appendChild(projectPopup);

    const body = document.querySelector('body');
    body.appendChild(modal);

    // VI - ADD EVENT LISTERNER OPEN THE MODAL
    popupCloseButton.addEventListener('click', () => {
      body.removeChild(modal);
      projectsDivHTML.className = ('projects');
    });
  });
}
