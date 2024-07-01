// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline
const polyline = [
  [30, 90],
  [100, 90],
  [100, 30],
  [30, 30],
  [30, 90]
];
const particle= 
 [
  [30,30,-8,3,0,0],
  [50,50,8,4,0,0] 
];
let maxtime=10;
let step=0.01
const points=[];
for (let i = 0;i<particle.length-1;i++){
  points[i]=[];
}
for( let ctime=0;ctime<maxtime;ctime+=step){
for (let i=0;i<particle.length-1;i++){
  
  for (let j=i+1;j<particle.length;j++){
    if(i==j){
      continue;
    }
    let r=(particle[i][0]-particle[j][0])**2 +(particle[i][0]-particle[j][0])**2;
    let rsqrt=Math.sqrt(r);
    let f=(particle[i][2]* (-particle[j][2]))/r;
    particle[i][4]+=step*f*(particle[i][0]-particle[j][0])/rsqrt;
    particle[j][4]-=step*f*(particle[i][0]-particle[j][0])/rsqrt;
    particle[i][5]+=step*f*(particle[i][1]-particle[j][1])/rsqrt;
    particle[j][5]-=step*f*(particle[i][1]-particle[j][1])/rsqrt;
    
  }
  particle[i][0]+=particle[i][4]
  particle[i][1]+=particle[i][5]
  points[i].push([particle[i][0],particle[i][1]])
}
  
}

// add the polyline to the final lines
finalLines.push(points[0]);

// transform lines using the toolkit
bt.rotate(finalLines, 45);

// draw it
drawLines(finalLines);
