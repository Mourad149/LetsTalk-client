import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
const messageMinWidth = "10rem";
const messageMaxWidth = "20rem";
const messageWidth = "10rem";
const messageMinHeight = "2.5rem";
const avatarWidth = "2rem";
const avatarHeight = "2rem";
const messageHeaderHeight = "4rem";
const messageFiledContainerHeight = "3rem";
const useStyles = makeStyles({
  messageLeftContainer: {
    display: "flex",
    maxWidth: messageMaxWidth,
    minWidth: messageMinWidth,
    minHeight: messageMinHeight,
    background:
      "linear-gradient(-45deg, rgba(2, 62, 138, 0.8), rgba(2, 62, 138, 0.9))",
    borderRadius: "18px 0px 18px 18px",
    boxShadow:
      "-8px 8px 12px 0 rgba(0, 0, 0, 0.25), 4px -4px 8px 0 rgba(255, 255, 255, 0.3)",
    borderRadius: "0px 18px 18px 18px",

    margin: "20px",
    position: "relative",
    marginLeft: "0",
    marginRight: "auto",
    flexDirection: "column",
  },
  messageRightContainer: {
    display: "flex",
    maxWidth: messageMaxWidth,
    minWidth: messageMinWidth,
    minHeight: messageMinHeight,
    background:
      "linear-gradient(-45deg, rgba(2, 62, 138, 0.8), rgba(2, 62, 138, 0.9))",
    borderRadius: "18px 0px 18px 18px",
    boxShadow:
      "8px 8px 12px 0 rgba(0, 0, 0, 0.25), -4px -4px 8px 0 rgba(255, 255, 255, 0.3)",

    margin: "20px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "0px",
    flexDirection: "column",
  },
  messageAvatarRight: {
    width: avatarWidth,
    height: avatarHeight,
    position: "absolute",
    top: "0%",
    bottom: "100%",
    top: "-15px",
    left: "calc(100% - 20px)",
  },
  messageAvatarLeft: {
    width: avatarWidth,
    height: avatarHeight,
    position: "absolute",
    top: "-15px",
    right: "calc(100% - 20px)",

    bottom: "100%",
  },
  message: {
    display: "flex",
    width: "100%",
  },
  messagingViewContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  messagesViewContainer: {
    height: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  messages: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100% - ${messageHeaderHeight} - ${messageFiledContainerHeight})`,
    maxHeight: `calc(100% - ${messageHeaderHeight} - ${messageFiledContainerHeight})`,
    minHeight: `calc(100% - ${messageHeaderHeight} - ${messageFiledContainerHeight})`,
    overflowY: "scroll",
    overflowX: "hidden",

    padding: "0 20px 0 20px",
  },
  messagingHeaderContainer: {
    display: "flex",
    width: "100%",
    height: messageHeaderHeight,
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageIconButton: {
    color: "white",
    background: "#023e8a",
    padding: "10px",
    margin: "5px",
  },
  textMessage: {
    fontSize: "0.8rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    margin: "12px",
  },
  messageField: {
    width: "80%",
    boxShadow: "inset 0px 0px 12px 0 rgba(0, 0, 0, 0.25)",
    borderRadius: "14px",
    paddingLeft: "10px",
  },
  messageFieldContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px 0 10px",
  },
  sendButton: {
    margin: "0px 10px 0px 0px",
    color: "white",
    background: "#023e8a",
    padding: "10px",
  },
  userNameLeftStyle: {
    fontWeight: 600,
    margin: "5px 0 0 25px",
    color: "white",
  },
  userNameRightStyle: {
    fontWeight: 600,
    margin: "5px 25px 0  0",
    color: "white",
  },
  hasRaisedHandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "5px 0 10px 0",
  },
  acceptRaiseButton: {
    backgroundColor: "white",
    fontWeight: 600,
    textTransform: "lowercase",
  },
  declineRaiseButton: {
    backgroundColor: "red",
    fontWeight: 600,
    color: "white",
    textTransform: "lowercase",
  },
  hasRaisedIcon: {
    padding: "5px 5px 10px 0",
  },
  participantContainer: {
    width: "100%",
    height: "3rem",
    maxHeight: "3rem",
    minHeight: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  participantsViewContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  },
  participantInfosContainer: {
    width: "70%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  participantActions: {
    width: "30%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  statusConnectedIcon: {
    color: "#03CA13",
  },
  statusDisconnectedIcon: { color: "grey" },
  inviteUserIcon: {
    color: "#023e8a",
  },
});

export default useStyles;
