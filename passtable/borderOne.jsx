import React from 'react'
export const borderOne = () => {
    return (
        <div class="container-first">

            <div class="another-container">
                <h1>Train Details</h1>
                <form>
                    <div class="form-column">
                        <label for="train-number">Train Number: 69</label>
                        
                    </div>
                    
                    <div class="form-column">
                        <label for="train-name">Train Name: Star Rail</label>
                        
                    </div>

                    <div class="form-column">
                        <label for="source">Source: Cagayan de Oro</label>
                        
                    </div>

                    <div class="form-column">
                        <label for="destination">Destination: Davao</label>
                        
                    </div>

                    <div class="form-column">
                        <label for="train-date">Train Date: February 30,2022</label>
                        
                    </div>

                    

                    <div class="form-column">
                        <label for="category">Category: Aircon</label>
                    </div>

                </form>
            </div>
            <div class="container-one">
                <div class="container-two">
                    <h1>Passengers</h1>  
                </div>
                <div class="Main-one">
                    <h2>Passenger 1</h2>
                </div>
                <div class="Main-two">
                    <label for="age">Name as in passport</label>
                    <input type="text" id="age" name="age" pattern="[0-9]+" required></input>
                </div>

                <div class="Main-three">
                    <label for="age">Age</label>
                    <input type="text" id="age" name="age" pattern="[0-9]+" required></input>
                </div>
                <div class="Maine-four">
                    <label for="gender">Sex</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="Maine-five">
                    <label for="age">Address</label>
                    <input type="text" id="age" name="age" pattern="[0-9]+" required></input>
                </div>
                <div className='Main-button-con'>
                    <button type='button'>Continue</button>
                </div>     
                        
            </div>
        </div>
    )
}
export default borderOne