import React, { useContext } from "react";
import {
  Box,
  TextField,
  Typography,
  SwipeableDrawer,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Data } from "../Context/context";

export const Category = () => {
  const {
    userData,
    setUserData,
    employees,
    setEmployees,
    categoryData,
    setCategoryData,
    productData,
    setProductData,
  } = useContext(Data);
  const [searchCategory, setSearchCategory] = useState("");
  const [age, setAge] = useState("");
  const [nameUz, SetNameUz] = useState("");
  const [nameRu, SetNameRu] = useState("");
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const CategoryId = categoryData.reduce((categoryId, categoryOrder) => {
    return Math.max(categoryId, categoryOrder.id);
  }, -1);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Save = () => {
    setCategoryData((prev) => [
      ...prev,
      {
        id: CategoryId + 1,
        nameUZ: nameUz,
        nameRU: nameRu,
        headCategory: age,
        isActive: true,
      },
    ]);

    setAge("");
    SetNameUz("");
    SetNameRu("");
    setState(false);
  };

  const DeleteCategory = (id) => {
    setCategoryData((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const list = () => (
    <Box
      sx={{
        width: 400,
        height: "100%",
        p: "40px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Yangi kategori qo’shish
        </Typography>
        <TextField
          label="Kategoriya nomi uz"
          variant="standard"
          value={nameUz}
          sx={{ width: "100%", mt: 2 }}
          onChange={(e) => SetNameUz(e.target.value)}
        />
        <TextField
          label="Kategoriya nomi ru"
          variant="standard"
          value={nameRu}
          sx={{ width: "100%", mt: 2 }}
          onChange={(e) => SetNameRu(e.target.value)}
        />
        <FormControl fullWidth sx={{ mt: 4 }}>
          <InputLabel>Bosh kategoriyaga biriktirish</InputLabel>
          <Select value={age} label="Age" onChange={handleChange}>
            <MenuItem value="-" sx={{ height: "40px" }}>
              -
            </MenuItem>
            <MenuItem value="Ichimliklar">Ichimliklar</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        color="success"
        onClick={Save}
        disabled={nameUz === "" || nameRu === "" || age === ""}
      >
        Saqlash
      </Button>
    </Box>
  );

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
            onClick={toggleDrawer("right", true)}
          >
            <AiFillPlusCircle style={{ fontSize: 30, color: "green" }} />{" "}
            <Typography sx={{ fontSize: 13, width: 100 }}>
              Yangi kategoriya qoshish
            </Typography>
          </Box>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
          >
            {list("right")}
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
              onChange={(e) => setSearchCategory(e.target.value)}
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
          KATEGORIYA (UZ)
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          KATEGORIYA (RU)
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          BOSH KATEGORIYA
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
        {categoryData
          .filter(
            (product) =>
              product.isActive === true &&
              product.nameUZ
                .toLowerCase()
                .includes(searchCategory.toLowerCase()) === true,
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
                <Box
                  sx={{
                    width: "33%",
                  }}
                >
                  <Typography>{item.nameUZ}</Typography>
                </Box>
                <Box sx={{ width: "33%" }}>
                  <Typography>{item.nameRU}</Typography>
                </Box>
                <Box sx={{ width: "29%" }}>
                  {categoryData.map((item2) => {
                    if (item.categoryId === item2.id) {
                      return <Typography>{item2.nameUZ}</Typography>;
                    }
                  })}
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
                    onClick={() => DeleteCategory(item.id)}
                  >
                    <RiDeleteBin6Line style={{ color: "#8D9BA8" }} />
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
