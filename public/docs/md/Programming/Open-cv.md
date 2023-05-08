# Open-cv - Python

- Open computer Vision - made at intel and written in c++.
- The python library just contains python wrappers for the underlying c++ code under the hood
- really fast even in python

## Install

```sh
pip install opencv-python

pip install matplotlib
```

## Basic usage

### Video

```python
 e
```

### Color enum

By default the camera returns BGR images

- cv2.COLOR_BGR2RGB
- cv2.COLOR_RGB2BGR
- cv2.COLOR_BGR2GRAY
- cv2.COLOR_GRAY2BGR
- cv2.COLOR_BGR2HSV

## Function

### cv2.imread(ImagePath, colorCoding = IMREAD_COLOR)

- import image and set color coding
- Default RGB -`0`: grayscale image

### cv2.imshow(displayWindowtext, image)

- display image to screen

### cv2.waitKey(time_ms)

- wait for key press for specified time

### cv.VideoCapture(cameraIndex)

- get camera stream
- 0 for builtin camera

```python
video = cv2.VideoCapture(0)
```

#### Methods

1. isOpened() - check if camera is opened
2. read() - read frame from camera

- returns tuple of boolean(read success) and frame

```python
success, frame = video.read()
```

3. release() - release camera

### cv2.VideoWriter(outputPath, codec, fps, frameSize)

- framesize(tuple ) - (width, height)

```python
# Define the codec and create VideoWriter object
fourcc = cv.VideoWriter_fourcc(*'XVID')
out = cv.VideoWriter('output.avi', fourcc, 20.0, (640,  480))
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        print("Can't receive frame (stream end?). Exiting ...")
        break
    frame = cv.flip(frame, 0)
    # write the flipped frame
    out.write(frame)
```

### cvtColor(image, colorCodeEnum)

- convert image to specified color coding

## Object detection with Tensorflow

```python
import tensorflow_hub as hub
import cv2
import numpy
import tensorflow as tf
import pandas as pd

MODEL_URL = 'https://tfhub.dev/tensorflow/efficientdet/d1/1'
model = hub.load(MODEL_URL) #load pre-trained model
cap = cv2.VideoCapture(0) #get camera stream

COCO_CLASSES = [
    'background', 'person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus',
    'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign',
    'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow',
    'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag',
    'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite',
    'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket',
    'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana',
    'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza',
    'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table',
    'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone',
    'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock',
    'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush'
]

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Process the frame with the TensorFlow model
    input_tensor = tf.convert_to_tensor(frame) # convert image to tenso
    input_tensor = input_tensor[tf.newaxis, ...]
    detections = model(input_tensor) # pass tensor to model to process

    for i in range(int(detections.pop('num_detections'))):
        box = detections['detection_boxes'][0, i].numpy()
        score = detections['detection_scores'][0, i].numpy()
        class_id = int(detections['detection_classes'][0, i].numpy())

        if score > 0.5:  # Set a threshold for the detection score
            # Convert the box coordinates to pixel values and draw the box and label on the frame
            h, w, _ = frame.shape
            y1, x1, y2, x2 = box * [h, w, h, w]
            cv2.rectangle(frame, (int(x1), int(y1)),
                        (int(x2), int(y2)), (0, 255, 0), 2)
            class_name = COCO_CLASSES[class_id]
            label = f"{class_name}: {score:.2f}"
            cv2.putText(frame, label, (int(x1), int(y1)),
                        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

    # Display the processed frame
    cv2.imshow('Video', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

```
