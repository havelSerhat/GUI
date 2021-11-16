import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPAudioStream_BytesReceived(props) {
  const {showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin,
    showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax,
    showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime,
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin
  const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg
  const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax
  const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime]=showPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin[index].toFixed(2)}</td>
    </tr>)
index++;
  })

  
  return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPAudioStream_BytesReceived</h2>
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
export default PeerConnectionsRTCInboundRTPAudioStream_BytesReceived

