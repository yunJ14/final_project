import React, { Component, useEffect, useState,useMemo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCartPlus,faBars, } from "@fortawesome/free-solid-svg-icons";


function Header(){
    
    const [isOpen , setMenu] = useState(true); //메뉴 초기값을 false로 설정
    const [me, setMe] =useState('menu')
    const toggleMenu = () =>{
        setMenu(isOpen => !isOpen); //on off
        if(isOpen==true){
            setMe('menu-open')
        }else{
            setMe('menu')
        }
        }

    
    const [scrollEvent , setScrollEvent] = useState('') //스크롤 이벤트 초기값 빈칸설정

    const onScroll = ()=>{
        if (window.scrollY > 60){
            setScrollEvent('navbar-active')
        }else{
            setScrollEvent('')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);
    })


    
    return (
        <header>
        <nav id="navbar" className={scrollEvent}>
            <div className={'menu '+ me}>
                <div>
                    <ul>
                        <li><a href="#">Apple</a></li>
                        <li><a href="#">Banana</a></li>
                        <li><a href="#">Cola</a></li>
                    </ul>
                    <h1>Art-Market Logo</h1>
                    <ul>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                    <ul class="social-media">
                        <li><a href="#">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </a></li>
                        <li><a href="#">
                            
                        </a></li>
                        <li><a href="#">
                            
                        </a></li>
                        <li><a href="#">
                            
                        </a></li>
                    </ul>                      
                </div>
            </div>
            <div class="container">
                <a href="#" class="brand">Art-Market</a>
                <div class="container-inner">
                    <ul>
                        <li><a href="#">Store</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="log">
                        <ul><li><a href="#"><FontAwesomeIcon icon={faUser}/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCartPlus}/></a></li>
                        </ul>

                    </div>
                </div>
                <FontAwesomeIcon onClick={()=>toggleMenu()} icon={faBars}/>
                {/* <i class="fas fa-bars" id="menu-btn"></i> */}
            </div> 
        </nav>
    </header>
    )
    }

export default Header;
