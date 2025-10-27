import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-end px-6 py-4 text-sm shadow-md bg-white h-20 items-center gap-2">
      <div className="rounded-full">
        <img
          src="https://png.pngtree.com/png-clipart/20210829/original/pngtree-dark-mode-icon-light-png-clipart-png-image_6661697.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
      </div>

      <img
        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
        alt="Profile"
        className="w-11 h-11 rounded-full ml-4"
      />
      <div className="text-center">
        <p className="font-medium">Aqsha Naya</p>
        {/* <p className="text-xs text-slate-700">Admin</p> */}
      </div>
      <ChevronDown size={24} className="text-slate-700" />
    </div>
  );
};

export default Navbar;
