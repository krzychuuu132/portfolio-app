import React from 'react';

import './My_contact.scss';

const My_contact = () => {

    return ( 

        <section className="section contact" data-index="4" data-name="contact">
              
              <h3 className='contact__title'>Chcesz ze mną współpracować ?</h3>

              <div className='contact__wrapper'>

                        <p className='contact__text'>Jeśli chcesz podjąć ze mną współpracę pisz na adres  </p>
                        <span className='contact__adres'>krzychu222u@wp.pl</span>
                        <p className='contact__text'>czekam na twoja wiadomość!</p>

                        <a className='contact__btn' href='mailto:krzychu222u@wp.pl'>napisz do mnie</a>
              </div>

           
        </section>

     );
}
 
export default My_contact;