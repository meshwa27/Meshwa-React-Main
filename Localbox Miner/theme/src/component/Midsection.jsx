import React, { useContext } from 'react';
import { themecontext } from '../context/Themecontex';

const Midsection = () => {
  const { theme } = useContext(themecontext);
  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
      padding: '1rem'
    }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloremque veritatis nihil dicta tenetur. Asperiores, distinctio repellendus quaerat earum, vero perspiciatis porro quibusdam velit commodi quia, veniam temporibus maiores saepe. Sed explicabo molestias accusamus quaerat culpa ratione pariatur autem sit perferendis at totam minima facere deserunt repellendus ut ex cupiditate quae velit dicta unde perspiciatis, maxime voluptatum. Eligendi, earum pariatur laborum minima nemo asperiores consequatur quo natus fugit fugiat delectus repellat laboriosam possimus voluptas maxime sint iste deleniti, facilis deserunt, hic voluptatem ducimus itaque eum excepturi. Culpa quae ex voluptates explicabo, recusandae ratione deleniti? Iste eum sed exercitationem eaque, voluptates id cum eos quam quas est velit pariatur! Doloremque sequi illum quo distinctio fuga laborum vel dolorum delectus vero? Incidunt commodi, maxime iure, impedit distinctio fugit quasi tenetur assumenda nulla, iste alias reiciendis velit ab odit esse praesentium nostrum! Quidem magnam at doloribus optio molestiae adipisci est recusandae quam quae!
    </div>
  );
};

export default Midsection;
