import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_PacketSent() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime,
    
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin
  const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg
  const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax
    const [PeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime,setPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime]=showPeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCOutboundRTPVideoStream_PacketSentTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCOutboundRTPVideoStream_PacketSentAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCOutboundRTPVideoStream_PacketSentMin[index].toFixed(2)}</td>
      </tr>)
    index++;
    })  
    
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_PacketSent</h2>
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
export default PeerConnectionsRTCOutboundRTPVideoStream_PacketSent
