import React from 'react';
class Calendar extends React.Component {

    constructor(){
        super();
        this.state = {
            titleOfCalendar : "place for a event calendar",
            textColor : "white",
            backgroundColor : "black"
        }
    }
    
    render() {
        
        let  calendarCss = {
            color : this.state.textColor,
            backgroundColor : this.state.backgroundColor
        }

        return ( 
            <div className="row footer" style={calendarCss}>
                <p>{this.state.titleOfCalendar}</p>
            </div>
        );
    }
}

export default Calendar;