import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';


// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instace = new Dropdown(dropdown);
  instace.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


