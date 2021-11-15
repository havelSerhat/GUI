import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_BytesSent() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime,

  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin
  const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg
  const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax
  const [PeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime,setPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime]=showPeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCOutboundRTPVideoStream_BytesSentTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_BytesSentAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_BytesSentMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_BytesSent</h2>
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
export default PeerConnectionsRTCOutboundRTPVideoStream_BytesSent
