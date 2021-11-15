import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"

function PeerConnectionsRTCInboundRTPAudioStream_PacketsLost() {
  const {
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax,
    showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime,

  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg
  const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax
    const [PeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime,setPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime]=showPeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCInboundRTPAudioStream_PacketsLostTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPAudioStream_PacketsLostAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPAudioStream_PacketsLostMin[index].toFixed(2)}</td>
      </tr>)
  index++;
    })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPAudioStream_PacketsLost</h2>
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
export default PeerConnectionsRTCInboundRTPAudioStream_PacketsLost
