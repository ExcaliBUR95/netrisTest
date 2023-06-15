import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import VideoPlayer from "./VideoPlayer";
import "@testing-library/jest-dom";

Object.defineProperty(global.window.HTMLMediaElement.prototype, "pause", {
  configurable: true,
  value: jest.fn(),
});

Object.defineProperty(global.window.HTMLMediaElement.prototype, "play", {
  configurable: true,
  get() {
    return () => {};
  },
});

describe("VideoPlayer", () => {
  const events = [
    {
      timestamp: 0,
      endTime: 5000,
      x: 10,
      y: 10,
      width: 100,
      height: 100,
    },
    {
      timestamp: 6000,
      endTime: 8000,
      x: 50,
      y: 50,
      width: 150,
      height: 150,
    },
  ];

  it("отображает компонент видеоплеера", async () => {
    render(<VideoPlayer events={events} />);
    await waitFor(() => {
      const videoPlayer = screen.getByTestId("video-player");
      expect(videoPlayer).toBeInTheDocument();
    });
  });

  it("воспроизводит/приостанавливает видео при клике", () => {
    render(<VideoPlayer events={events} />);
    const videoPlayer = screen.getByTestId("video-player") as HTMLVideoElement;
    videoPlayer.pause();
    fireEvent.click(videoPlayer);
    console.log(videoPlayer.paused);
    expect(videoPlayer.paused).toBe(true);
    fireEvent.click(videoPlayer);
    expect(videoPlayer.paused).toBe(true);
  });

  it("переходит к метке времени события при клике на событие", () => {
    render(<VideoPlayer events={events} />);
    const eventItem = screen.getByText("00:00.000");
    fireEvent.click(eventItem);
    const videoPlayer = screen.getByTestId("video-player") as HTMLVideoElement;
    expect(videoPlayer.currentTime).toBe(0);
  });
});
