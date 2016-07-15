var initTeam = {
  team: null
};

export default function team(state = initTeam, action) {
  switch (action.type) {
    case 'REQUEST_TEAM':
    return {...state, team: action.team};

    case 'RECEIVE_TEAM':
    return {...state, team: action.team};

    default:
    return {...state};
  }
}