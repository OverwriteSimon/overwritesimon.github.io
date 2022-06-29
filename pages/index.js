import Image from 'next/image';
import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'
import { client } from '../lib/client';

const Home = ({products, bannerData}) => {
  return (
    <div >
    <Image src='/../public/emysdaylightdonuts.png' width={350} height={250}/>
    
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    

    <div className='products-heading'>
      <h2>Monday-Friday 6am-11:30am</h2>
      <p>Closed Saturday & Sunday</p>
    </div>
    
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await(client.fetch(bannerQuery));

  return {
    props: {products, bannerData}
  }
}

export default Home;