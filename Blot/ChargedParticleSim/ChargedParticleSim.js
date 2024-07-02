// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline
// const polyline = [
// [0,0],
//   [100,100],
//   [100,0]
// ];
const particle= 
 [
  [30,30,-8,10,0,0],
  [50,50,8,10,0,0],
   [40,40,12,3,-12,-32] ,
   [40,50,30,1,-12,-31] 
];
let maxtime=10;
let step=0.01
let drag=1.5
const points=[];
for (let i = 0;i<particle.length;i++){
  points[i]=[];
}
for( let ctime=0;ctime<maxtime;ctime+=step){
for (let i=0;i<particle.length;i++){
  let bounce=false;
  for (let j=i+1;j<particle.length;j++){
    if(i==j){
      continue;
    }
    let r=(particle[i][0]-particle[j][0])**2 +(particle[i][0]-particle[j][0])**2;
    let rsqrt=Math.sqrt(r);
    if(rsqrt<particle[i][3]+particle[j][3]){
      bounce=true;
    }
    let f=(particle[i][2]* (-particle[j][2]))/r;
    particle[i][4]-=step*f*(particle[i][0]-particle[j][0])/rsqrt/particle[i][3];
    particle[j][4]+=step*f*(particle[i][0]-particle[j][0])/rsqrt/particle[j][3];
    particle[i][5]-=step*f*(particle[i][1]-particle[j][1])/rsqrt/particle[i][3];
    particle[j][5]+=step*f*(particle[i][1]-particle[j][1])/rsqrt/particle[j][3];
    
  }
  if(bounce||particle[i][0]>=width||particle[i][0]<=0||particle[i][1]>=height||particle[i][1]<=0){
  particle[i][5]*=-0.1
  particle[i][4]*=-0.1
  }
  particle[i][5]+=(Math.random()-0.5)/particle[i][3]*0.2
  particle[i][4]+=(Math.random()-0.5)/particle[i][3]*0.2
  particle[i][4]-=drag*particle[i][4]/particle[i][3]
  particle[i][5]-=drag*particle[i][5]/particle[i][3]
  particle[i][0]+=particle[i][4]
  particle[i][1]+=particle[i][5]
  if(particle[i][0]<=0){
    particle[i][0]=0;
  }
    if(particle[i][1]<=0){
    particle[i][1]=0;
  }
    if(particle[i][0]>=width){
    particle[i][0]=width;
  }
    if(particle[i][1]>=height){
    particle[i][1]=height;
  }
  
  points[i].push([particle[i][0],particle[i][1]])
}
  
}

// add the polyline to the final lines
// finalLines.push(polyline);
for(let i=0;i<particle.length;i++){
  finalLines.push(points[i]);
}



// transform lines using the toolkit


// draw it
drawLines(finalLines);
