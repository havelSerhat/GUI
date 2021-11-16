import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_FrameWidth() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin]=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg]
  =showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax]=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime,setPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime]=showPeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCInboundRTPVideoStream_FrameWidthTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FrameWidthAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FrameWidthMin[index].toFixed(2)}</td>
    </tr>)
index++;
  }) 
  return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_FrameWidth</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_FrameWidth
