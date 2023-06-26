import { Text, Field, ImageContainer } from './BackgroundImageMini.styled';
import { Form } from 'formik';

const BackgroundImageMini = () => {
  return (
    <>
      <Form>
        <Text id="my-radio-groupImage">Background</Text>
        <ImageContainer role="group" aria-labelledby="my-radio-groupImage">
          <label>
            <Field
              type="radio"
              name="picked"
              id="Image-1"
              value="Image-1"
              checked
            />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-2" value="Image-2" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-3" value="Image-3" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-4" value="Image-4" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-5" value="Image-5" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-6" value="Image-6" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-7" value="Image-7" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-8" value="Image-8" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-9" value="Image-9" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-10" value="Image-10" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-11" value="Image-11" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-12" value="Image-12" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-13" value="Image-13" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-14" value="Image-14" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-15" value="Image-15" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
          <label>
            <Field type="radio" name="picked" id="Image-16" value="Image-16" />
            <img src="#" alt="miniBackGroundImage" />
          </label>
        </ImageContainer>
      </Form>
    </>
  );
};

export default BackgroundImageMini;
