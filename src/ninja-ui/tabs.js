import './styles/tabs.css';

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.trigger');
  }

  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        this.toggleTabs(event);
        this.toggleContent(event);
      });
    });
  }

  toggleTabs(event) {
    //remove current active classes
    this.tabs.forEach(tab => tab.classList.remove('active'));

    //add new active class to clicked tab
    event.target.classList.add('active');
  }

  toggleContent(event) {
    //remove current active classes
    this.container.querySelectorAll('.content').forEach(item => {
      item.classList.remove('active');
    });
    
    //add new active class to content
    const selector = event.target.getAttribute('data-target');
    const content = this.container.querySelector(selector);
    
    content.classList.add('active');
  }
}

export default Tabs;