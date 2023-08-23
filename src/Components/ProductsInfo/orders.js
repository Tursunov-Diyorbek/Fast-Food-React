import {
  Box,
  Typography,
  Divider,
  SwipeableDrawer,
  Button,
  TextField,
} from "@mui/material";
import {
  AiFillPlusCircle,
  AiOutlineUser,
  AiOutlineCheck,
} from "react-icons/ai";
import { PiClockThin, PiPhoneLight, PiAlignTopFill } from "react-icons/pi";
import { BiUserPlus } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { MdViewStream } from "react-icons/md";
import {
  CiAlignTop,
  CiGrid2H,
  CiCalendar,
  CiDeliveryTruck,
} from "react-icons/ci";
import React, { useContext, useEffect, useState } from "react";
import { Data } from "../Context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logDOM } from "@testing-library/react";

export const Orders = () => {
  const [isActive, setIsActive] = useState(1);
  const [vertical, setVertical] = useState(1);
  const [filterUser, setFilter] = useState("");
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
  const [addOrder, setAddOrder] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [orders, setOrders] = useState(1);
  const [colactionProdact, setColactionProdact] = useState({});
  const [map, setMap] = useState("");
  const [userName, setUserName] = useState({});

  const OrderDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAddOrder({ ...addOrder, [anchor]: open });
  };

  const addSumm = (id) => {
    const newProdact = { count: 1, prodact: productData[id - 1] };
    setColactionProdact((prev) => ({ ...prev, [id]: newProdact }));
  };

  const AddOrder = () => (
    <Box
      sx={{
        height: "100%",
        p: "40px 30px",
        display: "flex",
      }}
    >
      <Box sx={{ paddingInlineEnd: 2, width: 436 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Yangi buyurtma qo’shish
        </Typography>
        <Box
          sx={{
            display: "flex",
            mt: 2,
            backgroundColor: "#EDEFF3",
            p: 1,
            borderRadius: 10,
          }}
        >
          {categoryData.map((item, index) => (
            <Typography
              key={index}
              sx={{
                padding: "5px 15px",
                fontSize: 10,
                backgroundColor: orders === item.id ? "#fff" : "",
                borderRadius: 10,
                boxShadow:
                  orders === item.id
                    ? "-3px 4px 12px -5px rgba(0, 0, 0, 0.2)"
                    : "",
                cursor: "pointer",
                color: orders === item.id ? "black" : "#AAB0B6",
              }}
              onClick={() => setOrders(item.id)}
            >
              {item.nameUZ.replace("uz", " ")}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {productData
            .filter((item) => item.category === orders)
            .map((item2, index) => {
              return (
                <Box
                  sx={{
                    width: 200,
                    mt: 2,
                    boxShadow: "7px 7px 8px -2px rgba(0, 0, 0, 0.2)",
                    borderRadius: 3,
                    overflow: "hidden",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "7px 7px 17px 2px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                  key={index}
                >
                  <img
                    src={item2.img}
                    alt="rasm"
                    style={{
                      width: "100%",
                      height: 100,
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: 10, fontWeight: "bold" }}>
                      {item2.name}
                    </Typography>
                    <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                      {item2.addition}
                    </Typography>
                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontSize: 10 }}>
                        <span style={{ fontWeight: "bold" }}>
                          {Intl.NumberFormat("en-En").format(item2.cost)}
                        </span>{" "}
                        UZS
                      </Typography>
                      {colactionProdact[item2.id]?.count > 0 ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            border: "1px solid #EDEFF3",
                            borderRadius: 2,
                          }}
                        >
                          <span
                            style={{ padding: "3px 15px", cursor: "pointer" }}
                            onClick={() =>
                              setColactionProdact(
                                colactionProdact[item2.id].count - 1,
                              )
                            }
                          >
                            -
                          </span>
                          <Typography>
                            {colactionProdact[item2.id].count}
                          </Typography>
                          <span
                            style={{ padding: "3px 15px", cursor: "pointer" }}
                            onClick={() =>
                              setColactionProdact(
                                colactionProdact[item2.id].count + 1,
                              )
                            }
                          >
                            +
                          </span>
                        </Box>
                      ) : (
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ fontSize: 10 }}
                          onClick={() => addSumm(item2.id)}
                        >
                          + Qo'shish
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
      <Box sx={{ width: 400 }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Yangi maxsulot qo’shish
        </Typography>
        <Box sx={{ border: "1px solid #EDEFF3", borderRadius: 2, p: 2 }}>
          <Box>dscsd</Box>
          <Box sx={{ backgroundColor: "#F6F7F9", p: 1, borderRadius: 2 }}>
            <Typography sx={{ fontSize: 10, color: "#AAB0B6" }}>
              Umumiy summa
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>0</span> UZS
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <TextField
              label="Mijoz ismi"
              variant="outlined"
              sx={{ width: "100%" }}
            />
            <Box sx={{ p: 1.5, border: "1px solid #AAB0B6", borderRadius: 1 }}>
              <BiUserPlus style={{ fontSize: 30 }} />
            </Box>
          </Box>
          <TextField
            label="Telefon raqam"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
          />
          <TextField
            label="Manzil"
            variant="outlined"
            sx={{ width: "100%", mt: 2 }}
            onKeyDown={(e) => setMap(e.target.value)}
          />
          <Box sx={{ width: 300, mt: 2 }}>
            <iframe
              src={map}
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Button
              variant="contained"
              size="small"
              sx={{ my: 4 }}
              color="success"
            >
              Saqlash
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  useEffect(() => {
    if (isActive === 1) setFilter("Yangi");
    else if (isActive === 2) setFilter("Qabul qilingan");
    else if (isActive === 3) setFilter("Jonatilgan");
    else if (isActive === 4) setFilter("Yopilgan");
    else setFilter("Rad etilgan");
  }, [isActive]);

  const Back = (item) => {
    if (item.status === "Yangi") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Rad etilgan";
          }
          return item2;
        }),
      );
    } else if (item.status === "Qabul qilingan") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Yangi";
          }
          return item2;
        }),
      );
    } else if (item.status === "Jonatilgan") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Qabul qilingan";
          }
          return item2;
        }),
      );
    } else if (item.status === "Yopilgan") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Jonatilgan";
          }
          return item2;
        }),
      );
    }
  };

  const Next = (item) => {
    if (item.status === "Rad etilgan") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Yangi";
          }
          return item2;
        }),
      );
    } else if (item.status === "Yangi") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Qabul qilingan";
          }
          return item2;
        }),
      );
    } else if (item.status === "Qabul qilingan") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Jonatilgan";
          }
          return item2;
        }),
      );
    } else if (item.status === "Jonatilgan") {
      setUserData(
        [...userData].map((item2) => {
          if (item2.id === item.id) {
            item2.status = "Yopilgan";
          }
          return item2;
        }),
      );
    }
    setUserName(item);
  };
  const notify = () =>
    toast(`${userName.name} ${userName.status}ga o'zgartrildi`);

  // console.log({userData.filter((item) => item.status === "Yangi")
  //         .reduce((totalSum, order) => {
  //             const orderTotalSum = order.orders.reduce(
  //                 (sum, product) => sum + product.price * product.count,
  //                 0
  //             );
  //             return totalSum + orderTotalSum;
  //         }, 0)
  //         .toLocaleString("en-US", {
  //             style: "currency",
  //             currency: "UZS",
  //         })}
  // );

  let OrdersSumNew = userData
    .filter((item) => item.status === "Yangi")
    .map(
      (item2) =>
        item2.orders.reduce(
          (total, order) => total + order.price * order.count,
          0,
        ) + 5000,
    );
  let Accepted = userData
    .filter((item) => item.status === "Qabul qilingan")
    .map(
      (item2) =>
        item2.orders.reduce(
          (total, order) => total + order.price * order.count,
          0,
        ) + 5000,
    );
  let Send = userData
    .filter((item) => item.status === "Jonatilgan")
    .map(
      (item2) =>
        item2.orders.reduce(
          (total, order) => total + order.price * order.count,
          0,
        ) + 5000,
    );
  let Closed = userData
    .filter((item) => item.status === "Yopilgan")
    .map(
      (item2) =>
        item2.orders.reduce(
          (total, order) => total + order.price * order.count,
          0,
        ) + 5000,
    );
  let Rejected = userData
    .filter((item) => item.status === "Rad etilgan")
    .map(
      (item2) =>
        item2.orders.reduce(
          (total, order) => total + order.price * order.count,
          0,
        ) + 5000,
    );

  return (
    <Box sx={{ backgroundColor: "#EDEFF3", height: "100vh" }}>
      <ToastContainer />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
            onClick={OrderDrawer("right", true)}
          >
            <AiFillPlusCircle style={{ fontSize: 30, color: "green" }} />{" "}
            <Typography sx={{ fontSize: 13, width: 100 }}>
              Yangi buyurtma qoshish
            </Typography>
          </Box>
          <SwipeableDrawer
            anchor={"right"}
            open={addOrder["right"]}
            onClose={OrderDrawer("right", false)}
            onOpen={OrderDrawer("right", true)}
          >
            {AddOrder("right")}
          </SwipeableDrawer>
        </React.Fragment>
        <Box
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Box
            sx={{
              width: 550,
              height: 40,
              backgroundColor: "#EDEFF3",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              opacity: vertical === 2 ? "0.5" : null,
            }}
          >
            <Box
              sx={{
                backgroundColor: isActive === 1 ? "#20D472" : "",
                px: 4,
                py: "6px",
                borderRadius: 10,
                boxShadow:
                  isActive === 1 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
                cursor: "pointer",
                color: isActive === 1 ? "black" : "#A0A7AD",
              }}
              onClick={vertical === 1 ? () => setIsActive(1) : null}
            >
              <Typography sx={{ fontSize: 8, fontWeight: "bold" }}>
                Yangi
              </Typography>
            </Box>
            <Box
              sx={{
                px: 4,
                py: "6px",
                borderRadius: 10,
                backgroundColor: isActive === 2 ? "#11ACFD" : "",
                boxShadow:
                  isActive === 2 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
                cursor: "pointer",
                color: isActive === 2 ? "black" : "#A0A7AD",
              }}
              onClick={vertical === 1 ? () => setIsActive(2) : null}
            >
              <Typography sx={{ fontSize: 8, fontWeight: "bold" }}>
                Qabul qilingan
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: isActive === 3 ? "#FCB600" : "",
                px: 4,
                py: "6px",
                borderRadius: 10,
                boxShadow:
                  isActive === 3 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
                cursor: "pointer",
                color: isActive === 3 ? "black" : "#A0A7AD",
              }}
              onClick={vertical === 1 ? () => setIsActive(3) : null}
            >
              <Typography sx={{ fontSize: 8, fontWeight: "bold" }}>
                Jo'natilgan
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: isActive === 4 ? "#8E007E" : "",
                px: 4,
                py: "6px",
                borderRadius: 10,
                boxShadow:
                  isActive === 4 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
                cursor: "pointer",
                color: isActive === 4 ? "black" : "#A0A7AD",
              }}
              onClick={vertical === 1 ? () => setIsActive(4) : null}
            >
              <Typography sx={{ fontSize: 8, fontWeight: "bold" }}>
                Yopilgan
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: isActive === 5 ? "red" : "",
                px: 4,
                py: "6px",
                borderRadius: 10,
                boxShadow:
                  isActive === 5 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
                cursor: "pointer",
                color: isActive === 5 ? "black" : "#A0A7AD",
              }}
              onClick={vertical === 1 ? () => setIsActive(5) : null}
            >
              <Typography sx={{ fontSize: 8, fontWeight: "bold" }}>
                Rad etilgan
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            width: "24.5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#EDEFF3",
              width: 90,
              height: 40,
              borderRadius: 10,
              p: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                backgroundColor: vertical === 1 ? "#fff" : "",
                color: vertical === 1 ? "black" : "#A0A7AD",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow:
                  vertical === 1 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
              }}
              onClick={() => setVertical(1)}
            >
              {vertical === 1 ? (
                <MdViewStream style={{ fontSize: 20 }} />
              ) : (
                <CiGrid2H style={{ fontSize: 20 }} />
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "30px",
                height: "30px",
                backgroundColor: vertical === 2 ? "#fff" : "",
                color: vertical === 2 ? "black" : "#A0A7AD",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow:
                  vertical === 2 ? "4px 4px 15px 0px rgba(0, 0, 0, 0.2)" : "",
              }}
              onClick={() => setVertical(2)}
            >
              {vertical === 2 ? (
                <PiAlignTopFill style={{ fontSize: 20 }} />
              ) : (
                <CiAlignTop style={{ fontSize: 20 }} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {vertical === 1 ? (
        <Box
          sx={{
            m: "20px 0",
            px: 5,
            overflowX: "scroll",
            height: "89vh",
          }}
        >
          {userData
            .filter((s) => s.status === filterUser)
            .map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    backgroundColor: "#fff",
                    mt: 2,
                    borderRadius: 3,
                    "&:hover": {
                      boxShadow: "-4px 8px 20px -9px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "25%",
                      borderInlineEnd: "1px solid #EDEFF3",
                      p: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <span
                        style={{
                          padding: "0 20px",
                          backgroundColor:
                            isActive === 1
                              ? "#20D472"
                              : "" || isActive === 2
                              ? "#11ACFD"
                              : "" || isActive === 3
                              ? "#FCB600"
                              : "" || isActive === 4
                              ? "#8E007E"
                              : "" || isActive === 5
                              ? "red"
                              : "",
                          borderRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: "#EDEFF3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <BsBookmark style={{ fontSize: 13 }} />
                      </span>
                    </Box>
                    <Typography
                      sx={{
                        mt: 2,
                        borderTop: "1px solid #EDEFF3",
                        width: 70,
                        pt: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        fontWeight: "bold",
                      }}
                    >
                      <PiClockThin /> {item.clock}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "25%",
                      borderInlineEnd: "1px solid #EDEFF3",
                      p: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <AiOutlineUser />{" "}
                      <Typography sx={{ width: 100 }}>{item.name}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <PiPhoneLight /> <Typography>{item.number}</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "25%",
                      borderInlineEnd: "1px solid #EDEFF3",
                      p: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <CiCalendar />{" "}
                      <Typography>
                        {Intl.NumberFormat("en-En").format(
                          item.orders.reduce(
                            (total, order) => total + order.price * order.count,
                            0,
                          ),
                        )}{" "}
                        UZS{" "}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "aqua",
                          }}
                        ></Box>
                        Payme
                      </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <CiDeliveryTruck />
                      <Typography>5,000 UZS</Typography>
                    </Box>
                    <Typography sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}>
                      Umumiy summa
                    </Typography>
                    <Typography>
                      <span style={{ fontWeight: "bold" }}>
                        {Intl.NumberFormat("en-En").format(
                          item.orders.reduce(
                            (total, order) => total + order.price * order.count,
                            0,
                          ) + 5000,
                        )}
                      </span>{" "}
                      UZS
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "25%",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                        Operator:
                      </Typography>
                      <Typography>{employees[0].operatorName}</Typography>
                      <Typography
                        sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                      >
                        Filial:
                      </Typography>
                      <Typography>{employees[0].branch}</Typography>
                    </Box>
                    <Box sx={{ marginRight: "-40px" }}>
                      {filterUser === "Rad etilgan" ? null : (
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            border: "4px solid #EDEFF3",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            backgroundColor: "#fff",
                          }}
                          onClick={() => {
                            Back(item);
                          }}
                        >
                          X
                        </Box>
                      )}
                      {filterUser === "Yopilgan" ? null : (
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            border: "4px solid #EDEFF3",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            mt: 1,
                            backgroundColor: "#fff",
                          }}
                          onClick={() => {
                            Next(item);
                            notify();
                          }}
                        >
                          <AiOutlineCheck />
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      ) : (
        <Box
          sx={{
            m: "20px 0",
            px: 4,
            pb: 2,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            overflowY: "scroll",
            height: "86vh",
          }}
        >
          <Box sx={{ width: "24%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "#8D9BA8" }}>Yangi</Typography>
              <Typography
                sx={{
                  backgroundColor: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  p: "3px 15px",
                  borderRadius: 2,
                  color: "#2D3A45",
                }}
              >
                {userData.filter((item) => item.status === "Yangi").length}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "10px 20px",
                my: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#20D472",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {Intl.NumberFormat("en-En").format(
                  OrdersSumNew.reduce((total, order) => total + order, 0),
                )}{" "}
                UZS
              </Typography>
            </Box>
            {userData
              .filter((yangi) => yangi.status === "Yangi")
              .map((item, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      p: 2,
                      mt: 1,
                      borderRadius: 2,
                      "&:hover": {
                        boxShadow: "-5px 7px 14px 0px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    key={index}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span
                        style={{
                          padding: "0 20px",
                          backgroundColor: "#20D472",
                          borderRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: "#EDEFF3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <BsBookmark style={{ fontSize: 13 }} />
                      </span>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          fontWeight: "bold",
                          marginInlineStart: 3,
                        }}
                      >
                        <PiClockThin /> {item.clock}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AiOutlineUser style={{ marginTop: 2 }} />
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography sx={{ fontSize: 13, color: "#8D9BA8" }}>
                          {item.number}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                        >
                          Umumiy summa
                        </Typography>
                        <Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {Intl.NumberFormat("en-En").format(
                              item.orders.reduce(
                                (total, order) =>
                                  total + order.price * order.count,
                                0,
                              ) + 5000,
                            )}
                          </span>{" "}
                          UZS
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "aqua",
                          }}
                        ></Box>
                        Payme
                      </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                              Operator:
                            </Typography>
                            <Typography>{employees[0].operatorName}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              border: "4px solid #EDEFF3",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              Back(item);
                            }}
                          >
                            X
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "140px" }}>
                            <Typography
                              sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                            >
                              Filial:
                            </Typography>
                            <Typography>{employees[0].branch}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              border: "4px solid #EDEFF3",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              Next(item);
                            }}
                          >
                            <AiOutlineCheck />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Box sx={{ width: "24%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "#8D9BA8" }}>Qabul qilingan</Typography>
              <Typography
                sx={{
                  backgroundColor: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  p: "3px 15px",
                  borderRadius: 2,
                  color: "#2D3A45",
                }}
              >
                {
                  userData.filter((item) => item.status === "Qabul qilingan")
                    .length
                }
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "10px 20px",
                my: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#11ACFD",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {Intl.NumberFormat("en-En").format(
                  Accepted.reduce((total, order) => total + order, 0),
                )}{" "}
                UZS
              </Typography>
            </Box>
            {userData
              .filter((yangi) => yangi.status === "Qabul qilingan")
              .map((item, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      p: 2,
                      mt: 1,
                      borderRadius: 2,
                      "&:hover": {
                        boxShadow: "-5px 7px 14px 0px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    key={index}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span
                        style={{
                          padding: "0 20px",
                          backgroundColor: "#11ACFD",
                          borderRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: "#EDEFF3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <BsBookmark style={{ fontSize: 13 }} />
                      </span>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          fontWeight: "bold",
                          marginInlineStart: 3,
                        }}
                      >
                        <PiClockThin /> {item.clock}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AiOutlineUser style={{ marginTop: 2 }} />
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography sx={{ fontSize: 13, color: "#8D9BA8" }}>
                          {item.number}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                        >
                          Umumiy summa
                        </Typography>
                        <Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {Intl.NumberFormat("en-En").format(
                              item.orders.reduce(
                                (total, order) =>
                                  total + order.price * order.count,
                                0,
                              ) + 5000,
                            )}
                          </span>{" "}
                          UZS
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "aqua",
                          }}
                        ></Box>
                        Payme
                      </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                              Operator:
                            </Typography>
                            <Typography>{employees[0].operatorName}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              border: "4px solid #EDEFF3",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              Back(item);
                            }}
                          >
                            X
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "140px" }}>
                            <Typography
                              sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                            >
                              Filial:
                            </Typography>
                            <Typography>{employees[0].branch}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              border: "4px solid #EDEFF3",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              Next(item);
                            }}
                          >
                            <AiOutlineCheck />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Box sx={{ width: "24%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "#8D9BA8" }}>Jo'natilgan</Typography>
              <Typography
                sx={{
                  backgroundColor: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  p: "3px 15px",
                  borderRadius: 2,
                  color: "#2D3A45",
                }}
              >
                {userData.filter((item) => item.status === "Jonatilgan").length}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "10px 20px",
                my: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#FCB600",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {Intl.NumberFormat("en-En").format(
                  Send.reduce((total, order) => total + order, 0),
                )}{" "}
                UZS
              </Typography>
            </Box>
            {userData
              .filter((yangi) => yangi.status === "Jonatilgan")
              .map((item, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      p: 2,
                      mt: 1,
                      borderRadius: 2,
                      "&:hover": {
                        boxShadow: "-5px 7px 14px 0px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    key={index}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span
                        style={{
                          padding: "0 20px",
                          backgroundColor: "#FCB600",
                          borderRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: "#EDEFF3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <BsBookmark style={{ fontSize: 13 }} />
                      </span>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          fontWeight: "bold",
                          marginInlineStart: 3,
                        }}
                      >
                        <PiClockThin /> {item.clock}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AiOutlineUser style={{ marginTop: 2 }} />
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography sx={{ fontSize: 13, color: "#8D9BA8" }}>
                          {item.number}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                        >
                          Umumiy summa
                        </Typography>
                        <Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {Intl.NumberFormat("en-En").format(
                              item.orders.reduce(
                                (total, order) =>
                                  total + order.price * order.count,
                                0,
                              ) + 5000,
                            )}
                          </span>{" "}
                          UZS
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "aqua",
                          }}
                        ></Box>
                        Payme
                      </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box>
                            <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                              Operator:
                            </Typography>
                            <Typography>{employees[0].operatorName}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              border: "4px solid #EDEFF3",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              Back(item);
                            }}
                          >
                            X
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ width: "140px" }}>
                            <Typography
                              sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                            >
                              Filial:
                            </Typography>
                            <Typography>{employees[0].branch}</Typography>
                          </Box>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              border: "4px solid #EDEFF3",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              Next(item);
                            }}
                          >
                            <AiOutlineCheck />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Box sx={{ width: "24%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "#8D9BA8" }}>Yopilgan</Typography>
              <Typography
                sx={{
                  backgroundColor: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  p: "3px 15px",
                  borderRadius: 2,
                  color: "#2D3A45",
                }}
              >
                {userData.filter((item) => item.status === "Yopilgan").length}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "10px 20px",
                my: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#8E007E",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {Intl.NumberFormat("en-En").format(
                  Closed.reduce((total, order) => total + order, 0),
                )}{" "}
                UZS
              </Typography>
            </Box>
            {userData
              .filter((yangi) => yangi.status === "Yopilgan")
              .map((item, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      p: 2,
                      mt: 1,
                      borderRadius: 2,
                      "&:hover": {
                        boxShadow: "-5px 7px 14px 0px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    key={index}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span
                        style={{
                          padding: "0 20px",
                          backgroundColor: "#8E007E",
                          borderRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: "#EDEFF3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <BsBookmark style={{ fontSize: 13 }} />
                      </span>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          fontWeight: "bold",
                          marginInlineStart: 3,
                        }}
                      >
                        <PiClockThin /> {item.clock}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AiOutlineUser style={{ marginTop: 2 }} />
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography sx={{ fontSize: 13, color: "#8D9BA8" }}>
                          {item.number}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                        >
                          Umumiy summa
                        </Typography>
                        <Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {Intl.NumberFormat("en-En").format(
                              item.orders.reduce(
                                (total, order) =>
                                  total + order.price * order.count,
                                0,
                              ) + 5000,
                            )}
                          </span>{" "}
                          UZS
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "aqua",
                          }}
                        ></Box>
                        Payme
                      </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                          <Box>
                            <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                              Operator:
                            </Typography>
                            <Typography>{employees[0].operatorName}</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ width: "140px" }}>
                              <Typography
                                sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                              >
                                Filial:
                              </Typography>
                              <Typography>{employees[0].branch}</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            border: "4px solid #EDEFF3",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            Back(item);
                          }}
                        >
                          X
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
          <Box sx={{ width: "24%" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ color: "#8D9BA8" }}>Rad etilgan</Typography>
              <Typography
                sx={{
                  backgroundColor: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  p: "3px 15px",
                  borderRadius: 2,
                  color: "#2D3A45",
                }}
              >
                {
                  userData.filter((item) => item.status === "Rad etilgan")
                    .length
                }
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: "10px 20px",
                my: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: "red",
                  borderRadius: "50%",
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }}>
                {Intl.NumberFormat("en-En").format(
                  Rejected.reduce((total, order) => total + order, 0),
                )}{" "}
                UZS
              </Typography>
            </Box>
            {userData
              .filter((yangi) => yangi.status === "Rad etilgan")
              .map((item, index) => {
                return (
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      p: 2,
                      mt: 1,
                      borderRadius: 2,
                      "&:hover": {
                        boxShadow: "-5px 7px 14px 0px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                    key={index}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span
                        style={{
                          padding: "0 20px",
                          backgroundColor:
                            item.status === "Rad etilgan" ? "red" : "",
                          borderRadius: "20px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {item.id}
                      </span>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: "#EDEFF3",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                        }}
                      >
                        <BsBookmark style={{ fontSize: 13 }} />
                      </span>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                          fontWeight: "bold",
                          marginInlineStart: 3,
                        }}
                      >
                        <PiClockThin /> {item.clock}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <AiOutlineUser style={{ marginTop: 2 }} />
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography sx={{ fontSize: 13, color: "#8D9BA8" }}>
                          {item.number}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                        >
                          Umumiy summa
                        </Typography>
                        <Typography>
                          <span style={{ fontWeight: "bold" }}>
                            {Intl.NumberFormat("en-En").format(
                              item.orders.reduce(
                                (total, order) =>
                                  total + order.price * order.count,
                                0,
                              ) + 5000,
                            )}
                          </span>{" "}
                          UZS
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "aqua",
                          }}
                        ></Box>
                        Payme
                      </Box>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                          <Box>
                            <Typography sx={{ fontSize: 10, color: "#8D9BA8" }}>
                              Operator:
                            </Typography>
                            <Typography>{employees[0].operatorName}</Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box sx={{ width: "140px" }}>
                              <Typography
                                sx={{ fontSize: 10, color: "#8D9BA8", mt: 2 }}
                              >
                                Filial:
                              </Typography>
                              <Typography>{employees[0].branch}</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            border: "4px solid #EDEFF3",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            Next(item);
                          }}
                        >
                          <AiOutlineCheck />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
      )}
    </Box>
  );
};
