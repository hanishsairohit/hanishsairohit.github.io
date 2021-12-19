const initUI = () => {
  const nameMessage = document.getElementById("name-message");
  nameMessage.innerHTML = `Welcome to Global Chatroom`;
  const joinButton = document.getElementById("join-btn");
  const conferenceAliasInput = document.getElementById("alias-input");
  const leaveButton = document.getElementById("leave-btn");

  joinButton.disabled = false;

  joinButton.onclick = () => {
    let conferenceAlias = conferenceAliasInput.value;

    VoxeetSDK.conference
      .create({ alias: conferenceAlias })
      .then((conference) => VoxeetSDK.conference.join(conference, {}))
      .then(() => {
        joinButton.disabled = true;
        leaveButton.disabled = false;
      })
      .catch((err) => console.error(err));
  };
  leaveButton.onclick = () => {
    VoxeetSDK.conference
      .leave()
      .then(() => {
        joinButton.disabled = false;
        leaveButton.disabled = true;
      })
      .catch((err) => console.error(err));
  };
};
