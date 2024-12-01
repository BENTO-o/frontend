import React, { useEffect, useRef, useState } from "react";
import {
  AudioVisualizer,
  ControlButton,
  ControlButtonsContainer,
  CustomIcon,
  RecordButton,
  RecorderContainer,
  RecorderControlButton,
  RecordingItem,
  RecordingList,
  TimeDisplay,
} from "../../../common/common";
import Icon_Bookmark from "../../../assets/Bookmark.svg";
import ColorIcon_Bookmark from "../../../assets/Bookmark_yellow.svg";
import Icon_Mic from "../../../assets/Mic_black.svg";
import Icon_Pause from "../../../assets/PlayerPause.svg";
import Icon_Stop from "../../../assets/PlayerStop.svg";
import Icon_SoundWave from "../../../assets/SoundWave.svg";
import Icon_Player from "../../../assets/PlayerPlay.svg";
import { useCreateNoteFormStore } from "../../../stores/useCreateNoteForm";

export const RecordBox = () => {
  const { form, setFormField, resetForm } = useCreateNoteFormStore(); // zustand 훅 사용하여 form 상태 가져오기
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [time, setTime] = useState("00:00");
  const [seconds, setSeconds] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    setTime(
      `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    );
  }, [seconds]);

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

          setAudioFile(new File([audioBlob], "recording.wav", {
            type: "audio/wav",
            lastModified: Date.now(),
          }))
          console.log("Audio File:", audioFile);
        };

        mediaRecorder.start();
        setIsRecording(true);
        setIsPaused(false);
        timerRef.current = setInterval(() => {
          setSeconds((prev) => prev + 1);
        }, 1000);
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
      clearInterval(timerRef.current);
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
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  // 녹음 정지 핸들러
  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (!isRecording) {
      setSeconds(0);
    }
  }, [isRecording]);

  useEffect(() => {
    setFormField("file", audioFile);
  }, [audioFile]);

  return (
    <RecorderContainer>
      <CustomIcon src={Icon_Mic} />
      <TimeDisplay>{time}</TimeDisplay>
      {isRecording && (<CustomIcon src={Icon_SoundWave} />)}
      <ControlButtonsContainer>
        {isRecording && !isPaused && (
          <RecorderControlButton
            src={Icon_Pause}
            alt="Pause Icon"
            onClick={handlePauseRecording}
          />
        )}
        {(!isRecording || isPaused) && (
          <RecorderControlButton
            src={Icon_Player}
            alt="Resume Icon"
            onClick={
              !isRecording ? handleStartRecording : handleResumeRecording
            }
          />
        )}
        {isRecording && (
          <RecorderControlButton
            src={Icon_Stop}
            alt="Stop Icon"
            onClick={handleStopRecording}
          />
        )}
        {(isRecording || isPaused) && (
          <RecorderControlButton src={Icon_Bookmark} alt="Bookmark Icon" />
        )}
      </ControlButtonsContainer>
    </RecorderContainer>
  );
};
