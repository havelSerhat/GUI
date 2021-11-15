import React, { useState, useEffect,useContext } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import {ContextRTC} from "../config/contextAPI"
function PeerConnectionsRTCInboundRTPVideoStream_FrameHeight() {
  const {
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax,
    showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime,
    
  }=useContext(ContextRTC)
  const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin
const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg
const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax
    const [PeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime,setPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime]=showPeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime
    let MinArr=[]
    let AvgArr=[]
    let MaxArr=[]
    let index=0
    let strTag=[]
    PeerConnectionsRTCInboundRTPVideoStream_FrameHeightTime.map((data)=>{
      MinArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin[index].toFixed(2)})
      AvgArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg[index].toFixed(2)})
      MaxArr.push({x:data,y:PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax[index].toFixed(2)})
      
      strTag.push(
      <tr>
        <td>{data}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMax[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_FrameHeightAvg[index].toFixed(2)}</td>
        <td>{PeerConnectionsRTCInboundRTPVideoStream_FrameHeightMin[index].toFixed(2)}</td>
      </tr>)
  index++;
    })
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPVideoStream_FrameHeight</h2>
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
export default PeerConnectionsRTCInboundRTPVideoStream_FrameHeight

