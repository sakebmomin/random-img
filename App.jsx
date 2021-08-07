function App(){
  const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";
const currDate= new Date().toLocaleDateString();
  const currTime= new Date().toLocaleTimeString();
  let curDate=new Date();
  curDate = curDate.getHours();

let greeting ='';
const cssStyle ={ };

if(curDate >=1 && curDate <12){
  greeting ='GOOD MORNING';
  cssStyle.color ='green';

}else if(curDate>12 && curDate <19){
greeting ='GOOD AFTERNON';
cssStyle.color ='orange';

}else{
greeting ='GOOD EVENING';
cssStyle.color ='black';

}

return(
  <>
  <p className="p1">Current Date is- {currDate}</p>
      <p className="p2">Current Time is- {currTime}</p>
   <h1 className="heading">Hello Welcome Sir/Mam, <span style= {cssStyle}> {greeting} </span>
  </h1>
  
  <div className="img_div">
  <img src={img1} alt="randomImages"/>
  <img src={img2} alt="randomImages"/>
  <img src={img3} alt="randomImages"/>
  </div>
  </>
  
);
}

export default App;
