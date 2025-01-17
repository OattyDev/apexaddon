import React, {useState, useEffect} from 'react'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import './Featured.css'
import axios from 'axios'

const Featured = () => {

    const [ data, setData] = useState(null)

    // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en'

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setData(response.data)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cgala%2Ccosmos%2Ctether%2Csolana';;
        const options = {
          method: 'GET',
          headers: {
            'x-cg-demo-api-key': 'CG-DQyroCUWyWjftnMdYvk5WRd9'
          }
        };
    
        axios.get(url, options)
          .then(response => {
            setData(response.data)
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    console.log(data)

    if (!data) return null

  return (
    <div className='featured'>
        <div className='container'>

            {/* Left */}

            <div className='left'>
                <h2>Explore top Crypto's Like Bitcon, Ethereum, and Dogecoin</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className='btn'>See More Coins</button>
                <p className='datafrom'>"Data provided by <a href='/https://www.coingecko.com/' className='provider'>CoinGecko</a>"</p>
            </div>

            {/* Right */}

            <div className='right'>
              <div className='card'>
                <div className='top'>
                    <img src={data[0].image} alt='/'/>
                </div>
                <div>
                    <h5> {data[0].name} </h5>
                    <p> ${data[0].current_price.toLocaleString()} </p>
                </div>

                {data[0].price_change_percentage_24h < 0  ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowUpRight className='icon'/>
                        {data[0].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
              </div>

              <div className='card'>
                <div className='top'>
                    <img src={data[1].image} alt='/'/>
                </div>
                <div>
                    <h5> {data[1].name} </h5>
                    <p> ${data[1].current_price.toLocaleString()} </p>
                </div>

                {data[1].price_change_percentage_24h < 0  ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowUpRight className='icon'/>
                        {data[1].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
              </div>

              <div className='card'>
                <div className='top'>
                    <img src={data[2].image} alt='/'/>
                </div>
                <div>
                    <h5> {data[2].name} </h5>
                    <p> ${data[2].current_price.toLocaleString()} </p>
                </div>

                {data[2].price_change_percentage_24h < 0  ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowUpRight className='icon'/>
                        {data[2].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
              </div>

              <div className='card'>
                <div className='top'>
                    <img src={data[3].image} alt='/'/>
                </div>
                <div>
                    <h5> {data[3].name} </h5>
                    <p> ${data[3].current_price.toLocaleString()} </p>
                </div>

                {data[3].price_change_percentage_24h < 0  ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[3].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowUpRight className='icon'/>
                        {data[3].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
              </div>

              <div className='card'>
                <div className='top'>
                    <img src={data[4].image} alt='/'/>
                </div>
                <div>
                    <h5> {data[4].name} </h5>
                    <p> ${data[4].current_price.toLocaleString()} </p>
                </div>

                {data[4].price_change_percentage_24h < 0  ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[4].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowUpRight className='icon'/>
                        {data[4].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
              </div>

              <div className='card'>
                <div className='top'>
                    <img src={data[5].image} alt='/'/>
                </div>
                <div>
                    <h5> {data[5].name} </h5>
                    <p> ${data[5].current_price.toLocaleString()} </p>
                </div>

                {data[5].price_change_percentage_24h < 0  ? (
                    <span className='red'>
                        <FiArrowDown className='icon'/>
                        {data[5].price_change_percentage_24h.toFixed(2)}%
                    </span>
                ) : (
                    <span className='green'>
                        <FiArrowUpRight className='icon'/>
                        {data[5].price_change_percentage_24h.toFixed(2)}%
                    </span>
                )}
              </div>
            </div>


        </div>
    </div>
  )
}

export default Featured
