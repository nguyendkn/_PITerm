import React, { useState } from "react";
import { Dropdown, Input, MenuProps } from "antd";
import { ChevronDown, Folder } from "lucide-react";
import useModal from "@/hooks/useModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuProps["items"]>([]);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const { showModal, RenderModal } = useModal();

  const handleOpenCreateFolderModal = () => {
    showModal({
      title: "Create folder",
      content: (
        <div>
          <p>This is the content of the modal.</p>
          <p>You can customize this content as needed.</p>
        </div>
      ),
      onOk: () => {
        console.log("Modal confirmed");
      },
      onCancel: () => {
        console.log("Modal canceled");
      },
    });
  };

  const defaultItems: MenuProps["items"] = [
    {
      key: "create-folder",
      label: <div onClick={handleOpenCreateFolderModal}>Create folder</div>,
    },
    {
      key: "delete-folder",
      label: "Delete folder",
    },
  ];

  const folderActionItems: MenuProps["items"] = [
    {
      key: "create-folder",
      label: "Create folder",
    },
    {
      key: "delete-folder",
      label: "Delete folder",
    },
    {
      key: "rename-folder",
      label: "Rename folder",
    },
    {
      key: "create-server",
      label: "Create server",
    },
    {
      key: "import-pve",
      label: "Import PVE",
    },
  ];

  const serverActionItems: MenuProps["items"] = [
    {
      key: "edit-server",
      label: "Edit server",
    },
    {
      key: "delete-server",
      label: "Delete server",
    },
  ];

  const handleDisplayContextMenu = (
    event: React.MouseEvent,
    items?: MenuProps["items"]
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setMenuItems(items ?? defaultItems);
    setMenuPosition({ x: event.clientX, y: event.clientY });
    setOpen(true);
  };

  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <>
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
          onContextMenu={handleDisplayContextMenu}
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
                onContextMenu={(e) =>
                  handleDisplayContextMenu(e, folderActionItems)
                }
              >
                <details open>
                  <summary className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
                    <ChevronDown size={16} className="mr-2 text-gray-500" />
                    <span className="font-medium">Demo</span>
                  </summary>
                  <ul className="ml-6 mt-2 space-y-2">
                    <li
                      onContextMenu={(e) =>
                        handleDisplayContextMenu(e, serverActionItems)
                      }
                    >
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
      <RenderModal />
    </>
  );
};

export default Navbar;
