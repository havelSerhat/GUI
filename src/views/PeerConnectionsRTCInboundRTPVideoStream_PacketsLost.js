import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_PacketsLost() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax,
    showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime,
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax
  const [PeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime,setPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime]=showPeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCInboundRTPVideoStream_PacketsLostTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_PacketsLostAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_PacketsLostMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_PacketsLost</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_PacketsLost
