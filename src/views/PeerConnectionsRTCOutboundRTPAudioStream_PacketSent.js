import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPAudioStream_PacketSent() {
  const {
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax,
    showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime
  
  }=useContext(ContextRTC)
  
  const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin
  const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg
  const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax
  const [PeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime,setPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime]=showPeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCOutboundRTPAudioStream_PacketSentTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPAudioStream_PacketSentAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPAudioStream_PacketSentMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPAudioStream_PacketSent</h2>
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
export default PeerConnectionsRTCOutboundRTPAudioStream_PacketSent
