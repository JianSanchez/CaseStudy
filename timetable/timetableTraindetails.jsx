import React from 'react'
export const timetableDetails = () => {
    return (
        <div class="timetable-container">
            <div class="timetable-container-one">
                <form>
                    <div class="form-column">
                        <label for="train-number">Train Number: </label>
                        
                        
                    </div>
                    
                    <div class="form-column">
                        <label for="train-name">Train Name: </label>
                        
                        
                    </div>

                    <div class="form-column">
                        <label for="source">Source: </label>
                        
                        
                    </div>

                    <div class="form-column">
                        <label for="destination">Destination: </label>
                        
                        
                    </div>

                    <div class="form-column">
                        <label for="train-date">Train Date: </label>
                        
                        
                    </div>

                    

                    <div class="form-column">
                        <label for="category">Category: </label>
                        <select id="category">
                            <option value="aircon">Aircon</option>
                            <option value="nonaircon">General</option>
                        </select>
                    </div>

                    <div class="form-column">
                        <label for="train-date">Aircon Fare: </label>
                        
                        
                    </div>

                    <div class="form-column">
                        <label for="train-date">General Fare: </label>
                        
                        
                    </div>

                    <div class="form-column">
                        <input type="submit" value="Book Ticket"></input>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default timetableDetails