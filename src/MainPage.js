
import React,{Component} from 'react';
import $ from 'jquery';


export default class MainPage extends React.Component{

    constructor(props){
        super();
        this.state = {
            open : false,
            currentMinutes : 10,
            currentSeconds : 60,
            isPaused : false
        }
    }

    componentDidMount(){
      this.myTimer = setInterval(() => {

        if(!this.state.isPaused){
        
        if(this.state.currentSeconds == 0){
          this.setState({currentMinutes:this.state.currentMinutes-1,currentSeconds:60})
        }
        if(this.state.currentMinutes != 0){
        this.setState({currentSeconds:this.state.currentSeconds-1}) 
        }
      }
      }, 1000);
      

      /*if(this.state.currentMinutes == 0){
        console.log("zero minutes");
        clearInterval(myTimer);
      }*/
    }

    onClickSpan(){
      window.$('.collapse').collapse('hide'); 
    }

    onClickInput(){
  
        //this.setState({open:!this.state.open});
        //window.$('.collapse').collapse('hide')
        window.$('#collapseExample1').collapse('hide')
        //console.log(document.getElementById("collapseExample").collapse());
    }


    render(){
        return(
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Codingal</a>
            <span class="navbar-text">Trial Lesson Class 1-3</span>
            
            <form class="form-inline">
            <span class="navbar-text-time">{this.state.currentMinutes}:{this.state.currentSeconds}</span>
            <button class="btn btn-primary" type="button" style={{backgroundColor:"#FF5A43"}} data-toggle="modal" data-target="#exampleModal"
            onClick = {() => {
              this.setState({isPaused:true})
            }}
            >End Class</button>
  </form>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Select a reason to end class</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick = {() => {
              this.setState({isPaused:false})
            }}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <div>
      <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="inputRadio1" aria-controls="#collapseExample"
aria-expanded="true"></input>
             <span class="label-text" onClick ={this.onClickSpan}>Class Complete</span>
            </label>
            </div>
            <div>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"class="inputRadio2" data-toggle="collapse" data-target="#collapseExample"></input>
               <span class="label-text" >Class Not Complete</span>
            </label>
            </div>
            <div class="collapse in" id="collapseExample" aria-labelledby="inlineRadio1">
                <label class="radio-inline1">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="inputRadio1"></input>
                <span class="label-text" onClick ={this.onClickInput}>Student didn't show up for the class</span>
                </label>
                <label class="radio-inline1">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="inputRadio1"></input>
                <span class="label-text" onClick ={this.onClickInput}>Student didn't show any interest</span>
                </label>
                <label class="radio-inline1">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="inputRadio1"></input>
                <span class="label-text" onClick ={this.onClickInput}>Student got disconnected</span>
                </label>
                <label class="radio-inline1">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="inputRadio1"></input>
                <span class="label-text" onClick ={this.onClickInput}>I got disconnected</span>
                </label>
                <label class="radio-inline1">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" class="inputRadio1" data-toggle="collapse" data-target="#collapseExample1"></input>
                <span class="label-text">Other reason</span>
                </label>
            </div>
            <div class="collapse" id="collapseExample1">
                <div class="form-group">
                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Type here"></textarea>
                    </div>
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick = {() => {
              this.setState({isPaused:false})
            }}>Cancel</button>
        <button type="button" class="btn btn-primary" style={{backgroundColor:"#FF5A43"}}
        onClick = {() => {
          this.setState({isPaused:true,currentMinutes:0,currentSeconds:0})
          window.$('#exampleModal').modal('hide');
          clearInterval(this.myTimer);
        }}>End Class</button>
      </div>
    </div>
  </div>
</div>
</nav>
        )
    }
}