import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsFunnel } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TextField } from "@mui/material";
import { Data } from "../Context/context";

export const Products = () => {
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
  const [search, setSearch] = useState("");
  const [productName, setProductName] = useState("");
  const [age2, setAge2] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [addition, setAddition] = useState("");
  const [productImg, setProductImg] = useState("");
  const [addProduct, setAddProduct] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const ProductId = categoryData.reduce((productId, productOrder) => {
    return Math.max(productId, productOrder.id);
  }, -1);

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const AddProduct = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAddProduct({ ...addProduct, [anchor]: open });
  };

  const SaveProduct = () => {
    setProductData((prev) => [
      ...prev,
      {
        id: ProductId + 1,
        img: productImg,
        name: productName,
        category: age2,
        cost: Number(priceProduct),
        addition: addition,
        isActive: true,
      },
    ]);

    setAge2("");
    setPriceProduct("");
    setProductName("");
    setAddition("");
    setProductImg("");
    setAddProduct(false);
  };

  const DeleteProduct = (id) => {
    setProductData((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };

  const listProduct = () => (
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
          Yangi maxsulot qo’shish
        </Typography>
        <TextField
          label="Maxsulot nomi"
          variant="standard"
          sx={{ width: "100%", mt: 2 }}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <FormControl fullWidth sx={{ mt: 4 }}>
          <InputLabel>Kategoriyalar</InputLabel>
          <Select value={age2} label="age2" onChange={handleChange2}>
            {categoryData.map((item, index) => (
              <MenuItem value={item.id} key={index}>
                {item.nameUZ.replace("uz", " ")}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Narxi"
          variant="standard"
          sx={{ width: "100%", mt: 2 }}
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
        <TextField
          label="Qo'shimcha malumot"
          variant="standard"
          sx={{ width: "100%", mt: 2 }}
          value={addition}
          onChange={(e) => setAddition(e.target.value)}
        />
        <TextField
          label="Maxsulot rasmini yuklang"
          variant="standard"
          sx={{ width: "100%", mt: 2 }}
          value={productImg}
          onChange={(e) => setProductImg(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        color="success"
        onClick={SaveProduct}
        disabled={
          age2 === "" ||
          productName === "" ||
          priceProduct === "" ||
          addition === "" ||
          productImg === ""
        }
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
            onClick={AddProduct("right", true)}
          >
            <AiFillPlusCircle style={{ fontSize: 30, color: "green" }} />{" "}
            <Typography sx={{ fontSize: 13, width: 100 }}>
              Yangi maxsulot qoshish
            </Typography>
          </Box>
          <SwipeableDrawer
            anchor={"right"}
            open={addProduct["right"]}
            onClose={AddProduct("right", false)}
            onOpen={AddProduct("right", true)}
          >
            {listProduct("right")}
          </SwipeableDrawer>
        </React.Fragment>
        <Box
          sx={{
            backgroundColor: "#fff",
            flex: 1,
            py: 2,
            px: 7,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box>
            <TextField
              label="Qidirish"
              variant="outlined"
              type="search"
              size="small"
              sx={{ width: "100%" }}
              onChange={(e) => setSearch(e.target.value)}
            />
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
          >
            <BsFunnel style={{ color: "#8D9BA8" }} />
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
          MAXSULOT
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          KATEGORIYA
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          NARXI
        </Typography>
        <Typography
          sx={{
            borderInlineStart: "1px solid #8D9BA8",
            paddingInlineStart: 2,
            fontWeight: "bold",
          }}
        >
          QO'SHIMCHA
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
        {productData
          .filter(
            (product) =>
              product.isActive === true &&
              product.name.toLowerCase().includes(search.toLowerCase()) ===
                true,
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
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "25%",
                  }}
                >
                  <img
                    src={item.img}
                    alt="proImg"
                    style={{
                      borderRadius: "50%",
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                    }}
                  />
                  <Typography>{item.name}</Typography>
                </Box>
                {categoryData.map((item2, index) => {
                  if (item2.id === item.category) {
                    return (
                      <Box sx={{ width: "25%" }} key={index}>
                        <Typography>
                          {item2.nameUZ.replace("uz", " ")}
                        </Typography>
                      </Box>
                    );
                  }
                })}
                <Box sx={{ width: "25%" }}>
                  <Typography>
                    {Intl.NumberFormat("en-En").format(item.cost)} UZS
                  </Typography>
                </Box>
                <Box sx={{ width: "25%" }}>
                  <Typography>{item.addition}</Typography>
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
                    onClick={() => DeleteProduct(item.id)}
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
