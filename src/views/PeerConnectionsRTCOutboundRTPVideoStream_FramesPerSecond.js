import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime,setPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecondMin[index].toFixed(2)}</td>
    </tr>)
index++;
  })  
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond</h2>
        <div style={{ display: 'flex', textAlign: 'center', marginBottom:"3vw"}}>
        <div style={{"height" : "15vw", "width" : "15vw",marginLeft:"3vw"}}>
        <VictoryChart
          theme={VictoryTheme.material}
 
        >
          <VictoryLine
            style={{
              data: { stroke: "red" },
              parent: { border: "1px solid #ccc"},
              
        
            }}
            
            data={MinArr}
          />
            <VictoryLine
            style={{
              data: { stroke: "green" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={AvgArr}
          />
              <VictoryLine
            style={{
              data: { stroke: "black" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={MaxArr}
          />
        </VictoryChart>

        </div>
        <div>                
          <table>
            <tr>
              <th>Time</th>
              <th>Max</th>
              <th>Avg</th>
              <th>Min</th>
            </tr> 
            {strTag.map((data)=>{return data})}    
          </table>
        </div>
        </div>
    </div>
    )

}
export default PeerConnectionsRTCOutboundRTPVideoStream_FramesPerSecond
