import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = () => {

    const [onHovered, setOnHovered] = useState(false)
    const navigate = useNavigate()

  return (
    <CardContainer
    onMouseEnter={() => setOnHovered(true)}
    onMouseLeave={() => setOnHovered(false)}
    >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU'
        alt='movie poster'
        onClick={()=>navigate('/player')}
        />
        {
            onHovered && (
                <div className='hover'>
                    <div className='image-video-wrapper'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU'
                        alt='movie poster'
                        onClick={()=>navigate('/player')}
                        />
                        <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4' 
                        autoPlay loop controls
                        />
                    </div>
                    <div className='info -container'>
                        <h3 className='movieName' onClick={()=>navigate('/player')}>Red Notice</h3>
                        <div className='icons'>
                            <div className='controls'>
                                <IoPlayCircleSharp 
                                title='play'
                                onClick={()=>navigate('/player')}
                                />
                                <RiThumbUpFill title='like'/>
                                <RiThumbDownFill title='dis like'/>
                                <BsCheck title='Remove from List'/>
                                <AiOutlinePlus title='Add to my list' />
                            </div>
                            <div className='info'>
                                <BiChevronDown title='More info'/>
                            </div>
                        </div>
                        <div className='genre'>
                            <ul>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                                <li>Action</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    </CardContainer>
  )
}

const CardContainer = styled.div`

    max-width: 230px;
    width: 230px;
    height: 100%;
    cursor: pointer;
    position: relative;
    background-color: red;
    img{
        border-radius: 0.2rem;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    .hover{
        z-index: 99;
        height: max-content;
        width: 20rem;
        position: absolute;
        top: -18
    }

`;

export default Card