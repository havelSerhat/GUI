import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"

function PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived() {
  const {
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime,

  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax
    const [PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime,setPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPAudioStream_PacketsReceivedMin[index].toFixed(2)}</td>
      </tr>)
  index++;
    })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived</h2>
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
export default PeerConnectionsRTCInboundRTPAudioStream_PacketsReceived
