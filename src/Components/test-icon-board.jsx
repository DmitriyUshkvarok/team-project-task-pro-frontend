import url from '../images/icons/sprite/icons.svg';

const BoardComponentTest = () => {
  const { data, error, isLoading } = useGetBoardsQuery();
  const icons = [
    //   здесь id бордов из спрайта
    { id: '1', path: '#icon-board-1' },
    { id: '2', path: '#icon-board-2' },
    { id: '3', path: '#icon-board-3' },
    { id: '4', path: '#icon-board-4' },
    { id: '5', path: '#icon-board-5' },
    { id: '6', path: '#icon-board-6' },
    { id: '7', path: '#icon-board-7' },
    { id: '8', path: '#icon-board-8' },
  ];

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((board) => {
          const selectedIcon = icons.find(
            (icon) =>
              icon.id === board.iconId /* <=здесь айди из сервера борда */
          );

          if (selectedIcon) {
            const iconPath = `${url}${selectedIcon.path}`; /* здесь url содержит путь к спрайту */
            return (
              <svg>
                <use xlinkHref={iconPath} />
              </svg>
            );
          }

          return null;
        })
      )}
    </>
  );
};

export default BoardComponentTest;
