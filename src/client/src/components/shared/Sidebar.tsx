import { Divider } from "antd";
import { CurlyBraces, PiIcon, Server, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-16 bg-white shadow-lg flex flex-col items-center">
      <div className="my-4">
        <PiIcon />
      </div>
      <Divider className="m-0" />
      <nav className="flex-grow my-4">
        <ul className="space-y-6">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Server />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Settings />
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto mb-4">
        <a
          href="#"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <CurlyBraces />
        </a>
      </div>
    </aside>
  );
};
export default Sidebar;
