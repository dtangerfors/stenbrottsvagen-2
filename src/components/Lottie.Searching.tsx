import React, {FC} from "react";
import { useLottie } from "lottie-react";
import animationData from "../icon-searching.json";

const Complete: FC = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      height: 240,
      width: 240,
    }
  };

  const { View } = useLottie(options);

  return (
    <div className="grid place-items-center">
      {View}
    </div>
  );
}

export default Complete
