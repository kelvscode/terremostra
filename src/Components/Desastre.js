import React, { useState } from 'react';
import ProductInfo from './DesInfo';
const Product=()=>{
    const [item,setItem]=useState(ProductInfo);
    const [desitem,setdesItem]=useState(ProductInfo[0]);
    const [positem,setpos]=useState(0);
    const slectDes=(pos)=>{
        setdesItem(ProductInfo[pos]);
        setpos(pos);
    }
    return(<> 
        <div className="container">
            <h1 className="animado">TERREMOSTRA</h1>
            <p className="desheading">Te mostrando sobre a Terra!</p>
            <div className="cakeContainer">
                {
                    item.map((item,pos)=>{
                        const arr=["classImg"];
                        if(pos==positem)
                        {
                            arr.push("classImgBorder");
                        }
                        return(
                            <img className={arr.join(' ')} src={item.image} onClick={()=>{slectDes(pos)}}></img>
                        )
                    })
                }
            </div>
            <img src="/images/terra.jpg" alt="" className='image-bg' />
            <div className="desInfo"> 
                <h2>{desitem.name}</h2>
                <img src={desitem.image} className="classImg"/>
                <p>{desitem.descripion}</p>
            </div>   
        </div>
        
        </>
    )
}
export default Product;