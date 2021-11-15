import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime,setPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_PacketsReceivedMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_PacketsReceived
