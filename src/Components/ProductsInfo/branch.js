import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SwipeableDrawer,
  TextField,
  Dialog,
  Slide,
  Typography,
  Divider,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { Data } from "../Context/context";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Branch = () => {
  const {
    userData,
    setUserData,
    employees,
    setEmployees,
    categoryData,
    setCategoryData,
    productData,
    setProductData,
    branch,
    setBranch,
  } = useContext(Data);
  const [searchBranch, setSearchBranch] = useState("");
  const [stateBranch, setStateBranch] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [branchAddUz, setBranchAddUz] = useState("");
  const [branchAddRu, setBranchAddRu] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [branchMap, setBranchMap] = useState("");
  const [open, setOpen] = useState(false);
  const [editBranch, setEditBranch] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const toggleBranch = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateBranch({ ...stateBranch, [anchor]: open });
  };
  const BranchId = branch.reduce((branchId, branchOrder) => {
    return Math.max(branchId, branchOrder.id);
  }, -1);

  const SaveBranch = () => {
    setBranch((prev) => [
      ...prev,
      {
        id: BranchId + 1,
        nameUz: branchAddUz,
        nameRu: branchAddRu,
        target: "Metro ro’parasida 2",
        startTime: startTime,
        endTime: endTime,
      },
    ]);
    setBranchAddUz("");
    setBranchAddRu("");
    setStartTime("");
    setEndTime("");
    setBranchMap("");
    setStateBranch(false);
  };

  const ModalBranch = (anchor) => (
    <Box
      sx={{
        width: 400,
        height: "100%",
        padding: "40px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Yangi fillial qo’shish
        </Typography>
        <TextField
          label="Filial nomi uz"
          variant="standard"
          value={branchAddUz}
          sx={{ width: "100%", mt: 2 }}
          onChange={(e) => setBranchAddUz(e.target.value)}
        />
        <TextField
          label="Filial nomi ru"
          variant="standard"
          value={branchAddRu}
          sx={{ width: "100%", mt: 2 }}
          onChange={(e) => setBranchAddRu(e.target.value)}
        />
        <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 5 }}>
          <Box sx={{ border: "1px solid #EDEFF3", padding: "10px 20px" }}>
            <input
              type="time"
              style={{ outline: "none" }}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            ></input>
          </Box>
          <Box sx={{ border: "1px solid #EDEFF3", padding: "10px 20px" }}>
            <input
              type="time"
              style={{ outline: "none" }}
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            ></input>
          </Box>
        </Box>
        <TextField
          label="Filial mo'ljal"
          variant="standard"
          sx={{ width: "100%", mt: 2 }}
          onKeyDown={(e) => setBranchMap(e.target.value)}
        />
        <iframe
          src={branchMap}
          width="350"
          height="300"
          style={{ margin: "30px 0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
      <Button
        variant="contained"
        color="success"
        onClick={SaveBranch}
        // disabled={nameUz === "" || nameRu === "" || age === ""}
      >
        Saqlash
      </Button>
    </Box>
  );

  const DeleteBranch = (id) => {
    setBranch((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const EditBranch = (item2) => {
    const selectedCategory = branch.find((item) => item.id === item2.id);
    // setBranch(selectedCategory);
    setEditBranch(selectedCategory.nameUz);

    setOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: "#EDEFF3", height: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <React.Fragment>
          <Box
            sx={{
              backgroundColor: "#fff",
              width: "24.5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 2,
              gap: 2,
              cursor: "pointer",
            }}
            onClick={toggleBranch("right", true)}
          >
            <AiFillPlusCircle style={{ fontSize: 30, color: "green" }} />{" "}
            <Typography sx={{ fontSize: 13, width: 100 }}>
              Yangi fillial qoshish
            </Typography>
          </Box>
          <SwipeableDrawer
            anchor={"right"}
            open={stateBranch["right"]}
            onClose={toggleBranch("right", false)}
            onOpen={toggleBranch("right", true)}
          >
            {ModalBranch("right")}
          </SwipeableDrawer>
        </React.Fragment>
        <Box
          sx={{
            backgroundColor: "#fff",
            flex: 1,
            py: 2,
            px: 7,
          }}
        >
          <Box>
            <TextField
              label="Qidirish"
              variant="outlined"
              type="search"
              size="small"
              sx={{ width: "30%" }}
              onChange={(e) => setSearchBranch(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          mt: 3,
          p: "5px 40px",
          boxShadow: "0px 8px 14px -6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography sx={{ paddingInlineStart: 2, fontWeight: "bold" }}>
          FILIAL NOMI (UZ)
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          FILIAL NOMI (RU)
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          MO'LJAL
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          ISH VAQTI
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          ACTION
        </Typography>
      </Box>
      <Box sx={{ my: 3, px: 3, overflowY: "scroll", height: "78vh" }}>
        {branch
          .filter((branchFilter) =>
            branchFilter.nameUz
              .toLowerCase()
              .includes(searchBranch.toLowerCase()),
          )
          .map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  my: 1,
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  px: 2,
                  py: 1,
                  display: "flex",
                  alignItems: "center",
                  "&:hover": {
                    boxShadow: "-4px 5px 15px -1px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Box sx={{ width: "25%" }}>
                  <Typography>{item.nameUz}</Typography>
                </Box>
                <Box sx={{ width: "26%" }}>
                  <Typography>{item.nameRu}</Typography>
                </Box>
                <Box sx={{ width: "24%" }}>
                  <Typography>{item.target}</Typography>
                </Box>
                <Box sx={{ width: "22%" }}>
                  <Typography>
                    <span>{item.startTime}</span> - <span>{item.endTime}</span>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      border: "4px solid #EDEFF3",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    <GoLocation style={{ color: "#8D9BA8" }} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      border: "4px solid #EDEFF3",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      EditBranch(item);
                      // setEditBranch(item);
                    }}
                  >
                    <FiEdit2 style={{ color: "#8D9BA8" }} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      border: "4px solid #EDEFF3",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    onClick={() => DeleteBranch(item.id)}
                  >
                    <RiDeleteBin6Line style={{ color: "#8D9BA8" }} />
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ p: 4 }}>
          <Typography variant={"h3"} sx={{ fontWeight: "bold" }}>
            Filialni o'zgartirish
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box>
            <TextField
              value={editBranch}
              variant="standard"
              sx={{ width: "100%" }}
            />
            <TextField
              label={editBranch.nameRu}
              variant="standard"
              sx={{ width: "100%", mt: 2 }}
            />
            <TextField
              label={editBranch.target}
              variant="standard"
              sx={{ width: "100%", mt: 2 }}
            />
            <Box sx={{ mt: 3, display: "flex", alignItems: "center", gap: 5 }}>
              <Box sx={{ border: "1px solid #EDEFF3", padding: "10px 20px" }}>
                <input
                  type="time"
                  style={{ outline: "none" }}
                  defaultValue={editBranch.startTime}
                  // onChange={(e) => setStartTime(e.target.value)}
                />
              </Box>
              <Box sx={{ border: "1px solid #EDEFF3", padding: "10px 20px" }}>
                <input
                  type="time"
                  style={{ outline: "none" }}
                  defaultValue={editBranch.endTime}
                  // onChange={(e) => setEndTime(e.target.value)}
                />
              </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ textAlign: "end" }}>
              <Button variant="contained" size={"small"} color={"success"}>
                O'zgartirish
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};
