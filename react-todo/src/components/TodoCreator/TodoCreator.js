import React, { useState } from 'react';
import InputRow from '../InputRow/InputRow';
import { ApplyButton, CreatorContainer, TodoForm } from './component-styles';
import {
  addItem,
  descriptionLabel,
  imagePath,
  ratingLabel,
  titleLabel
} from '../../constants/constants';

const TodoCreator = (props) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(null);

  const handleAddItemClicked = () => {
    const todoItemData = {
      title,
      description,
      image,
      rating
    };
    setTitle('');
    setDescription('');
    setImage('');
    setRating('');
    props.onItemAdded(todoItemData);
  };

  return (
      <CreatorContainer>
        <TodoForm>
          <InputRow
              labelFor="title"
              labelName={titleLabel}
              value={title}
              onInputChange={setTitle}
          />
          <InputRow
              labelFor="description"
              labelName={descriptionLabel}
              value={description}
              onInputChange={setDescription}
          />
          <InputRow
              labelFor="image"
              labelName={imagePath}
              value={image}
              onInputChange={setImage}
          />
          <InputRow
              labelFor="rating"
              labelName={ratingLabel}
              value={rating}
              onInputChange={setRating}
          />
        </TodoForm>
        <ApplyButton onClick={handleAddItemClicked}>{addItem}</ApplyButton>
      </CreatorContainer>
  );
};

export default TodoCreator;