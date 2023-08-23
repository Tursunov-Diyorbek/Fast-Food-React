import {
  Box,
  Typography,
  ListItemButton,
  Button,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import { MdDownloadDone } from "react-icons/md";
import { CgBox } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { RiNotification2Line, RiPriceTag3Line } from "react-icons/ri";
import { BsChat } from "react-icons/bs";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export const Window = ({ setLogin }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          width: 270,
          height: "100vh",
          overflowY: "scroll",
          pb: 2,
          color: "#2D3A45",
          fontSize: 15,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src={require("../Imgs/Login-Imgs/Bitmap.png")}
              alt="Logo"
              style={{
                width: 60,
                height: 60,
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Fast Food
              </Typography>
              <Typography sx={{ fontSize: "small", color: "#8D9BA8" }}>
                Online maxsulot sotuvi
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingInlineEnd: 4 }}>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/buyurtmalar" ? "#FCB600" : "",
              color: location.pathname === "/buyurtmalar" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/buyurtmalar`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
                borderRadius: "5px 5px 0 0",
              }}
            >
              ㅤㅤ
            </Box>
            <MdDownloadDone
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />{" "}
            Buyurtmalar
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/maxsulotlar" ? "#FCB600" : "",
              color: location.pathname === "/maxsulotlar" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/maxsulotlar`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
              }}
            >
              ㅤㅤ
            </Box>
            <CgBox
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Maxsulotlar
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/kategoriyalar" ? "#FCB600" : "",
              color: location.pathname === "/kategoriyalar" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/kategoriyalar`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
              }}
            >
              ㅤㅤ
            </Box>
            <MdDownloadDone
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Kategoriyalar
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/filiallar" ? "#FCB600" : "",
              color: location.pathname === "/filiallar" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/filiallar`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
              }}
            >
              ㅤㅤ
            </Box>
            <SlLocationPin
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Filiallar
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/mijozlar" ? "#FCB600" : "",
              color: location.pathname === "/mijozlar" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/mijozlar`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
              }}
            >
              ㅤㅤ
            </Box>
            <GoPeople
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Mijozlar
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/xisobot" ? "#FCB600" : "",
              color: location.pathname === "/xisobot" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/xisobot`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
              }}
            >
              ㅤㅤ
            </Box>
            <MdDownloadDone
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Xisobot
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              backgroundColor:
                location.pathname === "/hodimlar" ? "#FCB600" : "",
              color: location.pathname === "/hodimlar" ? "#fff" : "",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={() => navigate(`/hodimlar`)}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 50,
              }}
            >
              ㅤㅤ
            </Box>
            <FiSettings
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Hodimlar
          </ListItemButton>
          <ListItemButton
            sx={{
              p: 0,
              borderRadius: "0 10px 10px 0",
              "&:hover": {
                backgroundColor: "#FCB600",
                color: "#fff",
                borderRadius: "0 10px 10px 0",
              },
            }}
            onClick={handleClick}
          >
            <Box
              sx={{
                backgroundColor: "#FCB600",
                width: "5px",
                height: 40,
                borderRadius: "0 0 5px 5px",
              }}
            >
              ㅤㅤ
            </Box>
            <FiSettings
              style={{
                marginInlineEnd: 10,
                marginInlineStart: 40,
                fontSize: 20,
              }}
            />
            Katalog
            {open ? (
              <BiSolidChevronUp
                style={{ fontSize: 20, marginInlineStart: 70 }}
              />
            ) : (
              <BiSolidChevronDown
                style={{ fontSize: 20, marginInlineStart: 70 }}
              />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <ListItemButton
              sx={{
                borderRadius: "0 10px 10px 0",
                backgroundColor:
                  location.pathname === "/tizim_sozlamalari" ? "#A0A7AD" : "",
                "&:hover": {
                  backgroundColor: "#A0A7AD",
                  borderRadius: "0 10px 10px 0",
                },
              }}
              onClick={() => navigate(`/tizim_sozlamalari`)}
            >
              <FiSettings
                style={{
                  marginInlineEnd: 10,
                  marginInlineStart: 30,
                  fontSize: 20,
                }}
              />{" "}
              Tizim sozlamalar
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: "0 10px 10px 0",
                backgroundColor:
                  location.pathname === "/lavozim_sozlamalari" ? "#A0A7AD" : "",
                "&:hover": {
                  backgroundColor: "#A0A7AD",
                  borderRadius: "0 10px 10px 0",
                },
              }}
              onClick={() => navigate(`/lavozim_sozlamalari`)}
            >
              <FiSettings
                style={{
                  marginInlineEnd: 10,
                  marginInlineStart: 30,
                  fontSize: 20,
                }}
              />{" "}
              Lavozim sozlamalar
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: "0 10px 10px 0",
                backgroundColor:
                  location.pathname === "/bildirishnoma" ? "#A0A7AD" : "",
                "&:hover": {
                  backgroundColor: "#A0A7AD",
                  borderRadius: "0 10px 10px 0",
                },
              }}
              onClick={() => navigate(`/bildirishnoma`)}
            >
              <RiNotification2Line
                style={{
                  marginInlineEnd: 10,
                  marginInlineStart: 30,
                  fontSize: 20,
                }}
              />{" "}
              Bildirishnoma
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: "0 10px 10px 0",
                backgroundColor:
                  location.pathname === "/yetgazish_narxi" ? "#A0A7AD" : "",
                "&:hover": {
                  backgroundColor: "#A0A7AD",
                  borderRadius: "0 10px 10px 0",
                },
              }}
              onClick={() => navigate(`/yetgazish_narxi`)}
            >
              <RiPriceTag3Line
                style={{
                  marginInlineEnd: 10,
                  marginInlineStart: 30,
                  fontSize: 20,
                }}
              />{" "}
              Yetgazish narxi
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: "0 10px 10px 0",
                backgroundColor:
                  location.pathname === "/shikoyat_va_fikrlar" ? "#A0A7AD" : "",
                "&:hover": {
                  backgroundColor: "#A0A7AD",
                  borderRadius: "0 10px 10px 0",
                },
              }}
              onClick={() => navigate(`/shikoyat_va_fikrlar`)}
            >
              <BsChat
                style={{
                  marginInlineEnd: 10,
                  marginInlineStart: 30,
                  fontSize: 20,
                }}
              />{" "}
              Shikoyat va fikrlar
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: "0 10px 10px 0",
                backgroundColor:
                  location.pathname === "/xarita" ? "#A0A7AD" : "",
                "&:hover": {
                  backgroundColor: "#A0A7AD",
                  borderRadius: "0 10px 10px 0",
                },
              }}
              onClick={() => navigate(`/xarita`)}
            >
              <SlLocationPin
                style={{
                  marginInlineEnd: 10,
                  marginInlineStart: 30,
                  fontSize: 20,
                }}
              />{" "}
              Xarita
            </ListItemButton>
          </Collapse>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ mt: 1, marginInlineStart: 6 }}
            onClick={() => setLogin(false)}
          >
            Chiqish
          </Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
