import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_BytesReceived() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin,
    showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax,
    showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin]= showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin
  const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg]=showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax]= showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax
  const [PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime,setPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime]= showPeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime
  let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_BytesReceivedMin[index].toFixed(2)}</td>
      </tr>)
  index++;
    })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_BytesReceived</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_BytesReceived
