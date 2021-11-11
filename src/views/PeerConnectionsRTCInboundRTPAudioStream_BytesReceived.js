import React, { useState, useEffect } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { RTC_Parser } from '../JSONParser';
import { dateFormatter } from '../dateConverter';
function PeerConnectionsRTCInboundRTPAudioStream_BytesReceived() {
    const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin]=useState([])
    const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg]=useState([])
    const [PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax,setPeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax]=useState([])

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
        <h2 style={{backgroundColor:"purple",color:"white",height:"2vw"}}>PeerConnectionsRTCInboundRTPAudioStream_BytesReceived</h2>
        <div style={{ display: 'flex', textAlign: 'center', marginBottom:"3vw"}}>
        <div style={{"height" : "15vw", "width" : "15vw"}}>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMin}
          />
            <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedAvg}
          />
              <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
        
            }}
            data={PeerConnectionsRTCInboundRTPAudioStream_BytesReceivedMax}
          />
        </VictoryChart>
            <input onChange = {upload} type = 'file' multiple/>
        </div>
        </div>
    </div>
    )

}
export default PeerConnectionsRTCInboundRTPAudioStream_BytesReceived

