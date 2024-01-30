import React from "react";

import { Paper, Box, Divider, Stack, Typography } from "@mui/material";

import Title from "../../components/TItle";
// Dolphins
import imgLeftSectionOne from "../../../assets/pictures/dolphins/2R.png";
import imgRightSectionOne from "../../../assets/pictures/dolphins/5.png";
import imgLeftSectionTwo from "../../../assets/pictures/dolphins/3R.png";
import imgRightSectionTwo from "../../../assets/pictures/dolphins/6.png";

// Content Images
import img_1 from "../../../assets/pictures/about/1_web.webp";
import img_2 from "../../../assets/pictures/about/2_web.webp";
import img_3 from "../../../assets/pictures/about/3_web1.webp";
import img_4 from "../../../assets/pictures/about/4.webp";
import img_5 from "../../../assets/pictures/about/5_web.webp";
import img_6 from "../../../assets/pictures/about/6.webp";

function About() {
  return (
    <Paper sx={{ mt: 3 }}>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Title
          imgLeft={imgLeftSectionOne}
          title={
            "Бързо усвояваме всички стъпки на адаптация към водната среда - умеем да се гмуркаме, да плуваме и да скачаме във водата!"
          }
          imgRight={imgRightSectionOne}
        />

        <Divider sx={{ pt: 2, pb: 2 }} />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", pb: 2 }}
          spacing={2}
          alignItems="center"
        >
          <img
            src={img_4}
            alt="Left"
            style={{ maxWidth: 300, padding: "10px" }}
            draggable={false}
          />
          <Typography
            paragraph
            sx={{
              p: 2,
              "&::before": {
                content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
              },
            }}
          >
            Центърът за плуване на бебета и малки деца отвори своите врати през
            месец март 2016г. в комплекс Райски кът 1, Пловдив. Тук най-малките
            бебета, от 2 до 6-месечна възраст, могат да плуват във вана с
            питейна вода, с температура 37 градуса, без химически добавки, във
            форма на индивидуални уроци с инструктор. По-големи бебета и деца
            плуват с родителите си в басейн с размери 12х6 метра, дълбочина
            1,20м. Водата в басейна е около 32 градуса и се пречиства с помощта
            на меден йонизатор и солна хидролиза, разработени от фирма Hayward
            Holding Ins., което изцяло предотвратява употреба на химически
            препарати. Съблекалните и прилежащите помещения са приспособени за
            комфортно преобличане и престой на децата и техните родители. Децата
            имат на разположение малък детски кът за отдих и аклиматизация,
            който е оборудван с екологично изработени дървени играчки,
            предоставени от работилница "Пирон Кидс", Пловдив.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row", pb: 2 }}
          spacing={2}
          alignItems="center"
        >
          <img
            src={img_6}
            alt="Left"
            style={{ width: 120, padding: "10px" }}
            draggable={false}
          />
          <Typography
            paragraph
            sx={{
              p: 2,
              "&::before": {
                content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
              },
            }}
          >
            Нашият екип се състои от обучени и сертифицирани треньори по плуване
            и спасители. В допълнение към това, часто от нашият екип има
            завършен преквалификационнен курс за инструктори по плуване и
            психомоторно развитие за бебета и деца до предучилищна възраст в
            Чехия.
          </Typography>
          <img
            src={img_5}
            alt="Right"
            style={{ width: 120, padding: "10px" }}
            draggable={false}
          />
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "column", md: "row", pb: 2 }}
          spacing={2}
          alignItems="center"
        >
          <Typography
            paragraph
            sx={{
              p: 2,
              "&::before": {
                content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
              },
            }}
          >
            Работата с бебета и малки деца ни привлича и зарежда с положителна
            енергия. Обичаме да споделяме постиженията им, както и емоциите
            изживени по време на нашите уроци. В нашия басейн могат да се
            обучават и по-големи деца, които по-късно са проявили желание да се
            научат да плуват или ги е било страх досега. Всички наши треньори
            имат много внимателен подход към децата, защото за нас е важно
            децата да обичат водата, да не се страхуват, да са смели и да могат
            да плуват. Плуването, както всички спортове, e ЗДРАВЕ. Тo ни калява,
            укрепва мускулите, подобрява жизнения тонус и има безброй приноси за
            психомоторни функции на човешкия организъм. Затова ......не се
            колебайте повече и идвайте при нас! :)
          </Typography>
          <img
            src={img_2}
            alt="Right"
            style={{ maxWidth: 300, padding: "10px" }}
            draggable={false}
          />
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row", pb: 2 }}
          spacing={2}
          alignItems="center"
        >
          <img
            src={img_3}
            alt="Left"
            style={{ maxWidth: 300, padding: "10px" }}
            draggable={false}
          />
          <Typography
            paragraph
            sx={{
              p: 2,
              "&::before": {
                content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
              },
            }}
          >
            Нашият център работи в съдействие с най-добрите детски педиатри и
            специалисти в град Пловдив (проф.Иванов, др.Нещерова, др.Молева...),
            хомеопат др.Юрукова, редица логопеди, детски психолози (Радка
            Цонкова), физиотерапевти (Таня Чакърова) и консултанти по кърмене
            (Елена Стоянова). По този начин родителите както и децата имат
            достъп до информация и грижи, от които се нуждаят.
          </Typography>
        </Stack>
        <Typography
          paragraph
          sx={{
            p: 2,
            "&::before": {
              content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
            },
          }}
        ></Typography>
      </Box>
    </Paper>
  );
}

export default About;
