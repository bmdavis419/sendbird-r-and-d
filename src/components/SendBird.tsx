import dynamic from "next/dynamic";
import "@sendbird/uikit-react/dist/index.css";

const SendBird = dynamic(() => import("./Chat"), {
  ssr: false,
  loading: () => <p>...</p>,
});

export default SendBird;
