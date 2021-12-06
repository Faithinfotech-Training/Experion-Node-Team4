
import { Container } from "react-bootstrap";

import ManagerDashboard from "../../Components/ManagerDashboard/ManagerDashboard";

function Manager() {
  return (
    <div>
      <ManagerDashboard />
      <div style={{ marginTop: "20px", height: "50vh" }}>

        <Container >
          <h4>Manager Page</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent quis bibendum augue.
          </p>
          <p>
            Aliquam sit amet ante ante. Nunc tortor nisl, lobortis vel sodales vitae, vehicula eu eros. Praesent quis pellentesque urna. In lacus erat, gravida a erat non, posuere varius enim. Phasellus vel suscipit libero, non ornare lacus. Etiam purus purus, rhoncus eu mauris vitae, tincidunt sagittis augue. Etiam mollis sodales lorem, nec lobortis eros feugiat a. Nulla scelerisque efficitur nunc sed semper.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Manager;
