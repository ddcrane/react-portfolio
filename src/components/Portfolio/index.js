import React from 'react';

import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <ul>
        <div>
            <li><a href="https://ddcrane.github.io/run-buddy">Run Buddy</a></li> 
            
        </div>

        <div>
            <li><a href="https://ddcrane.github.io/food-festival/">Food Festival</a></li>
        </div>
        
        <div>
            <li><a href="https://isaiahnegron.github.io/project-spaghetti/" className="spaghetti">Project Spaghetti</a></li>
            {/* <img src="../../assets/spaghetti.png/" /> */}
        </div>
        
        <div>
            <li><a href="https://pokemon-trading-post.herokuapp.com/">Pokemon Trading Post</a></li>
        </div>
        <div>
            <li><a href="https://ddcrane.github.io/taskinator/">Taskinator</a></li>
        </div>
        <div>
            <li><a href="https://afternoon-caverns-58335.herokuapp.com/">Note Taker</a></li>
        </div>
    </ul>
    </section>
  );
}
export default Gallery;


