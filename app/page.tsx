"use client";
import React, { useState, useRef } from "react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Confetti from "@/components/confetti";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Home() {
    const [showConfetti, setShowConfetti] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleButtonClick = () => {
        setShowConfetti(true);
        audioRef.current?.play();
        setTimeout(() => {
            setShowConfetti(false);
        }, 5000);
    };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
        {showConfetti && <Confetti trigger={showConfetti} />}
      <Image
          src="/nerd.png"
          alt="Nerd Cat"
          width={250}
            height={250}
          className="absolute top-0 left-0 w-[20%] md:w-[28%] max-w-[230px]"
      />
      <Image
          src="/finger.png"
          alt="Nerd Cat"
          width={250}
          height={250}
          className="absolute top-0 right-0 w-[25%] md:w-[28%] max-w-[290px]"
      />
      <main className="h-3/4 w-3/4 flex flex-col items-center justify-evenly md:justify-center p-5">
          <div className="flex flex-col items-center">
              <h1 className="font-cherry text-6xl text-[#ff7fbc] text-shadow-black">Happy!</h1>
              <h2 className="font-cherry text-6xl text-[#fcf780] text-shadow-black">Happy!</h2>
              <h2 className="font-dyna font-bold text-8xl text-[#7cccfd] text-shadow-black">CUM</h2>
          </div>
          <Image
              src="/silly.png"
              width={250}
              height={250}
              alt="Silly Cat"
              className="w-full max-w-[300px] sm:w-2/3 md:w-3/4 md:max-w-[350px]"
          />
          <AlertDialog>
              <AlertDialogTrigger asChild>
                  <Button
                      onClick={handleButtonClick}
                      className="shadow-md hover:bg-secondary transition-all"
                  >
                      <p className="text-black text-xl font-bold font-dyna ">CUM 🎉</p>
                      <audio ref={audioRef} src="/song.mp3" />
                  </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                  <AlertDialogHeader>
                      <AlertDialogTitle>
                          <Image
                            src="/Banner.png"
                            width={480}
                            height={480}
                            alt="Banner"
                            className=""
                          />
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                          <Image
                            src="/cum.webp"
                            width={480}
                            height={480}
                            alt="Cumpleaños"
                            className="my-4 w-3/4"
                          />
                          <p className="p-2 font-dyna">
                              Un bonito día para celebrar tu existencia, espero que la pases muy bien y que te diviertas mucho. 🎉
                          </p>
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                      <AlertDialogCancel>MUACK</AlertDialogCancel>
                  </AlertDialogFooter>
              </AlertDialogContent>
          </AlertDialog>
      </main>
      <footer className="h-1/4 flex w-full">
        <Image
            src="/footer.png"
            alt="footer bg"
            width={1920}
            height={1080}
            className="w-full h-full"
        />
      </footer>
    </div>
  );
}
