import { FC } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="p-2 px-16 border-b-2 border-blue-500">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to="/" className="text-lg">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/breed" className="text-lg">
            Breeds
          </Navbar.Link>
          <Navbar.Link as={Link} to="/favorite" className="text-lg">
            Breeds
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
