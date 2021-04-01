import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'



export const AboutPageTemplate = () => {
  

  return (
    <section className="blue-background">   
      <div > 
     <div className="title" >
     <h1 >About Me</h1>
     </div> 
     <div className="row">



     <div className=" responsive-half">
  
     <ul className="about-list">
       <li>
       I am a web developer from Palm Bay, Florida. 
       </li>
       <li>
       I specialize in making Jamstack web applications with Gatsby and React.
       </li>
       <li>Right now, I am learning the backend so I can build full-stack MERN applications.</li>
     <li>I was a middle school special education teacher for 10 years.</li>
     <li>My web development business is named Formal Flamingo.</li>
     <li>I also make graphic-designed logos, portraits, animations, and pictures of my father-in-law.</li>
    <li>I sell art. Want Some?</li>
    <li>I sell Christmas Earrings. Want Some? </li>
    <li>I raise and release moths and butterflies I find in my garden. Check it out.</li>
    <li>I do not eat onions.</li>
    <li>50% of my liked songs on Spotify are by Young Dolph. </li>
    <li>I have 6 cats. Siruis Black, Hufflepuffy, Snape, Luna, Bellatrix, and Baby. </li>
    <li>I like Harry Potter. </li>
    <li>I love Tom Brady. </li>
     </ul>
     </div>


     <div className="responsive-half" style={{textAlign: "center"}}>
     <svg width="60%" viewBox="0 0 96 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Component 3">
            <path id="Vector 12" d="M95 130.069L82 48.569L79 29.069L76 23.069L12.5 30.569L3.5 95.069L1 117.069V125.069L10 119.069L7 125.069L14.5 122.569V128.569L24.5 123.569V130.069L31 125.069V132.069L35.5 125.069L40 134.069L50 125.069L52.5 128.569L60 126.569L62.5 130.069L66.5 126.569L69 130.069L73.5 126.569L76 130.069L82 125.069L85.5 128.569L87 123.569L95 130.069Z" fill="#A37043" stroke="black"/>
            <path id="Vector 1" d="M70.0544 10.7545C50.3468 0.46434 39.2976 1.91048 19.59 10.7545C10.6624 31.9202 9.76581 45.9831 13.7844 74.0686C36.5773 113.281 50.2122 112.681 75.86 76.5612C80.9954 50.8039 82.0245 36.3774 70.0544 10.7545Z" fill="#DFC2A7" stroke="black"/>
            <g id="Vector 6" filter="url(#filter0_d)">
            <path d="M38.5841 70.1993C27.6071 68.0443 18.5788 63.5275 15.4617 39.4598L13.683 26.569C8.34705 51.3589 13.4186 78.896 22.1316 102.922C37.7606 135.236 47.3711 144.07 69.7106 102.922C81.5396 77.6995 79.8934 51.0224 78.6038 26.569L75.9358 39.4598C76.8231 60.8527 72.102 66.715 55.926 70.1993L47.5 76.569L38.5841 70.1993Z" fill="#A37043"/>
            <path d="M38.5841 70.1993C27.6071 68.0443 18.5788 63.5275 15.4617 39.4598L13.683 26.569C8.34705 51.3589 13.4186 78.896 22.1316 102.922C37.7606 135.236 47.3711 144.07 69.7106 102.922C81.5396 77.6995 79.8934 51.0224 78.6038 26.569L75.9358 39.4598C76.8231 60.8527 72.102 66.715 55.926 70.1993L47.5 76.569L38.5841 70.1993Z" stroke="black"/>
            </g>
            <path id="Vector 7" d="M79.5 30.569C54.8889 16.8193 40.5487 15.511 13.5 30.569C12.9843 19.8624 14.7743 15.4061 20.7828 9.55239C44.2438 -3.18758 55.5 -0.431023 72.6724 9.55239C89.8448 19.5358 79.1598 22.3951 79.5 30.569Z" fill="#59035A" stroke="black"/>
            <g id="Component 2">
            <path id="rightEye" d="M51.5 43.7482C56.5768 40.4633 59.4232 38.651 64.5 43.7482C59.4232 46.7734 56.5768 47.0258 51.5 43.7482Z" fill="white" stroke="black"/>
            <path id="leftEye" d="M29.5 42.7482C34.5768 39.4633 37.4232 37.651 42.5 42.7482C37.4232 45.7734 34.5768 46.0258 29.5 42.7482Z" fill="white" stroke="black"/>
            <path id="Vector 11" d="M39 68.069C46.8183 74.7768 50.0338 74.0995 54.5 68.069H39Z" fill="black" stroke="black"/>
            <path id="Vector 5" d="M46.5 63.0369C35.4667 60.052 30.9981 61.4907 25.5 68.5369C33.557 69.8333 38.0828 70.4827 46.5 68.5369C51.9624 70.73 56.3176 71.1342 68.5 69.0369C64.1446 61.8279 58.5852 61.3671 46.5 63.0369Z" fill="#A37043" stroke="black"/>
            <g id="g115">
            <path id="circle117" d="M55.9461 4.81619C56.2906 4.81619 56.5697 4.53699 56.5697 4.19258C56.5697 3.84817 56.2906 3.56898 55.9461 3.56898C55.6017 3.56898 55.3225 3.84817 55.3225 4.19258C55.3225 4.53699 55.6017 4.81619 55.9461 4.81619Z" fill="black" fill-opacity="0.5"/>
            <path id="circle119" d="M53.9506 5.39822C54.295 5.39822 54.5742 5.11902 54.5742 4.77461C54.5742 4.43021 54.295 4.15101 53.9506 4.15101C53.6062 4.15101 53.327 4.43021 53.327 4.77461C53.327 5.11902 53.6062 5.39822 53.9506 5.39822Z" fill="black" fill-opacity="0.5"/>
            <path id="circle121" d="M52.2877 6.72858C52.6321 6.72858 52.9113 6.44938 52.9113 6.10497C52.9113 5.76057 52.6321 5.48137 52.2877 5.48137C51.9433 5.48137 51.6641 5.76057 51.6641 6.10497C51.6641 6.44938 51.9433 6.72858 52.2877 6.72858Z" fill="black" fill-opacity="0.5"/>
            <path id="circle123" d="M58.108 4.98248C58.4524 4.98248 58.7316 4.70328 58.7316 4.35888C58.7316 4.01447 58.4524 3.73527 58.108 3.73527C57.7636 3.73527 57.4844 4.01447 57.4844 4.35888C57.4844 4.70328 57.7636 4.98248 58.108 4.98248Z" fill="black" fill-opacity="0.5"/>
            <path id="circle125" d="M50.9157 7.80949C51.1453 7.80949 51.3315 7.62336 51.3315 7.39375C51.3315 7.16415 51.1453 6.97802 50.9157 6.97802C50.6861 6.97802 50.5 7.16415 50.5 7.39375C50.5 7.62336 50.6861 7.80949 50.9157 7.80949Z" fill="black" fill-opacity="0.5"/>
            <path id="circle127" d="M59.7293 5.98025C59.9589 5.98025 60.1451 5.79411 60.1451 5.56451C60.1451 5.3349 59.9589 5.14877 59.7293 5.14877C59.4997 5.14877 59.3136 5.3349 59.3136 5.56451C59.3136 5.79411 59.4997 5.98025 59.7293 5.98025Z" fill="black" fill-opacity="0.5"/>
            </g>
            <g id="g15">
            <path id="path17" fill-rule="evenodd" clip-rule="evenodd" d="M59.8132 13.4212C58.9917 14.4713 57.5026 17.3291 59.4831 18.8607C60.9233 19.9749 62.5105 19.0112 63.1707 18.1656C64.9451 15.8907 61.5818 13.3339 63.8309 10.457C63.9839 10.2608 64.457 9.79098 64.842 9.56898C63.8492 9.62053 60.737 12.2397 59.8132 13.4212Z" fill="black" fill-opacity="0.5"/>
            <path id="path19" fill-rule="evenodd" clip-rule="evenodd" d="M60.5075 14.7091C59.8415 15.5605 59.198 17.0621 60.1841 17.8288C60.9041 18.3892 61.6882 18.0557 62.0956 17.5344C62.6045 16.8825 62.3351 14.67 61.6824 14.1536C61.2243 13.7919 60.5591 14.6434 60.5075 14.7091Z" fill="white" fill-opacity="0.2"/>
            </g>
            <g id="g79">
            <path id="path81" fill-rule="evenodd" clip-rule="evenodd" d="M50.1017 13.9679C52.271 13.9288 59.8831 13.1315 59.81 8.59079C59.7792 6.68838 58.024 5.55009 56.4491 5.56921C55.7016 5.57836 55.0415 5.83612 54.4661 6.2585C52.7374 7.44502 52.7749 9.52204 52.0515 11.0287C51.087 13.0375 49.0083 13.6553 47.5 13.6827C48.3414 13.834 49.9345 13.9712 50.1017 13.9679Z" fill="black" fill-opacity="0.5"/>
            <path id="path83" fill-rule="evenodd" clip-rule="evenodd" d="M51.5925 13.2777C52.9254 13.2536 58.8746 11.9931 58.823 8.85262C58.8014 7.52891 57.7122 6.7149 56.5514 6.72987C53.7252 6.76645 54.4445 9.74645 53.3951 11.5873C52.7499 12.7597 51.5077 13.1962 50.5889 13.212C50.9232 13.2062 51.3422 13.282 51.5925 13.2777Z" fill="white" fill-opacity="0.2"/>
            <path id="path85" fill-rule="evenodd" clip-rule="evenodd" d="M56.1124 10.9828C57.1152 10.5679 58.3956 9.59429 57.9275 8.46016C57.5858 7.63284 56.7526 7.5206 56.1432 7.75757C55.3732 8.05607 54.4786 10.109 54.7929 10.8889C55.014 11.4369 56.0342 11.0145 56.1124 10.9828Z" fill="black" fill-opacity="0.5"/>
            </g>
            <g id="g3">
            <path id="path5" fill-rule="evenodd" clip-rule="evenodd" d="M71.0709 14.0589C71.0709 12.7286 70.4888 9.56898 67.9944 9.56898C66.1652 9.56898 65.5 11.3151 65.5 12.396C65.5 15.3061 69.7405 15.223 69.7405 18.8815C69.7405 19.1309 69.6574 19.7961 69.4911 20.2118C70.2394 19.5467 71.0709 15.5556 71.0709 14.0589Z" fill="black" fill-opacity="0.5"/>
            <path id="path7" fill-rule="evenodd" clip-rule="evenodd" d="M69.7405 13.4769C69.7405 12.396 69.3248 10.8162 68.0776 10.8162C67.1629 10.8162 66.7472 11.5645 66.7472 12.2297C66.7472 13.0612 68.327 14.641 69.1585 14.641C69.7405 14.641 69.7405 13.5601 69.7405 13.4769Z" fill="white" fill-opacity="0.2"/>
            </g>
            <g id="g71">
            <path id="path73" fill-rule="evenodd" clip-rule="evenodd" d="M70.7964 23.9037C71.2831 22.058 73.591 15.6312 77.5226 16.6849C79.1691 17.1259 79.7634 18.9036 79.3948 20.2655C79.22 20.9092 78.8513 21.4239 78.3595 21.8273C76.9585 23.055 75.18 22.5757 73.7296 22.8706C71.8007 23.2629 70.8362 24.9006 70.5 26.1725C70.5457 25.4278 70.7588 24.0452 70.7964 23.9037Z" fill="black" fill-opacity="0.5"/>
            <path id="path75" fill-rule="evenodd" clip-rule="evenodd" d="M71.7004 22.7799C72.0013 21.6422 74.3623 16.7616 77.0765 17.4901C78.2209 17.7968 78.6847 18.9221 78.4141 19.9256C77.7586 22.3537 75.3474 21.0928 73.535 21.5979C72.3898 21.8995 71.7528 22.8699 71.5463 23.6507C71.6208 23.3669 71.6444 22.993 71.7004 22.7799Z" fill="white" fill-opacity="0.2"/>
            <path id="path77" fill-rule="evenodd" clip-rule="evenodd" d="M74.6403 19.3844C75.2161 18.6043 76.3391 17.7017 77.2195 18.3558C77.8618 18.8321 77.774 19.5798 77.4356 20.0561C77.0079 20.6571 75.0421 20.9852 74.4368 20.545C74.012 20.236 74.596 19.4448 74.6403 19.3844Z" fill="black" fill-opacity="0.5"/>
            </g>
            <g id="g115_2">
            <path id="circle117_2" d="M44.4348 13.6995C44.2127 13.9627 44.2461 14.3561 44.5093 14.5783C44.7725 14.8004 45.1659 14.767 45.3881 14.5038C45.6102 14.2406 45.5768 13.8471 45.3136 13.625C45.0504 13.4029 44.6569 13.4363 44.4348 13.6995Z" fill="black" fill-opacity="0.5"/>
            <path id="circle119_2" d="M45.2769 11.799C45.0548 12.0622 45.0881 12.4557 45.3513 12.6778C45.6146 12.8999 46.008 12.8665 46.2301 12.6033C46.4522 12.3401 46.4189 11.9466 46.1556 11.7245C45.8924 11.5024 45.499 11.5358 45.2769 11.799Z" fill="black" fill-opacity="0.5"/>
            <path id="circle121_2" d="M45.3325 9.67011C45.1104 9.93333 45.1437 10.3268 45.407 10.5489C45.6702 10.771 46.0636 10.7376 46.2857 10.4744C46.5078 10.2112 46.4745 9.81775 46.2113 9.59565C45.948 9.37354 45.5546 9.40688 45.3325 9.67011Z" fill="black" fill-opacity="0.5"/>
            <path id="circle123_2" d="M42.9136 15.2445C42.6915 15.5077 42.7249 15.9012 42.9881 16.1233C43.2513 16.3454 43.6447 16.312 43.8668 16.0488C44.0889 15.7856 44.0556 15.3921 43.7924 15.17C43.5291 14.9479 43.1357 14.9813 42.9136 15.2445Z" fill="black" fill-opacity="0.5"/>
            <path id="circle125_2" d="M45.3911 7.92451C45.243 8.09999 45.2652 8.36228 45.4407 8.51035C45.6162 8.65841 45.8785 8.63619 46.0266 8.4607C46.1746 8.28522 46.1524 8.02293 45.9769 7.87486C45.8014 7.7268 45.5392 7.74902 45.3911 7.92451Z" fill="black" fill-opacity="0.5"/>
            <path id="circle127_2" d="M41.1055 15.8403C40.9574 16.0157 40.9796 16.278 41.1551 16.4261C41.3306 16.5742 41.5929 16.5519 41.7409 16.3765C41.889 16.201 41.8668 15.9387 41.6913 15.7906C41.5158 15.6425 41.2535 15.6648 41.1055 15.8403Z" fill="black" fill-opacity="0.5"/>
            </g>
            <g id="g15_2">
            <path id="path17_2" fill-rule="evenodd" clip-rule="evenodd" d="M35.3643 11.1059C35.0915 9.80079 33.8677 6.81973 31.4199 7.34577C29.6396 7.72792 29.3526 9.56251 29.5731 10.6124C30.1675 13.4356 34.2906 12.5138 35.0389 16.0881C35.0902 16.3315 35.1442 16.9961 35.0656 17.4335C35.6664 16.6415 35.6716 12.5738 35.3643 11.1059Z" fill="black" fill-opacity="0.5"/>
            <path id="path19_2" fill-rule="evenodd" clip-rule="evenodd" d="M33.9323 10.806C33.7111 9.7479 32.9784 8.28766 31.7566 8.54696C30.8639 8.73589 30.6131 9.55017 30.7488 10.1978C30.9189 11.007 32.7836 12.228 33.5992 12.0621C34.1711 11.9452 33.9493 10.8877 33.9323 10.806Z" fill="white" fill-opacity="0.2"/>
            </g>
            <g id="g79_2">
            <path id="path81_2" fill-rule="evenodd" clip-rule="evenodd" d="M41.2093 3.33089C39.8402 5.01407 35.5407 11.3461 39.0583 14.2184C40.5321 15.4217 42.534 14.8143 43.5349 13.5983C44.01 13.0211 44.2387 12.3503 44.287 11.6382C44.4949 9.55185 42.8833 8.24103 42.1983 6.71656C41.285 4.68395 42.1533 2.69684 43.105 1.52638C42.4468 2.07196 41.3145 3.20102 41.2093 3.33089Z" fill="black" fill-opacity="0.5"/>
            <path id="path83_2" fill-rule="evenodd" clip-rule="evenodd" d="M40.7754 4.91542C39.9343 5.94964 37.0612 11.3094 39.4946 13.2952C40.5203 14.1323 41.8448 13.8248 42.5819 12.928C44.3765 10.7444 41.6351 9.37236 40.9048 7.38323C40.4249 6.13406 40.8923 4.90314 41.4728 4.19075C41.2617 4.44996 40.9335 4.7214 40.7754 4.91542Z" fill="white" fill-opacity="0.2"/>
            <path id="path85_2" fill-rule="evenodd" clip-rule="evenodd" d="M39.6145 9.84981C39.285 10.8838 39.2034 12.4903 40.3721 12.8639C41.2247 13.1362 41.8478 12.5719 42.0597 11.9532C42.3281 11.1723 41.336 9.16463 40.5373 8.90189C39.9758 8.71751 39.6407 9.76964 39.6145 9.84981Z" fill="black" fill-opacity="0.5"/>
            </g>
            <g id="g3_2">
            <path id="path5_2" fill-rule="evenodd" clip-rule="evenodd" d="M27.6171 19.2986C28.6339 20.1566 31.4241 21.7493 33.0327 19.8428C34.2123 18.4448 33.3068 16.8104 32.4806 16.1133C30.2564 14.2366 27.5854 17.5312 24.7892 15.1719C24.5986 15.0111 24.1438 14.5186 23.9333 14.1234C23.9591 15.1243 26.4733 18.3335 27.6171 19.2986Z" fill="black" fill-opacity="0.5"/>
            <path id="path7_2" fill-rule="evenodd" clip-rule="evenodd" d="M28.9199 18.6572C29.746 19.3543 31.2215 20.0553 32.0258 19.1021C32.6156 18.4031 32.3118 17.6027 31.8034 17.1738C31.1679 16.6376 28.9417 16.8262 28.4055 17.4617C28.0302 17.9065 28.8563 18.6036 28.9199 18.6572Z" fill="white" fill-opacity="0.2"/>
            </g>
            <g id="g71_2">
            <path id="path73_2" fill-rule="evenodd" clip-rule="evenodd" d="M20.2699 12.7402C21.3667 14.3024 24.7903 20.2108 21.4495 22.5362C20.0507 23.5102 18.3088 22.818 17.5056 21.658C17.1263 21.1093 16.9707 20.4956 16.9796 19.8596C16.9448 17.9972 18.458 16.9469 19.1679 15.6482C20.112 13.921 19.4823 12.1278 18.727 11.0506C19.2668 11.5658 20.186 12.6202 20.2699 12.7402Z" fill="black" fill-opacity="0.5"/>
            <path id="path75_2" fill-rule="evenodd" clip-rule="evenodd" d="M20.5458 14.1558C21.2214 15.1195 23.429 20.0713 21.1218 21.676C20.1494 22.3528 18.9903 21.9816 18.3979 21.1277C16.9648 19.0608 19.4834 18.0311 20.2661 16.3202C20.7741 15.2505 20.4433 14.1378 19.9797 13.4765C20.1485 13.7164 20.4191 13.9756 20.5458 14.1558Z" fill="white" fill-opacity="0.2"/>
            <path id="path77_2" fill-rule="evenodd" clip-rule="evenodd" d="M21.2451 18.5924C21.47 19.5356 21.4356 20.976 20.368 21.2271C19.5898 21.4107 19.0749 20.8615 18.9291 20.2957C18.7456 19.5813 19.7625 17.8672 20.4893 17.6884C20.9994 17.5631 21.2275 18.5196 21.2451 18.5924Z" fill="black" fill-opacity="0.5"/>
            </g>
            <path id="Vector 9" d="M39.8142 33.5995C33.9508 34.6697 30.8307 35.7707 25.6475 38.8779L25.2145 37.0419C29.6065 32.3849 32.7183 31.2511 39.3813 31.7635L39.8142 33.5995Z" fill="#A37043" stroke="black"/>
            <path id="Vector 10" d="M65.5125 36.206C59.8086 34.4764 56.5305 34.0287 50.5 34.4216L50.9546 32.5908C56.9901 30.4578 60.2759 30.8726 65.9671 34.3753L65.5125 36.206Z" fill="#A37043" stroke="black"/>
            <g id="Component 1">
            <path id="Ellipse 1" d="M46.5 57.569C44.2909 57.569 44 59.069 42.5 61.069C42.6493 64.92 43.321 64.7575 45 62.569H49.5C51.7665 65.6413 52.5 63.069 51 61.069C51 59.136 48.7091 57.569 46.5 57.569Z" fill="#DFC2A7"/>
            <path id="Vector 4" d="M45.5 43.569C43.3913 50.6098 43.0219 54.1847 44.5271 59.569C41.8988 61.8349 41 63.569 44.5271 64.569C44.8076 59.7217 45.5 63.569 46.5 63.069H48C48.5 61.569 48.3676 61.0628 50.5 64.569C53 64.569 52.9609 62.129 50.5 60.569" stroke="black" stroke-width="1.29919"/>
            </g>
            <circle class="ellipse2" id="Ellipse2" cx="36" cy="42.069" r="1.5" fill="#050000"/>
            <circle id="Ellipse3" cx="58" cy="43.069" r="1.5" fill="#050000"/>
            </g>
            <circle id="Ellipse 4" cx="66.5" cy="45.5" r="0.5" fill="#59035A"/>
            </g>
            <defs>
            <filter id="filter0_d" x="6.99998" y="26.4638" width="77.0005" height="112.606" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
     </div>
     
     </div> 
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,

}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        
        title={post.frontmatter.title}
       
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
