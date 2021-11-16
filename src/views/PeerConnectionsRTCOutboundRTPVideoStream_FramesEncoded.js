import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime,setPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramesEncodedMin[index].toFixed(2)}</td>
    </tr>)
index++;
  })  
  return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded</h2>
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
export default PeerConnectionsRTCOutboundRTPVideoStream_FramesEncoded
