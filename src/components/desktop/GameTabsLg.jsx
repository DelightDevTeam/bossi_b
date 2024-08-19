import React, { useContext, useEffect, useState } from "react";
import all from "../../assets/img/all.png";
import slot from "../../assets/img/slotL.png";
import casino from "../../assets/img/casinoL.png";
import sport from "../../assets/img/sportL.png";
import fish from "../../assets/img/fishL.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { AuthContext } from "../../contexts/AuthContext";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../hooks/baseURL";
import HotGames from "../HotGames";
import Games from "../Games";
import Providers from "../Providers";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const GameTabsLg = () => {
  const { lan } = useContext(AuthContext);
  const { data: slotGames } = useFetch(BASE_URL + "/gameTypeProducts/1");
  const { data: casinoGames } = useFetch(BASE_URL + "/gameTypeProducts/2");
  const { data: sportGames } = useFetch(BASE_URL + "/gameTypeProducts/3");
  const { data: fishGames } = useFetch(BASE_URL + "/gameTypeProducts/4");

  const slot_providers = slotGames?.game_type?.products;
  const casino_providers = casinoGames?.game_type?.products;
  const sport_providers = sportGames?.game_type?.products;
  const fish_providers = fishGames?.game_type?.products;

  // const { data: game_lists } = useFetch(BASE_URL + "/game/gamelist/1/1");
  const { data: hotGames } = useFetch(BASE_URL + "/hotgamelist");

  const allProviders = [];
  slot_providers?.map((item) => allProviders.push(item));
  casino_providers?.map((item) => allProviders.push(item));
  sport_providers?.map((item) => allProviders.push(item));
  fish_providers?.map((item) => allProviders.push(item));

  const listsData = [
    {
      gameType: "all",
      lists: [
        { id: 5, name: "JILI", value: "" },
        { id: 1, name: "PP", value: "" },
        { id: 2, name: "PG", value: "" },
        { id: 3, name: "CQ9", value: "" },
        { id: 4, name: "JDB", value: "" },
        { id: 6, name: "JOKER", value: "" },
        { id: 7, name: "PS", value: "" },
        { id: 8, name: "KA", value: "" },
      ],
    },
    {
      gameType: "hot",
      lists: [
        { id: 5, name: "JILI", value: "" },
        { id: 1, name: "PP", value: "" },
        { id: 2, name: "PG", value: "" },
        { id: 3, name: "CQ9", value: "" },
        { id: 4, name: "JDB", value: "" },
        { id: 6, name: "JOKER", value: "" },
        { id: 7, name: "PS", value: "" },
        { id: 8, name: "KA", value: "" },
      ],
    },
    {
      gameType: "slot",
      lists: [
        { id: 5, name: "JILI", value: "" },
        { id: 1, name: "PP", value: "" },
        { id: 2, name: "PG", value: "" },
        { id: 3, name: "CQ9", value: "" },
        { id: 4, name: "JDB", value: "" },
        { id: 6, name: "JOKER", value: "" },
        { id: 7, name: "PS", value: "" },
        { id: 8, name: "KA", value: "" },
      ],
    },
    {
      gameType: "fishing",
      lists: [
        { id: 1, name: "JILI", value: "" },
        { id: 2, name: "PS", value: "" },
        { id: 3, name: "JOKER", value: "" },
        { id: 4, name: "JDB", value: "" },
        { id: 5, name: "CQ9", value: "" },
        { id: 6, name: "KA", value: "" },
        { id: 7, name: "YB", value: "" },
      ],
    },
    {
      gameType: "live casino",
      lists: [
        { id: 1, name: "JILI", value: "" },
        { id: 2, name: "SA", value: "" },
        { id: 3, name: "JOKER", value: "" },
        { id: 4, name: "SEXY", value: "" },
        { id: 5, name: "AG", value: "" },
        { id: 6, name: "CQ9", value: "" },
      ],
    },
    {
      gameType: "sport book",
      lists: [],
    },
  ];
  const gameTabs = [
    { img: all, name: "All Games", name_mm: "ဂိမ်းအားလုံး", value: "all" },
    { img: all, name: "Hot Games", name_mm: "ဟော့ဂိမ်းများ", value: "hot" },
    { img: slot, name: "Slot Games", name_mm: "စလော့ဂိမ်း", value: "slot" },
    {
      img: casino,
      name: "Casino Gams",
      name_mm: "ကာစီနို",
      value: "live casino",
    },
    {
      img: fish,
      name: "Fishing Games",
      name_mm: "ငါးပစ်ဂိမ်း",
      value: "fishing",
    },
    {
      img: sport,
      name: "Sport Games",
      name_mm: "အားကစားဂိမ်း",
      value: "sport book",
    },
  ];
  const gamesData = [
    {
      type: "all",
      lists: [
        {
          name: "JILI",
          games: [
            "https://nctmedia.online/gamelist/jili_gamelist/263_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/420_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/299_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/399_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/289_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/212_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/153_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/119_en.webp",
          ],
        },
        {
          name: "PP",
          games: [
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-464_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-465_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-466_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-467_en.webp",
          ],
        },
        {
          name: "PG",
          games: [
            "https://nctmedia.online/gamelist/pg_gamelist/1623475_anubis-wrath_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1717688_mystic-potion_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1492288_pinata-wins_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1508783_wild-ape_en.webp",
          ],
        },
        {
          name: "CQ9",
          games: [
            "https://nctmedia.online/gamelist/cq9_gamelist/GB16_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/243_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/242_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/GB15_en.webp",
          ],
        },
        {
          name: "JDB",
          games: [
            "https://nctmedia.online/gamelist/jdb_gamelist/14088_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14090_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14091_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14089_en.webp",
          ],
        },
        {
          name: "JOKER",
          games: [
            "https://nctmedia.online/gamelist/joker_gamelist/cz3wgrounyetc.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/xq9ohbyf9m79o.webp",
          ],
        },
      ],
    },
    {
      type: "hot",
      lists: [
        {
          name: "JILI",
          games: [
            "https://nctmedia.online/gamelist/jili_gamelist/263_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/420_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/299_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/399_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/289_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/212_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/153_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/119_en.webp",
          ],
        },
        {
          name: "PP",
          games: [
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-464_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-465_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-466_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-467_en.webp",
          ],
        },
        {
          name: "PG",
          games: [
            "https://nctmedia.online/gamelist/pg_gamelist/1623475_anubis-wrath_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1717688_mystic-potion_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1492288_pinata-wins_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1508783_wild-ape_en.webp",
          ],
        },
        {
          name: "CQ9",
          games: [
            "https://nctmedia.online/gamelist/cq9_gamelist/GB16_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/243_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/242_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/GB15_en.webp",
          ],
        },
        {
          name: "JDB",
          games: [
            "https://nctmedia.online/gamelist/jdb_gamelist/14088_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14090_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14091_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14089_en.webp",
          ],
        },
        {
          name: "JOKER",
          games: [
            "https://nctmedia.online/gamelist/joker_gamelist/cz3wgrounyetc.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/xq9ohbyf9m79o.webp",
          ],
        },
      ],
    },
    {
      type: "slot",
      lists: [
        {
          name: "JILI",
          games: [
            "https://nctmedia.online/gamelist/jili_gamelist/263_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/420_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/299_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/399_en.webp",
          ],
        },
        {
          name: "PP",
          games: [
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-464_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-465_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-466_en.webp",
            "https://nctmedia.online/gamelist/pp_gamelist/PP-SLOT-467_en.webp",
          ],
        },
        {
          name: "PG",
          games: [
            "https://nctmedia.online/gamelist/pg_gamelist/1623475_anubis-wrath_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1717688_mystic-potion_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1492288_pinata-wins_en.webp",
            "https://nctmedia.online/gamelist/pg_gamelist/1508783_wild-ape_en.webp",
          ],
        },
        {
          name: "CQ9",
          games: [
            "https://nctmedia.online/gamelist/cq9_gamelist/GB16_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/243_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/242_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/GB15_en.webp",
          ],
        },
        {
          name: "JDB",
          games: [
            "https://nctmedia.online/gamelist/jdb_gamelist/14088_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14090_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14091_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/14089_en.webp",
          ],
        },
        {
          name: "JOKER",
          games: [
            "https://nctmedia.online/gamelist/joker_gamelist/zcw3utgfzk75o.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/htacf8c11qejn.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/bqc117dipjiso.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/g58bao4yefdrq.webp",
          ],
        },
        {
          name: "PS",
          games: [
            "https://nctmedia.online/gamelist/ps_gamelist/PSS-ON-00156_en.webp",
            "https://nctmedia.online/gamelist/ps_gamelist/PSS-ON-00155_en.webp",
            "https://nctmedia.online/gamelist/ps_gamelist/PSS-ON-00151_en.webp",
            "https://nctmedia.online/gamelist/ps_gamelist/PSS-ON-00154_en.webp",
          ],
        },
        {
          name: "KA",
          games: [
            "https://nctmedia.online/gamelist/ka_gamelist/FatGuy_en.webp",
            "https://nctmedia.online/gamelist/ka_gamelist/StoryOfFarmer_en.webp",
            "https://nctmedia.online/gamelist/ka_gamelist/ChihuahuaParty_en.webp",
            "https://nctmedia.online/gamelist/ka_gamelist/HailTheJudge_en.webp",
          ],
        },
      ],
    },
    {
      type: "fishing",
      lists: [
        {
          name: "JILI",
          games: [
            "https://nctmedia.online/gamelist/jili_gamelist/289_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/212_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/153_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/119_en.webp",
          ],
        },
        {
          name: "PS",
          games: [
            "https://nctmedia.online/gamelist/ps_gamelist/PSF-ON-00002_en.webp",
            "https://nctmedia.online/gamelist/ps_gamelist/PSF-ON-00006_en.webp",
            "https://nctmedia.online/gamelist/ps_gamelist/PSF-ON-00001_en.webp",
          ],
        },
        {
          name: "JOKER",
          games: [
            "https://nctmedia.online/gamelist/joker_gamelist/cz3wgrounyetc.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/xq9ohbyf9m79o.webp",
          ],
        },
        {
          name: "JDB",
          games: [
            "https://nctmedia.online/gamelist/jdb_gamelist/7008_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/7009_en.webp",
            "https://nctmedia.online/gamelist/jdb_gamelist/7007_en.webp",
          ],
        },
        {
          name: "CQ9",
          games: [
            "https://nctmedia.online/gamelist/cq9_gamelist/GO02_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/AT05_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/AT01_en.webp",
          ],
        },
        {
          name: "KA",
          games: [
            "https://nctmedia.online/gamelist/ka_gamelist/LeprechaunAndAnimals_en.webp",
            "https://nctmedia.online/gamelist/ka_gamelist/MonsterDestroyer_en.webp",
          ],
        },
        {
          name: "YB",
          games: [
            "https://nctmedia.online/gamelist/yb_gamelist/4003_en.webp",
            "https://nctmedia.online/gamelist/yb_gamelist/2001_en.webp",
          ],
        },
      ],
    },
    {
      type: "live casino",
      lists: [
        {
          name: "JILI",
          games: [
            "https://nctmedia.online/gamelist/jili_gamelist/407_en.webp",
            "https://nctmedia.online/gamelist/jili_gamelist/262_en.webp",
          ],
        },
        {
          name: "SA",
          games: [
            "https://nctmedia.online/gamelist/sa_baccarat/840.webp",
            "https://nctmedia.online/gamelist/sa_baccarat/866.webp",
          ],
        },
        {
          name: "JOKER",
          games: [
            "https://nctmedia.online/gamelist/joker_gamelist/856dgq3a8r9d6.webp",
            "https://nctmedia.online/gamelist/joker_gamelist/j3wngk3efrzn6.webp",
          ],
        },
        {
          name: "SEXY",
          games: [
            "https://nctmedia.online/gamelist/sexy_baccarat/MX-LIVE-013.webp",
            "https://nctmedia.online/gamelist/sexy_baccarat/MX-LIVE-017.webp",
          ],
        },
        {
          name: "AG",
          games: [
            "https://nctmedia.online/gamelist/ag_gamelist/0.webp",
            "https://nctmedia.online/gamelist/ag_gamelist/27.webp",
          ],
        },
        {
          name: "CQ9",
          games: [
            "https://nctmedia.online/gamelist/cq9_gamelist/GO03_en.webp",
            "https://nctmedia.online/gamelist/cq9_gamelist/BT03_en.webp",
          ],
        },
      ],
    },
    {
      type: "sport book",
      lists: [
        {
          games: [
            "https://shwedinker777.online/assets/img/game_logo/sbo_sport.jpeg",
            "https://shwedinker777.online/assets/img/game_logo/ug_sport.jpeg",
            "https://shwedinker777.online/assets/img/game_logo/ibc.jpeg",
            "https://shwedinker777.online/assets/img/game_logo/ssport.jpeg",
          ],
        },
      ],
    },
  ];
  // console.log(slot_providers);
  // return;
  


  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [games, setGames] = useState([]);
  let gameList = searchParams.get("list") || "PP";
  let gameType = searchParams.get("type") || "slot";
  const selectedGameLists = listsData.filter(
    (data) => data.gameType == gameType
  )[0];
  // console.log(selectedGameLists);

  useEffect(() => {
    if (gameList === "PP" && gameType === "slot")
      navigate("?type=slot&list=PP");
    if (gameType === "sport book") {
      setGames({
        games: [
          "https://maxwinapi.online/assets/img/game_logo/sbo_sport.jpeg",
          "https://maxwinapi.online/assets/img/game_logo/ssport.jpeg",
        ],
      });
    } else {
      const selectedGameType = gamesData.filter(
        (games) => games.type === gameType
      )[0];
      const selectedGameList = selectedGameType.lists.filter(
        (list) => list.name === gameList
      )[0];
      setGames(selectedGameList);
    }
  }, [gameType, gameList]);

  return (
    <div className="px-4 d-none d-lg-block ">
      <div className="row mt-4">
        {gameTabs.map((item, index) => {
          return (
            <div
              onClick={() => {
                navigate(`?type=${item.value}&list=PP`);
              }}
              key={index}
              className="cursor-pointer col-2 px-1"
            >
              <img src={item.img} className="gameTabImgLg rounded-3 " />
              <div className="p-2 gameTabTitleLg rounded-bottom-3">
                {lan === "en" ? item.name : item.name_mm}
              </div>
            </div>
          );
        })}
      </div>
      
      {gameType === "slot" &&  slot_providers &&  <Swiper className="mySwiper mt-3"   slidesPerView={10}
         >
          {slot_providers.map((list, index) =>{
            return <SwiperSlide   onClick={() => {
              navigate(`?type=${gameType}&list=${list.short_name}`);
            }} key={index}>
              <div 
            className={`${
              searchParams.get("list") === list.short_name ? "activeGameList" : "" }
               ${index === 0 && "gameListStart"}
                ${
                  index === slot_providers.length - 1 &&
                  "gameListEnd"
                }
            cursor-pointer text-center fw-semibold py-1 px-3 px-sm-4  gameProvider text-nowrap`}
          
         >{list.short_name} </div> </SwiperSlide>
          })}
         </Swiper> }
       
      <div className="row mt-4">
        {gameType === "all" &&
          allProviders && allProviders.map((item, index) => {
            return <Providers item={item} key={index} type={gameType} />;
          })}
        {gameType == "slot" &&
          games?.games?.map((item, index) => {
            return <Games item={item} key={index} type={gameType} />;
          })}
        {gameType === "hot" &&
          hotGames &&
          hotGames.map((item, index) => <HotGames item={item} key={index} />)}
      </div>
    </div>
  );
};

export default GameTabsLg;
