import { React, useState, useEffect } from "react";
import { Avatar, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import CreateMeetingModal from "./create-meeting-modal.component";
import { useTransition, animated } from "react-spring";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import useStyles from "./profile-card.style";
import AnonymousLogoComponent from "../assets/anonymous-logo.component";
import { connect } from "react-redux";
import { disconnect } from "../reducers-actions/current-user.action";
import { io } from "socket.io-client";
let socket;
const ProfileCard = (props) => {
  const classes = useStyles();
  const [show, set] = useState(false);

  const [state, setState] = useState({ showModal: false });
  const [anonym, setAnonym] = useState(props.anonym);
  const [userId, setUserId] = useState(props.anonymUserId);
  const [isAdmin, setIsAdmin] = useState(props.isAdmin);

  const showModal = () => {
    setState({ showModal: true });
  };

  const hideModal = () => {
    setState({ showModal: false });
  };

  const modalClassName = state.showModal
    ? classes.displayBlock
    : classes.displayNone;

  const transitions = useTransition(show, (item) => item.key, {
    from: {
      transform: `translate3d(${-200}px,0px,0px)`,
      opacity: "0.3",
    },
    enter: { transform: `translate3d(0px,0,0)`, opacity: "1" },
    leave: {
      transform: `translate3d(${-200}px,0px,0)`,
      opacity: "0.3",
    },
    config: {
      duration: 400,
    },
  });
  useEffect(() => {
    socket = io.connect(
      `https://${process.env.REACT_APP_BASE_URL}:5000/onConnect`,
      {
        secure: true,
        rejectUnauthorized: false,
      }
    );
  }, []);
  const onDisconnect = () => {
    props.disconnect();
    socket.emit("forceDisconnect", {
      userToDisconnect: props.currentUser?._id,
    });
    props.cookies.remove("token", { path: "/" });
  };
  return transitions.map(({ item, key, props: style }) =>
    anonym === "true" ? (
      <animated.div className={classes.anonymProfileCard} style={style}>
        <div className={classes.anonymousLogoContainer}>
          <AnonymousLogoComponent />
        </div>
        <Typography className={classes.name} align="center">
          Anonymous user
        </Typography>
        <Typography className={classes.pseudo} align="center">
          id : {userId}
        </Typography>
      </animated.div>
    ) : (
      <animated.div className={classes.profileCard} style={style}>
        <Avatar className={classes.avatar} src={props.currentUser?.image} />
        <Typography className={classes.name} align="center">
          {props.currentUser?.firstName + " " + props.currentUser?.lastName}{" "}
        </Typography>
        <Typography className={classes.pseudo} align="center">
          {props.currentUser?.currentPosition}
        </Typography>
        <Typography className={classes.description}>
          Actuellement étudiant en 3ème année à l’Ecole Nationale Supérieur
          d’Informatique et d’Analyse des Systèmes
        </Typography>
        <div className={classes.editBox}>
          <EditIcon className={classes.icon} fontSize="small" />
          <Typography>Edit Profile</Typography>
        </div>
        {isAdmin === "true"
          ? [
              <div className={classes.addBox} onClick={() => props.showModal()}>
                <AddIcon className={classes.icon} fontSize="small" />
                <Typography>Create meeting</Typography>
              </div>,
              <div className={classes.meetingsNetwork}>
                <PeopleOutlineIcon className={classes.icon} fontSize="small" />
                <Typography>14 meetings</Typography>
              </div>,
            ]
          : null}
        <div className={classes.disconnect} onClick={onDisconnect}>
          <PowerSettingsNewIcon />
          <Typography>Logout</Typography>
        </div>
      </animated.div>
    )
  );
};

export default connect(null, { disconnect })(ProfileCard);
