import React, { useState, useEffect } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { RTC_Parser } from '../JSONParser';
import { dateFormatter } from '../dateConverter';
function PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight() {
    const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin]=useState([])
    const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg]=useState([])
    const [PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax,setPeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax]=useState([])

    const upload = (e) => {
        
        // Convert the FileList into an array and iterate
        Array.from(e.target.files).forEach(file => {
            
            // Define a new file reader
            let reader = new FileReader();
            
            // Function to execute after loading the file
            reader.onload = () => console.log(reader.result);
            
            // Read the file as a text
            reader.readAsText(file);
            
        });
    }
    return (
    <div>
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight</h2>
        <div style={{ display: 'flex', textAlign: 'center', marginBottom:"3vw" }}>
        <div style={{"height" : "15vw", "width" : "15vw"}}>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMin}
          />
            <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightAvg}
          />
              <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={PeerConnectionsRTCOutboundRTPVideoStream_FrameHeightMax}
          />
        </VictoryChart>
            <input onChange = {upload} type = 'file' multiple/>
        </div>
        </div>
    </div>
    )

}
export default PeerConnectionsRTCOutboundRTPVideoStream_FrameHeight

