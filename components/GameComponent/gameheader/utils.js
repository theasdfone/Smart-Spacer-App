// utils.js
export const addExp = (exp, setExp, level, setLevel, amount, MAX_EXP) => {
  let newExp = exp + amount;
  if (newExp >= MAX_EXP) {
    setLevel(level + 1);
    newExp = newExp - MAX_EXP;
  }
  setExp(newExp);
};

export const toggleTask = (tasks, setTasks, id, addExpFunction) => {
  setTasks(
    tasks.map((task) => {
      if (task.id === id && !task.completed) {
        addExpFunction(task.reward); // Use the passed addExp function
        return { ...task, completed: true };
      }
      return task;
    })
  );
};

export const cycleImage = (
  setImage,
  images,
  timeoutId,
  setTimeoutId,
  position
) => {
  let newImage = position === "top" ? images.top : images.bottom;
  setImage(newImage);

  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  const newTimeoutId = setTimeout(() => {
    setImage(images.original);
  }, 800);
  setTimeoutId(newTimeoutId);
};

export const handleImagePress = (
  evt,
  imageSize,
  cycleImageFunction,
  images,
  timeoutId,
  setTimeoutId
) => {
  const locationY = evt.nativeEvent.locationY;
  const { height } = imageSize;

  if (height === 0) return;

  if (locationY < height / 2) {
    cycleImageFunction("top");
  } else {
    cycleImageFunction("bottom");
  }
};

export const changeButtonColor = (colorIndex, setColorIndex, BUTTON_COLORS) => {
  setColorIndex((colorIndex + 1) % BUTTON_COLORS.length);
};

export const openModal = (
  setModalColor,
  setModalVisible,
  setImage,
  images,
  color
) => {
  setModalColor(color);
  setModalVisible(true);
  setImage(images.original);
};
