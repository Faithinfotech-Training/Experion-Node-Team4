import {useState} from "react";

import {Carousel} from "react-bootstrap";

import './ControlledCarousel.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/edu/art/skill2-3616d23240.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Join Us, Be Future Ready</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nvidia.com/content/dam/en-zz/Solutions/deep-learning/deep-learning-education/self-paced-online-training/nvidia-dli-educator-programs-teaching-kits-3c33-t.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Self-Paced, Online Training</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/learning-on-the-job-picture-id1312139041?b=1&k=20&m=1312139041&s=170667a&w=0&h=27R_x4Sl6R7KJOVlYxjnxsY6dKBoxZm-CXXo3qXxXsw="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Well equipped Resources</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;