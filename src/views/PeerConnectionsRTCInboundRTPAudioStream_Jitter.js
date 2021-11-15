import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPAudioStream_Jitter() {
  const {
    showPeerConnectionsRTCInboundRTPAudioStream_JitterMin,
    showPeerConnectionsRTCInboundRTPAudioStream_JitterAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_JitterMax,
    
    showPeerConnectionsRTCInboundRTPAudioStream_JitterTime,
  
  }=useContext(ContextRTC)
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  const [PeerConnectionsRTCInboundRTPAudioStream_JitterMin,setPeerConnectionsRTCInboundRTPAudioStream_JitterMin]=showPeerConnectionsRTCInboundRTPAudioStream_JitterMin
  const [PeerConnectionsRTCInboundRTPAudioStream_JitterAvg,setPeerConnectionsRTCInboundRTPAudioStream_JitterAvg]=showPeerConnectionsRTCInboundRTPAudioStream_JitterAvg
  const [PeerConnectionsRTCInboundRTPAudioStream_JitterMax,setPeerConnectionsRTCInboundRTPAudioStream_JitterMax]=showPeerConnectionsRTCInboundRTPAudioStream_JitterMax
  const [PeerConnectionsRTCInboundRTPAudioStream_JitterTime,setPeerConnectionsRTCInboundRTPAudioStream_JitterTime]=showPeerConnectionsRTCInboundRTPAudioStream_JitterTime
  PeerConnectionsRTCInboundRTPAudioStream_JitterTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_JitterMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_JitterAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_JitterMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPAudioStream_JitterMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPAudioStream_JitterAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPAudioStream_JitterMin[index].toFixed(2)}</td>
    </tr>)
index++;
  })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPAudioStream_Jitter</h2>
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
export default PeerConnectionsRTCInboundRTPAudioStream_Jitter
