import { v4 as uuid } from 'uuid';

const user = {
  name: 'Lebron James',
  username: 'lbj23',
  image: 'https://www.memecreator.org/static/images/templates/667654.jpg',
  user_id: uuid(),
};

export const getPost = () => {
  return {
    post_id: uuid(),
    user: user,
    text: 'Olá, mundo!',
    image:
      'https://i.pinimg.com/originals/b9/fa/2e/b9fa2e648f6cb19ffe55e81054266205.jpg',
    likes: 10,
    comments: [
      {
        user: user,
        text: "Help me, I'm hurt",
      },
      {
        user: user,
        text: 'Gimme help plis',
      },
      {
        user: user,
        text: 'The earth is flat @kyrie',
      },
    ],
  };
};
