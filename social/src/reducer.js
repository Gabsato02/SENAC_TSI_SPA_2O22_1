const reducer = (state, action) => {
  let newPost;
  switch (action.type) {
    case 'CREATE_POST':
      newPost = action.payload;
      return { ...state, posts: [newPost, ...state.posts] };
    case 'REMOVE_POST':
      return 0;
    default:
      return state;
  }
};

export default reducer;
