import React, { use } from 'react';
import Pricingcard from '../Pricingcard/Pricingcard';
import Daisypricing from '../Daisypricing/Daisypricing';

const PricingOptions = ({PricingPromise}) => {

    const pricingData=use(PricingPromise);
    
    return (
        <div>
          <h2 className='text-5xl'
           >Get our memberships</h2>
        <div className='grid 
        md:grid-cols-2  
        lg:grid-cols-3 gap-8'>
           { /*
            pricingData.map(pricing=><Pricingcard 
                key={pricing.id}
                pricing={pricing}></Pricingcard>)
           */}

           {
            pricingData.map(pricing=><Daisypricing key={pricing.id}
           pricing=
          {pricing}>
                
                
            </Daisypricing>)
           }
               
       </div>
     

        </div>
    );
};

export default PricingOptions;