import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime,
  
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax
    const [PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime,setPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime]=showPeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime
    let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecondMin[index].toFixed(2)}</td>
    </tr>)
index++;
  })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_FramesPerSecond
