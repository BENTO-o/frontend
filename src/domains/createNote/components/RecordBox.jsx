import React, { useRef, useState } from "react";
import {
  ControlButton,
  RecordButton,
  RecorderContainer,
  RecordingItem,
  RecordingList,
} from "../../../common/common";

export const RecordBox = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // 녹음 시작 핸들러
  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/wav",
          });
          audioChunksRef.current = [];
          const audioUrl = URL.createObjectURL(audioBlob);
          setAudioUrl(audioUrl);
        };

        mediaRecorder.start();
        setIsRecording(true);
        setIsPaused(false);
      })
      .catch((error) => {
        console.error("Error accessing microphone", error);
      });
  };

  // 녹음 일시 정지 핸들러
  const handlePauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  // 녹음 재개 핸들러
  const handleResumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    }
  };

  // 녹음 정지 핸들러
  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  return (
    <RecorderContainer>
      {!isRecording && (
        <ControlButton onClick={handleStartRecording} color="#2563eb">
          녹음 시작
        </ControlButton>
      )}

      {isRecording && (
        <>
          {!isPaused ? (
            <ControlButton onClick={handlePauseRecording} color="#e67e22">
              일시 정지
            </ControlButton>
          ) : (
            <ControlButton onClick={handleResumeRecording} color="#2ecc71">
              녹음 재개
            </ControlButton>
          )}
          <ControlButton onClick={handleStopRecording} color="#e74c3c">
            녹음 정지
          </ControlButton>
        </>
      )}

      {audioUrl && (
        <div style={{ marginTop: "20px" }}>
          <audio controls src={audioUrl} />
        </div>
      )}
    </RecorderContainer>
  );
};
