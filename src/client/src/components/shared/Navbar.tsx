import React, { useState } from "react";
import { Dropdown, Input, MenuProps } from "antd";
import { ChevronDown, Folder } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuProps["items"]>([]);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const defaultItems: MenuProps["items"] = [
    {
      key: "create-folder",
      label: "Create folder",
    },
    {
      key: "delete-folder",
      label: "Delete folder",
    },
  ];

  const treeItemItems: MenuProps["items"] = [
    {
      key: "rename",
      label: "Rename",
    },
    {
      key: "delete",
      label: "Delete",
    },
  ];

  const handleGeneralContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();

    setMenuItems(defaultItems);
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setOpen(true);
  };

  const handleTreeItemContextMenu = (
    event: React.MouseEvent,
    items: MenuProps["items"]
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setMenuItems(items);
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setOpen(true);
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["contextMenu"]}
      open={open}
      onOpenChange={handleOpenChange}
      overlayStyle={{
        position: "fixed",
        left: menuPosition.x,
        top: menuPosition.y,
      }}
    >
      <aside
        className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto"
        onContextMenu={handleGeneralContextMenu}
      >
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <nav>
          <ul className="space-y-2">
            <li
              onContextMenu={(e) => handleTreeItemContextMenu(e, treeItemItems)}
            >
              <details open>
                <summary className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <ChevronDown size={16} className="mr-2 text-gray-500" />
                  <span className="font-medium">Demo</span>
                </summary>
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-gray-600 hover:text-blue-600 p-2 rounded"
                    >
                      <Folder size={16} className="mr-2" />
                      <span>localhost</span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </nav>
      </aside>
    </Dropdown>
  );
};

export default Navbar;
