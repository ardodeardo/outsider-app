import React, { useEffect, useRef, useState } from "react";

const CONFIG = {
  asset: '/lotties/loading.json',
  // asset: 'https://assets2.lottiefiles.com/packages/lf20_p8bfn5to.json'
}

function Loader() {
  const ref = useRef<any | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    import("@lottiefiles/lottie-player");

    setMounted(true);
  }, []);

  return (
    <div>
      {/* https://docs.lottiefiles.com/lottie-player/components/lottie-player/usage */}

      {
        mounted && (
          <lottie-player
            id="lottieAnimation"
            ref={ref}
            autoplay
            // controls
            loop
            mode="normal"
            src={CONFIG.asset}
            style={{ height: "150px" }}
          ></lottie-player>
        )
      }
    </div>
  );
}

export default Loader