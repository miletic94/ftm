import React, { useState, useRef, useEffect } from 'react'
import "./Action.css"

export default function Action() {
    // const [align, setAlign] = useState("alignLeft")
    // function changeAlignment() {
        
    //     setAlign(prevAlign => {
    //         if(prevAlign==="alignLeft") {
    //             return "alignRight"
    //         }
    //         return "alignLeft"
    //     })
    // }
    const actionStyle = useRef()
    const bookingStyle = useRef()
    const actionButtonContainer = useRef()
    const actionButton = useRef()

    const [displayAction, setDisplayAction] = useState(true) 
    console.log()
    function changeDisplay() {
        setDisplayAction(prevDisplayAction => {
            if(prevDisplayAction) {
                actionStyle.current.style.display="none"
                bookingStyle.current.style.display="flex"
                actionButton.current.style.animation = "move-left 3s forwards"
                return false
            }
            actionStyle.current.style.display="flex"
            bookingStyle.current.style.display="none"
            actionButton.current.style.animation = "move-right 3s forwards"
            return true
        })
    }
    return (
        <>
            <div ref={actionStyle} class="action" >
                <div class="sectionHalf">
                    <h1>Feel The Music</h1>
                    <h4>Create the magic while recording with us</h4>
                </div>
            </div>

            <div class="booking" ref={bookingStyle}>
                <div class="sectinHalf">
                    <h3>Book Now</h3>
                    <h4>Check our schedule an find the best time</h4>
                    <form>
                    
                        <label for="eamil">E-mail</label> 
                        <input id="email" type="email" />
                        <label for="data">Date</label>
                        <input id="date" type="date" placeholder="dd-mm-yyyy"/>
                    </form>
                </div>
            </div>
            
            <div class="buttonContainer sectionHalf" ref={actionButtonContainer}>
                <button class="btn actionButton" ref={actionButton} onClick={changeDisplay}>Book now</button>
            </div>

        </>        
    )
}
