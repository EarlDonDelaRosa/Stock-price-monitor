import { useEffect, useState } from "react"

function useFunction() {
    const url = 'http://localhost:3000/';
    const [priceSource, setPriceSource] = useState([]);
    const [ticker, setTicker] = useState([]);
    const [priceSrc, setPriceSrc] = useState([]);
    const [urlSrc, setUrlSrc] = useState('');
    const [showTicker1, setShowTicker1] = useState({display: 'none'});
    const [showTicker2, setShowTicker2] = useState({display: 'none'});

    useEffect(() => {
        fetch(url + 'pricesource/')
        .then((response) => response.json())
        .then((actualData) => setPriceSource(actualData))
    }, [])

    useEffect(() => {
        fetch(url + 'ticker/')
        .then((response) => response.json())
        .then((actualData) => setTicker(actualData))
    }, [])

    const onChangePrice = (e) => {
        if (urlSrc !== '') {
            async function getData() {
                let urlExt = await e.target.value;
                let response = await fetch(url + urlExt + '/');
                let urlData = await response.json();
                let sliceNum = urlData.length - 5;
                await new Promise((resolve, reject) => setTimeout(resolve, 300))
                setPriceSrc(urlData.slice(sliceNum).reverse())
                setUrlSrc(e.target.value)
            }
            return getData();
        } else {
            setUrlSrc(e.target.value)
        }
    }
    
    const onChangeTicker = (e) => {
        if (e.target.value === 'IBM') {
            setShowTicker1({display: 'block'})
            setShowTicker2({display: 'none'})
        } else if (e.target.value === 'SONY') {
            setShowTicker1({display: 'none'})
            setShowTicker2({display: 'block'})
        }
        if (urlSrc !== '') {
            fetch(url + urlSrc + '/')
            .then((res) => res.json())
            .then((urlData) => {
                let sliceNum = urlData.length - 5;
                setPriceSrc(urlData.slice(sliceNum).reverse())
            })
        } 
    }

    // console.log('PRICE SOURCE', priceSource)
    // console.log('TICKER', ticker)

    return {
        priceSource,
        ticker,
        priceSrc,
        showTicker1,
        showTicker2,
        onChangePrice,
        onChangeTicker
    }
}

export default useFunction