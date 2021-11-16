import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin
const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax
  const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime

  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight</h2>
        <div style={{ display: 'flex', textAlign: 'center', marginBottom:"3vw"}}>
        <div style={{"height" : "15vw", "width" : "20vw"}}>
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
export default PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight

