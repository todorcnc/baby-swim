import React from "react";

import { Paper, Box, Typography, Divider } from "@mui/material";

import Title from "../../components/TItle";

import imgLeftSectionOne from "../../../assets/pictures/dolphins/4R.png";
import imgRightSectionOne from "../../../assets/pictures/dolphins/1.png";
import imgLeftSectionTwo from "../../../assets/pictures/dolphins/3R.png";
import imgRightSectionTwo from "../../../assets/pictures/dolphins/6.png";

function Home() {
  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Title
            imgLeft={imgLeftSectionOne}
            title={"Елате да поплуваме и да се позабавляваме заедно!"}
            imgRight={imgRightSectionOne}
          />

          <Divider sx={{ pt: 2 }} />
          <Typography
            paragraph
            sx={{
              p: 2,
              "&::before": {
                content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
              },
            }}
          >
            "Плуването" е една от малкото двигателни дейности, които можем да
            правим с нашето бебенце през първите месеци от живота му. Връщаме
            бебето към водната среда, която му е позната oще от пренаталния
            период. Водата представлява за него спокойствие и сигурност.
            Положителните усещания, които изживяват бебетата в корема на майката
            могат да имат своето продължение. Благодарение на бебешкото плуване,
            родителите създават здрава емоционална връзка между тях и бебенцето
            и се наслаждават на миговете изпълнени с радост и щастие.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Title
            imgLeft={imgLeftSectionTwo}
            title={"Защо плуване от ранна детска възраст?"}
            imgRight={imgRightSectionTwo}
          />

          <Divider sx={{ pt: 2 }} />
          <Typography
            component="div"
            sx={{
              p: 2,
              "&::before": {
                content: '"\\00a0\\00a0\\00a0\\00a0"', // Unicode for three non-breaking spaces
              },
            }}
          >
            <ul>
              <li>подобрява здравето на бебето</li>
              <li>има позитивно влияние върху сърдечно-съдовата система</li>
              <li>повишава виталния капацитет на белия дроб</li>
              <li>подобрява чревната перисталтика</li>
              <li>калява организма</li>
              <li>подпомага правилното психомоторно развитие на детето</li>
              <li>спомагателно средство за рехабилитация</li>
              <li>подобрява съня и апетита</li>
              <li>увеличава адаптацията към водна среда</li>
              <li>засилва емоционалната връзка между детето и родителя</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Home;
