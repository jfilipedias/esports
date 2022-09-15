import { View, Image } from "react-native";

import { Heading } from "../../components/Heading";
import { styles } from "./styles";

import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";
import logoImg from "../../assets/logo-nlw-esports.png";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      {GAMES.map((game) => (
        <GameCard {...game} />
      ))}
    </View>
  );
}
