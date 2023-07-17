import SendbirdApp from "@sendbird/uikit-react/App";

const APP_ID = process.env.NEXT_PUBLIC_SENDBIRD_APP_ID || "";
const USER_ID = "testing_user_id_web";

const Chat = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
  );
};

export default Chat;
