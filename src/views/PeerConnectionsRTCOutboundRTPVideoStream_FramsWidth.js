import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth() {
  const {
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax,
    showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime,
  
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin
const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg
const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax
const [PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime,setPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime]=showPeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime
let MinArr=[]
let AvgArr=[]
let MaxArr=[]
let index=0
let strTag=[]
PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthTime.map((data)=>{
  MinArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin[index].toFixed(2)})
  AvgArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg[index].toFixed(2)})
  MaxArr.push({x:data,y:PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax[index].toFixed(2)})
  
  strTag.push(
  <tr>
    <td>{data}</td>
    <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMax[index].toFixed(2)}</td>
    <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthAvg[index].toFixed(2)}</td>
    <td>{PeerConnectionsRTCOutboundRTPVideoStream_FramsWidthMin[index].toFixed(2)}</td>
  </tr>)
index++;
})  
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth</h2>
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
export default PeerConnectionsRTCOutboundRTPVideoStream_FramsWidth

