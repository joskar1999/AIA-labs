import React, { useRef, useState } from 'react';
import { Rating } from '@material-ui/lab';
import { maxRating } from '../../constants/constants';
import {
  Description,
  DescriptionEditor,
  ItemsContainer,
  RatingBar,
  ThumbnailImage,
  TitleHeader,
  TitleInput,
  TodoContainer,
  TodoContentBox
} from './component-styles';
import ContextChange from '../ContextChange/ContextChange';

const TodoItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [rating, setRating] = useState(props.rating);
  const [image, setImage] = useState(props.image);
  const [displayContextMenu, setDisplayContextMenu] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const todoContainer = useRef(null);

  const handleRatingChange = (event, value) => {
    setRating(value);
    const edited = {
      id: props.id,
      title,
      description,
      rating: value,
      image
    }
    props.onItemChanged(edited);
  };

  const toggleContextMenu = () => {
    setDisplayContextMenu(!displayContextMenu);
  }

  const toggleEditMode = () => {
    if (isEditMode) {
      const edited = {
        id: props.id,
        title,
        description,
        rating,
        image
      }
      props.onItemChanged(edited);
    }
    setIsEditMode(!isEditMode);
  };

  const deleteItem = () => {
    props.onDelete(props.id);
  };

  return (
      <TodoContainer>
        <TodoContentBox
            ref={todoContainer}
            onClick={toggleContextMenu}
        >
          <ItemsContainer>
            {!isEditMode
                ? <TitleHeader>{title}</TitleHeader>
                : <TitleInput
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            }
            <RatingBar>
              <Rating
                  max={maxRating}
                  value={rating}
                  onChange={handleRatingChange}
              />
            </RatingBar>
          </ItemsContainer>
          <ItemsContainer>
            <ThumbnailImage src={image}/>
            {!isEditMode
                ? <Description>{description}</Description>
                : <DescriptionEditor
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            }
          </ItemsContainer>
        </TodoContentBox>
        {(displayContextMenu || isEditMode) && <ContextChange
            onEdit={toggleEditMode}
            onDelete={deleteItem}
            isEditMode={isEditMode}
            height={todoContainer.current.clientHeight}/>}
      </TodoContainer>
  );
};

export default TodoItem;