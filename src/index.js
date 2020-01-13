import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';


// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instace = new Dropdown(dropdown);
  instace.init();
});


