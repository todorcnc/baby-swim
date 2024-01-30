import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Paper,
  Divider,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import { prices } from "../../config/prices";

import Title from "../../components/TItle";

import imgLeftSectionOne from "../../../assets/pictures/dolphins/2R.png";
import imgRightSectionOne from "../../../assets/pictures/dolphins/5.png";
import imgLeftSectionTwo from "../../../assets/pictures/dolphins/4R.png";
import imgRightSectionTwo from "../../../assets/pictures/dolphins/1.png";
import imgLeftSectionThree from "../../../assets/pictures/dolphins/3R.png";
import imgRightSectionThree from "../../../assets/pictures/dolphins/6.png";

import babyImag from "./baby.jpg";

function Courses() {
  return (
    <>
      <Paper sx={{ mt: 4, overflow: "auto" }}>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Title
            imgLeft={imgLeftSectionOne}
            title={"График"}
            imgRight={imgRightSectionOne}
          />
          <Divider sx={{ pt: 2, mb: 2 }} />
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Група</TableCell>
                <TableCell>1 Посещение</TableCell>
                <TableCell>4 Посещения/месец</TableCell>
                <TableCell>8 Посещения/месец</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prices.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{`${row.label} лв.`}</TableCell>
                  <TableCell>{`${row.singleLesson} лв.`}</TableCell>
                  <TableCell>{`${row.fourLessonsPerMonth} лв.`}</TableCell>
                  <TableCell>{`${row.eightLessonsPerMonth} лв.`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>

      <Paper sx={{ mt: 4, overflow: "auto" }}>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Title
            imgLeft={imgLeftSectionTwo}
            title={"Ценоразпис"}
            imgRight={imgRightSectionTwo}
          />
          <Divider sx={{ pt: 2, mb: 2 }} />
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Група</TableCell>
                <TableCell>1 Посещение</TableCell>
                <TableCell>4 Посещения/месец</TableCell>
                <TableCell>8 Посещения/месец</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prices.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.label}</TableCell>
                  <TableCell>{`${row.singleLesson} лв.`}</TableCell>
                  <TableCell>{`${row.fourLessonsPerMonth} лв.`}</TableCell>
                  <TableCell>{`${row.eightLessonsPerMonth} лв.`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>

      <Paper sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Title
            imgLeft={imgLeftSectionThree}
            title={"Информация за видовете групи"}
            imgRight={imgRightSectionThree}
          />

          <Divider sx={{ pt: 2, mb: 2 }} />
          <Grid container spacing={2} sx={{ pb: 2 }}>
            <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={babyImag}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Рибки
                  </Typography>
                  <Divider />
                  <Typography>(за деца от 1 - 5 месеца)</Typography>
                  <Typography sx={{ mb: 2 }}>
                    (продължителност 60 мин)
                  </Typography>

                  <Typography sx={{ pt: 2 }}>
                    Индивидуален урок във вана, с температура на водата около 35
                    С. Инструкторът помага на бебенцето да плува по корем, по
                    гръб, да се гмурка. Родителите могат да се включат или само
                    наблюдават отстрани. Урокът трае около 60 мин., включва
                    плуване, масаж и гимнастика.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={7} xl={7}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={babyImag}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Жабки
                  </Typography>
                  <Divider />
                  <Typography>(за деца от 6 - 12 месеца)</Typography>
                  <Typography sx={{ mb: 2 }}>
                    (продължителност 45 мин)
                  </Typography>

                  <Typography>
                    Групово плуване в басейна, с активно участие на родителите,
                  </Typography>
                  <Typography sx={{ pt: 2 }}>Цели:</Typography>
                  <ul>
                    <li>децата свикват с водна среда</li>
                    <li>
                      учат се да плуват в различни позиции (по корем, по гръб)
                    </li>
                    <li>тренират баланс и развиват вестибуларния си апарат</li>
                    <li>свикват с плувните аксесоари</li>
                    <li>упражняват гмуркане и скачане</li>
                    <li>развиват социалните си умения</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={babyImag}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Тюленчета
                  </Typography>
                  <Divider />
                  <Typography>(за деца от 1 - 3 годинки)</Typography>
                  <Typography sx={{ mb: 2 }}>
                    (продължителност 45 мин)
                  </Typography>

                  <Typography>
                    Групово плуване в басейна, с активно участие на родителите,
                  </Typography>
                  <Typography sx={{ pt: 2 }}>Цели:</Typography>
                  <ul>
                    <li>децата плуват с помощта на плувни аксесоари</li>
                    <li>децата усъвършенстват техниката на гмуркане</li>
                    <li>ориентация над и под вода</li>
                    <li>самостоятелно скачане във водата</li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={babyImag}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Делфинчета
                  </Typography>
                  <Divider />
                  <Typography>(за деца над 3 годинки)</Typography>
                  <Typography sx={{ mb: 2 }}>
                    (продължителност 45 мин)
                  </Typography>

                  <Typography>
                    Групово плуване в басейна, под надзора на треньор, без
                    присъствието на родители
                  </Typography>
                  <Typography sx={{ pt: 2 }}>Цели:</Typography>
                  <ul>
                    <li>децата плуват с помощта на плувни аксесоари</li>
                    <li>справяне с поставени задачи и предизвикателства</li>
                    <li>ориентация над и под вода</li>
                    <li>гмуркане</li>
                    <li>самостоятелно скачане във водата</li>
                    <li>
                      усъвършенстване на плувни стилове (бруст, кроул, гръб,
                      делфин).
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={babyImag}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Водна аеробика
                  </Typography>
                  <Divider />
                  <Typography>(за жени)</Typography>
                  <Typography sx={{ mb: 2 }}>
                    (продължителност 45 мин)
                  </Typography>

                  <Typography sx={{ pt: 2 }}>
                    Тонизира, укрепва мускулите и ставите, премахва болки в
                    гърба и схващания, има отслабващ и антицелулитен ефект.
                    Занятията се провеждат в басейн с дълбочина 1м. Не е нужно
                    да умеете да плувате.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default Courses;
