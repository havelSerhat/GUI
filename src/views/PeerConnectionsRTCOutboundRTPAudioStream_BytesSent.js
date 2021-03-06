import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPAudioStream_BytesSent() {
  const {
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax,
    showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime,
 
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin
const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg
const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax
    const [PeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime,setPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime]=showPeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCOutboundRTPAudioStream_BytesSentTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCOutboundRTPAudioStream_BytesSentAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCOutboundRTPAudioStream_BytesSentMin[index].toFixed(2)}</td>
      </tr>)
  index++;
    }) 
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPAudioStream_BytesSent</h2>
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
export default PeerConnectionsRTCOutboundRTPAudioStream_BytesSent
