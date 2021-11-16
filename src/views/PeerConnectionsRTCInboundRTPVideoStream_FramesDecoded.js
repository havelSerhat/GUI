import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded() {
 const{ 
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime,
    
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax
  const [PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime,setPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime]=showPeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime
  let MinArr=[]
  let AvgArr=[]
  let MaxArr=[]
  let index=0
  let strTag=[]
  PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedTime.map((data)=>{
    MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin[index].toFixed(2)})
    AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg[index].toFixed(2)})
    MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax[index].toFixed(2)})
    
    strTag.push(
    <tr>
      <td>{data}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMax[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedAvg[index].toFixed(2)}</td>
      <td>{PeerConnectionsRTCInboundRTPVideoStream_FramesDecodedMin[index].toFixed(2)}</td>
    </tr>)
index++;
  })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_FramesDecoded
