
import React, { Component, useEffect, useRef, useState } from 'react';


function Main(){
    const[current,setCurrent] = useState(0);
    const[style , setStyle] = useState({
        transform: `translateX(-${current}00vW)`
    });
    
    const arrowBtn = (i)=>{
        let nextIndex = current + i;
        if(nextIndex <0 || nextIndex>4){
            setCurrent(current)
        }else{
            setCurrent(nextIndex)
        }
    }

    useEffect(()=>{
        setStyle({ transform: `translateX(-${current}00vW)` });
    },[current]);

    return(
        <main>
        <div class="banner">
            
                
                    <div class="banner-container" style={style}>
                        <div class="slide-box">
                            <img src='/bannerImg/banner1.png'></img>
                        </div>
                        <div class="slide-box">
                            <img src='/bannerImg/banner2.png'></img>
                        </div>
                        <div class="slide-box">
                            <img src='/bannerImg/banner3.png'></img>
                        </div>
                        <div class="slide-box">
                            <img src='/bannerImg/banner4.png'></img>
                        </div>
                        <div class="slide-box">
                            <img src='/bannerImg/banner5.png'></img>
                        </div>
                    </div>
            <div className='arrow-btn'>
                <div className='slide-btn' onClick={()=>{arrowBtn(-1)}}>&lt;</div>
                <div className='slide-btn' onClick={()=>{arrowBtn(1)}}>&gt;</div>
            </div>    
            <div className='dot-box'>
            {
                    [0,1,2,3,4].map(function(a,i){
                        return <div className= {i == current ? 'slide-currentdot' : 'slide-dot'} onClick={()=>{setCurrent(i)}}></div>
                    })
                }
                

            </div>
        </div>

        <div class="main-top">
            <hr></hr>
            <h4>Category</h4>
            <p>다양한 청년·신진화가의 작품을 만나보세요.</p>
            {
            }
        </div>
        <div class="grid-container">
            <div>
                {/* <img src="/images/m_862956_May.jpeg"  > */}
            </div>
            <div>
                {/* <img src="/images/m_130327_routine.jpeg" alt=""> */}
            </div>
            <div>
                {/* <img src="/images/m_853099_Greek.jpeg" alt=""> */}
            </div>
            <div>
                {/* <img src="/images/m_861394_card.jpeg" alt=""> */}
            </div>
            <div>
                {/* <img src="/images/m_863026_Jubilee.jpeg" alt=""> */}
            </div>
            <div>
                {/* <img src="/images/m_863382_Faruk.jpeg" alt=""> */}
            </div>
        </div>
        
        
    </main>
    )
}

export default Main;