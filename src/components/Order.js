import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Order() {
  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSchoolType, setSelectedSchoolType] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSchoolTypeChange = (event) => {
    setSelectedSchoolType(event.target.value);
  };

  return (
    <div>
      <span
        variant="outlined"
        onClick={handleClickOpen}
        className="cursor-pointer text-white font-bold"
      >
        Order
      </span>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>

        <div class="p-6 space-y-4 md:space-y-6 sm:px-16">
          <h1 class="text-xl text-center font-bold  text-yellow-900 md:text-2xl dark:text-yellow-900">
            Order Now
          </h1>
          <form class="space-y-4 md:space-y-4" action="#">
            <select
              id="categories"
              
              onChange={handleCategoryChange}
              class="border  border-gray-300  text-sm  focus:ring-black-500 focus:border-black-500 block w-80  p-1 d dark:border-gray-600 dark:placeholder-gray-400 dark:text-black outline-none"
            >
              <option>Select Type of Inquiry</option>
              <option className="text-black-black-500">Birthday cake</option>
              <option className="text-black-black-500">Wedding cakes</option>
              <option className="text-black-black-500">graduation cake</option>
              <option className="text-black-black-500">cupcake</option>
              <option className="text-black-black-500">capati</option>
              <option className="text-blue-blue-500">ibiraha</option>
              <option className="text-blue-blue-500">Rwandan specialist</option>
              <option className="text-blue-blue-500">Cupcakes</option>
            </select>

            <div>
              <lable>Date of Event</lable>
              <input
                type="date"
                id="small-input"
                class="placeholder:text-black block w-80  p-2 text-black border border-gray-300  sm:text-xs focus:ring-blue-500 focus:border-blue-500  outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div>
              <input
                type="text"
                id="small-input"
                placeholder="Location"
                class="placeholder:text-black block w-80  p-2 text-black border border-gray-300  sm:text-xs focus:ring-blue-500 focus:border-blue-500  outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label>How many guests are you expecting to serve?</label>
              <input
                type="number"
                id="small-input"
                class="placeholder:text-black block w-80  p-2 text-black border border-gray-300  sm:text-xs focus:ring-blue-500 focus:border-blue-500  outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label>Do you need your order delivered?</label><br/>
<input type="radio" id="yes" name="fav_language" value="Yes" />
<label for="yes">Yes</label><br/>
<input type="radio" id="no" name="fav_language" value="No"/>
<label for="no">No</label><br/>
            </div>
            <form>
  
  <textarea id="textarea" name="textarea" rows="4" cols="32" wrap="off" className="border border-gray-300 py-4 " placeholder="Please tell us anything "></textarea>
  <br/>
  
  <button type="submit" className="bg-yellow-900 text-white font-bold p-2 w-80">Submit</button>
</form>








          </form>
        </div>
      </BootstrapDialog>
    </div>
  );
}
